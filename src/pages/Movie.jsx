import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard/MovieCard";
import Pagination from "../components/Pagination/Pagination";

const Movie = () => {
  const { id } = useParams();

  const [changePage, setChangePage] = useState(parseInt(id) || 1);
  const navigate = useNavigate();
  const [movieList, setMovieList] = useState({
    isFetched: false,
    data: {},
    totalPage: 1,
    err: false,
  });

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular`, {
        params: {
          api_key: "8517584592644709d437159987052f17",
          page: changePage,
        },
      })
      .then((res) =>
        setMovieList({
          isFetched: true,
          data: res.data,
          totalPage: res.data.total_pages,
          err: false,
        })
      )
      .catch((error) =>
        setMovieList({
          isFetched: true,
          data: [],
          totalPage: [],
          err: error,
        })
      );
  }, [changePage]);

  const handleChanger = (page) => {
    if (page > 0 && page <= movieList.totalPage) {
      setChangePage(page);
    }
  };
  console.log(movieList);
  return (
    <div>
      {movieList.isFetched ? (
        <div className="container">
          <div className="cards">
            {movieList.data.results.map((movie, index) => (
              <MovieCard
                key={index}
                id={movie.id}
                rating={movie.vote_average}
                title={movie.title}
                relaseDate={movie.release_date}
                imgLink={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
            ))}
          </div>
          <Pagination
            changePage={changePage}
            setChangePage={handleChanger}
            totalPage={movieList.totalPage}
          />
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
  );
};

export default Movie;
