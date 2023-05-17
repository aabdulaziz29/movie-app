import { Link } from "react-router-dom";
import { useState } from "react";

import "./Header.scss";
import siteLogo from "../../assets/images/site-logo.png";
function Header() {
  const [color, setColor] = useState("home");
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <div className="header__left">
            <Link
              to="/"
              className={`header__link ${color === "home" ? "active" : " "}`}
              onClick={() => setColor("home")}
            >
              <img className="site__logo" src={siteLogo} alt="" />
            </Link>
          </div>
          <nav className="header__center">
            <ul>
              <li>
                <Link
                  className={`header__link ${
                    color === "home" ? "active" : " "
                  }`}
                  onClick={() => setColor("home")}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`header__link ${
                    color === "movie" ? "active" : " "
                  }`}
                  onClick={() => setColor("movie")}
                  to="/movie"
                >
                  Movie
                </Link>
              </li>
              <li>
                <Link
                  className={`header__link ${color === "tv" ? "active" : " "}`}
                  onClick={() => setColor("tv")}
                  to="/tv"
                >
                  TV
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header__right">
            <form>
              <input type="search" placeholder="Input here..." />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
