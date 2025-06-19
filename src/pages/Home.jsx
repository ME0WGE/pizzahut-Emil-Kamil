import Navbar from "../components/navbar/Navbar";
import Panier from "../components/panier/Panier";
import PizzaCard from "../components/pizza-card/Pizza-card";
import data from '../data.json'
export default function Home() {

    

    return(
        <>
            <Navbar/>
            <section id="pizza">
                <div className="container">
                    <div className="titre">
                        <hr /><p>Pizza</p><hr />
                    </div>
                    <div className="content">
                         <PizzaCard />
                        <Panier/>
                    </div>
                   
                </div>
                
            </section>
            
            
        </>
    )
}