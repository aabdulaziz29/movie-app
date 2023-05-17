import BgImg from "../assets/images/bg-color.jpg";
function Home() {
  return (
    <div className="home">
      <div className="container">
        <h1>
          Movies and series by Kinopoisk subscription{" "}
          <span>30 days for $10.99</span>
        </h1>
        <div className="home__btn">
          <button>Try 30 days for $10.99</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
