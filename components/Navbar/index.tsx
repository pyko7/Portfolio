import Link from "next/link";

const Navbar = () => {
  const pathnames = ["home", "work", "contact"];

  return (
    <nav className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
      <ul className="w-full flex items-center justify-center gap-20 list-none md:gap-10 sm:hidden">
        {pathnames.map((pathname) => (
          <li
            className="text-sm text-main-font-color no-underline uppercase leading-6 tracking-widest hover:font-semibold"
            key={pathname}
          >
            <Link href={pathname === "home" ? "/" : pathname}>{pathname}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
