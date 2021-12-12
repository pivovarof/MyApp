import dStrip from './DownStrip.module.css'
import logo from './wireLogo.png'
import MainMenu from './MainMenu/MainMenu';

function DownStrip(){

    return(
        <div className={dStrip.downStrip}>
            <div className={dStrip.wrapLogo}>
            <div className={dStrip.logo}>
                <img src={logo} alt="logo" />
            </div>
            </div>
            <div className={dStrip.wrapMenu}>
            <MainMenu/>
            </div>
            <div className={dStrip.icons}></div>

        </div>
    )
}

export default DownStrip;