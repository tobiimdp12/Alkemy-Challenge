import { Link } from "react-router-dom";
import { addToTheTeam } from "../../Helpers/addToTheTeam.js";
import { GetById } from "../../SDK/httpR.js";
import { useState, useEffect } from "react";
import "./cards.css";
import HeroCardMoreDetails from "./HeroCardMoreDetails.jsx";
import HeroCardUserTeam from "./HeroCardUserTeam.jsx";
//id= id del heroe   type:tipo de carta
export default function HeroCard({ id, type }) {
  const [heroSelected, setHeroSelected] = useState();
  useEffect(() => {
    GetById(id)
      .then((response) => setHeroSelected(response.data))
      .catch(function (error) {
        //si no nos podemos conectar
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
          console.log("Error", error.message);
        }
      });
  }, [id]);

  return !heroSelected ? (
    ""
  ) : (
    <div
      className="card border-dark mb-3 mt-3 bg-dark text-info"
      style={{ width: "28rem" }}
    >
      <div className="card-header">
        alignment: {heroSelected.biography.alignment}| id {heroSelected.id}
      </div>
      <img
        src={heroSelected.image.url}
        className="heroImage"
        alt={heroSelected.name}
      />
      <div className="card-body">
        <h4 className="card-title">{heroSelected.name}</h4>

        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-dark text-info">
            intelligence:{heroSelected.powerstats.intelligence}
          </li>
          <li className="list-group-item bg-dark text-info">
            strength:{heroSelected.powerstats.strength}
          </li>
          <li className="list-group-item bg-dark text-info">
            speed:{heroSelected.powerstats.speed}
          </li>
          <li className="list-group-item bg-dark text-info">
            durability:{heroSelected.powerstats.durability}
          </li>
          <li className="list-group-item bg-dark text-info">
            power:{heroSelected.powerstats.power}
          </li>
          <li className="list-group-item bg-dark text-info">
            combat:{heroSelected.powerstats.combat}
          </li>
        </ul>

        {type === "Card" && (
          //more details component
          <div className="d-flex flex-row justify-content-evenly align-items-center flex-wrap bottom-HeroCard">
            <button
              className="btn btn-primary button"
              onClick={() => {
                addToTheTeam(heroSelected.id); //funcion para aniadir al equipo
              }}
            >
              Add to your team!
            </button>
            <Link
              to={`/moredetails/${heroSelected.id}`}
              className="btn btn-secondary button"
            >
              See more Details
            </Link>
          </div>
        )}
        {type === "moreDetails" && (
          <HeroCardMoreDetails
            biography={heroSelected.biography}
            appearance={heroSelected.appearance}
            work={heroSelected.work}
          />
        )}
        {type === "Team" && <HeroCardUserTeam id={heroSelected.id} />}
      </div>
    </div>
  );
}
