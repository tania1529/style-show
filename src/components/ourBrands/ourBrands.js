import Loreal from '../../icons/brandLogos/Loreal.png';
import Kerastase from '../../icons/brandLogos/Kerastase.png';
import Dyson from '../../icons/brandLogos/dyson.png';
import OlaPlex from '../../icons/brandLogos/olaplex.png';
import Schwarzkopf from '../../icons/brandLogos/Schwarzkopf.png';
import WetBrush from '../../icons/brandLogos/WetBrush.png';
import "./ourBrands.scss";

const OurBrands = () =>{
    return(
        <div className='ui-our-brands'>
        <h1> Our Brands</h1>
        <div className='brands'>
            <div><img alt="brancd#1" src={Loreal} /></div>
            <div><img alt="brancd#2" src={Dyson}/></div>
            <div><img alt="brancd#3" src={Kerastase}/></div>
            <div><img alt="brancd#4" src={WetBrush}/></div>
            <div><img alt="brancd#5" src={OlaPlex}/></div>
            <div><img alt="brancd#6" src={Schwarzkopf}/></div>
        </div>
        </div>
    )
    
}

export default OurBrands;