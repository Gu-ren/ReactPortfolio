import "./Navbar.css";
import Logo from "../images/portfolioLogo (4).svg";
function Navbar() {
  return (
    <header>
      <img data-aos="fade-down" data-aos-duration="2000" src={Logo} />
    </header>
  );
}

export default Navbar;
