import { Link } from "react-router-dom";
import "./SpeakerCard.scss";

const SpeakerCard = (props) => {
  return (
    <div className="rounded-xl shadow-lg m-5">
      <div className="p-5 flex flex-col">
        <div className="rounded-xl overflow-hidden">
          <img
            className="object-fill h-80 w-full"
            src={props.imgUrl}
            alt="speaker"
          />
        </div>
        <h5 className="text-1xl md:text-2xl font-medium mt-3 ">{props.name}</h5>
        <p className="text-slate-500 text-lg mt-3">
          {props.tag.substring(0, 25) + (props.tag.length < 25 ? "" : "...")}
        </p>
        <Link
          // to={`/speakers/${props.id}`}
          className="mt-5 bg-slate-500 text-white px-5 py-2 rounded-lg text-center"
        >
          Know More
        </Link>
      </div>
    </div>
  );
};

export default SpeakerCard;
