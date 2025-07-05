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
  // Extrai tecnologias únicas para os filtros
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
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
              Meu <span className="text-blue-600">Portfólio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções técnicas que resolvem problemas reais do mercado moçambicano
            </p>
          </div>

          {/* Filtros */}
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-500">Filtrar por tecnologia:</span>
            </div>
            
            <Tabs 
              value={filter}
              onValueChange={setFilter}
              className="w-full max-w-4xl"
            >
              <TabsList className="flex flex-wrap h-auto justify-center gap-2 p-2 bg-gray-100">
                {allTechs.map(tech => (
                  <TabsTrigger 
                    key={tech}
                    value={tech}
                    className={`data-[state=active]:bg-blue-600 data-[state=active]:text-white ${
                      filter === tech ? 'shadow-md' : 'shadow-sm'
                    }`}
                  >
                    {tech}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Grid de projetos */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.stack.split(' + ').map((tech, index) => (
                        <Badge 
                          key={index}
                          variant="outline"
                          className="text-blue-600 border-blue-200 bg-blue-50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-xl line-clamp-1">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/projects/${project.id}`}>
                        Ver detalhes
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="text-center py-12 max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-xl text-gray-500">
                  Nenhum projeto encontrado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Não encontramos projetos nesta categoria. Tente outro filtro.
                </CardDescription>
                <Button 
                  onClick={() => setFilter('Todos')}
                  variant="default"
                >
                  Ver todos os projetos
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Call to Action */}
          <Card className="mt-16 text-center border-0 shadow-none bg-transparent">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">
                Pronto para transformar sua ideia em realidade?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild size="lg" className="gap-2">
                <Link to="/contact">
                  <Mail className="h-4 w-4" />
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