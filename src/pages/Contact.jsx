import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mnnvryqa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Falha no envio');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { 
      name: 'Facebook',
      url: 'https://facebook.com/profile.php?id=61565792531619',
      icon: <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    { 
      name: 'Whatsapp',
      url: 'https://wa.me/258875694141',
      icon: <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    { 
      name: 'Instagram',
      url: 'https://www.instagram.com/nordinomaviedev/',
      icon: <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    { 
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nordino-mavie-developer-ab6824357/',
      icon: <FaLinkedinIn className="w-4 h-4 sm:w-5 sm:h-5" />
    },
    { 
      name: 'GitHub',
      url: 'https://github.com/Mavton23',
      icon: <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mt-12 sm:mt-12 md:mt-16 lg:mt-20 mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-300 mb-3 sm:mb-4">
              Vamos <span className="text-blue-600">trabalhar juntos</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2 sm:px-0">
              Entre em contato e vamos transformar suas ideias em realidade digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Seção de Informações */}
            <Card className="bg-gradient-to-br from-blue-600 to-blue-800 border-0 text-white">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-blue-500 p-2 sm:p-3 rounded-lg">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm sm:text-base">Email</h3>
                    <a 
                      href="mailto:nordinomaviedeveloper@gmail.com" 
                      className="text-blue-100 hover:text-white transition-colors text-xs sm:text-sm break-all"
                    >
                      nordinomaviedeveloper@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-blue-500 p-2 sm:p-3 rounded-lg">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm sm:text-base">Telefone/WhatsApp</h3>
                    <a 
                      href="https://wa.me/258875694141" 
                      className="text-blue-100 hover:text-white transition-colors text-xs sm:text-sm"
                    >
                      (+258) 875 694 141
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-blue-500 p-2 sm:p-3 rounded-lg">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm sm:text-base">Localização</h3>
                    <p className="text-blue-100 text-xs sm:text-sm">Maputo, Matola</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full">
                  <h3 className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">Redes Sociais</h3>
                  <div className="flex gap-2 sm:gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-400 p-2 sm:p-3 rounded-full transition-colors"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </CardFooter>
            </Card>

            {/* Formulário */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-gray-900 dark:text-gray-300">Envie uma mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                {submitStatus === 'success' && (
                  <Alert variant="success" className="mb-4 sm:mb-6">
                    <AlertTitle className="text-sm sm:text-base">Sucesso!</AlertTitle>
                    <AlertDescription className="text-xs sm:text-sm">
                      Mensagem enviada com sucesso! Entrarei em contato em breve.
                    </AlertDescription>
                  </Alert>
                )}
                
                {submitStatus === 'error' && (
                  <Alert variant="destructive" className="mb-4 sm:mb-6">
                    <AlertTitle className="text-sm sm:text-base">Erro</AlertTitle>
                    <AlertDescription className="text-xs sm:text-sm">
                      Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="name" className="text-sm sm:text-base">Nome completo</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                      className="text-sm sm:text-base"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      className="text-sm sm:text-base"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="message" className="text-sm sm:text-base">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Como posso ajudar?"
                      required
                      className="text-sm sm:text-base"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gap-2 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}