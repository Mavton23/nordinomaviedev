'use client';

import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import TestimonialForm from '@/components/testimonials/TestimonialForm';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { MessageCircle, Star, Users } from 'lucide-react';

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-8"
          >
            
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            O Que Dizem Sobre{' '}
            <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Meu Trabalho
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Feedback genuíno de clientes e parceiros que confiaram no meu trabalho e viram suas ideias se transformarem em realidade
          </p>
        </motion.div>

        {/* Testemunhos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16 sm:mb-20"
        >
          <TestimonialsSection showAll={true} />
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <Card className="border-0 bg-linear-to-r from-purple-600 via-pink-600 to-purple-800 text-white shadow-2xl overflow-hidden">
            <CardContent className="p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Pronto para Fazer Parte Desta Lista?
              </h2>
              <p className="text-purple-100 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
                Vamos trabalhar juntos e criar algo extraordinário. Sua experiência positiva será a próxima a aparecer aqui!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center gap-2 bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Iniciar Projeto
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a 
                    href="/projects" 
                    className="inline-flex items-center gap-2 bg-white/20 text-white hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm border border-white/30"
                  >
                    Ver Projetos
                  </a>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Formulário */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Deixe Seu Depoimento
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Trabalhamos juntos? Compartilhe sua experiência!
            </p>
          </div>
          <TestimonialForm />
        </motion.div>
      </div>
    </main>
  );
}