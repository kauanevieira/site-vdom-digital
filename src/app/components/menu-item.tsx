import Link from 'next/link';

export interface MenuItemProps {
  title: string;
  url: string;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link href={props.url}>
      <span className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm">
        {props.title}
      </span>
    </Link>
  );
}
