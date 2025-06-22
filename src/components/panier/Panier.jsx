import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Panier.css";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromPanier,
} from "../../features/PanierSlice/PanierSlice";
import { Link, useNavigate } from "react-router-dom";

export default function Panier() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );
  const panier = useSelector((state) => state.panier);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

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

  if (isMobile) {
    return (
      <div style={{ width: "100%" }}>
        <Link
          to="/panier-mobile"
          className={panier.length === 0 ? "disabled-link" : ""}>
          <button
            className={`button-commander ${
              panier.length === 0 ? "disabled" : ""
            }`}
            disabled={panier.length === 0}>
            <div className="commander">
              <span className="quantité">{calculatequantite(panier)}</span>
              <span>Commander</span>
              <span>{calculateTotal()} €</span>
            </div>
          </button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="panier-container">
        <h2 className="panier-titre">Panier d'achat</h2>
        <div className="panier-pizza-container">
          {panier.length === 0 ? (
            <p className="vide">Votre panier est vide</p>
          ) : (
            panier.map((item, index) => (
              <div className="pizza-info-container" key={index}>
                <div className="pizza-header">
                  <div className="pizza-info">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h4 style={{ marginBottom: "0" }}>{item.nom}</h4>
                      <span
                        style={{
                          fontSize: "13px",
                          color: "#888",
                          marginBottom: "2px",
                        }}>
                        Medium Classic
                      </span>
                      {item.ingr && Object.values(item.ingr).includes(0) && (
                        <div style={{ fontSize: "15px" }}>
                          <span>
                            <span className="sans-ingredients">sans </span>
                            {Object.entries(item.ingr)
                              .filter(([_, x]) => x === 0)
                              .map(([ing]) => ing)
                              .join(", ")}
                          </span>
                        </div>
                      )}
                    </div>
                    <h6 className="panier-prix">€{item.prix.toFixed(2)}</h6>
                  </div>
                </div>
                <div className="changements-pizza">
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDecreaseQuantity(item.id)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </span>
                  <h6 className="counter">{item.quantite || 1}</h6>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => handleIncreaseQuantity(item.id)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                  <h6
                    className="modif"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      navigate(`/customise/${item.nom}?editId=${item.id}`)
                    }>
                    Modifier
                  </h6>
                  <h6
                    className="supr"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleRemoveItem(item.id)}>
                    Supprimer
                  </h6>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="total">
          <h3>Total</h3>
          <h6 className="panier-prix">€{calculateTotal()}</h6>
        </div>
        <Link
          to="/checkout"
          className={panier.length === 0 ? "disabled-link" : ""}>
          <button
            className={`button-commander ${
              panier.length === 0 ? "disabled" : ""
            }`}
            disabled={panier.length === 0}>
            <div className="commander">
              <span className="quantité">{calculatequantite(panier)}</span>
              <span>Commander</span>
              <span>{calculateTotal()} €</span>
            </div>
          </button>
        </Link>
      </div>
    </>
  );
}
