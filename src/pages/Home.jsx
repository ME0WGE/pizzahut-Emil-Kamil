import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Panier from "../components/panier/Panier";
import PizzaCard from "../components/pizza-card/Pizza-card";
import {
  removeFromPanier,
  increaseQuantity,
  decreaseQuantity,
} from "../features/PanierSlice/PanierSlice";

export default function Home() {
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
            <Panier />
          </div>

          <div className="footer">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
}
