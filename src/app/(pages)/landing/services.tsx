import { 
  Code2, 
  Palette, 
  Smartphone, 
  Zap, 
  Globe, 
  Shield, 
  TrendingUp, 
  Users,
  ArrowRight
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Desenvolvimento Web',
      description: 'Sites e aplicações web modernas com tecnologias de ponta',
      features: ['React & Next.js', 'TypeScript', 'API Integration', 'Performance']
    },
    {
      icon: Smartphone,
      title: 'Apps Mobile',
      description: 'Aplicativos nativos e híbridos para iOS e Android',
      features: ['React Native', 'Flutter', 'App Store Deploy', 'Push Notifications']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Design centrado no usuário para experiências incríveis',
      features: ['Figma', 'Prototyping', 'User Research', 'Design System']
    },
    {
      icon: Globe,
      title: 'E-commerce',
      description: 'Lojas virtuais completas com integração de pagamento',
      features: ['Shopify', 'WooCommerce', 'Payment Gateway', 'Inventory']
    },
    {
      icon: Shield,
      title: 'Segurança & Hosting',
      description: 'Hospedagem segura e otimizada para alta performance',
      features: ['SSL Certificate', 'CDN', 'Backup', 'Monitoring']
    },
    {
      icon: TrendingUp,
      title: 'SEO & Analytics',
      description: 'Otimização para mecanismos de busca e análise de dados',
      features: ['Google Analytics', 'Search Console', 'Performance', 'Reports']
    }
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
          O que oferecemos para o seu{' '}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            sucesso digital?
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Tudo que você precisa para construir uma presença digital de alto impacto
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
              <service.icon className="w-6 h-6" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {service.description}
            </p>

            {/* Features List */}
            <ul className="space-y-2 mb-6">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></div>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Hover Arrow */}
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-12 border border-gray-200 dark:border-gray-600">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-6">
          <Users className="w-8 h-8" />
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Pronto para transformar sua ideia em realidade?
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Junte-se a dezenas de empresas que já confiam em nossos serviços para criar soluções digitais de alta qualidade.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            Começar Projeto
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 rounded-xl transition-all duration-300">
            Ver Portfólio
          </button>
        </div>
      </div>
    </section>
  );
}
