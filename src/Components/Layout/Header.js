import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import nameLogo from "../../Images/logo1.png";

export default function Header() {
  const currentLocation = useLocation().pathname;

  return (
    <header>
      <Link to="/"><img src={nameLogo} alt="logo" /></Link>
      <nav>
        <Link to="/projects"
        className={currentLocation === "/projects" ? "link active" : "link"}>
          Projektai
        </Link>
        <Link
          to="/"
          className="link"
        >
          Apie
        </Link>
        <Link 
            to="/" className="link">
          Susisiekti
        </Link>
       
      </nav>
    </header>
  );
}
