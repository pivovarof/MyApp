import HeaderCss from'./Header.module.css'
import Menu from './menu';
import DownStrip from './downStrip/DownStrip';
import Carusel from './Carusel/Carusel';

function Header(){

    return(
    <>
    <div className={HeaderCss.wrapper}>
    <div className={HeaderCss.conteiner}>       
        <Menu></Menu>            
        <div className={HeaderCss.icons}>            
        <i class="fas fa-user"></i>
        <i class="fas fa-sign-in-alt"></i>
        </div>        
    </div>
    <DownStrip></DownStrip>
    <Carusel/>
    </div>  
    </>
    )
}



export default Header;