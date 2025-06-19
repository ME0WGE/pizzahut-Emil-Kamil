import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-disclaimer">
          <p>
            Ce site est une reproduction éducative du site pizzahut.be réalisée
            par
            <strong> Emil et Kamil</strong> dans le cadre de la formation de
            Développement Web à<strong> MolenGeek</strong>.
          </p>
          <p>
            Ce projet est développé uniquement à des fins d'apprentissage et
            n'est pas affilié officiellement à Pizza Hut.
          </p>
        </div>

        <div className="footer-credits">
          <p>© 2025 | Projet Redux</p>
          <p>
            Le design original, les logos et marques appartiennent à leurs
            propriétaires respectifs. Aucune utilisation commerciale n'est
            prévue.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/">Accueil</Link>
          <Link to="https://github.com/ME0WGE/pizzahut-Emil-Kamil">
            À propos du projet
          </Link>
          <Link
            to="https://molengeek.com"
            target="_blank"
            rel="noopener noreferrer">
            MolenGeek
          </Link>
        </div>
      </div>
    </footer>
  );
}
