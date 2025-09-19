import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2"
    >
      <span className="font-black text-xl bg-clip-text text-transparent bg-gradient-to-b from-secondary to-muted-foreground">
        VDOM
      </span>
    </Link>
  );
}
