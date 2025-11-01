'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Share2,
  Rocket,
  Briefcase,
  Award,
  Calendar,
  ArrowRight,
  Layout,
  Mail,
  Cpu,
  Zap,
  Target
} from 'lucide-react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiPostgresql, SiTailwindcss, SiDjango, SiReact, SiNestjs } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import profissionalPic from '@/public/images/profissional-pic-2.png';

const techIcons = {
  'Next.js': <SiNextdotjs className="w-6 h-6 text-black dark:text-gray-100" />,
  'React': <FaReact className="w-6 h-6 text-blue-500" />,
  'React Native': <SiReact className="w-6 h-6 text-cyan-400" />,
  'Node.js': <FaNodeJs className="w-6 h-6 text-green-600" />,
  'NestJS': <SiNestjs className="w-6 h-6 text-red-500" />,
  'TypeScript': <SiTypescript className="w-6 h-6 text-blue-400" />,
  'PostgreSQL': <SiPostgresql className="w-6 h-6 text-purple-500" />,
  'Django': <SiDjango className="w-6 h-6 text-green-700" />,
  'Tailwind CSS': <SiTailwindcss className="w-6 h-6 text-cyan-500" />
};

export default function About() {
  const timeline = [
    {
      year: "2019",
      title: "Desenvolvedor Frontend",
      description: "Início da jornada criando interfaces modernas e responsivas com foco na experiência do usuário.",
      icon: <Layout className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      year: "2021",
      title: "Desenvolvedor Fullstack",
      description: "Construção de sistemas completos, do backend ao frontend, integrando bancos de dados e autenticação.",
      icon: <Code className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      year: "2023",
      title: "Especialista em APIs",
      description: "Desenvolvimento e consumo de APIs robustas, integrando serviços como PagSeguro, bancos e sistemas legados.",
      icon: <Share2 className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      year: "2024",
      title: "Desenvolvedor Freelancer",
      description: "Atuação independente, entregando soluções sob demanda para clientes diversos ao redor do mundo.",
      icon: <Briefcase className="w-5 h-5" />,
      color: "from-orange-500 to-red-500"
    },
    {
      year: "2025",
      title: "Arquiteto de Soluções",
      description: "Planejamento e estruturação de sistemas escaláveis, com foco em performance, segurança e manutenibilidade.",
      icon: <Rocket className="w-5 h-5" />,
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const stats = [
    { 
      value: '10+', 
      label: 'Projetos entregues', 
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      value: '5+', 
      label: 'Anos de experiência', 
      icon: <Calendar className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      value: '100%', 
      label: 'Satisfação do cliente', 
      icon: <Award className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Foco no Resultado",
      description: "Entregas que realmente resolvem problemas e agregam valor ao negócio"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Soluções otimizadas para máxima velocidade e eficiência"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Inovação",
      description: "Uso das melhores tecnologias e práticas do mercado"
    }
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Badge variant="outline" className="mb-6 bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700 px-4 py-2">
                    <Rocket className="w-4 h-4 mr-2" />
                    Sobre Mim
                  </Badge>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight"
                >
                  Transformando{' '}
                  <span className="bg-linear-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                    ideias
                  </span>{' '}
                  em{' '}
                  <span className="bg-linear-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                    soluções reais
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                >
                  Desenvolvedor full-stack especializado em criar <strong>soluções completas</strong> - desde aplicações web modernas até apps mobile nativos. 
                  Com foco em <strong>performance, segurança e escalabilidade</strong> para o mercado moçambicano e global.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4 mb-8"
                >
                  <Button asChild className="gap-3 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Link href="/projects">
                      Explorar Projetos
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="gap-3 rounded-xl border-2">
                    <Link href="/contact">
                      Contato Direto
                    </Link>
                  </Button>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0, rotate: -2 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="relative"
              >
                <div className="absolute -inset-6 bg-linear-to-r from-blue-500 to-purple-500 rounded-3xl transform rotate-3 opacity-20 blur-xl"></div>
                <div className="absolute -inset-4 bg-linear-to-r from-blue-400 to-purple-400 rounded-2xl transform -rotate-2 opacity-10"></div>
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl border-8 border-white dark:border-gray-800 bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600">
                  <Image
                    src={profissionalPic}
                    alt="Foto de perfil profissional"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    placeholder="blur"
                    priority
                  />
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Code className="w-4 h-4 text-white" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-8 h-8 bg-linear-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Rocket className="w-4 h-4 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 -mt-12 relative z-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className={`p-3 rounded-xl bg-linear-to-br ${stat.color} text-white shadow-lg`}>
                    {stat.icon}
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-bold bg-linear-to-br from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                      {stat.value}
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-900 dark:text-purple-300 dark:border-purple-700">
              Valores
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Como Trabalho
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Princípios que guiam cada projeto e entrega
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <Card className="h-full border-0 bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                  <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 bg-green-50 text-green-600 border-green-200 dark:bg-green-900 dark:text-green-300 dark:border-green-700">
              Jornada
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Minha Trajetória Profissional
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Da primeira linha de código aos sistemas em grande escala
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-1 bg-linear-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 opacity-20"></div>
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <Card className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'} border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group`}>
                    <CardHeader className="flex flex-row items-start gap-4">
                      <div className={`p-3 rounded-xl bg-linear-to-br ${item.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="secondary" className="bg-linear-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600">
                            {item.year}
                          </Badge>
                          <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                            {item.title}
                          </CardTitle>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Technologies Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-900 dark:text-orange-300 dark:border-orange-700">
              Habilidades
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tecnologias que Domino
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Ferramentas modernas para construir soluções de alto impacto
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {Object.entries(techIcons).map(([tech, icon], index) => (
              <motion.div
                key={tech}
                whileHover={{ y: -8, scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full text-center border-0 bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-blue-300 dark:group-hover:border-blue-600">
                  <CardHeader className="pb-3">
                    <div className="mx-auto transform group-hover:scale-110 transition-transform duration-300">
                      {icon}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardTitle className="text-base font-semibold text-gray-700 dark:text-gray-300">
                      {tech}
                    </CardTitle>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-linear-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl text-center text-white p-12 lg:p-16 shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para o Próximo Desafio?
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
                Vamos conversar sobre como posso transformar sua ideia em uma solução digital incrível
              </p>
              <Button asChild size="lg" className="gap-3 bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl">
                <Link href="/contact">
                  <Mail className="h-5 w-5" />
                  Iniciar Conversa
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}