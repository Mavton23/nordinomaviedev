'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ExternalLink, 
  Code,
  AlertCircle,
  Rocket,
  Calendar,
  BarChart3,
  Lightbulb,
  Shield,
  Zap,
  Sparkles,
  Package,
  CheckCircle2
} from 'lucide-react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiPostgresql, SiMysql, SiTailwindcss, SiDjango, SiReact, SiNestjs, SiPrisma, SiAuth0, SiOpenai } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';
import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
  category?: string;
  icon?: string;
}

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
  features?: (string | Feature)[];
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
   "stack": "Next.js, TypeScript, Prisma, PostgreSQL, TailwindCSS, OpenAI",
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

const techIcons: Record<string, React.ReactNode> = {
  'Next.js': <SiNextdotjs className="w-10 h-10 text-black dark:text-gray-100" />,
  'React': <FaReact className="w-10 h-10 text-blue-500" />,
  'React Native': <SiReact className="w-10 h-10 text-cyan-400" />,
  'Node.js': <FaNodeJs className="w-10 h-10 text-green-600" />,
  'NestJS': <SiNestjs className="w-10 h-10 text-red-500" />,
  'TypeScript': <SiTypescript className="w-10 h-10 text-blue-400" />,
  'Prisma': <SiPrisma className="w-10 h-10 text-teal-500" />,
  'PostgreSQL': <SiPostgresql className="w-10 h-10 text-purple-500" />,
  'MySQL': <SiMysql className='w-10 h-10 text-orange-600' />,
  'Django': <SiDjango className="w-10 h-10 text-green-700" />,
  'TailwindCSS': <SiTailwindcss className="w-10 h-10 text-cyan-500" />,
  'OpenAI': <SiOpenai className="w-10 h-10 text-green-500" />,
};

const complexityColors = {
  "Baixa": "from-green-500 to-emerald-500",
  "Média": "from-yellow-500 to-orange-500",
  "Alta": "from-red-500 to-pink-500"
};

// Função para extrair tecnologias da string stack
const extractTechnologies = (stack: string): string[] => {
  return stack.split(', ').map(tech => tech.trim());
};

export default function ProjectDetails() {
  const params = useParams();
  const slug = params.slug as string;
  
  const project = mockProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-md text-center border-0 bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-2xl">
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-900 dark:text-white">Projeto não encontrado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                O projeto solicitado não está disponível ou foi removido.
              </p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button asChild variant="default" className="gap-2 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Link href="/projects">
                  <ArrowLeft className="h-4 w-4" />
                  Voltar aos projetos
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    );
  }

  const technologies = extractTechnologies(project.stack);

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 pt-20">
      {/* Hero Section */}
      <div className="relative h-80 sm:h-96 w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-linear-to-r from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="text-center px-4 relative z-10">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
            >
              {project.title}
            </motion.h1>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Badge variant="secondary" className="text-sm bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="shadow-2xl border-0 bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
            {/* Header com gradiente */}
            <div className="bg-linear-to-r from-blue-500/10 to-purple-500/10 border-b">
              <CardHeader className="pb-6">
                <Tabs defaultValue="about" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-muted/50 rounded-2xl p-1 border">
                    <TabsTrigger 
                      value="about" 
                      className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-gray-100 transition-all duration-300"
                    >
                      <Lightbulb className="w-4 h-4 mr-2" />
                      Visão Geral
                    </TabsTrigger>
                    <TabsTrigger 
                      value="techs" 
                      className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-gray-100 transition-all duration-300"
                    >
                      <Code className="w-4 h-4 mr-2" />
                      Tecnologias
                    </TabsTrigger>
                    <TabsTrigger 
                      value="details" 
                      className="rounded-xl data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-gray-100 transition-all duration-300"
                    >
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Detalhes
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="about" className="pt-6 space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <Zap className="w-6 h-6 text-blue-500" />
                        Sobre o Projeto
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        {project.description}
                      </p>
                    </div>

                    {project.challenges && (
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                          <Shield className="w-6 h-6 text-purple-500" />
                          Desafios Técnicos
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                          {project.challenges}
                        </p>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="techs" className="pt-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                      {technologies.map((tech, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ y: -5, scale: 1.05 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index }}
                        >
                          <Card className="h-full border-0 bg-linear-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
                            <CardHeader className="items-center text-center space-y-4">
                              <div className="p-3 rounded-2xl bg-linear-to-br from-blue-500/10 to-purple-500/10">
                                {techIcons[tech] || <Code className="w-10 h-10 text-gray-400" />}
                              </div>
                              <CardTitle className="text-base font-semibold text-gray-900 dark:text-white">
                                {tech}
                              </CardTitle>
                            </CardHeader>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="details" className="pt-6 space-y-6">
                    <Alert className="border-0 bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 shadow-lg">
                      <Rocket className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <AlertTitle className="text-blue-800 dark:text-blue-200 text-lg font-semibold">
                        Impacto do Projeto
                      </AlertTitle>
                      <AlertDescription className="text-blue-700 dark:text-blue-300 text-base mt-2">
                        {project.impact || "Este projeto trouxe melhorias significativas para o negócio do cliente."}
                      </AlertDescription>
                    </Alert>

                    {/* Funcionalidades do Projeto */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-linear-to-r from-blue-500 to-purple-500">
                          <Sparkles className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          Funcionalidades Principais
                        </h3>
                      </div>

                      {project.features && project.features.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {project.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ scale: 1.02, y: -5 }}
                              className="group relative"
                            >
                              <Card className="h-full border-0 bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                {/* Gradiente decorativo no canto */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full" />
                                
                                <CardHeader className="pb-2">
                                  <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                      <div className="p-2 rounded-lg bg-linear-to-br from-blue-500 to-purple-500 text-white shadow-md">
                                        {index < 10 ? (
                                          <span className="text-sm font-bold w-4 h-4 flex items-center justify-center">
                                            {String(index + 1).padStart(2, '0')}
                                          </span>
                                        ) : (
                                          <CheckCircle2 className="h-4 w-4" />
                                        )}
                                      </div>
                                      <CardTitle className="text-base font-semibold text-gray-900 dark:text-white">
                                        {typeof feature === 'string' ? feature : feature.title}
                                      </CardTitle>
                                    </div>
                                  </div>
                                </CardHeader>
                                
                                <CardContent>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {typeof feature === 'string' 
                                      ? feature 
                                      : feature.description || 'Funcionalidade implementada para melhorar a experiência do usuário.'}
                                  </p>
                                </CardContent>

                                {/* Badge de categoria (se tiver categorias) */}
                                {typeof feature !== 'string' && feature.category && (
                                  <CardFooter className="pt-0">
                                    <Badge variant="outline" className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                                      {feature.category}
                                    </Badge>
                                  </CardFooter>
                                )}
                              </Card>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <Card className="border-2 border-dashed border-gray-300 dark:border-gray-700 bg-transparent">
                          <CardContent className="py-12 text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                              <Package className="h-8 w-8 text-gray-400" />
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 text-lg">
                              Nenhuma funcionalidade listada para este projeto.
                            </p>
                          </CardContent>
                        </Card>
                      )}
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4 text-gray-900 dark:text-white text-lg">Dados do Projeto</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Card className="border-0 bg-linear-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 shadow-lg">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-5 h-5 text-blue-500" />
                              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Duração</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                              {project.duration || "3 meses"}
                            </div>
                          </CardContent>
                        </Card>
                        <Card className="border-0 bg-linear-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 shadow-lg">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2">
                              <BarChart3 className="w-5 h-5 text-purple-500" />
                              <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">Complexidade</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className={`text-2xl font-bold bg-linear-to-r ${complexityColors[project.complexity as keyof typeof complexityColors] || complexityColors.Alta} bg-clip-text text-transparent`}>
                              {project.complexity || "Alta"}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardHeader>
            </div>

            <CardFooter className="flex flex-col sm:flex-row gap-4 justify-between p-6">
              <Button asChild variant="outline" className="gap-2 rounded-xl border-2 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
                <Link href="/projects">
                  <ArrowLeft className="h-4 w-4" />
                  Voltar aos projetos
                </Link>
              </Button>
              
              {project.link && (
                <Button asChild className="gap-2 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Ver projeto online
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>

          {/* Gallery Section */}
          {project.images && project.images.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Code className="w-6 h-6 text-blue-500" />
                Galeria do Projeto
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {project.images.map((img, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.02 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                    className="overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800"
                  >
                    <div className="relative h-64 w-full">
                      <Image
                        src={img}
                        alt={`Screenshot ${index + 1} do projeto ${project.title}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </main>
  );
}