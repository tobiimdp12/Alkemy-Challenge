

import './App.css';

import Login from './Components/Login.js';
import HeroList from './Components/HeroList.js';
import UserHeroList from './Components/UserHeroList.js';
import MoreDetails from './Components/MoreDetails.js';
import NavBar from './Components/NavBar.js';

import {BrowserRouter,Route, Routes} from 'react-router-dom';

/*Link->nos permite cambiar la url*/ 
function App() {
  
  return (
    <div className="App">
      <header>
        <h1 className="header css-3d-text">WELCOME TO MY CHALLENGE</h1>
      </header>
      <hr/>
      <BrowserRouter>
        <NavBar/>
        { /*si el path es /myteam renderizamos el componente del UserHeroList*/ }
         { /*Routes quedate con el primer path que hagas match*/ }
        <Routes>
  
          

          <Route path="/moredetails/:id" element={<MoreDetails/>} />
    
          <Route path="/searchheroes" element={<HeroList/>} />
          
          <Route path="/login" element={<Login/>} />
          
          <Route path="/" element={<UserHeroList/>} />
          

 
        </Routes >
      </BrowserRouter>

      <div >
      </div>
    </div> 
  );
}


export default App;
