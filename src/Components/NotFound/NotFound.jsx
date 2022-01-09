import "./notFound.css";
import error from "../../assets/404error.png";
export default function NotFound()
{
    return(
        <div className="d-flex justify-content-center">
            <img src={error} className="notFound" alt="404 error"/>
        </div>
    )
}