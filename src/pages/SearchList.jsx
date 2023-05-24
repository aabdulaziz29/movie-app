import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MovieCard from "../components/MovieCard/MovieCard";
const SearchList = () => {
  const { searchQuery } = useParams();

  const [SearchInfo, setSearchInfo] = useState({
    isFetched: false,
    data: {},
    err: false,
  });
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}`, {
        params: {
          api_key: "8517584592644709d437159987052f17",
        },
      })
      .then((res) =>
        setSearchInfo({
          isFetched: true,
          data: res.data,
          err: false,
        })
      )
      .catch((error) =>
        setSearchInfo({
          isFetched: true,
          data: [],
          err: error,
        })
      );
  }, [searchQuery]);
  return (
    <div className="container">
      <div>
        {SearchInfo.isFetched ? (
          <div className="cards">
            {SearchInfo.data.results.length > 0 ? (
              SearchInfo.data.results.map((movie, index) => (
                <MovieCard
                  key={index}
                  id={movie.id}
                  rating={movie.vote_average}
                  title={movie.title}
                  relaseDate={movie.release_date}
                  imgLink={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
              ))
            ) : (
              <h1 className="notfound">Nothing found for your request</h1>
            )}
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default SearchList;
