import {Navigate } from 'react-router-dom';
import {useState} from 'react';
import Axios from 'axios';

export default function HelperFunctions(props)
{
 
}
   /****USER'S HEROLIST *******/

//ADD TO THE TEAM
export const AddToTheTeam=(id)=>
{
 
  let heroList=[];


   if(JSON.parse(localStorage.getItem("userHeroes"))==null)//si no se creo la clave
  {
    
    localStorage.setItem("userHeroes",JSON.stringify(heroList));

  } 
  
  //search id
  let tokenAPI="587224415651618";
      
  Axios.get("https://www.superheroapi.com/api.php/"+tokenAPI+"/"+id)
  
  .then(response => {
    console.log(response.data.biography.alignment);
    if(checkTeam(response.data.biography.alignment)==true)
    {
      heroList=JSON.parse(localStorage.getItem("userHeroes"));
      heroList.push(response.data)
      localStorage.setItem("userHeroes",JSON.stringify(heroList));//set it in the localStorage
    
    } 
  

  })

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


  //redirect to userherolist route
  <Navigate to="/"/>

}
//VALIDATIONS
const checkTeam=(heroAlignment)=>
{
  //chequemos si el equipo ya tiene 3 buenos si heroAligment es bueno
  let teamArray=JSON.parse(localStorage.getItem("userHeroes"));;
  let canAdd;
  if(heroAlignment==="good")
  {
    if(teamArray.filter(hero=> hero.biography.alignment==="good").length<3)
    {
      canAdd=true
      alert("added successfully");
    }else
    {
      alert("error you have 3 heroes goods")

      canAdd=false
    }
  }

  //chequemos si el equipo ya tiene 3 malo si heroAligment es malo

  if(heroAlignment==="bad")
  {
    if(teamArray.filter(hero=> hero.biography.alignment==="bad").length<3)
    {
      canAdd=true
      alert("added successfully");
    }else
    {
      alert("error you have 3 heroes bads")

      canAdd=false
    }
  }

  return canAdd;
}

//PROM


export const intelligenceS=()=>
{

  let arrayHero=JSON.parse(localStorage.getItem("userHeroes"));

  let total =0;
  if(arrayHero!=null)
  {
    arrayHero.forEach(function(heroIntel){
      
      total += parseInt(heroIntel.powerstats.intelligence);
      
    });
  }
  return total;
}
export const strengthS=()=>
{
  let arrayHero=JSON.parse(localStorage.getItem("userHeroes"));

  let total =0;
  if(arrayHero!=null)
  {
    arrayHero.forEach(function(heroStren){total += parseInt(heroStren.powerstats.strength);});
  }
  return total;
}

export const speedS=()=>
{
  let arrayHero=JSON.parse(localStorage.getItem("userHeroes"));

  let total =0;
  if(arrayHero!=null)
  {
    arrayHero.forEach(function(heroSpeed){total += parseInt(heroSpeed.powerstats.speed);});
  }
  return total;
}

export const durabilityS=()=>
{
  let arrayHero=JSON.parse(localStorage.getItem("userHeroes"));

  let total =0;
  if(arrayHero!=null)
  {
    arrayHero.forEach(function(heroDurability){total += parseInt(heroDurability.powerstats.durability);});
  }
  return total;
}
export const powerS=()=>
{
  let arrayHero=JSON.parse(localStorage.getItem("userHeroes"));

  let total =0;
  if(arrayHero!=null)
  {
    arrayHero.forEach(function(heroPower){total += parseInt(heroPower.powerstats.power);});
  }
  return total;
}
export const combatS=()=>
{
  let arrayHero=JSON.parse(localStorage.getItem("userHeroes"));

  let total =0;
  if(arrayHero!=null)
  {
    arrayHero.forEach(function(heroCombat){total += parseInt(heroCombat.powerstats.combat);});
  }
  return total;
}




//delete a hero

export const deleteHero=(id)=>
{
  let arrayHero=JSON.parse(localStorage.getItem("userHeroes"));

  if(arrayHero!=null)
  {
    arrayHero.map(function(hero,index){if(hero.id===id){arrayHero.splice(index, 1); }});
    localStorage.setItem("userHeroes",JSON.stringify(arrayHero));//set it in the localStorage

  }

}