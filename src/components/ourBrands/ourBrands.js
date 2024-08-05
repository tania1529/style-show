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
            <div><img src={Loreal} /></div>
            <div><img src={Dyson}/></div>
            <div><img src={Kerastase}/></div>
            <div><img src={WetBrush}/></div>
            <div><img src={OlaPlex}/></div>
            <div><img src={Schwarzkopf}/></div>
        </div>
        </div>
    )
    
}

export default OurBrands;