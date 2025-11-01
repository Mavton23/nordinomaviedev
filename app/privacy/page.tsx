'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, FileText, UserCheck, RefreshCw, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString('pt-BR');

  const policySections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "1. Introdução",
      content: "Esta Política de Privacidade descreve como suas informações pessoais são coletadas, usadas e compartilhadas quando você visita ou utiliza os serviços do meu portfólio (o 'Site').",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "2. Informações Coletadas",
      content: "Quando você visita o Site, coletamos automaticamente certas informações sobre seu dispositivo, incluindo informações sobre seu navegador, endereço IP, fuso horário e alguns dos cookies que estão instalados no seu dispositivo.",
      additionalContent: "Além disso, quando você preenche o formulário de contato, coletamos as informações fornecidas, incluindo nome, endereço de e-mail e mensagem.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "3. Uso das Informações",
      content: "Utilizamos as informações coletadas para:",
      listItems: [
        "Responder a mensagens recebidas pelo formulário de contato",
        "Melhorar e otimizar nosso Site",
        "Analisar como os visitantes usam o Site",
        "Proteger contra atividades fraudulentas"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "4. Compartilhamento de Informações",
      content: "Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para:",
      listItems: [
        "Cumprir com leis e regulamentos aplicáveis",
        "Responder a solicitações legais",
        "Proteger nossos direitos"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "5. Seus Direitos",
      content: "Você tem o direito de:",
      listItems: [
        "Acessar as informações pessoais que mantemos sobre você",
        "Solicitar a correção de informações incorretas",
        "Solicitar a exclusão de suas informações pessoais",
        "Opinar-se contra determinados usos de suas informações"
      ],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "6. Alterações",
      content: "Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas. A versão mais recente estará sempre disponível nesta página.",
      color: "from-yellow-500 to-amber-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "7. Contato",
      content: "Para mais informações sobre nossas práticas de privacidade, dúvidas ou para fazer uma solicitação, entre em contato através do formulário disponível no Site.",
      color: "from-gray-500 to-gray-700"
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
            className="text-center mb-8"
          >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-8"
            ></motion.div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Política de <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Privacidade</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Última atualização: <span className="font-semibold text-blue-600 dark:text-blue-400">{lastUpdated}</span>
            </p>
          </motion.div>

          {/* Content Cards */}
          <div className="space-y-6">
            {policySections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Card className="border-0 bg-linear-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-4 sm:gap-6">
                      {/* Icon */}
                      <div className={`shrink-0 p-3 rounded-xl bg-linear-to-br ${section.color} text-white shadow-lg`}>
                        {section.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          {section.title}
                        </h2>
                        
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                          {section.content}
                        </p>
                        
                        {section.additionalContent && (
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                            {section.additionalContent}
                          </p>
                        )}
                        
                        {section.listItems && (
                          <ul className="space-y-2 mb-3">
                            {section.listItems.map((item, itemIndex) => (
                              <motion.li
                                key={itemIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 + itemIndex * 0.05 }}
                                className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                              >
                                <div className={`w-2 h-2 mt-2 rounded-full bg-linear-to-r ${section.color}`} />
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-12 text-center"
          >
            <Card className="border-0 bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  Dúvidas sobre Privacidade?
                </h3>
                <p className="text-blue-100 mb-4 leading-relaxed">
                  Entre em contato conosco para esclarecer qualquer questão sobre sua privacidade e dados.
                </p>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-5 h-5" />
                  Entrar em Contato
                </motion.a>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}