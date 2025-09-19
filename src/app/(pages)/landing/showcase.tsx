import { 
  ExternalLink, 
  Star,
  Award
} from 'lucide-react';

export default function Showcase() {
  const projects = [
    {
      title: 'E-commerce Moderno',
      category: 'Loja Virtual',
      description: 'Plataforma completa de vendas com integração de pagamento e gestão de estoque',
      image: '🛒',
      metrics: {
        performance: '95',
        users: '10k+',
        growth: '+150%'
      },
      tags: ['Next.js', 'Stripe', 'PostgreSQL']
    },
    {
      title: 'App Delivery',
      category: 'Mobile App',
      description: 'Aplicativo de delivery com rastreamento em tempo real e pagamento integrado',
      image: '🚚',
      metrics: {
        performance: '98',
        users: '5k+',
        growth: '+200%'
      },
      tags: ['React Native', 'Firebase', 'Maps API']
    },
    {
      title: 'Dashboard Analytics',
      category: 'Web App',
      description: 'Painel administrativo com análise de dados e relatórios em tempo real',
      image: '📊',
      metrics: {
        performance: '96',
        users: '2k+',
        growth: '+120%'
      },
      tags: ['React', 'D3.js', 'Node.js']
    },
    {
      title: 'Site Institucional',
      category: 'Website',
      description: 'Website corporativo otimizado para SEO com CMS personalizado',
      image: '🏢',
      metrics: {
        performance: '99',
        users: '15k+',
        growth: '+80%'
      },
      tags: ['Next.js', 'Strapi', 'Tailwind']
    },
    {
      title: 'Plataforma SaaS',
      category: 'Web Platform',
      description: 'Sistema de gestão empresarial com múltiplos módulos integrados',
      image: '⚙️',
      metrics: {
        performance: '94',
        users: '3k+',
        growth: '+300%'
      },
      tags: ['TypeScript', 'PostgreSQL', 'Redis']
    },
    {
      title: 'App Financeiro',
      category: 'Fintech',
      description: 'Aplicativo de controle financeiro pessoal com IA para recomendações',
      image: '💰',
      metrics: {
        performance: '97',
        users: '8k+',
        growth: '+180%'
      },
      tags: ['Flutter', 'Python', 'TensorFlow']
    }
  ];

  const testimonials = [
    {
      quote: "A VDOM transformou completamente nossa presença digital. O resultado superou todas as expectativas!",
      author: "Maria Silva",
      company: "TechStart",
      role: "CEO"
    },
    {
      quote: "Profissionalismo e qualidade excepcionais. Nosso e-commerce nunca performou tão bem.",
      author: "João Santos", 
      company: "CommerceMax",
      role: "CTO"
    },
    {
      quote: "Entrega rápida, código limpo e suporte excepcional. Recomendo sem hesitar!",
      author: "Ana Costa",
      company: "InnovaCorp",
      role: "Product Manager"
    }
  ];

  return (
    <section className="py-20 lg:py-32">
      {/* Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mb-8">
          <Award className="w-4 h-4 text-purple-500 mr-2" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Projetos de Destaque
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
          A escolha certa quando{' '}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            a qualidade importa
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Para <span className="font-semibold text-blue-600 dark:text-blue-400">performance</span>, <span className="font-semibold text-purple-600 dark:text-purple-400">eficiência</span> e <span className="font-semibold text-green-600 dark:text-green-400">experiência do desenvolvedor</span>.
          <br />Projetos que fazem a diferença no mercado digital.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:-translate-y-2"
          >
            {/* Project Image/Icon */}
            <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center text-6xl">
              {project.image}
            </div>

            <div className="p-6">
              {/* Category Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium mb-3">
                {project.category}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div className="text-center">
                  <div className="text-sm font-bold text-green-600 dark:text-green-400">{project.metrics.performance}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Performance</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-blue-600 dark:text-blue-400">{project.metrics.users}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Usuários</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-purple-600 dark:text-purple-400">{project.metrics.growth}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Crescimento</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Project Link */}
              <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm group-hover:gap-2 transition-all">
                Ver projeto
                <ExternalLink className="w-4 h-4 ml-1 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          O que nossos clientes dizem
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role} • {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-3xl p-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-6">
          <ExternalLink className="w-8 h-8" />
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Quer ver mais do nosso trabalho?
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Explore nosso portfólio completo com mais de 50 projetos desenvolvidos para clientes de diversos segmentos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            Ver Portfólio Completo
            <ExternalLink className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 rounded-xl transition-all duration-300">
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
}
