interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  return (
    <a 
      href={href} 
      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
    >
      {label}
    </a>
  );
}