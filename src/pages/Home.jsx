import Navbar from "../components/navbar/Navbar";
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
                    <div className="card-container">
                       
                    </div>
                </div>
                
            </section>
            
            
        </>
    )
}