'use client'
import { useParams } from "next/navigation";
import Link from 'next/link'
import { Button } from "@/app/components/ui/button";
import { blogs } from "@/data/blogs";
import { ArrowLeft, Calendar, Share2, Dumbbell } from "lucide-react";
import Header from '@/app/components/header/Header'

const BlogPage = () => {
  const params = useParams();
  const blogId = params?.id as string;
  const id = Number(blogId);
  const blog = blogs.find(b => b.id === id);

  if (!blog) {
    return (
      <div className="container bg-red-600 mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-6">Artigo não encontrado</h1>
        <Button asChild className="bg-cuba-red hover:bg-red-700 text-white">
          <Link href="/blogs">Voltar para Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-white">
      <Header/>
      <div className="relative h-[40vh] md:h-[59vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 mt-10 flex items-center justify-center">
          <div className="container px-4">
            <Link 
              href="/#blog" 
              className="inline-flex items-center text-white bg-cuba-red/80 hover:bg-cuba-red px-4 py-2 rounded-full mb-6 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" /> Voltar ao Blog
            </Link>
            <span className="inline-block bg-cuba-red text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
              {blog.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl">
              {blog.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 -mt-12 relative z-30">
          {/* Main Content */}
          <div className="md:col-span-8 lg:col-span-9">
            <div className="bg-gradient-to-br text-white from-black via-red-700 to-blue-800 rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between border-b border-gray-100 pb-6 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                    <img src={blog.author.pic} className="h-full" alt={blog.author.nome} />
                  </div>
                  <div>
                    <div className="font-semibold">{blog.author.nome}</div>
                    <div className="text-sm text-gray-500 flex items-center gap-2">
                      <Calendar size={14} /> {blog.date}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: blog.title,
                        text: 'Confira este artigo no blog!',
                        url: typeof window !== 'undefined' ? window.location.href : '',
                      }).catch((error) => console.error('Erro ao compartilhar:', error));
                    } else {
                      alert('Seu navegador não suporta compartilhamento.');
                    }}}>
                    <Share2 size={18} />
                  </Button>
                </div>
              </div>
              
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-headings:font-bold prose-p:text-gray-600 prose-a:text-mainRed prose-a:no-underline hover:prose-a:underline prose-strong:text-mainRed prose-img:rounded-xl"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
              
              <div className="border-t border-gray-100 mt-12 pt-8">
                <h3 className="text-xl font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-400 hover:bg-gray-200 hover:text-black transition-colors px-3 py-1 rounded-full text-sm">
                    Fitness
                  </span>
                  <span className="bg-gray-400 hover:bg-gray-200 hover:text-black transition-colors px-3 py-1 rounded-full text-sm">
                    Treino
                  </span>
                  <span className="bg-gray-400 hover:bg-gray-200 hover:text-black transition-colors px-3 py-1 rounded-full text-sm">
                    Saúde
                  </span>
                  <span className="bg-gray-400 hover:bg-gray-200 hover:text-black transition-colors px-3 py-1 rounded-full text-sm">
                    {blog.category}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Related Posts */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-6">Artigos Relacionados</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {blogs
                  .filter(relatedBlog => relatedBlog.id !== blog.id)
                  .slice(0, 2)
                  .map(relatedBlog => (
                    <Link 
                      href={`/blog/${relatedBlog.id}`} 
                      key={relatedBlog.id}
                      className="group block"
                    >
                      <div className="bg-white rounded-xl shadow overflow-hidden hover:shadow-md transition-shadow">
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={relatedBlog.image} 
                            alt={relatedBlog.title} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                          />
                        </div>
                        <div className="p-5">
                          <h4 className="font-bold text-lg mb-2 group-hover:text-mainRed transition-colors">
                            {relatedBlog.title}
                          </h4>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar size={14} className="mr-1" /> {relatedBlog.date}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <aside className="md:col-span-4 lg:col-span-3 space-y-8">
            {/* About Author */}
            <div className="bg-gradient-to-b from-blue-900 to-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-bold mb-4 text-white">Sobre o Autor</h3>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-[72px] bg-gray-200 rounded-full overflow-hidden mb-4 flex items-center justify-center">
                  <img src={blog.author.pic} className="w-full h-full text-gray-500" alt="Cuba foto perfil" />
                </div>
                <h4 className="font-semibold text-white">{blog.author.nome}</h4>
                <p className="text-sm text-gray-700 mt-2">
                  {blog.author.nome === "Gleidson Cuba" 
                    ? "Personal Trainer com mais de 10 anos de experiência em treinamento físico e esportivo." 
                    : "Nutricionista especializado em nutrição esportiva e emagrecimento saudável."}
                </p> 
              </div>
            </div>
            
            {/* Categories */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-bold mb-4">Categorias</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex items-center justify-between group">
                    <span className="text-gray-700 group-hover:text-mainRed transition-colors">Técnicas</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">8</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between group">
                    <span className="text-gray-700 group-hover:text-mainRed transition-colors">Dicas</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">12</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between group">
                    <span className="text-gray-700 group-hover:text-mainRed transition-colors">Metodologia</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">5</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between group">
                    <span className="text-gray-700 group-hover:text-mainRed transition-colors">Treino Outdoor</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">7</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center justify-between group">
                    <span className="text-gray-700 group-hover:text-mainRed transition-colors">Nutrição</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">14</span>
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div className="bg-gray-100 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-cuba-red p-3 rounded-full text-white">
                  <Dumbbell size={20} />
                </div>
                <h3 className="text-lg font-bold">Newsletter</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Receba as últimas novidades e dicas de treino diretamente no seu email
              </p>
              <div className="space-y-3">
                <input 
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cuba-red"
                />
                <Button className="bg-cuba-red text-gray-800 hover:bg-red-700 hover:text-white w-full">
                  Inscrever-se
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-mainRed py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para transformar seu corpo e saúde?</h2>
            <p className="text-gray-600 mb-8">
              Conheça nossos planos personalizados e comece sua jornada fitness com o acompanhamento profissional que você merece!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Link className="bg-white w-[200px] h-10 rounded-xl flex justify-center items-center text-black hover:bg-mainBlue hover:text-white" href="/planos">Ver Planos</Link>
                <Link href="https://wa.me/5512981359114" className="bg-mainBlue text-white hover:text-black hover:bg-mainRed w-[200px] h-10 rounded-xl flex justify-center items-center">Falar com um Personal</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;