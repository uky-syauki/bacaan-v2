import React from "react";
import {
  XMarkIcon,
  Bars3Icon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "Pencarian",
    icon: MagnifyingGlassIcon,
    href: "/cari-ayat",
  },
  {
    name: "Kontak",
    icon: EnvelopeIcon,
    href: "/kontak",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <a
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        rel={href ? "noopener noreferrer" : undefined}
        className="flex items-center gap-2 font-medium text-gray-600 bg-black text-base hover:text-gray-900 transition-colors"
      >
        {children}
      </a>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <nav className="border-0 sticky top-0 z-50 bg-black w-full shadow-none">
  <div className="container mx-auto flex items-center justify-between p-8">
    <a href="/" className="text-xl font-bold text-gray-500">
      Bacaan
    </a>
    <ul className="ml-10 hidden items-center gap-8 lg:flex">
      {NAV_MENU.map(({ name, icon: Icon, href }) => (
        <NavItem key={name} href={href}>
          <Icon className="h-5 w-5" />
          {name}
        </NavItem>
      ))}
    </ul>
    <button
      onClick={handleOpen}
      className="ml-auto inline-block lg:hidden text-gray-500 focus:outline-none"
    >
      {open ? (
        <XMarkIcon strokeWidth={2} className="h-6 w-6" />
      ) : (
        <Bars3Icon strokeWidth={2} className="h-6 w-6" />
      )}
    </button>
  </div>
  {open && (
    <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
      <ul className="flex flex-col gap-4">
        {NAV_MENU.map(({ name, icon: Icon }) => (
          <NavItem key={name}>
            <Icon className="h-5 w-5" />
            {name}
          </NavItem>
        ))}
      </ul>
    </div>
  )}
</nav>

  );
}

export default Navbar;
