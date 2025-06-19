import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Panier.css'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Panier() {
    


    return(
        <>
            <div className="panier-container">
                <h2 className="panier-titre">Panier d'achat</h2>
                <div className="panier-pizza-container">
                     <div className="pizza-info-container">
                        <div className="pizza-info">
                            <h4>Falafel</h4>
                            <h6 className='panier-prix'>20.10</h6>
                        </div>
                        
                        <div className="changements-pizza">
                            <span><FontAwesomeIcon icon={faMinus} /></span>
                            <h6 className='counter'>1</h6>
                            <span><FontAwesomeIcon icon={faPlus} /></span>
                            <h6 className='modif'>Modifier</h6>
                            <h6 className='supr'>Supprimer</h6>
                        </div>
                    </div>
                     <div className="pizza-info-container">
                        <div className="pizza-info">
                            <h4>Falafel</h4>
                            <h6 className='panier-prix'>20.10</h6>
                        </div>
                        
                        <div className="changements-pizza">
                            <span><FontAwesomeIcon icon={faMinus} /></span>
                            <h6 className='counter'>1</h6>
                            <span><FontAwesomeIcon icon={faPlus} /></span>
                            <h6 className='modif'>Modifier</h6>
                            <h6 className='supr'>Supprimer</h6>
                        </div>
                    </div>
                     <div className="pizza-info-container">
                        <div className="pizza-info">
                            <h4>Falafel</h4>
                            <h6 className='panier-prix'>20.10</h6>
                        </div>
                        
                        <div className="changements-pizza">
                            <span><FontAwesomeIcon icon={faMinus} /></span>
                            <h6 className='counter'>1</h6>
                            <span><FontAwesomeIcon icon={faPlus} /></span>
                            <h6 className='modif'>Modifier</h6>
                            <h6 className='supr'>Supprimer</h6>
                        </div>
                    </div>
                    
                </div>
                <div className="total">
                        <h3>Total</h3>
                        <h6 className='panier-prix'> 20.10</h6>
                    </div>
                   
                </div>
           
        </>
    )
}