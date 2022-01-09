import { Link } from "react-router-dom";
import "./cards.css";
export default function HeroCardMD(props) {
  return (
    <div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item bg-dark text-info">
          Height:
          {props.appearance.height[0] + "/" + props.appearance.height[1]}
        </li>
        <li className="list-group-item bg-dark text-info">
          Full name:{props.biography["full-name"]}
        </li>
        <li className="list-group-item bg-dark text-info">
          alias:{props.biography.aliases}
        </li>
        <li className="list-group-item bg-dark text-info">
          eyes color:{props.appearance["eyes-color"]}
        </li>
        <li className="list-group-item bg-dark text-info">
          hair color:{props.appearance["hair-color"]}
        </li>
        <li className="list-group-item bg-dark text-info">
          work base:{props.work.base}
        </li>
      </ul>

      <div
        className="d-flex flex-row justify-content-evenly align-items-center bottom-HeroCard"
        style={{ height: "4rem" }}
      >
        <Link to="/" className="btn btn-danger">
          Back
        </Link>

      </div>
    </div>
  );
}
