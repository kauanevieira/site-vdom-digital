import Link from 'next/link';
import { 
  Code2, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Instagram,
  Heart
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Serviços',
      links: [
        { name: 'Desenvolvimento Web', href: '/services/web' },
        { name: 'Apps Mobile', href: '/services/mobile' },
        { name: 'UI/UX Design', href: '/services/design' },
        { name: 'E-commerce', href: '/services/ecommerce' },
        { name: 'Consultoria', href: '/services/consulting' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Sobre Nós', href: '/about' },
        { name: 'Portfólio', href: '/portfolio' },
        { name: 'Processo', href: '/process' },
        { name: 'Carreira', href: '/careers' },
        { name: 'Blog', href: '/blog' }
      ]
    },
    {
      title: 'Recursos',
      links: [
        { name: 'Documentação', href: '/docs' },
        { name: 'Suporte', href: '/support' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Tutoriais', href: '/tutorials' },
        { name: 'Status', href: '/status' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Política de Privacidade', href: '/privacy' },
        { name: 'Termos de Uso', href: '/terms' },
        { name: 'Cookies', href: '/cookies' },
        { name: 'LGPD', href: '/lgpd' }
      ]
    }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      {/* Newsletter Section */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 w-24 h-24 border border-white/30 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-32 h-32 border border-white/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Dicas exclusivas de desenvolvimento
              </h3>
              <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
                Receba tutoriais avançados, tendências do mercado e insights de desenvolvimento web que não compartilhamos em lugar nenhum.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Seu e-mail profissional"
                  className="flex-1 px-4 py-3 rounded-xl text-gray-900 border-0 focus:ring-2 focus:ring-white/50 outline-none placeholder-gray-500"
                />
                <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2">
                  Quero receber
                  <Mail className="w-4 h-4" />
                </button>
              </div>
              <p className="text-sm text-blue-200 mt-4">
                📧 Enviamos apenas conteúdo de qualidade • 🚫 Sem spam
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-black text-xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                VDOM
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Transformamos ideias em soluções digitais de alta qualidade. 
              Especializados em desenvolvimento web, mobile e design de experiência.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>contato@vdomdigital.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 group"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 group"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 group"
              >
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
              © {currentYear} VDOM Digital. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
              Feito com
              <Heart className="w-4 h-4 text-red-500 fill-current mx-1" />
              em São Paulo
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
