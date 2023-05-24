import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pagination from "../components/Pagination/Pagination";
import TvCard from "../components/TvCard/TvCard";

const Tv = () => {
  const { id } = useParams();

  const [changePage, setChangePage] = useState(parseInt(id) || 1);
  const [tvList, setTvList] = useState({
    isFetched: false,
    data: {},
    totalPage: 1,
    err: false,
  });
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/popular`, {
        params: {
          api_key: "8517584592644709d437159987052f17",
          page: changePage,
        },
      })
      .then((res) =>
        setTvList({
          isFetched: true,
          data: res.data,
          totalPage: res.data.total_pages,
          err: false,
        })
      )
      .catch((error) =>
        setTvList({
          isFetched: true,
          data: [],
          totalPage: [],
          err: error,
        })
      );
  }, [changePage]);

  const handleChanger = (page) => {
    if (page > 0 && page <= tvList.totalPage) {
      setChangePage(page);
    }
  };
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
          <Pagination
            changePage={changePage}
            setChangePage={handleChanger}
            totalPage={tvList.totalPage}
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

export default Tv;
