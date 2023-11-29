import "./Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import nameLogo from "../../Images/logo1.png";

export default function Header() {
  const currentLocation = useLocation().pathname;
  const navigate = useNavigate();
  
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  const handleClickBottom = () => {
    navigate('/portfolio');
    setTimeout(scrollToBottom, 100);
  };
  const handleClickTop = () => {
    
    setTimeout(scrollToTop, 100);
  };

  return (
    <header>
    <Link to="/portfolio"><img src={nameLogo} onClick={handleClickTop} alt="logo" /></Link>
    <nav>
      <Link to="/portfolio/projects" onClick={handleClickTop}
      className={currentLocation === "/portfolio/projects" ? "link active" : "link"}>
        Projektai
      </Link>
      <Link
        to="/portfolio"
        className="link"
        onClick={handleClickTop}
      >
        Apie
      </Link>
      <Link 
          to="/portfolio" className="link" onClick={handleClickBottom}>
        Susisiekti
      </Link>
     
    </nav>
  </header>
  );
}


