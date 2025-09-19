import { MenuIcon, Phone } from 'lucide-react';

import MenuItem from './menu-item';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

export default function Menu() {
  const menuItems = [
    { title: 'Home', url: '/' },
    { title: 'Sobre', url: '/about' },
    { title: 'Serviços', url: '/services' },
    { title: 'Portfólio', url: '/portfolio' },
    { title: 'Contato', url: '/contact' },
  ];

  return (
    <>
      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger
          asChild
          className="lg:hidden"
        >
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            <MenuIcon className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-80">
          <SheetHeader>
            <SheetTitle className="text-left">Menu de Navegação</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-2 mt-8">
            {menuItems.map((item) => (
              <div key={item.url} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                <MenuItem
                  title={item.title}
                  url={item.url}
                />
              </div>
            ))}
            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="/contact" className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Entre em contato
                </a>
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8 w-full">
        <nav className="flex justify-center items-center gap-1">
          {menuItems.map((item) => (
            <MenuItem
              key={item.url}
              title={item.title}
              url={item.url}
            />
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Button
            variant="ghost"
            asChild
            className="text-sm font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300"
          >
            <a href="/contact">
              Fale conosco
            </a>
          </Button>
          <Button
            asChild
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <a
              href="/contact"
              className="flex items-center gap-2 text-sm font-semibold"
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Começar Projeto
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}
