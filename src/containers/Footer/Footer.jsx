import Applications from "../../assets/images/googleplay-appstore.png";
import "./Footer.scss";
function Footer() {
  return (
    <footer className="site__footer">
      <div className="container">
        <div className="footer__wrap">
          <div className="footer__left">
            <img src={Applications} alt="Applications" />
          </div>
          <div className="footer__center">
            <p>
              <i class="fa-solid fa-envelope"></i>
              <span>@kinopoisksupport</span>
            </p>
            <div className="tel">
              <p>
                <i class="fa-solid fa-phone"></i> <span>1132</span>
              </p>
              <p>
                <i class="fa-solid fa-phone"></i> <span>+998 71 252 74 77</span>
              </p>
            </div>
          </div>
          <div className="footer__right">
            <div className="networks">
              <p>
                <i class="fa-brands fa-telegram"></i>
              </p>
              <p>
                <i class="fa-brands fa-instagram"></i>
              </p>
              <p>
                <i class="fa-brands fa-facebook"></i>
              </p>
            </div>
            <p>© 2011-2023. Kinopoisk</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
