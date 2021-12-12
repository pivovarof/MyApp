import Elem from './Element.module.css'
import logo from './logo_carusel.jpg';

function Element(props){

    return(
    <div className={Elem.wrapper}>
        <img src={logo} alt="elem" />
    </div>
    )
}



export default Element;