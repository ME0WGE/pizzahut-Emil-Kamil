import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./Thankyou.css";
import { useDispatch } from "react-redux";
import { clearPanier } from "../features/PanierSlice/PanierSlice";

export default function Thankyou() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="thankyou-container">
        <div className="thankyou-card">
          <div className="check-circle">
            <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
          </div>
          <h2>Commande Confirmée</h2>
          <p>Votre commande sera livrée dans les plus brefs délais</p>
          <p className="invoice-link">Voir votre facture</p>
          <Link
            to="/"
            className="go-home-btn"
            onClick={() => dispatch(clearPanier())}>
            Retourner à l'accueil
          </Link>
        </div>
      </div>
    </>
  );
}
