import { useState } from "react";

import NavBar from "../Navbar/NavBar.jsx";
import { GetByName } from "../../SDK/httpR.js";
import ShowHeroes from "../ShowHeroes.jsx";
import sound from "../../assets/sfx.mp3";
import useSound from "use-sound";

import "./herolist.css";
import { ToastContainer} from "react-toastify";
export default function HeroList() {
  const [SoundPlay] = useSound(
    sound,
    { volume: 0.25,interrupt: true }
  );


  let getInputValue = (event) => {
    setHeroName(event.target.value);

    //validations

    if (
      !/^[A-Za-z0-9_-]+$/.test(
        event.target.value
      )
    ) {
      setHeroName("");
      setHeroes([]);
      return;
    }
    console.log(event.target.value); //pasarlo a una var y luego url

    GetByName(heroName)
      .then((response) => {
        console.log(response.data.results);
        if (event.target.value.length !== 0)
          //limpiar el arreglo de heroes cuando no estemos buscando nada
          setHeroes(response.data.results);
          SoundPlay()
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
          console.log("Error", error.message);
        }
      });
  };

  const [heroes, setHeroes] = useState([]);
  const [heroName, setHeroName] = useState("");



  return (
    <div>
      <ToastContainer/>
      <header>
        <h1 className="header css-3d-text-light">SEARCH A HERO</h1>
      </header>

      <NavBar />
      <input
        type="text"
        className="form-control form-control-lg"
        onChange={getInputValue}
        placeholder="Type the name of your future hero"
      />
      <div className="inputText">you can only type numbers or letters</div>
      <div className="d-flex flex-row justify-content-evenly align-items-center flex-wrap">
        
        <ShowHeroes heroes={heroes} type="Card" />
      </div>
    </div>
  );
}
