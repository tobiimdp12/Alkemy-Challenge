import { useParams } from "react-router-dom";

import HeroCard from "../Cards/HeroCard.jsx";



export default function MoreDetails() {
  // Obtenemos el parametro en esta variable
  const { id } = useParams();


  return (
    <div>
      <div className="text-danger">
        <h1>More details </h1>
      </div>
      <div className="d-flex flex-row justify-content-evenly align-items-center flex-wrap">
 
        <HeroCard id={id} type="moreDetails"/>
        
      </div>
    </div>
  );
}
