import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GetById } from "../SDK/httpR.js";
//ADD TO your team
export function addToTheTeam (id) {
    let heroList = [];
  
    if (JSON.parse(localStorage.getItem("userHeroes")) == null) {
      //si no se creo la clave
      localStorage.setItem("userHeroes", JSON.stringify(heroList));
    }
  
    //search id

    GetById(id)
    .then((response) => {
        if (
          checkTeam(response.data.id, response.data.biography.alignment) === true
        ) {
          heroList = JSON.parse(localStorage.getItem("userHeroes"));
          heroList.push(response.data);
          localStorage.setItem("userHeroes", JSON.stringify(heroList)); //set it in the localStorage
        }
      })
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

  //VALIDATIONS
  const checkTeam = (heroId, heroAlignment) => {
    //chequemos si el equipo ya tiene 3 buenos si heroAligment es bueno
    let teamArray = JSON.parse(localStorage.getItem("userHeroes"));
    let canAdd;
  
    //chequemos si el equipo ya tiene 3 buenos si heroAligment es bueno
    if (heroAlignment === "good") {
      if (
        teamArray.filter((hero) => hero.biography.alignment === "good").length <
          3 && // si la cantidad de heroes buenos en el equipo es menor a 3
        teamArray.some((hero) => hero.id === heroId) === false //si el heroe no esta ya en el equipo
      ) {
        canAdd = true;
        toast.success("added successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error(
          "error you already  have 3 good heroes or the hero is already in your team",
          { position: toast.POSITION.TOP_RIGHT }
        );
  
        canAdd = false;
      }
    }
  
    //chequemos si el equipo ya tiene 3 malo si heroAligment es malo
  
    if (heroAlignment === "bad") {
      if (
        // si la cantidad de heroes malos en el equipo es menor a 3
        teamArray.filter((hero) => hero.biography.alignment === "bad").length <
          3 &&
        teamArray.some((hero) => hero.id === heroId) === false //si el heroe no esta ya en el equipo
      ) {
        canAdd = true;
        toast.success("added successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error(
          "error you already  have 3 bad heroes or the hero is already in your team",
          { position: toast.POSITION.TOP_RIGHT }
        );
  
        canAdd = false;
      }
    }
  
    if (heroAlignment === "neutral") {
      if (
        teamArray.filter((hero) => hero.biography.alignment === "bad").length <
          3 && // si la cantidad de heroes malos en el equipo es menor a 3
        teamArray.filter((hero) => hero.biography.alignment === "good").length <
          3 && // si la cantidad de heroes buenos en el equipo es menor a 3
        teamArray.some((hero) => hero.id === heroId) === false //si el heroe no esta ya en el equipo
      ) {
        canAdd = true;
        toast.success("added successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error("error you already have 6 heores in your team", {
          position: toast.POSITION.TOP_RIGHT,
        });
        canAdd = false;
      }
    }
    return canAdd;
  };
}
  