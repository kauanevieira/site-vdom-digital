import {
  Code2,
  Smartphone,
  Palette,
  Shield,
  TrendingUp,
  Zap,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Award,
  Target,
  Database,
  Cloud,
  Search,
  ShoppingCart,
  Layers
} from 'lucide-react';

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Code2,
      title: "Desenvolvimento Web",
      subtitle: "Sites e aplicações web modernas",
      description: "Criamos sites e aplicações web responsivas, rápidas e otimizadas usando as tecnologias mais modernas do mercado.",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Sites institucionais responsivos",
        "Aplicações web (SPA/PWA)",
        "Sistemas de gestão personalizados",
        "APIs REST e GraphQL",
        "Integração com serviços externos",
        "Otimização de performance"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js"],
      startingPrice: "A partir de R$ 2.500"
    },
    {
      icon: Smartphone,
      title: "Desenvolvimento Mobile",
      subtitle: "Apps para iOS e Android",
      description: "Desenvolvemos aplicativos móveis nativos e híbridos com foco em performance, usabilidade e experiência do usuário.",
      color: "from-purple-500 to-pink-500",
      features: [
        "Apps nativos iOS/Android",
        "Aplicativos híbridos",
        "Publicação nas lojas",
        "Push notifications",
        "Integração com APIs",
        "Offline-first architecture"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      startingPrice: "A partir de R$ 8.000"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      subtitle: "Design centrado no usuário",
      description: "Criamos interfaces intuitivas e experiências memoráveis através de pesquisa, prototipagem e testes com usuários.",
      color: "from-orange-500 to-red-500",
      features: [
        "Research e personas",
        "Wireframes e protótipos",
        "Design de interfaces",
        "Design System",
        "Testes de usabilidade",
        "Otimização de conversão"
      ],
      technologies: ["Figma", "Adobe XD", "Principle", "Hotjar"],
      startingPrice: "A partir de R$ 1.800"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      subtitle: "Lojas virtuais completas",
      description: "Desenvolvemos lojas virtuais otimizadas para conversão com integração de pagamento, gestão de estoque e analytics.",
      color: "from-green-500 to-emerald-500",
      features: [
        "Lojas virtuais responsivas",
        "Integração com gateways de pagamento",
        "Gestão de produtos e estoque",
        "Sistema de cupons e promoções",
        "Relatórios e analytics",
        "SEO e otimização para conversão"
      ],
      technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
      startingPrice: "A partir de R$ 5.000"
    }
  ];

  const additionalServices = [
    {
      icon: Search,
      title: "SEO & Marketing Digital",
      description: "Otimização para mecanismos de busca e estratégias de marketing digital.",
      features: ["SEO On-page/Off-page", "Google Ads", "Analytics", "Content Marketing"]
    },
    {
      icon: Shield,
      title: "Segurança & Hosting",
      description: "Hospedagem segura e monitoramento 24/7 dos seus projetos.",
      features: ["SSL Certificate", "CDN", "Backup automático", "Monitoring"]
    },
    {
      icon: Cloud,
      title: "Consultoria em Cloud",
      description: "Migração e otimização de infraestrutura na nuvem.",
      features: ["AWS/Azure/GCP", "DevOps", "CI/CD", "Microservices"]
    },
    {
      icon: Database,
      title: "Integração de Sistemas",
      description: "Conectamos seus sistemas existentes com novas soluções.",
      features: ["APIs REST/GraphQL", "Webhooks", "ETL", "Sincronização"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planejamento",
      description: "Entendemos seu negócio, objetivos e requisitos técnicos para criar a estratégia ideal.",
      icon: Target
    },
    {
      step: "02",
      title: "Design & Prototipagem",
      description: "Criamos wireframes e protótipos interativos para validar a solução antes do desenvolvimento.",
      icon: Palette
    },
    {
      step: "03",
      title: "Desenvolvimento",
      description: "Desenvolvemos sua solução usando metodologias ágeis com entregas incrementais.",
      icon: Code2
    },
    {
      step: "04",
      title: "Testes & Otimização",
      description: "Realizamos testes rigorosos e otimizações para garantir performance e qualidade.",
      icon: CheckCircle
    },
    {
      step: "05",
      title: "Deploy & Lançamento",
      description: "Colocamos sua solução no ar com segurança e monitoramento contínuo.",
      icon: Zap
    },
    {
      step: "06",
      title: "Suporte & Manutenção",
      description: "Oferecemos suporte contínuo e atualizações para manter sua solução sempre atual.",
      icon: Shield
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Metodologias ágeis para entregas incrementais e feedback contínuo."
    },
    {
      icon: Award,
      title: "Qualidade Garantida",
      description: "Código limpo, testes automatizados e documentação completa."
    },
    {
      icon: Users,
      title: "Suporte Dedicado",
      description: "Time especializado disponível para suporte e manutenção."
    },
    {
      icon: TrendingUp,
      title: "Foco em Resultados",
      description: "Soluções pensadas para gerar impacto real no seu negócio."
    }
  ];

  return (
    <div className="min-h-screen w-full max-w-[1400px] mx-auto px-4 md:px-6">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mb-8">
          <Layers className="w-4 h-4 text-blue-500 mr-2" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Nossos Serviços
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
          <span className="block">Soluções Digitais</span>
          <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Sob Medida
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
          Oferecemos uma gama completa de serviços digitais para{' '}
          <span className="font-semibold text-blue-600 dark:text-blue-400">transformar</span>{' '}
          sua ideia em uma{' '}
          <span className="font-semibold text-purple-600 dark:text-purple-400">solução de sucesso</span>.
        </p>
      </section>

      {/* Main Services */}
      <section className="py-20 lg:py-32">
        <div className="space-y-20">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Content */}
              <div className="lg:w-1/2 space-y-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} text-white`}>
                  <service.icon className="w-8 h-8" />
                </div>

                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h2>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies & Price */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {service.startingPrice}
                  </span>
                  <button className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group`}>
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Visual */}
              <div className="lg:w-1/2">
                <div className={`aspect-square bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center text-white text-8xl shadow-2xl`}>
                  <service.icon className="w-32 h-32" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50 -mx-4 md:-mx-6 px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Serviços{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Complementares
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Oferecemos também uma gama de serviços especializados para completar sua estratégia digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {additionalServices.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-6">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Nosso{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Processo
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Uma metodologia testada que garante entregas de qualidade e resultados excepcionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((step, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                {step.step}
              </div>

              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-6">
                <step.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50 -mx-4 md:-mx-6 px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Por que escolher a{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              VDOM Digital?
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Pronto para começar seu projeto?
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e vamos discutir como podemos ajudar a transformar sua ideia em realidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white hover:bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              Solicitar Orçamento
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
