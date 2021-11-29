import {Link } from 'react-router-dom';
export default function HeroCardMD(props)
{
   
    return(
        
        <div className="card border-dark mb-3 mt-3 bg-dark text-info" style={{width: "28rem"}}>
            
          <div className="card-header">alignment: {props.biography.alignment} </div>
          <div className="card-body">
          <h4 className="card-title">{props.name}</h4>

         <img src={props.image.url} className="heroImage" alt={props.name}/>
            
           <ul className="list-group list-group-flush">
              <li className="list-group-item bg-dark text-info">intelligence:{props.powerstats.intelligence}</li>
              <li className="list-group-item bg-dark text-info">strength:{props.powerstats.strength}</li>
              <li className="list-group-item bg-dark text-info">speed:{props.powerstats.speed}</li>
              <li className="list-group-item bg-dark text-info">durability:{props.powerstats.durability}</li>
              <li className="list-group-item bg-dark text-info">power:{props.powerstats.power}</li>
              <li className="list-group-item bg-dark text-info">combat:{props.powerstats.combat}</li>
              
            </ul>
          
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-dark text-info">Height:{props.appearance.height[0]+"/"+props.appearance.height[1]}</li>
              <li className="list-group-item bg-dark text-info">Full name:{props.biography['full-name']}</li>
              <li className="list-group-item bg-dark text-info">alias:{props.biography.aliases}</li>
              <li className="list-group-item bg-dark text-info">eyes color:{props.appearance['eyes-color']}</li>
              <li className="list-group-item bg-dark text-info">hair color:{props.appearance['hair-color']}</li>
              <li className="list-group-item bg-dark text-info">work base:{props.work.base}</li>
              
            </ul> 
            <div className="d-flex flex-row justify-content-evenly align-items-center bottom-HeroCard">
              <Link to="/searchheroes" className="btn btn-danger">Back</Link>
            </div>   
          </div>     
        </div>


      
  
    );
}