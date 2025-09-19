import { 
  Award, 
  Users, 
  Target, 
  Heart,
  Code2,
  Palette,
  Smartphone,
  Globe,
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react';

export default function AboutPage() {
  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Clientes Atendidos",
      description: "Empresas que confiam no nosso trabalho"
    },
    {
      icon: Award,
      number: "100+",
      label: "Projetos Entregues",
      description: "Soluções digitais desenvolvidas com sucesso"
    },
    {
      icon: Star,
      number: "5.0",
      label: "Avaliação Média",
      description: "Baseada no feedback dos nossos clientes"
    },
    {
      icon: Target,
      number: "3+",
      label: "Anos de Experiência",
      description: "Construindo soluções digitais inovadoras"
    }
  ];

  const values = [
    {
      icon: Code2,
      title: "Excelência Técnica",
      description: "Utilizamos as melhores tecnologias e práticas de desenvolvimento para garantir código limpo, escalável e performático."
    },
    {
      icon: Users,
      title: "Foco no Cliente",
      description: "Cada projeto é desenvolvido pensando nas necessidades específicas do cliente e na experiência do usuário final."
    },
    {
      icon: Target,
      title: "Resultados Mensuráveis",
      description: "Nosso compromisso é entregar soluções que geram impacto real no crescimento do seu negócio."
    },
    {
      icon: Heart,
      title: "Paixão pelo que Fazemos",
      description: "Amamos desenvolvimento e design, e isso se reflete na qualidade de cada projeto que entregamos."
    }
  ];

  const timeline = [
    {
      year: "2021",
      title: "Início da Jornada",
      description: "Fundação da VDOM Digital com foco em desenvolvimento web moderno e experiência do usuário."
    },
    {
      year: "2022",
      title: "Expansão de Serviços",
      description: "Adição de desenvolvimento mobile e design UI/UX ao portfólio de serviços."
    },
    {
      year: "2023",
      title: "Crescimento Sustentável",
      description: "Alcançamos a marca de 50+ clientes atendidos e implementamos metodologias ágeis."
    },
    {
      year: "2024",
      title: "Inovação Contínua",
      description: "Introdução de IA e automação em nossos processos, mantendo sempre a qualidade."
    }
  ];

  const team = [
    {
      name: "João Silva",
      role: "Founder & Full Stack Developer",
      bio: "Especialista em React, Node.js e arquitetura de sistemas. Apaixonado por criar soluções que fazem a diferença.",
      avatar: "👨‍💻"
    },
    {
      name: "Maria Santos",
      role: "UI/UX Designer",
      bio: "Designer com foco em experiência do usuário e interfaces intuitivas. Especialista em Design Systems.",
      avatar: "👩‍🎨"
    },
    {
      name: "Pedro Costa",
      role: "Mobile Developer",
      bio: "Desenvolvedor especializado em React Native e Flutter. Focado em performance e usabilidade mobile.",
      avatar: "👨‍📱"
    }
  ];

  return (
    <div className="min-h-screen w-full max-w-[1400px] mx-auto px-4 md:px-6">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mb-8">
            <Heart className="w-4 h-4 text-red-500 mr-2" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Nossa História
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
            <span className="block">Sobre a</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              VDOM Digital
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Somos uma equipe apaixonada por tecnologia, dedicada a transformar ideias em{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">soluções digitais</span>{' '}
            que geram{' '}
            <span className="font-semibold text-purple-600 dark:text-purple-400">resultados reais</span>{' '}
            para nossos clientes.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group"
              >
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
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
              Nossa{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Missão
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Democratizar o acesso à tecnologia de qualidade, ajudando empresas de todos os tamanhos 
              a alcançarem seus objetivos através de soluções digitais inovadoras e eficientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-6">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
              Nossa{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Trajetória
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Uma jornada de crescimento contínuo, sempre focada em inovação e excelência.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 transform md:-translate-x-0.5"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform md:-translate-x-1/2 z-10"></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
              Conheça nosso{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Time
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Profissionais especializados unidos pela paixão em criar soluções digitais excepcionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-6xl mb-6">{member.avatar}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <div className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                  {member.role}
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Pronto para trabalhar conosco?
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Vamos conversar sobre como podemos ajudar a transformar suas ideias em uma solução digital de sucesso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white hover:bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                Começar Projeto
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white/30 hover:border-white/50 hover:bg-white/10 rounded-xl transition-all duration-300">
                Nosso Portfólio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
