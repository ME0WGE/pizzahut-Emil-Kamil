import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

export default function Checkout() {
  const panier = useSelector((state) => state.panier);
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");

  const calculateTotal = () => {
    const subtotal = panier.reduce(
      (total, item) => total + item.prix * item.quantite,
      0
    );
    return isCouponApplied ? (subtotal * 0.9).toFixed(2) : subtotal.toFixed(2);
  };

  const handleCoupon = () => {
    if (coupon.toLowerCase() === "promo10") {
      setIsCouponApplied(true);
      setCouponError("");
    } else {
      setIsCouponApplied(false);
      setCouponError("Code promo invalide");
    }
  };

  const handleFinalize = () => {
    navigate("/thank-you");
  };

  return (
    <div className="checkout-container">
      <h1>Récapitulatif de votre commande</h1>

      <div className="order-details">
        <h2>Articles commandés</h2>
        {panier.map((item, index) => (
          <div key={index} className="order-item">
            <div className="item-info">
              <h3>{item.nom}</h3>
              <p>Quantité: {item.quantite}</p>
            </div>
            <span className="item-price">
              €{(item.prix * item.quantite).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <div className="coupon-section">
        <h2>Avez-vous un code promo ?</h2>
        <div className="coupon-input">
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Entrez votre code promo"
          />
          <button className="apply-coupon" onClick={handleCoupon}>
            Appliquer
          </button>
        </div>
        {couponError && <p className="coupon-error">{couponError}</p>}
        {isCouponApplied && (
          <p className="coupon-success">
            Code promo de 10% appliqué avec succès!
          </p>
        )}
      </div>

      <div className="order-summary">
        {isCouponApplied && (
          <div className="subtotal-line">
            <span>Sous-total</span>
            <span className="subtotal-amount">
              €
              {panier
                .reduce((total, item) => total + item.prix * item.quantite, 0)
                .toFixed(2)}
            </span>
          </div>
        )}
        {isCouponApplied && (
          <div className="discount-line">
            <span>Réduction (10%)</span>
            <span className="discount-amount">
              -€
              {(
                panier.reduce(
                  (total, item) => total + item.prix * item.quantite,
                  0
                ) * 0.1
              ).toFixed(2)}
            </span>
          </div>
        )}
        <div className="total-line">
          <span>Total</span>
          <span className="total-amount">€{calculateTotal()}</span>
        </div>
      </div>

      <button onClick={handleFinalize} className="finalize-button">
        Finaliser la commande
      </button>
    </div>
  );
}
