'use client';

import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { 
  LogOut, 
  MessageSquare, 
  CheckCircle, 
  XCircle, 
  Star,
  User,
  BarChart3,
  Shield
} from 'lucide-react';
import TestimonialsManagement from './TestimonialsManagement';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export default function DashboardContent() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState({
    total: 0,
    approved: 0,
    pending: 0,
    featured: 0
  });

  const handleLogout = async () => {
    try {
      await signOut({ 
        callbackUrl: '/admin/login',
        redirect: true 
      });
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/testimonials/stats');
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Erro ao buscar estatísticas:', error);
    }
  };

  useEffect(() => {
    if (session) {
      fetchStats();
    }
  }, [session]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <BarChart3 className="w-8 h-8 text-white animate-pulse" />
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-medium">Carregando dashboard...</p>
        </motion.div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const statCards = [
    {
      title: "Total",
      value: stats.total,
      description: "Testemunhos",
      icon: <MessageSquare className="h-5 w-5" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "Aprovados",
      value: stats.approved,
      description: "Publicados",
      icon: <CheckCircle className="h-5 w-5" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      title: "Pendentes",
      value: stats.pending,
      description: "Aguardando",
      icon: <XCircle className="h-5 w-5" />,
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20"
    },
    {
      title: "Destaques",
      value: stats.featured,
      description: "Em destaque",
      icon: <Star className="h-5 w-5" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="inline-block mb-20"
      ></motion.div>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-sm border-b border-gray-200 dark:border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 py-4 sm:py-0 sm:h-20">
            {/* Logo e Informações do Usuário */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white truncate">
                  Painel Administrativo
                </h1>
                <div className="flex flex-col xs:flex-row xs:items-center gap-2 mt-1">
                  <Badge 
                    variant="outline" 
                    className="bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700 w-fit"
                  >
                    <User className="w-3 h-3 mr-1" />
                    <span className="truncate max-w-[120px] sm:max-w-[150px]">
                      {session.user?.name}
                    </span>
                  </Badge>
                  <span className="text-sm text-gray-600 dark:text-gray-400 truncate max-w-[200px] sm:max-w-none">
                    {session.user?.email}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Botão Sair */}
            <div className="flex justify-end sm:justify-start">
              <Button
                variant="outline"
                onClick={handleLogout}
                className="gap-2 rounded-xl border-2 hover:border-red-300 dark:hover:border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 w-full sm:w-auto"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden xs:inline">Sair</span>
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="border-0 bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`h-1 bg-linear-to-r ${stat.color}`} />
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                  <CardTitle className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {stat.title}
                  </CardTitle>
                  {/* <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <div className={`bg-linear-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.icon}
                    </div>
                  </div> */}
                </CardHeader>
                <CardContent>
                  <div className={`text-3xl font-bold bg-linear-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="border-0 bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-xl">
            <CardHeader className="pb-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-linear-to-r from-blue-500 to-purple-500">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                    Gerenciar Testemunhos
                  </CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Aprove, edite ou destaque os testemunhos recebidos
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <TestimonialsManagement onUpdate={fetchStats} />
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Card className="border-0 bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Ações Rápidas
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Gerenciamento rápido do sistema
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="gap-2 rounded-xl">
                    <CheckCircle className="w-4 h-4" />
                    Ver Pendentes
                  </Button>
                  <Button className="gap-2 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Star className="w-4 h-4" />
                    Gerenciar Destaques
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}