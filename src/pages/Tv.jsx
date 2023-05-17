import axios from "axios";
import { useEffect, useState } from "react";
import TvCard from "../components/TvCard/TvCard";

const Tv = () => {
  const [tvList, setTvList] = useState({
    isFetched: false,
    data: {},
    err: false,
  });
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/popular`, {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
        },
      })
      .then((res) =>
        setTvList({
          isFetched: true,
          data: res.data,
          err: false,
        })
      )
      .catch((error) =>
        setTvList({
          isFetched: true,
          data: [],
          err: error,
        })
      );
  }, []);

  console.log(tvList);
  return (
    <div>
      {tvList.isFetched ? (
        <div className="container">
          <div className="cards">
            {tvList.data.results.map((tv, index) => (
              <TvCard
                key={index}
                id={tv.id}
                rating={tv.vote_average}
                title={tv.name}
                relaseDate={tv.first_air_date}
                imgLink={`https://image.tmdb.org/t/p/w500/${tv.backdrop_path}`}
              />
            ))}
          </div>
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

export default Tv;
