import Carus from './Carusel.module.css'
import Element from './CaruselElem/Element';


function Carusel() {
    return (
      <div className={Carus.conteiner}>
        <Element />
        <Element/>
        <Element/>
        <Element/>
        
      </div>
    );
  }
  
  export default Carusel;