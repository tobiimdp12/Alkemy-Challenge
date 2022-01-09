import { Navigate,Outlet } from "react-router-dom";


const ProtectedRoutes = () => {
  function check() {
    let retrievedObject = localStorage.getItem("JWToken");
    let isLogged=false;
    if (retrievedObject != null) {
      isLogged=true;
    } 
    return isLogged;
  }
  
  const isAuth=check()
  
  return isAuth?<Outlet/>:<Navigate to="/login"/>
};
export default ProtectedRoutes;
