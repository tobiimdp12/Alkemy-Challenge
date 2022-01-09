
import HeroCard from "./Cards/HeroCard.jsx";



//en un componente carta usar operadores ternarios para diseñarlas
export default function ShowHeroes({ heroes, type }) {


  return( 

  !heroes ? (
    
    <div className="spinner-border text-info"></div>
  ) :    (
    
    heroes.map((currentHero, index) => {
    
      if (index < 20) {
        return <HeroCard id={currentHero.id} type={type} key={index} />;
      }
      return null;
     
    })
   
  )
  );
}
