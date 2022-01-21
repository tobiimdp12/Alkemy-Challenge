import { Link } from "react-router-dom";
import { deleteHero } from "../../Helpers/deleteHero.js";
import { deleteMember } from "../../redux/teamReducer.js";
import "./cards.css";
// redux
import { useDispatch } from "react-redux";
export default function HeroCardUserTeam(props) {
  
  const dispatch = useDispatch();

  return (
    <div>
      <div
        className="d-flex flex-row justify-content-evenly align-items-center flex-wrap bottom-HeroCard"

      >
        <button
          className="btn btn-primary button"
          onClick={() => {
            deleteHero(props.id);
            dispatch(deleteMember(props.id));
          }}
        >
          DELETE
        </button>
        <Link to={`/moredetails/${props.id}`} className="btn btn-secondary button">
          See more Details
        </Link>
      </div>
    </div>
  );
}
