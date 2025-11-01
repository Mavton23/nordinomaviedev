'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, CheckCircle, Shield, Link2, RefreshCw, Scale, Mail, BookOpen } from 'lucide-react';

export default function TermsOfService() {
  const currentDate = new Date().toLocaleDateString('pt-BR');

  const termsSections = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "1. Aceitação dos Termos",
      content: "Ao acessar e utilizar este portfólio (o 'Site'), você concorda em cumprir estes Termos de Serviço e todas as leis e regulamentos aplicáveis.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "2. Uso do Site",
      content: "Você concorda em usar o Site apenas para fins legítimos e de maneira que não infrinja os direitos de terceiros ou restrinja ou iniba o uso e aproveitamento do Site por qualquer outra pessoa.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "3. Propriedade Intelectual",
      content: "Todo o conteúdo do Site, incluindo textos, gráficos, logos, ícones, imagens e software, é propriedade do desenvolvedor ou de seus licenciadores e está protegido por leis de direitos autorais e propriedade intelectual.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "4. Limitação de Responsabilidade",
      content: "O Site é fornecido 'no estado em que se encontra'. Não oferecemos garantias de qualquer tipo, expressas ou implícitas, sobre a integridade, precisão, confiabilidade ou disponibilidade do Site ou seu conteúdo.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Link2 className="w-6 h-6" />,
      title: "5. Links para Terceiros",
      content: "O Site pode conter links para sites de terceiros. Não temos controle sobre e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites de terceiros.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "6. Modificações",
      content: "Podemos revisar estes Termos de Serviço a qualquer momento sem aviso prévio. Ao usar este Site, você concorda em ficar vinculado à versão atual desses Termos de Serviço.",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "7. Lei Aplicável",
      content: "Estes Termos serão regidos e interpretados de acordo com as leis do país/estado onde o desenvolvedor reside, sem considerar conflitos de disposições legais.",
      color: "from-gray-500 to-gray-700"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "8. Contato",
      content: "Em caso de dúvidas sobre estes Termos de Serviço, entre em contato através do formulário disponível no Site.",
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <>
      <main className="min-h-screen bg-linear-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 py-12 px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-8"
            ></motion.div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Termos de <span className="bg-linear-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Serviço</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Última atualização: <span className="font-semibold text-green-600 dark:text-green-400">{currentDate}</span>
            </p>
          </motion.div>

          {/* Terms Cards */}
          <div className="space-y-6">
            {termsSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Card className="border-0 bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  {/* Gradient accent bar */}
                  <div className={`h-1 bg-linear-to-r ${section.color}`} />
                  
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-4 sm:gap-6">
                      {/* Icon */}
                      <div className={`shrink-0 p-3 rounded-xl bg-linear-to-br ${section.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {section.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          {section.title}
                        </h2>
                        
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-12"
          >
            <Card className="border-0 bg-linear-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 shadow-lg border-l-4 border-amber-400">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 p-2 bg-amber-100 dark:bg-amber-900/50 rounded-lg">
                    <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">
                      Aviso Importante
                    </h3>
                    <p className="text-amber-700 dark:text-amber-400 text-sm leading-relaxed">
                      Estes Termos de Serviço constituem um acordo legal entre você e o desenvolvedor. 
                      Ao continuar usando este site, você reconhece que leu, compreendeu e concorda com todos os termos aqui apresentados.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-8 text-center"
          >
            <Card className="border-0 bg-linear-to-r from-green-600 to-blue-600 text-white shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  Dúvidas sobre os Termos?
                </h3>
                <p className="text-green-100 mb-4 leading-relaxed">
                  Entre em contato para esclarecer qualquer aspecto dos Termos de Serviço.
                </p>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-5 h-5" />
                  Falar Conosco
                </motion.a>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}