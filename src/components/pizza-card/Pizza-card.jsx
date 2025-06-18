import { Link } from "react-router-dom";
import data from "../../data.json";

export default function PizzaCard() {
  return (
    <>
      {data.map((pizza, index) => (
        <div className="card" key={index}>
          <div className="card-body">
            <h5 className="card-title">{pizza.nom}</h5>
            <p className="card-text">{pizza.description}</p>
            <div>
              <p className="card-prix">à partir de €{pizza.prix}</p>
              <a href="">+</a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
