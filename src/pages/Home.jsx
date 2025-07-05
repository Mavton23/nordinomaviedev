import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Code, 
  Cpu, 
  Database, 
  GitBranch, 
  Globe, 
  Layers, 
  Server, 
  Terminal 
} from 'lucide-react';
import { FaReact, FaNodeJs, FaDocker, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiPostgresql, SiTailwindcss, SiDjango, SiKubernetes } from 'react-icons/si';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

// Ícones para tecnologias
const techIcons = {
  'Next.js': <SiNextdotjs className="w-10 h-10 mx-auto text-black" />,
  'React': <FaReact className="w-10 h-10 mx-auto text-blue-500" />,
  'Node.js': <FaNodeJs className="w-10 h-10 mx-auto text-green-600" />,
  'TypeScript': <SiTypescript className="w-10 h-10 mx-auto text-blue-400" />,
  'PostgreSQL': <SiPostgresql className="w-10 h-10 mx-auto text-purple-500" />,
  'Django': <SiDjango className="w-10 h-10 mx-auto text-green-700" />,
  'Tailwind CSS': <SiTailwindcss className="w-10 h-10 mx-auto text-cyan-500" />,
  'Kubernetes': <SiKubernetes className="w-10 h-10 mx-auto text-indigo-600" />
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight"
            >
              Transformando <span className="text-blue-600">ideias</span> em <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                soluções digitais reais
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              Arquitetura de sistemas escaláveis que impulsionam negócios no cenário tecnológico moçambicano
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button asChild variant="default" size="lg" className="gap-2">
                <Link to="/projects">
                  Explorar Projetos
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  Contato Direto
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Tech Stack Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Tecnologias que Domino
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Ferramentas modernas para construir soluções de alto desempenho
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(techIcons).map(([tech, icon]) => (
                <motion.div
                  key={tech}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      {icon}
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardTitle className="text-lg">{tech}</CardTitle>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Value Proposition Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white rounded-3xl shadow-sm mb-24">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <div className="text-blue-600 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Desempenho</h3>
              <p className="text-gray-600">
                Sistemas otimizados para alta velocidade e eficiência, mesmo sob grande demanda.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <div className="text-blue-600 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Segurança</h3>
              <p className="text-gray-600">
                Arquitetura com camadas de proteção para garantir a integridade dos dados.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <div className="text-blue-600 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Escalabilidade</h3>
              <p className="text-gray-600">
                Soluções preparadas para crescer junto com seu negócio, sem perder performance.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}