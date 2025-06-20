import { Link, useParams } from "react-router-dom"
import data from '../data.json'
import "./Customize.css"
import Navbar from "../components/navbar/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
import { useEffect } from "react"

export default function Customize() {
const {id}=useParams()
const pizza = data.find((item)=>item.nom ===id)
console.log(pizza);
console.log(id);
const ingredients =pizza.ingredients
const calculateTotal = () => {
    return panier
      .reduce((total, item) => total + item.prix * item.quantite, 0)
      .toFixed(2);
  };
 const panier = useSelector((state) => state.panier);
console.log(panier);

return(
    <>
    <Navbar/>
    <section id="customize">
      <div className="retour">
        <FontAwesomeIcon className="fleche" icon={faChevronLeft} />
        <p>Retour</p>
      
      </div>
       
          <div   className="customize-container">
           <div className="customize-image">
              <img className="customize-image" src={pizza.image} alt="" />
           </div>
           <div className="pizza-customize">
            <div className="custom-header">
              <h1>{pizza.nom}</h1>
              <p>€{pizza.prix.toFixed(2) } </p>
            </div>
              
              <p className="description">{pizza.description} </p>
              <div className="supplements">
              <div className="ingredients">
                <h3>Ingrédients</h3>
                    <ul  style={{listStyle:"none"}}>
                      {ingredients.map((item,index)=>{
                       return <div>
                           <li key={index} className="ingredient"> <p className="ingr-nom">{item}</p>  
                         <div className="custom-modif">
                            <span><FontAwesomeIcon icon={faMinus} /></span>
                          <p className="count">1</p>
                          <span><FontAwesomeIcon icon={faPlus} /></span>
                         </div>
                          
                          </li>
                          </div>
                      
                      })}
                    </ul>
                    
              </div>
             
              </div>
                       <Link to={"/"}> <button className="button-ajout">
                      <div className="ajouter">
                        <span>Ajouter au panier</span>
                        <span>€{pizza.prix.toFixed(2) }</span>
                      </div>
                </button></Link>
           </div>
           <div className="panier-container">
        <h2 className="panier-titre">Panier d'achat</h2>
        <div className="panier-pizza-container">
          {/* Pizza Item */}
          {panier.length === 0 ? (
            <p className="vide">Votre panier est vide</p>
          ) : (
            panier.map((item, index) => (
              <div className="pizza-info-container" key={index}>
                <div className="pizza-info">
                  <h4>{item.nom}</h4>
                  <h6 className="panier-prix">€{item.prix}</h6>
                </div>

               
              </div>
            ))
          )}
        </div>
        <div className="total">
          <h3>Total</h3>
          <h6 className="panier-prix">€{calculateTotal()}</h6>
        </div>

           </div>
          </div>
    
        
  
     
      </section>
      
    </>
  )
}
