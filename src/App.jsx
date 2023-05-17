import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header";
import { Home, Movie, SearchList, SingleMoves, SingleTv, Tv } from "./pages";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/tv" element={<Tv />} />
            <Route path="/movie/:id" element={<SingleMoves />} />
            <Route path="/tv/:id" element={<SingleTv />} />
            <Route path="/search/:searchQuery" element={<SearchList />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
