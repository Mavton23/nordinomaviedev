import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Política de Privacidade
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Última atualização: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  1. Introdução
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Esta Política de Privacidade descreve como suas informações pessoais são coletadas, usadas e compartilhadas quando você visita ou utiliza os serviços do meu portfólio (o "Site").
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  2. Informações Coletadas
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Quando você visita o Site, coletamos automaticamente certas informações sobre seu dispositivo, incluindo informações sobre seu navegador, endereço IP, fuso horário e alguns dos cookies que estão instalados no seu dispositivo.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Além disso, quando você preenche o formulário de contato, coletamos as informações fornecidas, incluindo nome, endereço de e-mail e mensagem.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  3. Uso das Informações
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Utilizamos as informações coletadas para:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                  <li>Responder a mensagens recebidas pelo formulário de contato</li>
                  <li>Melhorar e otimizar nosso Site</li>
                  <li>Analisar como os visitantes usam o Site</li>
                  <li>Proteger contra atividades fraudulentas</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  4. Compartilhamento de Informações
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                  <li>Cumprir com leis e regulamentos aplicáveis</li>
                  <li>Responder a solicitações legais</li>
                  <li>Proteger nossos direitos</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  5. Seus Direitos
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Você tem o direito de:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                  <li>Acessar as informações pessoais que mantemos sobre você</li>
                  <li>Solicitar a correção de informações incorretas</li>
                  <li>Solicitar a exclusão de suas informações pessoais</li>
                  <li>Opinar-se contra determinados usos de suas informações</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  6. Alterações
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas. A versão mais recente estará sempre disponível nesta página.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  7. Contato
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Para mais informações sobre nossas práticas de privacidade, dúvidas ou para fazer uma solicitação, entre em contato através do formulário disponível no Site.
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}