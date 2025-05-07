import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/app/components/ui/pagination";
import { Calendar, User, Dumbbell } from "lucide-react";
import Header from '@/app/components/header/Header'

const blogs = [
  {
    id: 1,
    title: "Treinar até a falha: 5 motivos para adotar essa técnica",
    excerpt: "Treinar até a falha (quando você não consegue executar mais repetições com boa forma) pode ser uma estratégia útil em certos contextos. Abaixo estão 5 motivos pelos quais alguns atletas ou praticantes de musculação adotam essa técnica.",
    category: "Técnicas",
    author: "Gleidson Cuba",
    date: "28 Abr 2025",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
  },
  {
    id: 2,
    title: "Dicas para potencializar seus resultados",
    excerpt: "Cuidar do seu corpo não é luxo, é prioridade. Descubra estratégias comprovadas para maximizar seus ganhos e otimizar seu desempenho físico.",
    category: "Dicas",
    author: "Allan Nutricionista",
    date: "25 Abr 2025",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
  },
  {
    id: 3,
    title: "Treino longo e moderado ou curto e intenso?",
    excerpt: "Qual abordagem de treino é mais eficiente para seus objetivos? Analisamos os prós e contras de cada método para ajudar você a tomar a melhor decisão.",
    category: "Metodologia",
    author: "Gleidson Cuba",
    date: "20 Abr 2025",
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
  },
  {
    id: 4,
    title: "Treino ao ar livre: transforme qualquer lugar em academia",
    excerpt: "Transforme parques, praças, ou qualquer lugar aberto em seu novo 'gym'. Dicas e exercícios completos para treinar com eficiência sem precisar de equipamentos sofisticados.",
    category: "Treino Outdoor",
    author: "Gleidson Cuba",
    date: "15 Abr 2025",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
  }
];

const Blogs = () => {
  return (
    <section id="blog" className="section-padding bg-mainBlue">
      <Header/>
      <div className="container mx-auto px-4">
        <div className="text-center mt-20 max-w-3xl mx-auto mb-16">
          <div className="text-white uppercase tracking-wider font-semibold mb-2">Conhecimento & Dicas</div>
          <h2 className="text-4xl font-bold text-mainRed mb-6">Blog Fitness</h2>
          <p className="text-gray-400 text-lg">
            Artigos, dicas e conteúdos exclusivos para ajudar você a atingir seus objetivos com saúde e conhecimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Card key={blog.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-mainRed text-white text-sm font-semibold py-1 px-3 rounded-full">
                  {blog.category}
                </span>
              </div>
              
              <CardHeader>
                <CardTitle className="text-white transition-colors">
                  <a href={`/blog/${blog.id}`}>{blog.title}</a>
                </CardTitle>
                <CardDescription className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={14} />
                    {blog.author}
                  </span>
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-400">{blog.excerpt}</p>
              </CardContent>
              
              <CardFooter>
                <Button variant="link" className="text-cuba-red p-0 hover:text-red-700">
                  <a href={`/blog/${blog.id}`} className="flex items-center gap-2">
                    Ler mais <span className="text-lg">→</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Button className="bg-mainRed hover:bg-red-700 text-white">
            Ver Todos os Artigos
          </Button>
        </div>
        
        <div className="mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        
        <div className="mt-16 bg-mainColor rounded-xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="bg-cuba-red p-4 rounded-full text-white">
                <Dumbbell size={32} />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Inscreva-se na Nossa Newsletter</h3>
              <p className="text-gray-600 mb-4">Receba dicas, programas de treinamento e novidades diretamente no seu email</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cuba-red"
                />
                <Button className="bg-mainRed hover:bg-red-700 text-white">
                  Inscrever-se
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;