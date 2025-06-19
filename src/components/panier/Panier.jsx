import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Panier.css";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromPanier,
} from "../../features/PanierSlice/PanierSlice";

export default function Panier() {
  const panier = useSelector((state) => state.panier);
  const dispatch = useDispatch();

  const handleRemoveItem = (index) => {
    dispatch(removeFromPanier(index));
  };

  const handleIncreaseQuantity = (index) => {
    dispatch(increaseQuantity(index));
  };

  const handleDecreaseQuantity = (index) => {
    dispatch(decreaseQuantity(index));
  };

  const calculateTotal = () => {
    return panier
      .reduce((total, item) => total + item.prix * item.quantite, 0)
      .toFixed(2);
  };

  return (
    <>
      <div className="panier-container">
        <h2 className="panier-titre">Panier d'achat</h2>
        <div className="panier-pizza-container">
          {/* Pizza Item */}
          {panier.length === 0 ? (
            <p>Votre panier est vide</p>
          ) : (
            panier.map((item, index) => (
              <div className="pizza-info-container" key={index}>
                <div className="pizza-info">
                  <h4>{item.nom}</h4>
                  <h6 className="panier-prix">€{item.prix}</h6>
                </div>

                <div className="changements-pizza">
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDecreaseQuantity(index)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </span>
                  <h6 className="counter">{item.quantite || 1}</h6>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => handleIncreaseQuantity(index)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                  <h6 className="modif" style={{ cursor: "pointer" }}>
                    Modifier
                  </h6>
                  <h6
                    className="supr"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleRemoveItem(index)}>
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
      </div>
    </>
  );
}
