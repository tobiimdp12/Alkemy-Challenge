import {Link } from 'react-router-dom';
import HelpersFunction from './HelpersFunctions.js';
import {AddToTheTeam} from './HelpersFunctions.js';

export default function HeroCard(props)
{

    return(
        
        <div className="card border-dark mb-3 mt-3 bg-dark text-info" style={{width: "28rem"}}>
            
          <div className="card-header">alignment: {props.biography.alignment}| id {props.id}</div>
          <img  src={props.image.url} className="heroImage"alt={props.name}/>
          <div className="card-body">
            <h4 className="card-title">{props.name}</h4>

            
            
            <ul className="list-group list-group-flush">
             
              <li className="list-group-item bg-dark text-info">intelligence:{props.powerstats.intelligence}</li>
              <li className="list-group-item bg-dark text-info">strength:{props.powerstats.strength}</li>
              <li className="list-group-item bg-dark text-info">speed:{props.powerstats.speed}</li>
              <li className="list-group-item bg-dark text-info">durability:{props.powerstats.durability}</li>
              <li className="list-group-item bg-dark text-info">power:{props.powerstats.power}</li>
              <li className="list-group-item bg-dark text-info">combat:{props.powerstats.combat}</li>
              
            </ul>
          
            <div className="d-flex flex-row justify-content-evenly align-items-center flex-wrap bottom-HeroCard">
            
              <button  className="btn btn-primary " onClick={()=>{AddToTheTeam(props.id);}}>Add to your team!</button>
              <Link to={`/moredetails/${props.id}`} className="btn btn-secondary">
                See more Details
                
              </Link>
             
            </div>  
          </div>     
        </div>


      
  
    );
}