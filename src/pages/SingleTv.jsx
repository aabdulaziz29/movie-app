import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const SingleTv = () => {
  const { id } = useParams();

  const [tvInfo, setTvInfo] = useState({
    isFetched: false,
    data: {},
    err: false,
  });
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/${id}`, {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
        },
      })
      .then((res) =>
        setTvInfo({
          isFetched: true,
          data: res.data,
          err: false,
        })
      )
      .catch((error) =>
        setTvInfo({
          isFetched: true,
          data: [],
          err: error,
        })
      );
  }, []);

  console.log(tvInfo);
  return (
    <div className="container">
      {tvInfo.isFetched ? (
        <div className="single__movie">
          <img
            src={`https://image.tmdb.org/t/p/w500/${tvInfo.data.poster_path}`}
            alt=""
          />
          <div className="single__movie-text">
            <h1>{tvInfo.data.name}</h1>
            <span className="single__movie-rating">
              {tvInfo.data.vote_average}
            </span>
            <p>
              <span>Date: </span> {tvInfo.data.release_date}
            </p>
            <p className="single__movie-overview">
              <span>Overview: </span> {tvInfo.data.overview}
            </p>
            <p>
              <span>Budget: </span>
              {tvInfo.data.budget}$
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

export default SingleTv;
