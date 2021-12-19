import Foot from './Footer.module.css'
import { Route, Routes } from "react-router-dom"
import logo from './wireLogo.png'
function Footer() {

    return (
        <div className={Foot.sectionfoot}>
            <div className={Foot.foottop}>
                <div className={Foot.footwrap}>
                    <div className={`${Foot.footera} ${Foot.footerall}`}>
                        <div className={Foot.footlogo}>
                            <a href="#">
                                <img src={logo} alt="logo" />
                            </a>
                        </div>
                        <div className={Foot.footcontacts}>
                            <p>Trends is an amazing magazine Blogger theme that is easy to 
                                customize and change to fit your needs.</p>
                            <p><a href="#">lgagrog@gmail.com</a></p> 
                            <p><a href="#">+3805011122233</a></p> 
                        </div>
                    </div>
                    <div className={`${Foot.footerb} ${Foot.footerall}`}><p>111111</p></div>
                    <div className={`${Foot.footerc} ${Foot.footerall}`}>222222222</div>
                    <div className={`${Foot.footerd} ${Foot.footerall}`}>333333333</div>
                </div>
            </div>
            <div className={Foot.footbut}>
                <div className={Foot.footbutwrap}>
                    <div className={Foot.footcopy}><i class="far fa-copyright"></i> all rights reserved</div>
                    <div className={Foot.footicon}>made with  <i class="fas fa-heart"></i> by templateszoo</div>
                </div>
            </div>
        </div>
    )
}



export default Footer;