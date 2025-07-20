import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '../components/Header';
import Footer from '../components/Footer';
import projects from '../mock/projects.json';

export default function Projects() {
  const allTechs = ['Todos', ...new Set(projects.flatMap(project => 
    project.stack.split(' + ')
  ))];

  const [filter, setFilter] = useState('Todos');

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(project => project.stack.includes(filter));

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mt-12 mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-300 mb-3 sm:mb-4">
              Meu <span className="text-blue-600">Portfólio</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2 sm:px-0">
              Soluções técnicas que resolvem problemas reais do mercado moçambicano
            </p>
          </div>

          {/* Filtros */}
          <div className="flex flex-col items-center mb-8 sm:mb-12 md:mb-16">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400" />
              <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                Filtrar por tecnologia:
              </span>
            </div>
            
            <Tabs 
              value={filter}
              onValueChange={setFilter}
              className="w-full max-w-4xl"
            >
              <TabsList className="flex flex-wrap h-auto justify-center gap-1 sm:gap-2 p-1 sm:p-2 bg-gray-100 dark:bg-gray-950">
                {allTechs.map(tech => (
                  <TabsTrigger 
                    key={tech}
                    value={tech}
                    className={`text-xs sm:text-sm px-2 sm:px-3 py-1 ${
                      filter === tech ? 'shadow-md' : 'shadow-sm'
                    } data-[state=active]:bg-blue-600 data-[state=active]:text-white`}
                  >
                    {tech}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Grid de projetos */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow h-full flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-2">
                      {project.stack.split(' + ').map((tech, index) => (
                        <Badge 
                          key={index}
                          variant="outline"
                          className="text-xs sm:text-sm text-blue-600 border-blue-200 bg-blue-50 py-1 px-2"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-lg sm:text-xl line-clamp-1">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow pb-4">
                    <CardDescription className="line-clamp-3 text-sm sm:text-base">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button asChild variant="outline" className="w-full text-sm sm:text-base">
                      <Link to={`/projects/${project.id}`}>
                        Ver detalhes
                        <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="text-center py-8 sm:py-12 max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-gray-500">
                  Nenhum projeto encontrado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-3 sm:mb-4 text-sm sm:text-base">
                  Não encontramos projetos nesta categoria. Tente outro filtro.
                </CardDescription>
                <Button 
                  onClick={() => setFilter('Todos')}
                  variant="default"
                  size="sm"
                  className="text-sm sm:text-base"
                >
                  Ver todos os projetos
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Call to Action */}
          <Card className="mt-8 sm:mt-12 md:mt-16 text-center border-0 shadow-none bg-transparent">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-gray-800 dark:text-gray-200">
                Pronto para transformar sua ideia em realidade?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild size="lg" className="gap-2 text-sm sm:text-base">
                <Link to="/contact">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                  Vamos conversar
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}