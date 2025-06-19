<div className="panier-container" style={{ width: "25%" }}>
  <h2>Votre Panier</h2>
  {panier.length === 0 ? (
    <p>Votre panier est vide</p>
  ) : (
    <div>
      {panier.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #eee",
            padding: "10px 0",
          }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={item.image}
              alt={item.nom}
              style={{
                width: "50px",
                height: "50px",
                marginRight: "10px",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>{item.nom}</span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}>
                <button
                  onClick={() => handleDecreaseQuantity(index)}
                  style={{
                    width: "24px",
                    height: "24px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    background: "#f5f5f5",
                    cursor: "pointer",
                  }}>
                  -
                </button>
                <span style={{ margin: "0 5px" }}>
                  Qty: {item.quantite || 1}
                </span>
                <button
                  onClick={() => handleIncreaseQuantity(index)}
                  style={{
                    width: "24px",
                    height: "24px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    background: "#f5f5f5",
                    cursor: "pointer",
                  }}>
                  +
                </button>
                <button
                  onClick={() => handleRemoveItem(index)}
                  style={{
                    marginLeft: "8px",
                    padding: "3px 8px",
                    background: "#C8102E",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}>
                  Remove
                </button>
              </div>
            </div>
          </div>
          <span style={{ fontWeight: "bold" }}>
            €{(item.prix * (item.quantite || 1)).toFixed(2)}
          </span>
        </div>
      ))}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          fontWeight: "bold",
        }}>
        <span>Total:</span>
        <span>€{calculateTotal()}</span>
      </div>
    </div>
  )}
</div>;
