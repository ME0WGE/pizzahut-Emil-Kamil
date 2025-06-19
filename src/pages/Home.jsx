import { useSelector } from "react-redux";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import PizzaCard from "../components/pizza-card/Pizza-card";

export default function Home() {
  const panier = useSelector((state) => state.panier);

  return (
    <>
      <Navbar />
      <section id="pizza">
        <div className="container">
          <div className="titre">
            <hr />
            <p>Pizza</p>
            <hr />
          </div>
          <div className="card-container" style={{ display: "flex" }}>
            <PizzaCard />

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
                        <span>{item.nom}</span>
                      </div>
                      <span style={{ fontWeight: "bold" }}>€{item.prix}</span>
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
                    <span>
                      €
                      {panier
                        .reduce((total, item) => total + item.prix, 0)
                        .toFixed(2)}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
}
