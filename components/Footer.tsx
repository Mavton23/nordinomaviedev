import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Rocket, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const socialLinks = [
    { 
      name: 'Facebook',
      url: 'https://facebook.com/profile.php?id=61565792531619',
      icon: <FaFacebookF className="w-5 h-5" />,
      color: 'hover:text-blue-600'
    },
    { 
      name: 'Whatsapp',
      url: 'https://wa.me/258875694141',
      icon: <FaWhatsapp className="w-5 h-5" />,
      color: 'hover:text-green-500'
    },
    { 
      name: 'Instagram',
      url: 'https://www.instagram.com/nordinomaviedev/',
      icon: <FaInstagram className="w-5 h-5" />,
      color: 'hover:text-pink-500'
    },
    { 
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nordino-mavie-developer-ab6824357/',
      icon: <FaLinkedinIn className="w-5 h-5" />,
      color: 'hover:text-blue-400'
    },
    { 
      name: 'GitHub',
      url: 'https://github.com/Mavton23',
      icon: <FaGithub className="w-5 h-5" />,
      color: 'hover:text-gray-700 dark:hover:text-gray-300'
    }
  ];

  const footerLinks = [
    {
      title: 'Navegação',
      items: [
        { name: 'Home', href: '/' },
        { name: 'Projetos', href: '/projects' },
        { name: 'Sobre', href: '/about' },
        { name: 'Contato', href: '/contact' }
      ]
    },
    {
      title: 'Legal',
      items: [
        { name: 'Política de Privacidade', href: '/privacy' },
        { name: 'Termos de Serviço', href: '/terms' },
      ]
    }
  ];

  return (
    <footer className="border-t bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand section */}
          <div className="md:col-span-2 space-y-6">
            <Link 
              href="/" 
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <span className="text-3xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
                Nordino Mavie
              </span>
            </Link>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Transformando ideias em soluções digitais inovadoras com foco em performance, 
              segurança e experiência do usuário.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl bg-muted/50 border text-muted-foreground ${social.color} hover:scale-110 hover:shadow-lg transition-all duration-300 group`}
                  aria-label={social.name}
                >
                  <div className="transform group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-lg font-semibold tracking-wider text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-muted-foreground rounded-full mr-3 opacity-0 group-hover:opacity-100 group-hover:bg-primary transition-all duration-300"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold tracking-wider text-foreground">
              Vamos Trabalhar Juntos?
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Pronto para transformar sua ideia em realidade? Entre em contato e vamos conversar sobre seu projeto.
            </p>
            <Button asChild className="gap-3 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/contact">
                <Mail className="h-4 w-4" />
                Iniciar Projeto
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Nordino Mavie Dev. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <Link 
              href="/privacy" 
              className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:underline"
            >
              Política de Privacidade
            </Link>
            <Link 
              href="/terms" 
              className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:underline"
            >
              Termos de Serviço
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}