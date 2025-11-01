'use client';

import { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  CheckCircle, 
  XCircle, 
  Star, 
  Edit3,
  Trash2,
  MessageSquare,
  Clock,
  User,
  Building,
  Briefcase,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: string;
  name: string;
  email: string;
  rating: number;
  content: string;
  company?: string;
  position?: string;
  approved: boolean;
  featured: boolean;
  createdAt: string;
}

interface TestimonialsManagementProps {
  onUpdate: () => void;
}

export default function TestimonialsManagement({ onUpdate }: TestimonialsManagementProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [filteredTestimonials, setFilteredTestimonials] = useState<Testimonial[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [deleteDialog, setDeleteDialog] = useState<string | null>(null);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  useEffect(() => {
    filterTestimonials();
  }, [testimonials, searchTerm, activeTab]);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('/api/admin/testimonials');
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      console.error('Erro ao buscar testemunhos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterTestimonials = () => {
    let filtered = testimonials;

    // Filtro por tab
    if (activeTab === 'pending') {
      filtered = filtered.filter(t => !t.approved);
    } else if (activeTab === 'approved') {
      filtered = filtered.filter(t => t.approved);
    } else if (activeTab === 'featured') {
      filtered = filtered.filter(t => t.featured);
    }

    // Filtro por busca
    if (searchTerm) {
      filtered = filtered.filter(t =>
        t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.company?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredTestimonials(filtered);
  };

  const updateTestimonial = async (id: string, updates: Partial<Testimonial>) => {
    try {
      const response = await fetch('/api/admin/testimonials', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, ...updates }),
      });

      if (response.ok) {
        await fetchTestimonials();
        onUpdate();
      }
    } catch (error) {
      console.error('Erro ao atualizar testemunho:', error);
    }
  };

  const deleteTestimonial = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/testimonials?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchTestimonials();
        onUpdate();
        setDeleteDialog(null);
      }
    } catch (error) {
      console.error('Erro ao deletar testemunho:', error);
    }
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'fill-gray-300 text-gray-300 dark:fill-gray-600 dark:text-gray-600'
          }`}
        />
      ))}
    </div>
  );

  const StatusBadge = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="flex gap-2">
      {testimonial.approved ? (
        <Badge className="bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700">
          <CheckCircle className="w-3 h-3 mr-1" />
          Aprovado
        </Badge>
      ) : (
        <Badge variant="outline" className="text-yellow-700 border-yellow-300 dark:text-yellow-400 dark:border-yellow-600">
          <Clock className="w-3 h-3 mr-1" />
          Pendente
        </Badge>
      )}
      {testimonial.featured && (
        <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-600">
          <Star className="w-3 h-3 mr-1" />
          Destaque
        </Badge>
      )}
    </div>
  );

  if (isLoading) {
    return (
      <Card className="border-0 bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
            Gerenciar Testemunhos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="animate-pulse flex space-x-4 p-6 border-0 rounded-2xl bg-gray-100 dark:bg-gray-700/50"
              >
                <div className="shrink-0">
                  <div className="rounded-2xl bg-gray-300 dark:bg-gray-600 h-16 w-16"></div>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card className="border-0 bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-xl">
        <CardHeader className="pb-6">
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <div className="p-2 rounded-xl bg-linear-to-r from-blue-500 to-purple-500">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            Gerenciar Testemunhos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Filtros e Busca */}
          <div className="flex flex-col lg:flex-row gap-4 p-6 bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/30">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Buscar por nome, email ou conteúdo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 rounded-xl border-2 bg-white dark:bg-gray-700 focus:border-blue-500 transition-colors duration-300"
              />
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full lg:w-auto">
              <TabsList className="bg-white dark:bg-gray-700 border rounded-xl p-1">
                <TabsTrigger 
                  value="all" 
                  className="rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-300"
                >
                  Todos
                </TabsTrigger>
                <TabsTrigger 
                  value="pending"
                  className="rounded-lg data-[state=active]:bg-yellow-500 data-[state=active]:text-white transition-all duration-300"
                >
                  Pendentes
                </TabsTrigger>
                <TabsTrigger 
                  value="approved"
                  className="rounded-lg data-[state=active]:bg-green-500 data-[state=active]:text-white transition-all duration-300"
                >
                  Aprovados
                </TabsTrigger>
                <TabsTrigger 
                  value="featured"
                  className="rounded-lg data-[state=active]:bg-purple-500 data-[state=active]:text-white transition-all duration-300"
                >
                  Destaques
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Lista de Testemunhos */}
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {filteredTestimonials.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 mx-auto mb-4 bg-linear-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                    <MessageSquare className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Nenhum testemunho encontrado
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-sm mx-auto">
                    {searchTerm || activeTab !== 'all' 
                      ? 'Tente ajustar seus filtros de busca.' 
                      : 'Ainda não há testemunhos para gerenciar.'
                    }
                  </p>
                </motion.div>
              ) : (
                filteredTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -2 }}
                    className="border-0 rounded-2xl p-6 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">
                      {/* Informações do Testemunho */}
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="p-3 rounded-2xl bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-lg">
                              <User className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                                <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                                  {testimonial.name}
                                </h4>
                                <StatusBadge testimonial={testimonial} />
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                                {testimonial.email}
                              </p>
                              
                              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                                {testimonial.company && (
                                  <span className="flex items-center gap-2">
                                    <Building className="w-4 h-4" />
                                    {testimonial.company}
                                  </span>
                                )}
                                {testimonial.position && (
                                  <span className="flex items-center gap-2">
                                    <Briefcase className="w-4 h-4" />
                                    {testimonial.position}
                                  </span>
                                )}
                                <StarRating rating={testimonial.rating} />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                            "{testimonial.content}"
                          </p>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4" />
                          Enviado em: {new Date(testimonial.createdAt).toLocaleDateString('pt-BR')}
                        </div>
                      </div>

                      {/* Ações */}
                      <div className="flex flex-col sm:flex-row xl:flex-col gap-2 min-w-[200px]">
                        {!testimonial.approved && (
                          <Button
                            size="sm"
                            onClick={() => updateTestimonial(testimonial.id, { approved: true })}
                            className="gap-2 rounded-xl bg-linear-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            <CheckCircle className="w-4 h-4" />
                            Aprovar
                          </Button>
                        )}
                        
                        {testimonial.approved && !testimonial.featured && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateTestimonial(testimonial.id, { featured: true })}
                            className="gap-2 rounded-xl border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-all duration-300"
                          >
                            <Star className="w-4 h-4" />
                            Destacar
                          </Button>
                        )}

                        {testimonial.featured && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateTestimonial(testimonial.id, { featured: false })}
                            className="gap-2 rounded-xl border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-all duration-300"
                          >
                            <Star className="w-4 h-4" />
                            Remover Destaque
                          </Button>
                        )}

                        {testimonial.approved && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateTestimonial(testimonial.id, { approved: false })}
                            className="gap-2 rounded-xl border-2 border-orange-500 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300"
                          >
                            <XCircle className="w-4 h-4" />
                            Rejeitar
                          </Button>
                        )}

                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => setDeleteDialog(testimonial.id)}
                          className="gap-2 rounded-xl bg-linear-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <Trash2 className="w-4 h-4" />
                          Excluir
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>

      {/* Dialog de Confirmação de Exclusão */}
      <AlertDialog open={!!deleteDialog} onOpenChange={() => setDeleteDialog(null)}>
        <AlertDialogContent className="border-0 bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-2xl">
          <AlertDialogHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-linear-to-r from-red-500 to-pink-500">
                <Trash2 className="w-6 h-6 text-white" />
              </div>
              <AlertDialogTitle className="text-xl font-bold text-gray-900 dark:text-white">
                Excluir testemunho
              </AlertDialogTitle>
            </div>
            <AlertDialogDescription className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              Tem certeza que deseja excluir este testemunho? Esta ação não pode ser desfeita e o testemunho será permanentemente removido do sistema.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex flex-col sm:flex-row gap-3">
            <AlertDialogCancel className="rounded-xl border-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 flex-1">
              Cancelar
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteDialog && deleteTestimonial(deleteDialog)}
              className="rounded-xl bg-linear-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 flex-1"
            >
              Excluir Permanentemente
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}