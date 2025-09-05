import { MenuIcon } from "lucide-react";
import MenuItem from "./menu-item";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

export default function Menu() {
  const menuItems = [
    { title: "Home", url: "/" },
    { title: "Sobre", url: "/about" },
    { title: "Serviços", url: "/services" },
    { title: "Contato", url: "/contact" },
  ]

  return (
    <>
      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="icon">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Menu de Navegação</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4 mt-8">
            {menuItems.map((item) => (
              <MenuItem key={item.url} title={item.title} url={item.url} />
            ))}
            <Button asChild className="mt-4">
              <a href="/contact">Entre em contato</a>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-4 w-full">
        <nav className="flex justify-center items-center gap-4">
          {menuItems.map((item) => (
            <MenuItem key={item.url} title={item.title} url={item.url} />
          ))}
        </nav>
        <Button asChild className="ml-auto">
          <a href="/contact">Entre em contato</a>
        </Button>
      </div>
    </>
  )
}