'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  TrendingUp,
  Code,
  Smartphone,
  Server,
  Rocket
} from 'lucide-react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiPostgresql, SiTailwindcss, SiDjango, SiReact, SiNestjs } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';

const techIcons = {
  'Next.js': <SiNextdotjs className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-black dark:text-gray-100" />,
  'React': <FaReact className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-blue-500" />,
  'React Native': <SiReact className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-cyan-400" />,
  'Node.js': <FaNodeJs className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-green-600" />,
  'NestJS': <SiNestjs className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-red-500" />,
  'TypeScript': <SiTypescript className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-blue-400" />,
  'PostgreSQL': <SiPostgresql className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-purple-500" />,
  'Django': <SiDjango className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-green-700" />,
  'Tailwind CSS': <SiTailwindcss className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-cyan-500" />
};

const featureIcons = {
  performance: <Zap className="w-8 h-8 sm:w-10 sm:h-10" />,
  security: <Shield className="w-8 h-8 sm:w-10 sm:h-10" />,
  scalability: <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10" />
};

const features = [
  {
    icon: featureIcons.performance,
    title: "Alta Performance",
    description: "Sistemas otimizados para máxima velocidade e eficiência, garantindo excelente experiência do usuário."
  },
  {
    icon: featureIcons.security,
    title: "Segurança Robusta",
    description: "Arquitetura com múltiplas camadas de proteção para garantir a integridade e confidencialidade dos dados."
  },
  {
    icon: featureIcons.scalability,
    title: "Escalabilidade",
    description: "Soluções preparadas para crescer organicamente junto com seu negócio, mantendo performance estável."
  }
];

const specializationCards = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Front-end Moderno",
    description: "Interfaces responsivas e interativas com React, Next.js e TypeScript",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Back-end Sólido",
    description: "APIs robustas e escaláveis com Node.js, NestJS e Django",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile Apps",
    description: "Aplicativos nativos para iOS e Android com React Native",
    color: "from-purple-500 to-pink-500"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 pt-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28 xl:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block mb-6"
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700">
              Desenvolvedor Full-Stack & Mobile
            </Badge>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight"
          >
            Transformando{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              ideias
            </span>{' '}
            em{' '}
            <span className="block sm:inline-block bg-linear-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mt-2">
              realidade digital
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto px-4 sm:px-0 leading-relaxed"
          >
            Desenvolvedor especializado em criar <strong>soluções completas</strong> - desde aplicações web modernas até apps mobile nativos, 
            sempre com foco em <strong>performance, segurança e escalabilidade</strong> para o mercado moçambicano.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button asChild variant="default" size="lg" className="gap-3 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
              <Link href="/projects">
                Explorar Projetos
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="gap-3 px-8 py-3 text-lg font-semibold border-2">
              <Link href="/contact">
                Iniciar Projeto
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Specialization Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Especialidades
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Soluções completas para todas as suas necessidades digitais
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {specializationCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className={`absolute inset-0 bg-linear-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-linear-to-br ${card.color} text-white mb-6`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700">
              Tech Stack
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tecnologias que Domino
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ferramentas modernas para construir soluções de alto desempenho
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {Object.entries(techIcons).map(([tech, icon]) => (
              <motion.div
                key={tech}
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600">
                  <CardHeader className="pb-3">
                    {icon}
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <CardTitle className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300">
                      {tech}
                    </CardTitle>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl lg:rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16 border border-gray-100 dark:border-gray-700"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Por que Escolher Meus Serviços?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Compromisso com qualidade, performance e resultados excepcionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 bg-green-50 text-green-600 border-green-200 dark:bg-green-900 dark:text-green-300 dark:border-green-700">
              Depoimentos
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              O Que Meus Clientes Dizem
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Feedback de quem já confiou no meu trabalho
            </p>
          </div>
          
          <TestimonialsSection limit={3} />
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-2">
              <Link href="/testimonials">
                Ver Todos os Depoimentos
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 lg:p-16 text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Pronto para Transformar Sua Ideia em Realidade?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Vamos construir algo extraordinário juntos. Entre em contato e vamos conversar sobre seu projeto.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 gap-3 px-8 py-4 text-lg font-semibold shadow-lg">
              <Link href="/contact">
                Iniciar Projeto Agora
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}