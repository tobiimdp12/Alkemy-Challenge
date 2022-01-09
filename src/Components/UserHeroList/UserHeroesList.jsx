import "./user.css";
import { useState } from "react";

import NavBar from "../Navbar/NavBar.jsx";
import ShowHeroes from "../ShowHeroes.jsx";

import setTypeTeam from "../setTypeTeam.js";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import {
  intelligenceS,
  strengthS,
  speedS,
  durabilityS,
  powerS,
  combatS,
} from "../../Helpers/statsP.js";

import {refreshTeam}from "../../store/team/action";
import {connect}from  "react-redux";
import {selectCurrentTeam }from "../../store/team/reducer";
const mapStateToProps=(state)=>
{
    return{
        team:selectCurrentTeam(state),
    }
}

function UserHeroList({team,refreshTeam}) {
  const [intelligence, setIn] = useState(intelligenceS());
  const [strength, setSt] = useState(strengthS());
  const [speed, setSp] = useState(speedS());
  const [durability, setDur] = useState(durabilityS());
  const [power, setPo] = useState(powerS());
  const [combat, setCom] = useState(combatS());

  let userHeroes = team;

  return (
    <div>
      <ToastContainer />
      <header>
        <h1 className="header">MY TEAM</h1>
      </header>
      <hr />
      <NavBar />
      <div className="text-info text-center typeTeam">
        {setTypeTeam(
          intelligence,
          strength,
          speed,
          durability,
          power,
          combat,
          userHeroes
        )}
      </div>
      (
      <div className="d-flex flex-row justify-content-evenly align-items-center flex-wrap">
        <ShowHeroes heroes={userHeroes} type="Team" />
      </div>
    </div>
  );
}
export default connect(mapStateToProps,{refreshTeam})(UserHeroList);
