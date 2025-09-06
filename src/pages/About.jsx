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
  Mail
} from 'lucide-react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiPostgresql, SiTailwindcss, SiDjango, SiKubernetes } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '../components/Header';
import Footer from '../components/Footer';
import profissionalPic from '@/images/profissional-pic.png';

const techIcons = {
  'Next.js': <SiNextdotjs className="w-6 h-6 text-black dark:text-gray-100" />,
  'React': <FaReact className="w-6 h-6 text-blue-500" />,
  'Node.js': <FaNodeJs className="w-6 h-6 text-green-600" />,
  'TypeScript': <SiTypescript className="w-6 h-6 text-blue-400" />,
  'PostgreSQL': <SiPostgresql className="w-6 h-6 text-purple-500" />,
  'Django': <SiDjango className="w-6 h-6 text-green-700" />,
  'Tailwind CSS': <SiTailwindcss className="w-6 h-6 text-cyan-500" />,
  'Kubernetes': <SiKubernetes className="w-6 h-6 text-indigo-600" />
};

export default function About() {
  const timeline = [
    {
      year: "2019",
      title: "Desenvolvedor Frontend",
      description: "Início da jornada criando interfaces modernas e responsivas com foco na experiência do usuário.",
      icon: <Layout className="w-5 h-5" />
    },
    {
      year: "2021",
      title: "Desenvolvedor Fullstack",
      description: "Construção de sistemas completos, do backend ao frontend, integrando bancos de dados e autenticação.",
      icon: <Code className="w-5 h-5" />
    },
    {
      year: "2023",
      title: "Especialista em APIs",
      description: "Desenvolvimento e consumo de APIs robustas, integrando serviços como PagSeguro, bancos e sistemas legados.",
      icon: <Share2 className="w-5 h-5" />
    },
    {
      year: "2024",
      title: "Desenvolvedor Freelancer",
      description: "Atuação independente, entregando soluções sob demanda para clientes diversos ao redor do mundo.",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      year: "2025",
      title: "Arquiteto de Soluções",
      description: "Planejamento e estruturação de sistemas escaláveis, com foco em performance, segurança e manutenibilidade.",
      icon: <Rocket className="w-5 h-5" />
    }
  ];

  const stats = [
    { value: '10+', label: 'Projetos entregues', icon: <Briefcase className="w-6 h-6" /> },
    { value: '5+', label: 'Anos de experiência', icon: <Calendar className="w-6 h-6" /> },
    { value: '100%', label: 'Satisfação do cliente', icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section with 3D Effect */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-600 border-blue-200">
                    Sobre Mim
                  </Badge>
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-gray-300 mb-6"
                  >
                    Transformando <span className="text-blue-600">código</span> em <span className="text-blue-600">resultados</span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                  >
                    Atuo desenvolvendo soluções tecnológicas que ajudam a resolver desafios reais enfrentados por diferentes organizações e pessoas em Moçambique, com foco em ferramentas modernas, 
                    eficazes e preparadas para crescer conforme as necessidades evoluem.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-4 mb-8"
                  >
                    <Button asChild>
                      <a href="/projects">
                        Ver Projetos
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href="/contact">
                        Contato Direto
                      </a>
                    </Button>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative mb-8"
                >
                  <div className="absolute -inset-8 bg-blue-500 rounded-3xl transform rotate-6 opacity-10"></div>
                  <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl border-8 border-white">
                    <img
                      src={profissionalPic}
                      alt="Foto de perfil profissional"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center hidden">
                      <div className="text-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <p className="text-blue-800 font-medium">Foto de perfil profissional</p>
                      </div>
                    </div>
                  </div>
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
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                      {stat.icon}
                    </div>
                    <div>
                      <CardTitle className="text-3xl font-bold">{stat.value}</CardTitle>
                      <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
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
              <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-600 border-blue-200">
                Jornada
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-300 mb-4">
                Minha Trajetória Profissional
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Da primeira linha de código aos sistemas em grande escala
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    <Card className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <CardHeader className="flex flex-row items-start gap-4">
                        <div className="p-2 rounded-full bg-blue-100 text-blue-600 mt-1">
                          {item.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">{item.year}</Badge>
                            <CardTitle className="text-xl">{item.title}</CardTitle>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mt-2">{item.description}</p>
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
              <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-600 border-blue-200">
                Habilidades
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-300 mb-4">
                Tecnologias que Domino
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Ferramentas modernas para construir soluções de alto impacto
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {Object.entries(techIcons).map(([tech, icon], index) => (
                <motion.div
                  key={tech}
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto">
                        {icon}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardTitle>{tech}</CardTitle>
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
            <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-center border-0 text-white">
              <CardHeader>
                <CardTitle className="text-3xl mb-4">Pronto para o próximo desafio?</CardTitle>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Vamos conversar sobre como posso ajudar no seu projeto
                </p>
              </CardHeader>
              <CardContent>
                <Button asChild variant="secondary" size="lg" className="gap-2">
                  <a href="/contact">
                    <Mail className="h-5 w-5" />
                    Entrar em Contato
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
