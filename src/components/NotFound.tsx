import { Briefcase, Mail, Home } from 'lucide-react';
import './NotFound.css';

interface NotFoundProps {
  onNavigateHome?: () => void;
}

const NotFound: React.FC<NotFoundProps> = ({ onNavigateHome }) => {
  return (
    <main className="not-found-container" role="main">
      <div className="not-found-card">
        <span className="not-found-badge">ERR_404 // ROUTE_NOT_FOUND</span>
        <h1 className="not-found-glitch">404</h1>
        <h2 className="not-found-title">Looks like this page took a wrong turn.</h2>
        <p className="not-found-desc">
          The request endpoint does not exist or has been relocated within the architecture. Use the links below to return to standard navigation.
        </p>

        <div className="not-found-actions">
          <a
            href="/"
            onClick={(e) => {
              if (onNavigateHome) {
                e.preventDefault();
                onNavigateHome();
              }
            }}
            className="btn-primary"
            aria-label="Return to Homepage"
          >
            <Home size={18} /> Back to Home
          </a>

          <a href="/#projects" className="btn-secondary" aria-label="Explore Projects">
            <Briefcase size={18} /> View Projects
          </a>

          <a href="/#contact" className="btn-secondary" aria-label="Get in Contact">
            <Mail size={18} /> Contact Direct
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
