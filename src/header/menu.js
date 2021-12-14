import { Link } from 'react-router-dom';
import MenuCss from './menu.module.css'

function Menu(){

    return(
        <div className={MenuCss.wrapNavmenu}>
        <div className={MenuCss.navmenu}>
            <Link to="/post" className={MenuCss.item}>Home</Link>
            <a href="#" className={MenuCss.item}>About us</a>
            <a href="#" className={MenuCss.item}>Contacts</a>
            <Link to="/fullPost" className={MenuCss.item}>Store</Link>
        </div>
        </div>
    )
}

export default Menu;