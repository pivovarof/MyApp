import PostCss from "./Post.module.css"
import logo from "./iphone.jpg"

function Post(){

    return(
    
        <div className={PostCss.content}>
            
                <div className={PostCss.img_post}>
                    <a href="/fullPost">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className={PostCss.post_content}>
                    <a href="#"><span><i class="fas fa-circle"></i> PHONE</span></a>                    
                    <a href="#"><h2>Phone from Aliexpress</h2></a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        At fuga explicabo ex itaque minima omnis delectus, 
                        mollitia nisi temporibus porro excepturi cum possimus 
                        soluta rerum! Maiores vero dignissimos possimus tenetur?</p>                    
                </div>

            
        </div>
        
    
    )
}



export default Post;