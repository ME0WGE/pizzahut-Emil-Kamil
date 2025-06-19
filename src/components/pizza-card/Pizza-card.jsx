import data from "../../data.json";
import "./pizzaCard.css";
import { useDispatch } from "react-redux";
import { addToPanier } from "../../features/PanierSlice/PanierSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function PizzaCard() {
  const dispatch = useDispatch();

  const handleAddToPanier = (pizza) => {
    dispatch(
      addToPanier({
        nom: pizza.nom,
        prix: pizza.prix,
        image: pizza.image,
        id: Date.now(),
      })
    );
  };

  const handleClick = (e, pizza) => {
    e.stopPropagation();
    handleAddToPanier(pizza);
  };

  return (
    <div className="pizza-container">
      {data.map((pizza, index) => (
        <div
          className="card"
          key={index}
          onClick={(e) => handleClick(e, pizza)}>
          <img className="pizza-img" src={pizza.image} alt={pizza.nom} />
          <div className="card-body">
            <h5 className="card-title">{pizza.nom}</h5>
            <p className="card-text">{pizza.description}</p>
          </div>
          <div className="card-footer">
            <p className="card-prix">
              à partir de <span className="prix">€{pizza.prix}</span>
            </p>
            <button onClick={(e) => handleClick(e, pizza)} className="add-btn">
              <FontAwesomeIcon icon={faPlus} className="plus" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
