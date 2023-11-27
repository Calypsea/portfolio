import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import nameLogo from "../../Images/logo1.png";

export default function Header() {
  const currentLocation = useLocation().pathname;

  return (
    <header>
    <Link to="/portfolio"><img src={nameLogo} alt="logo" /></Link>
    <nav>
      <Link to="/portfolio/projects"
      className={currentLocation === "/portfolio/projects" ? "link active" : "link"}>
        Projektai
      </Link>
      <Link
        to="/portfolio"
        className="link"
      >
        Apie
      </Link>
      <Link 
          to="/portfolio" className="link">
        Susisiekti
      </Link>
     
    </nav>
  </header>
  );
}


