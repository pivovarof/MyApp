import contCss from "./Content.module.css"
import Post from "./Post/Post";
import FullPost from "./FullPost";
import { Route, Routes } from "react-router-dom"
import Carusel from "./Carusel/Carusel";


function Content() {

    return (
        <div className={contCss.conteiner}>
            <Carusel />
            <main className={contCss.wrap_content}>
                <div className={contCss.main_wrap_content}>
                    <div className={contCss.post_wrap}>
                        {/* <Post className={contCss.post}/>
                <Post className={contCss.post}/>
                <Post className={contCss.post}/> */}
                        {/* <FullPost/> */}
                        <Routes>
                            <Route path='/fullpost' element={<FullPost message='Helooooooooooo!' />} />
                            <Route path='/post' element={<Post />} />
                        </Routes>

                    </div>
                </div>
                <div className={contCss.adv_menu}>
                    <div className={contCss.block}></div>
                </div>
            </main>
        </div>
    )
}



export default Content;