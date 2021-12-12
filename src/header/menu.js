import MenuCss from './menu.module.css'

function Menu(){

    return(
        <div className={MenuCss.wrapNavmenu}>
        <div className={MenuCss.navmenu}>
            <a href="#" className={MenuCss.item}>Home</a>
            <a href="#" className={MenuCss.item}>About us</a>
            <a href="#" className={MenuCss.item}>Contacts</a>
            <a href="#" className={MenuCss.item}>Store</a>
        </div>
        </div>
    )
}

export default Menu;