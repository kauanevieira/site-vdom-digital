import { 
  ExternalLink, 
  Github, 
  Eye,
  Star,
  Calendar,
  Users,
  TrendingUp,
  Award,
  Filter,
  Search,
  ArrowRight,
  Code2,
  Smartphone,
  Palette,
  Globe,
  ShoppingCart,
  Zap
} from 'lucide-react';

export default function PortfolioPage() {
  const categories = [
    { id: 'all', name: 'Todos os Projetos', count: 24 },
    { id: 'web', name: 'Desenvolvimento Web', count: 12 },
    { id: 'mobile', name: 'Apps Mobile', count: 8 },
    { id: 'ecommerce', name: 'E-commerce', count: 6 },
    { id: 'design', name: 'UI/UX Design', count: 10 }
  ];

  const projects = [
    {
      id: 1,
      title: "TechStore E-commerce",
      category: "ecommerce",
      description: "Loja virtual completa para venda de eletrônicos com integração de pagamento e gestão de estoque.",
      image: "🛒",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      metrics: {
        performance: 98,
        users: "15k+",
        conversion: "+250%"
      },
      year: "2024",
      client: "TechStore Brasil",
      featured: true,
      liveUrl: "https://techstore.com",
      githubUrl: "https://github.com/vdom/techstore"
    },
    {
      id: 2,
      title: "FoodDelivery App",
      category: "mobile",
      description: "Aplicativo de delivery com rastreamento em tempo real e sistema de pagamento integrado.",
      image: "🍔",
      technologies: ["React Native", "Firebase", "Maps API", "Stripe"],
      metrics: {
        performance: 96,
        users: "8k+",
        conversion: "+180%"
      },
      year: "2024",
      client: "QuickFood",
      featured: true,
      liveUrl: "https://app.quickfood.com",
      githubUrl: null
    },
    {
      id: 3,
      title: "MedCare Dashboard",
      category: "web",
      description: "Sistema de gestão hospitalar com prontuários eletrônicos e agendamento de consultas.",
      image: "🏥",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      metrics: {
        performance: 94,
        users: "2k+",
        conversion: "+120%"
      },
      year: "2024",
      client: "Hospital MedCare",
      featured: false,
      liveUrl: "https://medcare.com.br",
      githubUrl: null
    },
    {
      id: 4,
      title: "FinanceTracker Mobile",
      category: "mobile",
      description: "App de controle financeiro pessoal com IA para categorização automática de gastos.",
      image: "💰",
      technologies: ["Flutter", "Python", "TensorFlow", "PostgreSQL"],
      metrics: {
        performance: 97,
        users: "12k+",
        conversion: "+200%"
      },
      year: "2023",
      client: "FinTech Solutions",
      featured: true,
      liveUrl: "https://financetracker.app",
      githubUrl: "https://github.com/vdom/finance-tracker"
    },
    {
      id: 5,
      title: "Design System Corporate",
      category: "design",
      description: "Sistema de design completo para empresa multinacional com componentes reutilizáveis.",
      image: "🎨",
      technologies: ["Figma", "Storybook", "React", "Styled Components"],
      metrics: {
        performance: 99,
        users: "500+",
        conversion: "+80%"
      },
      year: "2023",
      client: "GlobalCorp",
      featured: false,
      liveUrl: "https://designsystem.globalcorp.com",
      githubUrl: "https://github.com/vdom/design-system"
    },
    {
      id: 6,
      title: "EduPlatform LMS",
      category: "web",
      description: "Plataforma de ensino online com videoaulas, exercícios e sistema de avaliação.",
      image: "📚",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS S3"],
      metrics: {
        performance: 95,
        users: "25k+",
        conversion: "+300%"
      },
      year: "2023",
      client: "EduTech Academy",
      featured: true,
      liveUrl: "https://eduplatform.com.br",
      githubUrl: null
    },
    {
      id: 7,
      title: "SmartHome IoT App",
      category: "mobile",
      description: "Aplicativo para controle de dispositivos inteligentes com automação residencial.",
      image: "🏠",
      technologies: ["React Native", "IoT", "MQTT", "AWS IoT"],
      metrics: {
        performance: 93,
        users: "5k+",
        conversion: "+150%"
      },
      year: "2023",
      client: "SmartTech",
      featured: false,
      liveUrl: "https://smarthome.app",
      githubUrl: null
    },
    {
      id: 8,
      title: "Marketplace B2B",
      category: "ecommerce",
      description: "Marketplace para empresas com sistema de cotações e negociação online.",
      image: "🏢",
      technologies: ["Next.js", "Microservices", "Redis", "PostgreSQL"],
      metrics: {
        performance: 96,
        users: "3k+",
        conversion: "+220%"
      },
      year: "2022",
      client: "B2B Solutions",
      featured: false,
      liveUrl: "https://b2bmarketplace.com",
      githubUrl: null
    }
  ];

  const stats = [
    {
      icon: Award,
      number: "50+",
      label: "Projetos Entregues",
      description: "Soluções desenvolvidas com sucesso"
    },
    {
      icon: Users,
      number: "30+",
      label: "Clientes Satisfeitos",
      description: "Empresas que confiam no nosso trabalho"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Avaliação Média",
      description: "Baseada no feedback dos clientes"
    },
    {
      icon: TrendingUp,
      number: "180%",
      label: "Crescimento Médio",
      description: "Aumento médio nas métricas dos clientes"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return Code2;
      case 'mobile': return Smartphone;
      case 'ecommerce': return ShoppingCart;
      case 'design': return Palette;
      default: return Globe;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'web': return 'from-blue-500 to-cyan-500';
      case 'mobile': return 'from-purple-500 to-pink-500';
      case 'ecommerce': return 'from-green-500 to-emerald-500';
      case 'design': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <div className="min-h-screen w-full max-w-[1400px] mx-auto px-4 md:px-6">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mb-8">
          <Award className="w-4 h-4 text-purple-500 mr-2" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Nosso Portfólio
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
          <span className="block">Projetos que</span>
          <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Fazem a Diferença
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
          Explore nossa coleção de{' '}
          <span className="font-semibold text-blue-600 dark:text-blue-400">projetos inovadores</span>{' '}
          que transformaram negócios e{' '}
          <span className="font-semibold text-purple-600 dark:text-purple-400">geraram resultados</span>{' '}
          excepcionais para nossos clientes.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className="inline-flex items-center px-6 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 group"
            >
              <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {category.name}
              </span>
              <span className="ml-2 px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Projetos em{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Destaque
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nossos projetos mais impactantes que geraram resultados extraordinários.
          </p>
        </div>

        <div className="space-y-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Project Visual */}
              <div className="lg:w-1/2">
                <div className={`aspect-video bg-gradient-to-br ${getCategoryColor(project.category)} rounded-3xl flex items-center justify-center text-white text-8xl shadow-2xl relative overflow-hidden group`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </span>
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    {project.liveUrl && (
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    )}
                    {project.githubUrl && (
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                        <Github className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}>
                    {(() => {
                      const Icon = getCategoryIcon(project.category);
                      return <Icon className="w-4 h-4" />;
                    })()}
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                </div>

                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    {project.client}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">
                      {project.metrics.performance}%
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Performance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      {project.metrics.users}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Usuários</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                      {project.metrics.conversion}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Crescimento</div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  {project.liveUrl && (
                    <button className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${getCategoryColor(project.category)} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group`}>
                      Ver Projeto
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                    </button>
                  )}
                  {project.githubUrl && (
                    <button className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300">
                      <Github className="mr-2 w-4 h-4" />
                      Código
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Regular Projects Grid */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Mais{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className={`aspect-video bg-gradient-to-br ${getCategoryColor(project.category)} flex items-center justify-center text-6xl text-white relative`}>
                {project.image}
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-black/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                    {project.year}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl && (
                    <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  )}
                  {project.githubUrl && (
                    <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <Github className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

              <div className="p-6">
                {/* Category */}
                <div className="flex items-center gap-2 mb-3">
                  <div className={`inline-flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}>
                    {(() => {
                      const Icon = getCategoryIcon(project.category);
                      return <Icon className="w-3 h-3" />;
                    })()}
                  </div>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>

                {/* Title & Client */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {project.client}
                </p>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="text-center">
                    <div className="text-sm font-bold text-green-600 dark:text-green-400">
                      {project.metrics.performance}%
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Perf.</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-blue-600 dark:text-blue-400">
                      {project.metrics.users}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-purple-600 dark:text-purple-400">
                      {project.metrics.conversion}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Growth</div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-md">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* View Project Link */}
                <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm group-hover:gap-2 transition-all">
                  Ver projeto
                  <Eye className="w-4 h-4 ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-6">
            <Zap className="w-8 h-8" />
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Pronto para criar o próximo projeto de destaque?
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Vamos trabalhar juntos para transformar sua ideia em uma solução digital que gere resultados excepcionais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white hover:bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              Iniciar Projeto
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white/30 hover:border-white/50 hover:bg-white/10 rounded-xl transition-all duration-300">
              Falar com Especialista
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
