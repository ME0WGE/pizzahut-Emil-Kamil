import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Panier from "../components/panier/Panier";
import PizzaCard from "../components/pizza-card/Pizza-card";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="pizza">
        <div className="container">
          <div className="content-layout">
            <div className="main-content">
              <div className="titre">
                <hr />
                <p>Pizza</p>
                <hr />
              </div>
              <div className="card-section">
                <PizzaCard />
              </div>
            </div>

            <div className="sidebar">
              <Panier />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
