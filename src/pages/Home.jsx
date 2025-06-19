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
          <div className="titre">
            <hr />
            <p>Pizza</p>
            <hr />
          </div>
          <div className="content">
            <div className="card-container">
              <PizzaCard /> 
          </div>
            <Panier/>
          </div>
          
          <div className="footer">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
}
