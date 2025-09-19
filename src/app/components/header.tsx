import Logo from './logo';
import Menu from './menu';

export default function Header() {
  return (
    <header className="flex justify-center items-center h-[64px] fixed top-0 left-0 right-0 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="w-[1400px] h-full flex items-center gap-12 px-4 md:px-6 justify-between">
        <Logo />
        <Menu />
      </div>
    </header>
  );
}
