import "./graph.css";
import Chart from "react-apexcharts";
import {useState,useEffect} from "react";
import { useSelector } from 'react-redux';
export default function Graph()
{
  const [intelligence, setIn] = useState();
  const [strength, setSt] = useState();
  const [speed, setSp] = useState();
  const [durability, setDur] = useState();
  const [power, setPo] = useState();
  const [combat, setCom] = useState();
  const { intelligenceG } = useSelector(state => state.graph);
  const { strengthG } = useSelector(state => state.graph);
  const { speedG } = useSelector(state => state.graph);
  const { durabilityG } = useSelector(state => state.graph);
  const { powerG } = useSelector(state => state.graph);
  const { combatG } = useSelector(state => state.graph);

  useEffect(()=>{
    setIn(intelligenceG)
    setSt(strengthG)
    setSp(speedG)
    setDur(durabilityG)
    setPo(powerG)
    setCom(combatG)
  });
    const [state, setState] = useState({
        series: [
          {
            name: "Power",
    
            data: [20, intelligence, strength, speed, durability, power, combat],
          },
        ],
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
    
    return(
<div className="stats">
        <div className="height-weight">
          <p>Height</p>
          <p>Weight</p>
          
        </div>

        <div className="graphic">
          <Chart
            options={state.options}
            series={state.series}
            type="radar"
            width="100%"
          />
        </div>
      </div>
    );
}