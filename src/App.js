import Header from './header/Header';
import Content from './content/Content';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Footer from './Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      
        <div className='conteiner'>
          <Header />
          <Content/>
          <Footer/>       
            
          
        </div>
        
    
    </BrowserRouter>
  );
}

export default App;
