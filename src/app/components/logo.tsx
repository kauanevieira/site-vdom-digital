import Link from "next/link";
import { IconCircleFilled, IconSquare } from "@tabler/icons-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative w-10 h-10 flex justify-center items-center rotate-45">
        <IconSquare stroke={3} size={40} className="text-muted-foreground absolute"/>
        <IconSquare stroke={5} size={20} className="text-secondary absolute"/>
        <IconCircleFilled size={10} className="text-primary absolute"/>
      </div>
      <span className="font-black text-xl bg-clip-text text-transparent bg-gradient-to-b from-secondary to-muted-foreground">
        Minha APP
      </span>
    </Link>
  );
}