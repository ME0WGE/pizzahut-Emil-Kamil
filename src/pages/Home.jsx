import Navbar from "../components/navbar/Navbar";
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
                    <PizzaCard />
                </div>
                
            </section>
            
            
        </>
    )
}