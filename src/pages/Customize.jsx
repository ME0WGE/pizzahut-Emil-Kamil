import { useParams } from "react-router-dom"
import data from '../data.json'
import "./Customize.css"
import Navbar from "../components/navbar/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

export default function Customize() {
const {id}=useParams()
const pizza = data.find((item)=>item.nom ===id)
console.log(pizza);



return(
    <>
    <Navbar/>
    <section id="customize">
      <div className="retour">
        <FontAwesomeIcon icon={faChevronLeft} />
        <p>Retour</p>
      
      </div>
       
          <div   className="customize-container">
           <div className="customize-image">
              <img src={pizza.image} alt="" />
           </div>
          </div>
    
        
  
     
      </section>
      
    </>
  )
}
