import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home-screen">
            <div className="logo-container">
                <h1 className="mc-logo">ARNOVIS MONTERO</h1>
            </div>
            <div className="splash-text">Automation & Full Stack Dev!</div>
            <div className="menu-buttons">
                <Link to="/about" className="mc-button">Skills & Tools</Link>
                <Link to="/projects" className="mc-button">Projects</Link>
                <Link to="/contact" className="mc-button">Contact</Link>
                <a
                    href="https://github.com/ArnovisM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mc-button"
                >
                    Options
                </a>
            </div>
        </div>
    );
}

export default Home;
