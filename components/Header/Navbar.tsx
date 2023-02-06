const Navbar = () => {
  const pathnames = ["#home", "#about", "#work", "#contact"];

  return (
    <nav className="w-full flex justify-center">
      <ul className="w-1/2 flex justify-around list-none lg:w-3/4 md:w-11/12 sm:hidden">
        {pathnames.map((pathname) => (
          <li
            className="text-sm text-main-font-color no-underline uppercase leading-6 tracking-widest hover:font-semibold"
            key={pathname}
          >
            <a href={pathname}>{pathname.slice(1)}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
