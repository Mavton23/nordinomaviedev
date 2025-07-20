import { Link,  } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const socialLinks = [
    { 
      name: 'Facebook',
      url: 'https://facebook.com/profile.php?id=61565792531619',
      icon: <FaFacebookF className="w-5 h-5" />
    },
    { 
      name: 'Whatsapp',
      url: 'https://wa.me/258875694141',
      icon: <FaWhatsapp className="w-5 h-5" />
    },
    { 
      name: 'Instagram',
      url: 'https://www.instagram.com/nordinomaviedev/',
      icon: <FaInstagram className="w-5 h-5" />
    },
    { 
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nordino-mavie-developer-ab6824357/',
      icon: <FaLinkedinIn className="w-5 h-5" />
    },
    { 
      name: 'GitHub',
      url: 'https://github.com/Mavton23',
      icon: <FaGithub className="w-5 h-5" />
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
    <footer className="border-t bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand section */}
          <div className="space-y-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-2xl font-bold"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Nordino Mavie Dev
              </span>
            </Link>
            <p className="text-muted-foreground">
              Transformando ideias em soluções digitais de alto impacto.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-sm font-semibold tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          {/* <div className="space-y-4">
            <h4 className="text-sm font-semibold tracking-wider">
              Receba atualizações
            </h4>
            <p className="text-muted-foreground">
              Inscreva-se para receber novidades sobre projetos e artigos.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <Button type="submit" size="sm" className="gap-2">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div> */}
        </div>

        {/* Bottom footer */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nordino Mavie Dev. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}