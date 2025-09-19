import Link from 'next/link';

export interface MenuItemProps {
  title: string;
  url: string;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link href={props.url}>
      <span className="relative px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group">
        {props.title}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
      </span>
    </Link>
  );
}
