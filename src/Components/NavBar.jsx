
import { Link, useLocation } from "react-router-dom";
import copyright from "../../Assets/Images/copyright.png"
import { useEffect, useState } from "react";

export default function NavBar() {
    const [currentPath, setCurrentPath] = useState('');
    const location = useLocation();

    useEffect(() => {
        setCurrentPath(location.pathname);
      }, [location.pathname]);

  return (
  
        <nav className="navbar navbar-expand-sm fixed-top bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={copyright} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
                    CIRCLE
                </Link>               
                <div className="navbar-nav">
                    <Link id="nav-home" className="nav-link" to="/" aria-current={currentPath === '/home' ? 'home page' : undefined}>Home</Link>
                    <Link id="nav-play" className="nav-link" to="/play" aria-current={currentPath === '/play' ? 'play page' : undefined}>Play</Link>
                    <Link id="nav-Result" className="nav-link" to="/result" aria-current={currentPath === '/result' ? 'result page' : undefined}>Result</Link>
                    <Link id="nav-Stats" className="nav-link" to="/stats" aria-current={currentPath === '/stats' ? 'stats page' : undefined}>Stats</Link>
                </div>
            </div>
        </nav>
  );
}
