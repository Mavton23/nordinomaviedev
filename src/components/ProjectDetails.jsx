import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ExternalLink, 
  Code, 
  Cpu, 
  Database, 
  GitBranch, 
  Globe, 
  Layers, 
  Server, 
  Terminal,
  AlertCircle,
  Rocket
} from 'lucide-react';
import { FaReact, FaNodeJs, FaDocker, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiPostgresql, SiMysql, SiTailwindcss, SiDjango, SiKubernetes } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Header from './Header';
import Footer from './Footer';
import projects from '../mock/projects.json';

const techIcons = {
  'Next.js': <SiNextdotjs className="w-10 h-10 text-black" />,
  'React': <FaReact className="w-10 h-10 text-blue-500" />,
  'Node.js': <FaNodeJs className="w-10 h-10 text-green-600" />,
  'TypeScript': <SiTypescript className="w-10 h-10 text-blue-400" />,
  'PostgreSQL': <SiPostgresql className="w-10 h-10 text-purple-500" />,
  'MySQL': <SiMysql className='w-10 h-10 text-orange-700' />,
  'Django': <SiDjango className="w-10 h-10 text-green-700" />,
  'Tailwind CSS': <SiTailwindcss className="w-10 h-10 text-cyan-500" />,
  'Kubernetes': <SiKubernetes className="w-10 h-10 text-indigo-600" />
};

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <Card className="max-w-md text-center border-0 shadow-lg">
          <CardHeader>
            <AlertCircle className="w-12 h-12 mx-auto text-red-500" />
            <CardTitle className="text-2xl">Projeto não encontrado</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              O projeto solicitado não está disponível ou foi removido.
            </p>
          </CardContent>
          <CardFooter className="justify-center">
            <Button asChild variant="default">
              <a href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar aos projetos
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <div className="relative h-96 w-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center"
          >
            <div className="text-center px-4">
              <motion.h1
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-white mb-4"
              >
                {project.title}
              </motion.h1>
              <div className="flex flex-wrap justify-center gap-2">
                {project.stack.split(' + ').map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Badge variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
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
            <Card className="shadow-xl">
              <CardHeader>
                <Tabs defaultValue="about" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="about">Sobre</TabsTrigger>
                    <TabsTrigger value="techs">Tecnologias</TabsTrigger>
                    <TabsTrigger value="details">Detalhes</TabsTrigger>
                  </TabsList>

                  <TabsContent value="about" className="pt-6">
                    <div className="prose max-w-none">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Visão Geral</h3>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {project.description}
                      </p>
                    </div>

                    {project.challenges && (
                      <div className="mt-10">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Desafios Técnicos</h3>
                        <p className="text-gray-700 leading-relaxed">
                          {project.challenges}
                        </p>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="techs" className="pt-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {project.stack.split(' + ').map((tech, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 * index }}
                        >
                          <Card className="h-full">
                            <CardHeader className="items-center">
                              {techIcons[tech] || <Code className="w-6 h-6" />}
                              <CardTitle className="text-center">{tech}</CardTitle>
                            </CardHeader>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="details" className="pt-6">
                    <div className="space-y-6">
                      <Alert>
                        <Rocket className="h-4 w-4" />
                        <AlertTitle>Impacto do Projeto</AlertTitle>
                        <AlertDescription>
                          {project.impact || "Este projeto trouxe melhorias significativas para o negócio do cliente."}
                        </AlertDescription>
                      </Alert>

                      <div>
                        <h4 className="font-medium mb-2">Dados do Projeto</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm font-medium text-gray-500">Duração</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold">
                                {project.duration || "3 meses"}
                              </div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm font-medium text-gray-500">Complexidade</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="text-2xl font-bold">
                                {project.complexity || "Alta"}
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardHeader>

              <CardFooter className="flex flex-col sm:flex-row gap-4 justify-between">
                <Button asChild variant="outline" className="gap-2">
                  <a href="/projects">
                    <ArrowLeft className="h-4 w-4" />
                    Voltar aos projetos
                  </a>
                </Button>
                
                {project.link && (
                  <Button asChild className="gap-2">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Ver projeto online
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>

            {/* Gallery Section */}
            {project.images && (
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Galeria</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.images.map((img, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="overflow-hidden rounded-lg"
                    >
                      <img
                        src={img}
                        alt={`Screenshot ${index + 1} do projeto ${project.title}`}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}