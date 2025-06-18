import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
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
          <div className="card-container">
            <PizzaCard />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
}
