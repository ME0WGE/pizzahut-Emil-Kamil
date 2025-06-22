import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { decreaseQuantity, increaseQuantity, removeFromPanier } from "../features/PanierSlice/PanierSlice";
import { Link, useNavigate } from "react-router-dom";
import "./PanierMobile.css";

export default function PanierMobile() {
  const panier = useSelector((state) => state.panier);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveItem = (index) => {
    dispatch(removeFromPanier(index));
  };
  const handleIncreaseQuantity = (index) => {
    dispatch(increaseQuantity(index));
  };
  const handleDecreaseQuantity = (index) => {
    dispatch(decreaseQuantity(index));
  };
  const calculatequantite = (array) => {
    return array.reduce((a, b) => a + b.quantite, 0);
  };
  const calculateTotal = () => {
    return panier
      .reduce((total, item) => total + item.prix * item.quantite, 0)
      .toFixed(2);
  };

  return (
    <div className="panier-mobile-main">
      <h2 className="panier-mobile-title">Votre panier</h2>
      <div className="panier-mobile-list">
        {panier.length === 0 ? (
          <p className="panier-mobile-vide">Votre panier est vide</p>
        ) : (
          panier.map((item, index) => (
            <div className="panier-mobile-item" key={index}>
              <div className="panier-mobile-header">
                <div className="panier-mobile-info">
                  <h4>{item.nom}</h4>
                  {item.ingr && Object.values(item.ingr).includes(0) && (
                    <div style={{ fontSize: "15px" }}>
                      <span>
                        <span className="panier-mobile-sans">sans </span>
                        {Object.entries(item.ingr)
                          .filter(([_, x]) => x === 0)
                          .map(([ing]) => ing)
                          .join(", ")}
                      </span>
                    </div>
                  )}
                </div>
                <h6 className="panier-mobile-prix">€{item.prix.toFixed(2)}</h6>
              </div>
              <div className="panier-mobile-actions">
                <span onClick={() => handleDecreaseQuantity(index)}>
                  <FontAwesomeIcon icon={faMinus} />
                </span>
                <h6 className="panier-mobile-counter">{item.quantite || 1}</h6>
                <span onClick={() => handleIncreaseQuantity(index)}>
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                <h6
                  className="panier-mobile-modif"
                  onClick={() => navigate(`/customise/${item.nom}`)}>
                  Modifier
                </h6>
                <h6
                  className="panier-mobile-supr"
                  onClick={() => handleRemoveItem(index)}>
                  Supprimer
                </h6>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="panier-mobile-total">
        <h3>Total</h3>
        <h6 className="panier-mobile-prix">€{calculateTotal()}</h6>
      </div>
      <div className="panier-mobile-btn-container">
        <Link
          to="/checkout"
          className={panier.length === 0 ? "disabled-link" : ""}
          style={{ width: "100%" }}
        >
          <button
            className={`panier-mobile-btn ${panier.length === 0 ? "disabled" : ""}`}
            disabled={panier.length === 0}
          >
            <div className="panier-mobile-btn-content">
              <span className="panier-mobile-quantite">{calculatequantite(panier)}</span>
              <span>Commander</span>
              <span>{calculateTotal()} €</span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}