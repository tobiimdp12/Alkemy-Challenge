import "./App.css";

import Login from "./Components/Login/Login.jsx";
import HeroList from "./Components/HeroesList/HeroesList.jsx";
import UserHeroList from "./Components/UserHeroList/UserHeroesList.jsx";
import MoreDetails from "./Components/MoreDetails/MoreDetails.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ProtectedRoutes from "./Components/ProtectedRoutes.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
     +
      <BrowserRouter>
        {/*si el path es /myteam renderizamos el componente del UserHeroList*/}
        {/*Routes quedate con el primer path que hagas match*/}
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<UserHeroList />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="/searchheroes" element={<HeroList />} />
          </Route>
          <Route path="/moredetails/:id" element={<MoreDetails />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <div></div>
      <Footer />
    </div>
  );
}

export default App;
