import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiPostgresql, SiTailwindcss, SiDjango, SiKubernetes } from 'react-icons/si';
import { Button } from '../components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

const LightningBoltIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const ShieldIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const ScaleIcon = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
  </svg>
);

const techIcons = {
  'Next.js': <SiNextdotjs className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-black dark:text-gray-100" />,
  'React': <FaReact className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-blue-500" />,
  'Node.js': <FaNodeJs className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-green-600" />,
  'TypeScript': <SiTypescript className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-blue-400" />,
  'PostgreSQL': <SiPostgresql className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-purple-500" />,
  'Django': <SiDjango className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-green-700" />,
  'Tailwind CSS': <SiTailwindcss className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-cyan-500" />,
  'Kubernetes': <SiKubernetes className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-indigo-600" />
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12 md:mt-16 lg:mt-20 lg:px-8 py-12 md:py-20 lg:py-28 xl:py-36">
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 dark:text-gray-300 mb-4 sm:mb-6 leading-tight"
            >
              Transformando <span className="text-blue-600">ideias</span> em{' '}
              <span className="block sm:inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                soluções digitais reais
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto px-4 sm:px-0"
            >
              Arquitetura de sistemas escaláveis que impulsionam negócios no cenário tecnológico moçambicano
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-gray-300 mb-3 sm:mb-4">
              Tecnologias que Domino
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4 sm:px-0">
              Ferramentas modernas para construir soluções de alto desempenho
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
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
                      <CardTitle className="text-sm sm:text-base md:text-lg">{tech}</CardTitle>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white dark:bg-gray-900/50 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-sm mb-12 sm:mb-20 lg:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-950 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl"
            >
              <div className="text-blue-600 mb-3 sm:mb-4">
                <LightningBoltIcon className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-300 mb-1 sm:mb-2">Desempenho</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Sistemas otimizados para alta velocidade e eficiência, mesmo sob grande demanda.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-950 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl"
            >
              <div className="text-blue-600 mb-3 sm:mb-4">
                <ShieldIcon className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-300 mb-1 sm:mb-2">Segurança</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Arquitetura com camadas de proteção para garantir a integridade dos dados.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-950 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl"
            >
              <div className="text-blue-600 mb-3 sm:mb-4">
                <ScaleIcon className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-300 mb-1 sm:mb-2">Escalabilidade</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
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