import "./user.css";
import NavBar from "../Navbar/NavBar.jsx";
import ShowHeroes from "../ShowHeroes.jsx";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { selectTeam } from "../../redux/teamReducer";
import setTypeTeam from "../setTypeTeam.js";
import Chart from "react-apexcharts";
import { useState } from "react";
import {
  intelligenceS,
  strengthS,
  speedS,
  durabilityS,
  powerS,
  combatS,
  heightS,
  weightS,
} from "../../Helpers/statsP.js";

export default function UserHeroList() {
  let userHeroes = useSelector(selectTeam);
  const [intelligence, setIn] = useState(intelligenceS(userHeroes));
  const [strength, setSt] = useState(strengthS(userHeroes));
  const [speed, setSp] = useState(speedS(userHeroes));
  const [durability, setDur] = useState(durabilityS(userHeroes));
  const [power, setPo] = useState(powerS(userHeroes));
  const [combat, setCom] = useState(combatS(userHeroes));
  const [height, setHe] = useState(2);
  const [weight, setWe] = useState(2);

  const [state, setState] = useState({

    options: {
      chart: { foreColor: "#fff" },

      plotOptions: {
        radar: {
          size: 70,
          polygons: {
            strokeColors: "#e9e9e9",
            fill: {
              colors: ["#00008B", "#000000"], //color background
            },
          },
        },
      },
      stroke: {
        width: 1,
        colors: ["#33b2df"], //graph
      },
      colors: ["#33b2df"], //graph

      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
      xaxis: {
        categories: [
          "",
          "intelligence",
          "strength",
          "speed",
          "durability",
          "power",
          "combat",
        ],
      },
      yaxis: {
        tickAmount: 7,
        labels: {
          formatter: function (val, i) {
            if (i % 2 === 0) {
              return val;
            } else {
              return "";
            }
          },
        },
      },
    },
  });

  return (
    <div>
      <ToastContainer />
      <header>
        <h1 className="header">MY TEAM</h1>
      </header>
      <hr />
      <NavBar />

      <div className="stats">
        <div className="height-weight">
          <p>{height} CM</p>
          <p>{weight} KG</p>
        </div>

        <div className="graphic">
          <Chart
            options={state.options}
             series={[
                  {
                    name: "Score",
                    data: [20, intelligenceS(userHeroes), strengthS(userHeroes), speedS(userHeroes), durabilityS(userHeroes), powerS(userHeroes), combatS(userHeroes)],
                  },
                ]}
            type="radar"
            width="100%"
          />
        </div>
      </div>
      <div className="text-info text-center typeTeam">
        {setTypeTeam(
         intelligenceS(userHeroes), strengthS(userHeroes), speedS(userHeroes), durabilityS(userHeroes), powerS(userHeroes), combatS(userHeroes),
          userHeroes
        )}
      </div>

      <div className="d-flex flex-row justify-content-evenly align-items-center flex-wrap">
        <ShowHeroes heroes={userHeroes} type="Team" />
      </div>
    </div>
  );
}
