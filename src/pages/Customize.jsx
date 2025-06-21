import { Link, useNavigate, useParams } from "react-router-dom";
import data from "../data.json";
import "./Customize.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronLeft,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux"; 
import { addToPanier } from "../features/panierslice/panierSlice"; 
import { useState } from "react";


export default function Customize() {
  const [quantite,setQuantite]=useState(1)
  const { id } = useParams();
  const dispatch = useDispatch(); 
  const pizza = data.find((item) => item.nom === id);
  const panier = useSelector((state) => state.panier);
  const navigate=useNavigate();
  console.log(pizza);
  console.log(id);
  console.log(panier);

  if (!pizza) {
    return <div>Pizza non trouvée</div>;
  }

  const ingredients = pizza.ingredients;
  
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
        ingr:quantite,
      })
    );
    navigate("/"); 
  };

  return (
    <>
      <section id="customize">
        <Link to="/" className="retour">
          <FontAwesomeIcon className="fleche" icon={faChevronLeft} />
          <p>Retour</p>
        </Link>

        <div className="customize-container">
          <div className="customize-image">
            <img className="customize-image" src={pizza.image} alt={pizza.nom} />
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
                  {ingredients.map((item, index) => {
                    return (
                      <div key={index}>
                        <li className="ingredient">
                          <p className="ingr-nom">{item}</p>
                          <div className="custom-modif">
                            <span onClick={()=>{quantite>0 && setQuantite(quantite-1)}}>
                              <FontAwesomeIcon icon={faMinus}  />
                            </span>
                            <p className="count">{quantite}</p>
                            <span  onClick={()=>{quantite <2 && setQuantite(quantite+1)}}>
                              <FontAwesomeIcon icon={faPlus} />
                            </span>
                          </div>
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
            
          
          
            
              <button className="button-ajout" onClick={(e) => handleAddToPanier(e, pizza)}>
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
                      <h4 style={{fontSize:"15px"}}>{item.nom}</h4>
                      <h6 style={{fontSize:"14px"}} className="panier-prix">
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