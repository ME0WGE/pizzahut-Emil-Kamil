import data from "../../data.json";
import "./pizzaCard.css";

import { useDispatch } from "react-redux";
import { addToPanier } from "../../features/PanierSlice/PanierSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function PizzaCard() {
  const dispatch = useDispatch();

 

  return (
    <div className="pizza-container">
      {data.map((pizza, index) => (
        <div
          className="card"
          key={index}
          >
          <Link className="lien" to={`/customise/${pizza.nom}`}>
            <img className="pizza-img" src={pizza.image} alt={pizza.nom} />
            <div className="card-body">
              <h5 className="card-title">{pizza.nom}</h5>
              <p className="card-text">{pizza.description}</p>
            </div>
            <div className="card-footer">
              <p className="card-prix">
                à partir de{" "}
                <span className="prix">€{pizza.prix.toFixed(2)}</span>
              </p>

              <button className="add-btn">
                <FontAwesomeIcon icon={faPlus} className="plus" />
              </button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
