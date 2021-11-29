import HeroCard from './HeroCard.js';
import {useState,useEffect} from 'react';
import Chart from "react-apexcharts";

import {Navigate } from 'react-router-dom';

import HelpersFunction from './HelpersFunctions.js';
import {intelligenceS,strengthS,speedS,durabilityS,powerS,combatS} from './HelpersFunctions.js';
export default function UserHeroList() {

  const userHeroes=JSON.parse(localStorage.getItem("userHeroes"));
  const [intelligence,setIn]=useState(intelligenceS());
  const [strength,setSt]=useState(strengthS())
  const [speed,setSp]=useState(speedS())
  const [durability,setDur]=useState(durabilityS())
  const [power,setPo]=useState(powerS())
  const [combat,setCom]=useState(combatS())


  const[state,setState]=useState( {
    series: [{
      name: 'Power',
   
      data: [20, intelligence, strength, speed, durability, power,combat],
    }],
    options: {
      chart: { foreColor: '#fff'},
     
      plotOptions: {
        radar: {
          size: 70,
          polygons: {
            strokeColors: '#e9e9e9',
            fill: {
              colors: ['#00008B', '#000000']//color background
            }
          }
        }
      },
      stroke: {
        width: 1,
        colors: ['#33b2df']//graph
      },
      colors: ['#33b2df'],//graph
   
      tooltip: {
        y: {
          formatter: function(val) {
            return val
          }
        }
      },
      xaxis: {
        categories: ["",'intelligence', 'strength', 'speed', 'durability', 'power', 'combat']
      },
      yaxis: {
        tickAmount: 7,
        labels: {
          formatter: function(val, i) {
            if (i % 2 === 0) {
              return val
            } else {
              return ''
            }
          }
        }
      }
    }
});
    
    const check=()=>
    {
      let retrievedObject = localStorage.getItem('JWToken');
        if(retrievedObject==null)
        
        {
         
          return  <Navigate to="/login"/>
        }
    }

    const setTypeOfTeam=(intelligence,strength,speed,durability,power,combat)=>
  {
    let teamArray=[];
    let powerstatName;
    teamArray.push(intelligence)
    teamArray.push(strength)
    teamArray.push(speed)
    teamArray.push(durability)
    teamArray.push(power)
    teamArray.push(combat)

    teamArray.sort(function(a, b){return b - a});



    if(teamArray[0]===intelligence)
    {
      powerstatName="intelligence";
    }

    if(teamArray[0]===strength)
    {
      powerstatName="strength";
    }

    if(teamArray[0]===speed)
    {
      powerstatName="speed";
    }


      if(teamArray[0]===durability)
    {
      powerstatName="durability";
    }


    if(teamArray[0]===power)
    {
      powerstatName="power";
    }

    if(teamArray[0]===combat)
    {
      powerstatName="combat";
    }
    return powerstatName//mayor
  }
    return (
      <div >
        
        {check()}
       
        <header>
          <h1 className="header css-3d-text-light">MY TEAM</h1>
          
        </header>
        
        <hr/>
         <div className="graphic">
          
            <Chart
              options={state.options}
              series={state.series}
              type="radar"
              width="500"
              
              
            />
         
        </div>
        <div className="text-success text-center">
          {setTypeOfTeam(intelligence,strength,speed,durability,power,combat)}

        </div>

        <div className="d-flex flex-row justify-content-evenly align-items-center flex-wrap">

          {
            
            !userHeroes?"cargando":
            userHeroes.map((currentHero)=>{
             
                return <HeroCard 
                id={currentHero.id}
                name={currentHero.name} 
                image={currentHero.image} 
                powerstats={currentHero.powerstats} 
                biography={currentHero.biography}
                />
                 
            })
          }

        </div>

    
      </div>
    );
}