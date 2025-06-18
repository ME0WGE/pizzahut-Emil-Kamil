import { Link } from "react-router-dom";
import data from "../../data.json";
import "./pizzaCard.css";

export default function PizzaCard() {
  return (
    <div className="pizza-container">
      {data.map((pizza, index) => (
        <div className="card" key={index}>
          <img className="pizza-img" src={pizza.image} alt={pizza.nom} />
          <div className="card-body">
            <h5 className="card-title">{pizza.nom}</h5>
            <p className="card-text">{pizza.description}</p>
          </div>
          <div className="card-footer">
            <p className="card-prix">
              à partir de <span className="prix">€{pizza.prix}</span>
            </p>
            <a href="#">+</a>
          </div>
        </div>
      ))}
    </div>
  );
}
