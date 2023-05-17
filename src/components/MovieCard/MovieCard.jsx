import { Link } from "react-router-dom";

const Card = ({ id, title, imgLink, rating, relaseDate }) => {
  return (
    <Link to={`/movie/${id}`} className="card">
      <div className="card__img">
        <img src={imgLink} alt="Card Img" />
      </div>
      <span className="rating">{rating}</span>
      <div className="card__content">
        <h2>{title}</h2>
        <span className="relase-date">{relaseDate}</span>
      </div>
    </Link>
  );
};

export default Card;
