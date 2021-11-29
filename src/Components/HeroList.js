import Axios from 'axios';
import {useState,useEffect} from 'react';
import HeroCard from './HeroCard';
import {Navigate } from 'react-router-dom';
export default function HeroList() {

    
    let getInputValue=(event)=>{
        setHeroName(event.target.value);
        console.log(event.target.value);//pasarlo a una var y luego url
        Axios.get("https://www.superheroapi.com/api.php/"+tokenAPI+"/search/"+heroName)
        
        .then(response => {
          console.log(response.data.results)
          setHeroes(response.data.results)}
          )
     
        .catch(function (error) {
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
      
        });      
  
    }

    
    let tokenAPI="587224415651618";
    //let url="https://www.superheroapi.com/api/587224415651618/2"; sin el .php obtenemos un error cors
      
    const [heroes, setHeroes] = useState([]);
    const [heroName,setHeroName]=useState("");

    

    /*  useEffect(() => { anda
      Axios.get("https://www.superheroapi.com/api.php/"+tokenAPI+"/search/"+"batman")

      .then(response => {setHeroes(response.data.results)})
   
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
    
      });      
    }, [])  */ 


/*     useEffect(() => {
      .then((response)=>{
  
        console.log(response.data.results);
        
        setHeroes(response.data.results)
       
        
      }).catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      }
      )
    }, []) 

    
    useEffect(()=>{
      
  
      Axios.get("https://www.superheroapi.com/api.php/"+tokenAPI+"/search/"+heroName)
      .then((response)=>{
  
        console.log(response.data.results);
        
        setHeroes(response.data.results)
       
        
      }).catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      }
     
      ,[]);
     
     
    });
*/
    const check=()=>
    {
      let retrievedObject = localStorage.getItem('JWToken');
        if(retrievedObject==null)
        
        {
          return <Navigate to="/login"/>
        }
    }

   
    return (
    <div>
        
        {check()}
        <header>
          <h1 className="header css-3d-text-light">SEARCH A HERO</h1>
        </header>

        <input type="text" className="form-control form-control-lg" onChange={getInputValue} placeholder="Type the name of your future hero"/>     

        
        
        <div className="d-flex flex-row justify-content-evenly align-items-center flex-wrap">
          {
         
            !heroes?<div className="spinner-border text-info"></div>:
            heroes.map((currentHero,index)=>
              {
                if(index<20)
                {
                  return <HeroCard 
                  id={currentHero.id}
                  name={currentHero.name} 
                  image={currentHero.image} 
                  powerstats={currentHero.powerstats} 
                  biography={currentHero.biography}
                  />
                }
                
              })
           
          }
          
           
          
          
        </div>
  
      </div>
         
        
      
      
   
  )

}