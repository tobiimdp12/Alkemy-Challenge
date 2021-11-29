import {Link } from 'react-router-dom';
import {useState,useEffect} from 'react';
export default function NavBar()
{
    const[isLog,setLog]=useState(false);
    const deleteKey=(key)=>
    {
      
      localStorage.removeItem(key);
      setLog(!isLog);
    }

    useEffect(()=> {
      
    }, [isLog])//reload componente when isLog changed
    return(
    
        <section className="d-flex flex-row justify-content-evenly align-items-center flex-wrap">
          <Link to='/'className="btn btn-secondary">My Team</Link>
      
          <Link to='/login' 
          
          onClick={() =>localStorage.getItem("JWToken") ? deleteKey("JWToken"):""}

          className={!localStorage.getItem("JWToken") ? 'btn btn-primary' : 'btn btn-danger'}
          >{!localStorage.getItem("JWToken")?"Login":"Logout"}</Link>
          
          <Link to='/searchheroes'className="btn btn-success">Search A Hero</Link>
      
        </section>

    )
}