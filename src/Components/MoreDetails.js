import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import HeroCardMoreDetails from './HeroCardMoreDetails.js';
import Axios from 'axios';
export default function MoreDetails()
{
     // Obtenemos el parametro en esta variable
    const {id} = useParams();
    const [heroSelected,setHeroSelected]=useState();

    useEffect(()=>
    {
       
        let tokenAPI="587224415651618";
      
        Axios.get("https://www.superheroapi.com/api.php/"+tokenAPI+"/"+id)
        
        .then(response => {
          console.log(response.data)
          
          setHeroSelected(response.data)
        }
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
  
    },[id])
     return(
      <div>
        <div className="text-danger">
          <h1>More details </h1>
        </div>
        <div className="d-flex flex-row justify-content-evenly align-items-center flex-wrap">
          
          {    
              !heroSelected ?<div className="spinner-border text-info"></div>:
              <HeroCardMoreDetails  
                  id={heroSelected.id}
                  name={heroSelected.name} 
                  image={heroSelected.image} 
                  powerstats={heroSelected.powerstats} 
                  biography={heroSelected.biography}
                  appearance={heroSelected.appearance}
                  work={heroSelected.work}
              />
              
          } 
        </div>
      </div>
     )
}