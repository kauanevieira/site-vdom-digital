import MenuItem from "./menu-item";

export default function Menu() {
  return (
    <nav className="flex gap-4">
      <MenuItem title="Home" url="/" />
      <MenuItem title="Sobre" url="/about" />
      <MenuItem title="Serviços" url="/services" />
      <MenuItem title="Contato" url="/contact" />
    </nav>
  )
}