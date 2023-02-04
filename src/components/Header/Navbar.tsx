const Navbar = () => {
  const pathnames = ["#home", "#about", "#work", "#contact"];

  return (
    <nav className="navbar">
      <ul>
        {pathnames.map((pathname) => (
          <li className="navbar__link--text" key={pathname}>
            <a href={pathname}>{pathname.slice(1)}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
