import Logo from "./Logo";
import Navbar from "./Header/Navbar";
import SkipNavigation from "./Header/SkipNavigation";

const Header = () => {
  return (
    <header>
      <SkipNavigation />
      <div className="navbar__button_container navbar__button_container--left_side">
        <Logo />
      </div>
      <Navbar />

      <div className="navbar__button_container navbar__button_container--right_side">
        <a className="navbar__link--text" href="/assets/CV_Henry_Julien.pdf" target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
    </header>
  );
};

export default Header;
