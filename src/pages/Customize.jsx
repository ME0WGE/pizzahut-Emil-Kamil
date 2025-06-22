import { Link, useNavigate, useParams } from "react-router-dom";
import data from "../data.json";
import "./Customize.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronLeft,
  faMinus,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";

import { useState, useEffect } from "react";
import { addToPanier } from "../features/PanierSlice/PanierSlice";

export default function Customize() {
  const [quantites, setQuantites] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const { id } = useParams();
  const dispatch = useDispatch();
  const pizza = data.find((item) => item.nom === id);
  const panier = useSelector((state) => state.panier);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!pizza) {
    return <div>Pizza non trouvée</div>;
  }

  const ingredients = pizza.ingredients;

  // Initialiser les quantités à 1 pour chaque ingrédient au premier rendu
  useEffect(() => {
    const initial = {};
    ingredients.forEach((item) => {
      initial[item] = 1;
    });
    setQuantites(initial);
  }, [pizza]);

  const calculateTotal = () => {
    return panier
      .reduce((total, item) => total + item.prix * item.quantite, 0)
      .toFixed(2);
  };

  const handleAddToPanier = (e, pizza) => {
    e.preventDefault();
    dispatch(
      addToPanier({
        nom: pizza.nom,
        prix: pizza.prix,
        image: pizza.image,
        id: Date.now(),
        ingr: quantites,
      })
    );
    navigate("/");
  };

  const changeQuantite = (item, nb) => {
    setQuantites((prev) => ({
      ...prev,
      [item]: Math.max(0, Math.min(2, (prev[item] ?? 1) + nb)),
    }));
  };

  return (
    <>
      <section id="customize">
        {/* Barre mobile */}
        {isMobile ? (
          <div className="custom-mobile-bar">
            <div className="custom-mobile-title">{pizza.nom}</div>
            <button
              className="custom-mobile-close"
              onClick={() => navigate("/")}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        ) : (
          <Link to="/" className="retour">
            <FontAwesomeIcon className="fleche" icon={faChevronLeft} />
            <p>Retour</p>
          </Link>
        )}

        <div className="customize-container">
          <div className="customize-image">
            <img
              className="customize-image"
              src={pizza.image}
              alt={pizza.nom}
            />
          </div>
          <div className="pizza-customize">
            <div className="custom-header">
              <h1>{pizza.nom}</h1>
              <p>€{pizza.prix.toFixed(2)} </p>
            </div>

            <p className="description">{pizza.description} </p>
            <div className="supplements">
              <div className="ingredients">
                <h3>Ingrédients</h3>
                <ul style={{ listStyle: "none" }}>
                  {ingredients.map((ing) => (
                    <li className="ingredient" key={ing}>
                      <p className="ingr-nom">{ing}</p>
                      <div className="custom-modif">
                        <span onClick={() => changeQuantite(ing, -1)}>
                          <FontAwesomeIcon icon={faMinus} />
                        </span>
                        <p className="count">{quantites[ing] ?? 1}</p>
                        <span onClick={() => changeQuantite(ing, 1)}>
                          <FontAwesomeIcon icon={faPlus} />
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              className="button-ajout"
              onClick={(e) => handleAddToPanier(e, pizza)}>
              <div className="ajouter">
                <span>Ajouter au panier</span>
                <span>€{pizza.prix.toFixed(2)}</span>
              </div>
            </button>
          </div>

          <div className="custom-panier-container">
            <h2 className="custom-panier-titre">Panier d'achat</h2>
            <div className="custom-panier-pizza-container">
              {panier.length === 0 ? (
                <p className="vide">Votre panier est vide</p>
              ) : (
                panier.map((item, index) => (
                  <div className="custom-pizza-info-container" key={index}>
                    <div className="pizza-info">
                      <h4 style={{ fontSize: "15px" }}>{item.nom}</h4>
                      <h6 style={{ fontSize: "14px" }} className="panier-prix">
                        €{item.prix.toFixed(2)}
                      </h6>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="custom-total">
              <h3>Total</h3>
              <h6 className="panier-prix">€{calculateTotal()}</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
