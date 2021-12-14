import Header from './header/Header';
import Content from './content/Content';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import FullPost from './content/FullPost';
import Post from './content/Post/Post';

function App() {
  return (
    <BrowserRouter>
      
        <div className='conteiner'>
          <Header />
          <Content/>
          
            
          
        </div>
        
    
    </BrowserRouter>
  );
}

export default App;
