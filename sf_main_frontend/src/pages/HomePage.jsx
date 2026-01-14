import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/authContext';
import background from '../assets/background.png';

export default function HomePage() {
  const { isAuthenticated, user } = useAuth();
  return (
    <div className="homepage">
      <div className="homepage-content">
        <motion.div
          className="homepage-hero-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-glass-content">
            <h1 className="homepage-title animate-text-shimmer">
              {isAuthenticated ? `Welcome, ${user?.name || 'User'}!` : 'Welcome'}
            </h1>
            <p className="homepage-subtitle">The mystical journey begins</p>

            <div className="homepage-actions">
              {isAuthenticated ? (
                <Link to="/dashboard" className="homepage-btn homepage-btn-primary">
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link to="/signin" className="homepage-btn homepage-btn-primary">
                    Sign In
                  </Link>
                  <Link to="/signup" className="homepage-btn homepage-btn-secondary">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </motion.div>

        {/* Social Handles */}
        <motion.div
          className="homepage-socials"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a href="https://www.facebook.com/springfest.iitkgp" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/springfest.iitkgp" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/springfest_kgp" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/company/spring-fest-iit-kharagpur" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.youtube.com/user/SpringFestVideo" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-youtube"></i>
          </a>
        </motion.div>
      </div>

      <style>{`
        .homepage {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url(${background});
          background-size: cover;
          background-position: center;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        .homepage-content {
          text-align: center;
          width: 100%;
          max-width: 900px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .homepage-hero-container {
          width: 100%;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
        }

        .hero-glass-content {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(56, 189, 248, 0.2);
          border-radius: 24px;
          padding: 4rem;
          max-width: 600px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .homepage-title {
          font-size: clamp(2rem, 8vw, 3.5rem);
          font-weight: 700;
          color: transparent;
          margin-bottom: 0.5rem;
          font-family: 'Cinzel Decorative', serif;
          background: linear-gradient(to right,
            #fff 30%,
            #7dd3fc 50%,
            #fff 70%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          letter-spacing: 2px;
          line-height: 1.2;
        }

        .animate-text-shimmer {
          animation: shimmer 3s linear infinite;
        }

        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }

        .homepage-subtitle {
          font-size: clamp(1rem, 3vw, 1.3rem);
          color: #e2e8f0;
          margin-bottom: 2.5rem;
          font-family: 'Cinzel', serif;
          letter-spacing: 1px;
          font-weight: 600;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .homepage-actions {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .homepage-btn {
          padding: 0.8rem 2.5rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          font-family: 'Cinzel', serif;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .homepage-btn-primary {
          background: #0ea5e9;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 14px 0 rgba(14, 165, 233, 0.39);
        }

        .homepage-btn-primary:hover {
          background: #0284c7;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(14, 165, 233, 0.5);
        }

        .homepage-btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: #bae6fd;
          border: 1px solid rgba(186, 230, 253, 0.2);
          backdrop-filter: blur(4px);
        }

        .homepage-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: #bae6fd;
          transform: translateY(-2px);
        }

        /* Socials */
        .homepage-socials {
          display: flex;
          gap: 1.5rem;
          margin-top: 1rem;
        }

        .social-link {
          color: #7dd3fc;
          font-size: 1.5rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(15, 23, 42, 0.4);
          border: 1px solid rgba(125, 211, 252, 0.2);
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .social-link:hover {
          color: white;
          transform: translateY(-5px);
          border-color: rgba(125, 211, 252, 0.6);
          background: rgba(125, 211, 252, 0.15);
          box-shadow: 0 10px 25px rgba(14, 165, 233, 0.3);
        }

        @media (max-width: 768px) {
          .hero-glass-content {
            padding: 2.5rem 1.5rem;
          }
          
          .homepage-hero-container {
            padding: 1rem;
          }
          
          .homepage-title {
            font-size: 2.2rem;
          }

          .homepage-subtitle {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .homepage-hero-scroll {
            min-height: 350px;
            padding: 2.5rem 1.5rem;
          }

          .homepage-title {
            font-size: 1.8rem;
          }

          .homepage-socials {
            gap: 1rem;
          }

          .social-link {
            width: 40px;
            height: 40px;
            font-size: 1.25rem;
          }

          .homepage-actions {
            flex-direction: column;
            width: 100%;
            gap: 1rem;
          }

          .homepage-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}