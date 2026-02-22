'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Filter, ArrowRight, Mail, ExternalLink, Clock, BarChart3, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  slug: string;
  title: string;
  stack: string;
  description: string;
  challenges: string;
  impact: string;
  duration: string;
  complexity: string;
  link: string;
  images: string[];
  features?: string[];
}

const mockProjects: Project[] = [
  {
    "slug": "donza",
    "title": "Donza - Plataforma de Ensino Online",
    "stack": "React, TypeScript, Node.js, PostgreSQL",
    "description": "Desenvolvimento de uma plataforma de ensino com suporte a cursos, aulas em vídeo, quizzes interativos, comunidades de ensino e painéis administrativos. O sistema permite que instrutores criem conteúdos e os acompanhem em tempo real.",
    "challenges": "Implementar uma arquitetura escalável para suportar diversos tipos de mídia, criar sistemas de interação em comunidades de ensino e garantir a sincronização em tempo real dos dados educacionais.",
    "impact": "A plataforma, ainda em fase de testes, demonstra grande potencial de transformação na experiência de ensino online, com expectativa de alto impacto no mercado educacional.",
    "duration": "4 meses",
    "complexity": "Alta",
    "link": "https://donza.vercel.app",
    "images": [
      "/images/projects/donza-1.png",
      "/images/projects/donza-2.png",
      "/images/projects/donza-3.png",
      "/images/projects/donza-4.png",
      "/images/projects/donza-5.png",
      "/images/projects/donza-6.png",
      "/images/projects/donza-7.png"
    ]
  },
  {
    "slug": "rentix",
    "title": "Rentix - Gestão Imobiliária Inteligente",
    "stack": "React, TypeScript, Node.js, PostgreSQL",
    "description": "Desenvolvimento de uma plataforma completa para gerenciamento imobiliário, incluindo gestão de inquilinos, propriedades, pagamentos e comunicação integrada via email e WhatsApp. Interface limpa e intuitiva para administração segura de portfólios imobiliários.",
    "challenges": "Integrar múltiplos sistemas de comunicação, garantir segurança de dados sensíveis e criar fluxos de trabalho eficientes para gestão de propriedades e pagamentos.",
    "impact": "Plataforma já em produção, ganhando rápida aceitação no mercado por sua abordagem elegante e dinâmica para resolver desafios complexos da gestão imobiliária.",
    "duration": "3 meses",
    "complexity": "Alta",
    "link": "https://rentix.vercel.app",
    "images": [
      "/images/projects/rentix-1.png",
      "/images/projects/rentix-2.png",
      "/images/projects/rentix-3.png",
      "/images/projects/rentix-4.png",
      "/images/projects/rentix-5.png",
      "/images/projects/rentix-6.png",
      "/images/projects/rentix-7.png",
      "/images/projects/rentix-8.png"
    ]
  },
  {
    "slug": "vox-scriptura",
    "title": "Vox Scriptura - Voz da Escritura",
   "stack": "Next.js, TypeScript, Prisma, PostgreSQL, OpenAI",
    "description": "Plataforma cristã dedicada ao ensino da sã doutrina, oferecendo conteúdo teológico de autores confiáveis como Mario Persona, John Nelson Darby e William Kelly. Inclui área de perguntas e respostas, ensinos doutrinários, versículos comentados diariamente e chat com IA baseado nos escritos dos autores.",
    "challenges": "Implementação de sistema RAG (Retrieval-Augmented Generation) para chat com IA, utilizando embeddings e busca semântica para respostas baseadas exclusivamente nos escritos dos autores. Desenvolvimento de painel administrativo completo para gestão de conteúdo, sistema de autenticação com diferentes níveis de permissão (admin/user) e funcionalidade de favoritos para usuários salvam conteúdo.",
    "impact": "Plataforma com mais de 75 doutrinas publicadas, sistema de IA funcional para consultas teológicas e interface intuitiva que facilita o estudo bíblico. Arquitetura preparada para escalar com novos conteúdos e autores.",
    "duration": "2 meses",
    "complexity": "Baixa",
    "link": "https://vox-scriptura.vercel.app",
    "images": [
      "/images/projects/vox-1.png",
      "/images/projects/vox-2.png",
      "/images/projects/vox-3.png",
      "/images/projects/vox-4.png",
      "/images/projects/vox-5.png",
      "/images/projects/vox-6.png",
      "/images/projects/vox-7.png",
      "/images/projects/vox-8.png"
    ],
    "features": [
      "Sistema de autenticação com NextAuth (credenciais + Google + GitHub)",
      "Painel administrativo completo para gestão de conteúdo",
      "Área de perguntas e respostas com filtros por autor e tags",
      "Doutrinas com suporte a Markdown e preview em tempo real",
      "Frases diárias com agendamento e versículo do dia automático",
      "Chat com IA utilizando RAG e embeddings da OpenAI",
      "Sistema de favoritos para usuários salvam conteúdo",
      "Busca global integrada com debounce",
      "Tema dark/light com next-themes",
      "Páginas de autores com estatísticas de contribuições"
    ]
  }
];

const complexityColors = {
  "Baixa": "from-green-500 to-emerald-500",
  "Média": "from-yellow-500 to-orange-500",
  "Alta": "from-red-500 to-pink-500"
};

export default function Projects() {
  const allTechs = ['Todos', ...new Set(mockProjects.flatMap(project => 
    project.stack.split(', ').map(tech => tech.trim())
  ))];

  const [filter, setFilter] = useState('Todos');

  const filteredProjects = filter === 'Todos' 
    ? mockProjects 
    : mockProjects.filter(project => project.stack.includes(filter));

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4"
          >
            <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700 px-4 py-2">
              <Rocket className="w-4 h-4 mr-2" />
              Portfólio
            </Badge>
          </motion.div> */}
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Meus <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projetos</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Soluções técnicas inovadoras que resolvem problemas reais do mercado moçambicano e global
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Filtrar por tecnologia:
            </span>
          </div>
          
          <Tabs 
            value={filter}
            onValueChange={setFilter}
            className="w-full max-w-4xl"
          >
            <TabsList className="flex flex-wrap h-auto justify-center gap-2 p-2 bg-muted/50 rounded-2xl border">
              {allTechs.map(tech => (
                <TabsTrigger 
                  key={tech}
                  value={tech}
                  className={`text-sm px-4 py-2 rounded-xl transition-all duration-300 ${
                    filter === tech 
                      ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 hover:scale-105'
                  }`}
                >
                  {tech}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Grid de projetos */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full flex flex-col border-0 bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                    {/* Header com gradiente */}
                    <div className="bg-linear-to-r from-blue-500/10 to-purple-500/10 p-1">
                      <CardHeader className="pb-3">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.stack.split(' + ').slice(0, 2).map((tech, techIndex) => (
                            <Badge 
                              key={techIndex}
                              variant="outline"
                              className="text-xs bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/50 dark:border-blue-700 dark:text-blue-300 py-1 px-2"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.stack.split(' + ').length > 2 && (
                            <Badge 
                              variant="outline"
                              className="text-xs bg-gray-50 text-gray-600 border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400 py-1 px-2"
                            >
                              +{project.stack.split(' + ').length - 2}
                            </Badge>
                          )}
                        </div>
                        
                        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                    </div>

                    <CardContent className="grow pb-4 pt-4">
                      <CardDescription className="text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed mb-4">
                        {project.description}
                      </CardDescription>
                      
                      {/* Metadados do projeto */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <BarChart3 className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                          <span className={`px-2 py-1 rounded-full text-xs font-medium bg-linear-to-r ${complexityColors[project.complexity as keyof typeof complexityColors]} text-white`}>
                            Complexidade: {project.complexity}
                          </span>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="pt-0">
                      <div className="flex gap-3 w-full">
                        <Button asChild variant="outline" className="flex-1 gap-2 rounded-xl border-2 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-colors">
                          <Link href={`/projects/${project.slug}`}>
                            Detalhes
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                        <Button asChild size="icon" variant="ghost" className="rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <Card className="text-center py-12 max-w-md mx-auto border-0 bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-xl">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                    <Filter className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-500 dark:text-gray-400">
                    Nenhum projeto encontrado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-6 text-gray-600 dark:text-gray-500">
                    Não encontramos projetos com esta tecnologia. Tente outro filtro.
                  </CardDescription>
                  <Button 
                    onClick={() => setFilter('Todos')}
                    variant="default"
                    className="gap-2 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Rocket className="h-4 w-4" />
                    Ver todos os projetos
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20"
        >
          <div className="bg-linear-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl text-center text-white p-8 sm:p-12 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Pronto para transformar sua ideia em realidade?
            </h2>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Vamos criar algo extraordinário juntos. Sua próxima solução digital está a um clique de distância.
            </p>
            <Button asChild size="lg" className="gap-3 bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl">
              <Link href="/contact">
                <Mail className="h-5 w-5" />
                Iniciar Projeto
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}