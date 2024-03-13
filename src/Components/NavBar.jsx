
import { Link, useLocation } from "react-router-dom";
import circleLogo from "../../Assets/Images/circleLogo.png"
import { useEffect, useState } from "react";

export default function NavBar() {
    const [currentPath, setCurrentPath] = useState('');
    const location = useLocation();

    const homeIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
    </svg>

    const statsIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bar-chart-fill" viewBox="0 0 16 16">
    <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
    </svg>

    useEffect(() => {
        setCurrentPath(location.pathname);
      }, [location.pathname]);

  return (
  
        <nav className="navbar navbar-expand fixed-top bg-body-tertiary">
            <div className="container-lg">
                <Link className="navbar-brand" to="/">
                    <img src={circleLogo} alt="Logo" width="30" height="30" className="d-inline-block align-text-center" />
                    SQUIRCLES
                </Link>               
                <div className="navbar-nav">
                    <Link id="nav-home" className="nav-link" to="/" aria-current={currentPath === '/home' ? 'home page' : undefined}>{homeIcon}</Link>
                    <Link id="nav-play" className="nav-link align-text-center" to="/play" aria-current={currentPath === '/play' ? 'play page' : undefined}>Practice</Link>
                    <Link id="nav-stats" className="nav-link" to="/stats" aria-current={currentPath === '/stats' ? 'stats page' : undefined}>{statsIcon}</Link>
                </div>
            </div>
        </nav>
  );
}
