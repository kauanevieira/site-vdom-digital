import Link from "next/link";
import Logo from "./logo";
import Menu from "./menu";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex justify-center items-center h-[72px] fixed top-0 left-0 right-0 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="w-[1400px] h-full flex items-center gap-12">
        <div className="flex items-center gap-12 mr-auto">
          <Logo />
          <Menu />
        </div>
        <Button asChild variant={"default"}><Link href="/contact">Contact</Link></Button>
      </div>
    </header>
  );
}