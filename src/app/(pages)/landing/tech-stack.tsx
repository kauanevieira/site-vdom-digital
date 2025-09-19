import {
  Code2,
  Database,
  Palette,
  Smartphone,
  Zap,
  Shield,
  Cloud
} from 'lucide-react';

export default function TechStack() {
  const technologies = [
    {
      category: 'Frontend',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      items: [
        {
          name: 'React',
          description: 'Biblioteca para interfaces de usuário modernas e reativas',
          logo: '⚛️'
        },
        {
          name: 'Next.js',
          description: 'Framework React para aplicações web de produção',
          logo: '▲'
        },
        {
          name: 'TypeScript',
          description: 'JavaScript tipado para desenvolvimento mais seguro',
          logo: '📘'
        }
      ]
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      items: [
        {
          name: 'React Native',
          description: 'Apps nativos multiplataforma com React',
          logo: '📱'
        },
        {
          name: 'Flutter',
          description: 'Framework do Google para apps móveis performáticos',
          logo: '💙'
        },
        {
          name: 'Expo',
          description: 'Plataforma para desenvolvimento React Native',
          logo: '⚡'
        }
      ]
    },
    {
      category: 'Backend',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      items: [
        {
          name: 'Node.js',
          description: 'JavaScript no servidor para APIs escaláveis',
          logo: '🟢'
        },
        {
          name: 'PostgreSQL',
          description: 'Banco de dados relacional robusto e confiável',
          logo: '🐘'
        },
        {
          name: 'MongoDB',
          description: 'Banco NoSQL flexível para aplicações modernas',
          logo: '🍃'
        }
      ]
    },
    {
      category: 'Design',
      icon: Palette,
      color: 'from-orange-500 to-red-500',
      items: [
        {
          name: 'Figma',
          description: 'Design colaborativo e prototipagem avançada',
          logo: '🎨'
        },
        {
          name: 'Tailwind CSS',
          description: 'Framework CSS utilitário para designs únicos',
          logo: '💨'
        },
        {
          name: 'Framer Motion',
          description: 'Animações fluidas e interações envolventes',
          logo: '🎭'
        }
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900/50">
        <div className="absolute inset-0"
             style={{
               backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.1) 1px, transparent 0)',
               backgroundSize: '20px 20px'
             }}>
        </div>
      </div>

      <div className="relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Construído com base em{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              tecnologias de ponta
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Utilizamos as melhores ferramentas e frameworks do mercado para garantir{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">performance</span>,{' '}
            <span className="font-semibold text-purple-600 dark:text-purple-400">escalabilidade</span> e{' '}
            <span className="font-semibold text-green-600 dark:text-green-400">manutenibilidade</span> em todos os projetos.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r ${tech.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {tech.category}
                </h3>
              </div>

              {/* Tech Items */}
              <div className="space-y-6">
                {tech.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-start space-x-4 group/item hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl p-4 -m-4 transition-all duration-300"
                  >
                    <div className="text-2xl">{item.logo}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="group">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime garantido</div>
            </div>
            <div className="group">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Projetos seguros</div>
            </div>
            <div className="group">
              <div className="flex items-center justify-center mb-4">
                <Cloud className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Suporte disponível</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
