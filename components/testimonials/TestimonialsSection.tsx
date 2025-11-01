'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, User, Building } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Testimonial {
  id: string;
  name: string;
  email: string;
  rating: number;
  content: string;
  company?: string;
  position?: string;
  featured: boolean;
  createdAt: string;
}

interface TestimonialsSectionProps {
  limit?: number;
  showAll?: boolean;
}

export default function TestimonialsSection({ limit = 3, showAll = false }: TestimonialsSectionProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('/api/testimonials');
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      console.error('Erro ao buscar testemunhos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const displayTestimonials = showAll ? testimonials : testimonials.slice(0, limit);

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'fill-gray-300 text-gray-300'
          }`}
        />
      ))}
    </div>
  );

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(limit)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-5/6"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className={`grid grid-cols-1 ${showAll ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-3'} gap-6`}>
        <AnimatePresence>
          {displayTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`h-full hover:shadow-lg transition-shadow ${
                testimonial.featured ? 'border-2 border-yellow-400' : ''
              }`}>
                <CardContent className="p-6">
                  {/* Citação */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-gray-300 mb-2" />
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-5">
                      {testimonial.content}
                    </p>
                  </div>

                  {/* Avaliação */}
                  <div className="mb-4">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* Informações do usuário */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 truncate">
                          {testimonial.name}
                        </h4>
                        {testimonial.featured && (
                          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200 text-xs">
                            Destaque
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.position && (
                          <>
                            <span>{testimonial.position}</span>
                            {testimonial.company && <span>•</span>}
                          </>
                        )}
                        {testimonial.company && (
                          <div className="flex items-center gap-1 truncate">
                            <Building className="w-3 h-3" />
                            <span className="truncate">{testimonial.company}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {!showAll && testimonials.length > limit && (
        <div className="text-center">
          <Button variant="outline" asChild>
            <a href="/testimonials">
              Ver todos os testemunhos ({testimonials.length})
            </a>
          </Button>
        </div>
      )}
    </div>
  );
}