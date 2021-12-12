import dStrip from './DownStrip.module.css'
import logo from './wireLogo.png'

function DownStrip(){

    return(
        <div className={dStrip.downStrip}>
            <div className={dStrip.logo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={dStrip.mainMenu}></div>
            <div className={dStrip.icons}></div>

        </div>
    )
}

export default DownStrip;