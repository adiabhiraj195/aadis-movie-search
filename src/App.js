import './App.css';
import Header from "./components/Header";
import TrendingMovies from './components/TrendingMovies';
import TrendingTV from "./components/TrendingTV";
import { useState } from 'react';
import InTheatresMovies from './components/InTheatresMovies';
import TopRatedTV from './components/TopRatedTV';
import UpComing from './components/UpComing';

function App() {
  const [trendingTogleM, setTrendingTogleM] = useState(true);
  const [trendingTogleTV, setTrendingTogleTV] = useState(false);
  const trendingToggleM = () => {
    setTrendingTogleM(true);
    setTrendingTogleTV(false);
  }
  const trendingToggleTV = () => {
    setTrendingTogleM(false);
    setTrendingTogleTV(true);
  }
  const [topRatedTogleM, setTopRatedTogleM] = useState(true);
  const [topRatedTogleTV, setTopRatedTogleTV] = useState(false);
  const topRatedToggleM = () => {
    setTopRatedTogleM(true);
    setTopRatedTogleTV(false);
  }
  const topRatedToggleTV = () => {
    setTopRatedTogleM(false);
    setTopRatedTogleTV(true);
  }


  return (
    <div className="App">
      <Header />
      <section className='containers'>
        <div className='column-head'>
          <h2 className='column-heading'>Trending</h2>
          <div className='selector-wrap'>
            <div className='ancor'>
              <h3><a onClick={trendingToggleM} className={trendingTogleM ? "active selector" : "selector"}>Movies</a></h3>
            </div>
            <div className='ancor'>
              <h3><a onClick={trendingToggleTV} className={trendingTogleTV ? "active selector" : "selector"}>TV</a></h3>
            </div>
          </div>
        </div>
        <div className='movie-container'>

          {trendingTogleM ? <TrendingMovies /> : <TrendingTV />}

        </div>
      </section>
      <section className='containers'>
        <div className='column-head'>
          <h2 className='column-heading'>Top Rated</h2>
          <div className='selector-wrap'>
            <div className='ancor ancor-active'>
              <h3><a onClick={topRatedToggleM} className={topRatedTogleM ? "active selector" : "selector"}>Movies</a></h3>
            </div>
            <div className='ancor'>
              <h3><a onClick={topRatedToggleTV} className={topRatedTogleTV ? "active selector" : "selector"}>TV</a></h3>
            </div>
          </div>
        </div>
        <div className='movie-container'>

          {topRatedTogleM ? <InTheatresMovies /> : <TopRatedTV />}

        </div>
      </section>
      <section className='containers'>
        <div className='column-head'>
          <h2 className='column-heading'>Up Coming</h2>
        </div>
        <div className='movie-container'>
          <UpComing />
        </div>
      </section>

    </div>
  );
}

export default App;
