

import MainMenuCss from './MainMenu.module.css'

function MainMenu(){

    return(
        <div className={MainMenuCss.wrapNavmenu}>
        <div className={MainMenuCss.navmenu}>
            <a href="#" className={MainMenuCss.item}>Home</a>
            <a href="#" className={MainMenuCss.item}>About us</a>
            <a href="#" className={MainMenuCss.item}>Contacts</a>
            <a href="#" className={MainMenuCss.item}>Store</a>
            <a href="#" className={MainMenuCss.item}>About us</a>
            <a href="#" className={MainMenuCss.item}>Contacts</a>
            <a href="#" className={MainMenuCss.item}>Store</a>
        </div>
        </div>
    )
}

export default MainMenu;