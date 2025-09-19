import {
  ExternalLink,
  Github,
  Eye,
  Star,
  Users,
  TrendingUp,
  Award,
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
      <section className="py-20 text-center lg:py-32">
        <div className="inline-flex items-center px-4 py-2 mb-8 border border-gray-200 rounded-full dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <Award className="w-4 h-4 mr-2 text-purple-500" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Nosso Portfólio
          </span>
        </div>

        <h1 className="mb-6 text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
          <span className="block">Projetos que</span>
          <span className="block text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text">
            Fazem a Diferença
          </span>
        </h1>

        <p className="max-w-4xl mx-auto mb-12 text-lg leading-relaxed text-gray-600 sm:text-xl lg:text-2xl dark:text-gray-300">
          Explore nossa coleção de{' '}
          <span className="font-semibold text-blue-600 dark:text-blue-400">projetos inovadores</span>{' '}
          que transformaram negócios e{' '}
          <span className="font-semibold text-purple-600 dark:text-purple-400">geraram resultados</span>{' '}
          excepcionais para nossos clientes.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 mb-16 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 text-white transition-transform duration-300 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-110">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                {stat.number}
              </div>
              <div className="mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
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
              className="inline-flex items-center px-6 py-3 transition-all duration-300 bg-white border border-gray-200 rounded-xl dark:bg-gray-800 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 group"
            >
              <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {category.name}
              </span>
              <span className="px-2 py-1 ml-2 text-xs text-gray-600 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-black text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            Projetos em{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text">
              Destaque
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 sm:text-xl dark:text-gray-300">
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
                  <div className="absolute inset-0 transition-colors duration-300 bg-black/20 group-hover:bg-black/10"></div>
                  <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                    {project.image}
                  </span>
                  <div className="absolute flex gap-2 bottom-4 right-4">
                    {project.liveUrl && (
                      <button className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    )}
                    {project.githubUrl && (
                      <button className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30">
                        <Github className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-6 lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r ${getCategoryColor(project.category)} text-white`}>
                    {(() => {
                      const Icon = getCategoryIcon(project.category);
                      return <Icon className="w-4 h-4" />;
                    })()}
                  </div>
                  <span className="text-sm font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                </div>

                <div>
                  <h3 className="mb-2 text-3xl font-bold text-gray-900 lg:text-4xl dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-lg font-semibold text-blue-600 dark:text-blue-400">
                    {project.client}
                  </p>
                  <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
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
                      className="px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
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
                      <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:scale-110" />
                    </button>
                  )}
                  {project.githubUrl && (
                    <button className="inline-flex items-center px-6 py-3 font-medium text-gray-700 transition-all duration-300 border border-gray-300 dark:border-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800">
                      <Github className="w-4 h-4 mr-2" />
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
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-black text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            Mais{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text">
              Projetos
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {regularProjects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden transition-all duration-500 bg-white border border-gray-200 shadow-lg group dark:bg-gray-800 rounded-2xl hover:shadow-2xl dark:border-gray-700 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className={`aspect-video bg-gradient-to-br ${getCategoryColor(project.category)} flex items-center justify-center text-6xl text-white relative`}>
                {project.image}
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 text-xs font-medium text-white rounded-full bg-black/20 backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>
                <div className="absolute flex gap-2 transition-opacity duration-300 opacity-0 top-4 right-4 group-hover:opacity-100">
                  {project.liveUrl && (
                    <button className="flex items-center justify-center w-8 h-8 text-white transition-colors rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30">
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  )}
                  {project.githubUrl && (
                    <button className="flex items-center justify-center w-8 h-8 text-white transition-colors rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30">
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
                  <span className="text-xs font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">
                    {project.category}
                  </span>
                </div>

                {/* Title & Client */}
                <h3 className="mb-1 text-xl font-bold text-gray-900 transition-colors dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {project.title}
                </h3>
                <p className="mb-3 text-sm font-medium text-blue-600 dark:text-blue-400">
                  {project.client}
                </p>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300 line-clamp-3">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 p-3 mb-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
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
                      className="px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded-md dark:bg-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-500 bg-gray-100 rounded-md dark:bg-gray-700 dark:text-gray-400">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* View Project Link */}
                <button className="flex items-center text-sm font-medium text-blue-600 transition-all dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group-hover:gap-2">
                  Ver projeto
                  <Eye className="w-4 h-4 ml-1 transition-transform group-hover:scale-110" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="p-12 text-center text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-white/20 backdrop-blur-sm">
            <Zap className="w-8 h-8" />
          </div>
          <h3 className="mb-4 text-2xl font-bold lg:text-3xl">
            Pronto para criar o próximo projeto de destaque?
          </h3>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-blue-100">
            Vamos trabalhar juntos para transformar sua ideia em uma solução digital que gere resultados excepcionais.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 transition-all duration-300 bg-white shadow-lg hover:bg-gray-100 rounded-xl hover:shadow-xl group">
              Iniciar Projeto
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-300 border-2 border-white/30 hover:border-white/50 hover:bg-white/10 rounded-xl">
              Falar com Especialista
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
