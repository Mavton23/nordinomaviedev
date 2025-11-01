'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Rocket } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type SubmitStatus = 'success' | 'error' | null;

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
    <main className="min-h-screen bg-linear-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-8"
          ></motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Vamos <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Trabalhar Juntos</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Entre em contato e vamos transformar suas ideias em soluções digitais extraordinárias
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Seção de Informações */}
          <Card className="bg-linear-to-br from-blue-600 to-blue-800 border-0 text-white">
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
                    target="_blank"
                    rel="noopener noreferrer"
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
                <Alert className="mb-4 sm:mb-6 bg-green-50 border-green-200 dark:bg-green-900 dark:border-green-800">
                  <AlertTitle className="text-sm sm:text-base text-green-800 dark:text-green-200">Sucesso!</AlertTitle>
                  <AlertDescription className="text-xs sm:text-sm text-green-700 dark:text-green-300">
                    Mensagem enviada com sucesso! Entrarei em contato em breve.
                  </AlertDescription>
                </Alert>
              )}
              
              {submitStatus === 'error' && (
                <Alert className="mb-4 sm:mb-6 bg-red-50 border-red-200 dark:bg-red-900 dark:border-red-800">
                  <AlertTitle className="text-sm sm:text-base text-red-800 dark:text-red-200">Erro</AlertTitle>
                  <AlertDescription className="text-xs sm:text-sm text-red-700 dark:text-red-300">
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
                    rows={4}
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
  );
}