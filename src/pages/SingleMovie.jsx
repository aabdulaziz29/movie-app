import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const SingleMovie = () => {
  const { id } = useParams();

  const [movieInfo, setMovieInfo] = useState({
    isFetched: false,
    data: {},
    err: false,
  });
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: "8517584592644709d437159987052f17",
        },
      })
      .then((res) =>
        setMovieInfo({
          isFetched: true,
          data: res.data,
          err: false,
        })
      )
      .catch((error) =>
        setMovieInfo({
          isFetched: true,
          data: [],
          err: error,
        })
      );
  }, []);

  console.log(movieInfo);
  return (
    <div className="container">
      {movieInfo.isFetched ? (
        <div className="single__movie">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieInfo.data.poster_path}`}
            alt=""
          />
          <div className="single__movie-text">
            <h1>{movieInfo.data.title}</h1>
            <span className="single__movie-rating">
              {movieInfo.data.vote_average}
            </span>
            <p>
              <span>Date: </span> {movieInfo.data.release_date}
            </p>
            <p className="single__movie-overview">
              <span>Overview: </span> {movieInfo.data.overview}
            </p>
            <p>
              <span>Budget: </span>
              {movieInfo.data.budget}$
            </p>
          </div>
        </div>
      ) : (
        <h1>
          <div className="loader">
            <div class="loader__wrap">
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
              <div class="bar4"></div>
              <div class="bar5"></div>
              <div class="bar6"></div>
              <div class="bar7"></div>
              <div class="bar8"></div>
              <div class="bar9"></div>
              <div class="bar10"></div>
              <div class="bar11"></div>
              <div class="bar12"></div>
            </div>
          </div>
        </h1>
      )}
    </div>
  );
};

export default SingleMovie;
