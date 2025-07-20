import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Termos de Serviço
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Última atualização: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  1. Aceitação dos Termos
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Ao acessar e utilizar este portfólio (o "Site"), você concorda em cumprir estes Termos de Serviço e todas as leis e regulamentos aplicáveis.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  2. Uso do Site
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Você concorda em usar o Site apenas para fins legítimos e de maneira que não infrinja os direitos de terceiros ou restrinja ou iniba o uso e aproveitamento do Site por qualquer outra pessoa.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  3. Propriedade Intelectual
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Todo o conteúdo do Site, incluindo textos, gráficos, logos, ícones, imagens e software, é propriedade do desenvolvedor ou de seus licenciadores e está protegido por leis de direitos autorais e propriedade intelectual.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  4. Limitação de Responsabilidade
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  O Site é fornecido "no estado em que se encontra". Não oferecemos garantias de qualquer tipo, expressas ou implícitas, sobre a integridade, precisão, confiabilidade ou disponibilidade do Site ou seu conteúdo.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  5. Links para Terceiros
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  O Site pode conter links para sites de terceiros. Não temos controle sobre e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites de terceiros.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  6. Modificações
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Podemos revisar estes Termos de Serviço a qualquer momento sem aviso prévio. Ao usar este Site, você concorda em ficar vinculado à versão atual desses Termos de Serviço.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  7. Lei Aplicável
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Estes Termos serão regidos e interpretados de acordo com as leis do país/estado onde o desenvolvedor reside, sem considerar conflitos de disposições legais.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  8. Contato
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Em caso de dúvidas sobre estes Termos de Serviço, entre em contato através do formulário disponível no Site.
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