import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  User,
  Building,
  FileText,
  CheckCircle,
  Github,
  Linkedin,
  Instagram,
  ArrowRight,
  Zap,
  Calendar,
  Globe,
  Shield,
  Award
} from 'lucide-react';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@vdomdigital.com",
      description: "Resposta em até 2 horas",
      href: "mailto:contato@vdomdigital.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (11) 99999-9999",
      description: "Seg-Sex: 9h às 18h",
      href: "tel:+5511999999999",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+55 (11) 99999-9999",
      description: "Resposta imediata",
      href: "https://wa.me/5511999999999",
      color: "from-green-400 to-green-600"
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "São Paulo, SP - Brasil",
      description: "Atendimento presencial",
      href: "https://maps.google.com",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/vdomdigital",
      color: "hover:bg-gray-900"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/company/vdomdigital",
      color: "hover:bg-blue-600"
    },
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://instagram.com/vdomdigital",
      color: "hover:bg-pink-500"
    }
  ];

  const services = [
    { name: "Desenvolvimento Web", value: "web" },
    { name: "Desenvolvimento Mobile", value: "mobile" },
    { name: "UI/UX Design", value: "design" },
    { name: "E-commerce", value: "ecommerce" },
    { name: "Consultoria", value: "consulting" },
    { name: "Outro", value: "other" }
  ];

  const budgetRanges = [
    { name: "R$ 2.000 - R$ 5.000", value: "2k-5k" },
    { name: "R$ 5.000 - R$ 10.000", value: "5k-10k" },
    { name: "R$ 10.000 - R$ 25.000", value: "10k-25k" },
    { name: "R$ 25.000 - R$ 50.000", value: "25k-50k" },
    { name: "Acima de R$ 50.000", value: "50k+" },
    { name: "Vamos conversar", value: "discuss" }
  ];

  const faqs = [
    {
      question: "Qual o prazo médio de entrega?",
      answer: "O prazo varia conforme a complexidade do projeto. Sites simples: 2-4 semanas, E-commerce: 4-8 semanas, Apps: 8-16 semanas."
    },
    {
      question: "Vocês oferecem suporte pós-entrega?",
      answer: "Sim! Oferecemos 3 meses de suporte gratuito após a entrega, incluindo correções de bugs e pequenos ajustes."
    },
    {
      question: "Como funciona o processo de pagamento?",
      answer: "Trabalhamos com 50% na aprovação do projeto e 50% na entrega. Para projetos maiores, dividimos em etapas."
    },
    {
      question: "Vocês trabalham com empresas de outros estados?",
      answer: "Sim! Atendemos clientes de todo o Brasil. Nosso processo é 100% digital e muito eficiente."
    }
  ];

  return (
    <div className="min-h-screen w-full max-w-[1400px] mx-auto px-4 md:px-6">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm mb-8">
          <MessageCircle className="w-4 h-4 text-green-500 mr-2" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Vamos Conversar
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
          <span className="block">Entre em</span>
          <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Contato Conosco
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
          Pronto para transformar sua ideia em uma{' '}
          <span className="font-semibold text-blue-600 dark:text-blue-400">solução digital</span>{' '}
          de sucesso? Vamos{' '}
          <span className="font-semibold text-purple-600 dark:text-purple-400">conversar</span>!
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <info.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {info.title}
              </h3>
              <p className="text-gray-900 dark:text-white font-semibold mb-1">
                {info.value}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {info.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Conte-nos sobre seu{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  projeto
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Preencha o formulário abaixo e nossa equipe entrará em contato em até 2 horas úteis.
              </p>
            </div>

            <form className="space-y-6">
              {/* Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nome completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300"
                      placeholder="Seu nome"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    E-mail *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Telefone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Empresa
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Tipo de serviço *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {services.map((service) => (
                    <label
                      key={service.value}
                      className="relative flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-xl cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300"
                    >
                      <input
                        type="radio"
                        name="service"
                        value={service.value}
                        className="sr-only"
                      />
                      <div className="w-4 h-4 border-2 border-gray-300 dark:border-gray-600 rounded-full mr-3 flex-shrink-0 relative">
                        <div className="w-2 h-2 bg-blue-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {service.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Orçamento estimado
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300">
                  <option value="">Selecione uma faixa</option>
                  {budgetRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Descrição do projeto *
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <textarea
                    required
                    rows={6}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all duration-300 resize-none"
                    placeholder="Conte-nos mais sobre seu projeto, objetivos, funcionalidades desejadas, prazos, etc."
                  ></textarea>
                </div>
              </div>

              {/* Urgency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Urgência do projeto
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { value: 'low', label: 'Sem pressa', desc: 'Posso esperar alguns meses' },
                    { value: 'medium', label: 'Moderada', desc: 'Gostaria em 1-2 meses' },
                    { value: 'high', label: 'Urgente', desc: 'Preciso o quanto antes' }
                  ].map((urgency) => (
                    <label
                      key={urgency.value}
                      className="relative flex flex-col p-4 border border-gray-300 dark:border-gray-600 rounded-xl cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300"
                    >
                      <input
                        type="radio"
                        name="urgency"
                        value={urgency.value}
                        className="sr-only"
                      />
                      <div className="flex items-center mb-1">
                        <div className="w-4 h-4 border-2 border-gray-300 dark:border-gray-600 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {urgency.label}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 ml-7">
                        {urgency.desc}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
              >
                Enviar mensagem
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Ao enviar, você concorda com nossa política de privacidade
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Why Choose Us */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Por que nos escolher?
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Zap,
                    title: "Resposta Rápida",
                    description: "Respondemos em até 2 horas úteis"
                  },
                  {
                    icon: Shield,
                    title: "Projeto Seguro",
                    description: "NDA assinado para proteger sua ideia"
                  },
                  {
                    icon: Award,
                    title: "Qualidade Garantida",
                    description: "3 meses de suporte gratuito incluído"
                  },
                  {
                    icon: Calendar,
                    title: "Prazos Cumpridos",
                    description: "98% dos projetos entregues no prazo"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Siga-nos nas redes
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Horário de atendimento
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Segunda - Sexta</span>
                  <span className="font-semibold text-gray-900 dark:text-white">9h às 18h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Sábado</span>
                  <span className="font-semibold text-gray-900 dark:text-white">9h às 14h</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Domingo</span>
                  <span className="text-gray-500 dark:text-gray-400">Fechado</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-700 dark:text-green-400">
                    Online agora
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50 -mx-4 md:-mx-6 px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Perguntas{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tire suas dúvidas mais comuns sobre nossos serviços e processo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Prefere falar diretamente conosco?
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Agende uma conversa gratuita de 30 minutos para discutir seu projeto sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511999999999"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-green-600 bg-white hover:bg-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+5511999999999"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white/30 hover:border-white/50 hover:bg-white/10 rounded-xl transition-all duration-300"
            >
              <Phone className="mr-2 w-5 h-5" />
              Ligar Agora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
