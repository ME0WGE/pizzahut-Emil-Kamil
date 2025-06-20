import { Link, useParams } from "react-router-dom"
import data from '../data.json'
import "./Customize.css"
import Navbar from "../components/navbar/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"

export default function Customize() {
const {id}=useParams()
const pizza = data.find((item)=>item.nom ===id)
console.log(pizza);
console.log(id);
const ingredients =pizza.ingredients



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
              <p>€{pizza.prix} </p>
            </div>
              
              <p className="description">{pizza.description} </p>
              <div className="supplements">
              <div className="ingredients">
                <h3>Ingrédients</h3>
                    <ul style={{listStyle:"none"}}>
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
              <Link></Link>
              </div>
           </div>
          </div>
    
        
  
     
      </section>
      
    </>
  )
}
