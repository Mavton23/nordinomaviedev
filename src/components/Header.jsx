import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowRight,
  Mail,
  Github, 
  Linkedin, 
  Instagram,
  Twitter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
// import { ModeToggle } from '@/components/mode-toggle';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/projects', name: 'Projetos' },
    { path: '/about', name: 'Sobre' },
    { path: '/contact', name: 'Contato' }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/90 backdrop-blur-md border-b shadow-sm' 
        : 'bg-background/50 backdrop-blur-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 text-2xl font-bold"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nordino Mavie Dev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                    location.pathname === link.path 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-primary rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <Button asChild variant="default" size="sm" className="gap-2">
                <Link to="/contact">
                  <Mail className="h-4 w-4" />
                  Contato
                </Link>
              </Button>
              {/* <ModeToggle /> */}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-4">
            {/* <ModeToggle /> */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <div className="pt-2 pb-8 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-3 rounded-lg text-base font-medium ${
                    location.pathname === link.path 
                      ? 'bg-accent text-accent-foreground' 
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="w-full mt-4 gap-2">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Mail className="h-4 w-4" />
                  Entrar em Contato
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

