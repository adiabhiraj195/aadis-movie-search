import './App.css';
import Header from "./components/Header";
import TrendingMovies from './components/TrendingMovies';
import TrendingTV from "./components/TrendingTV";
import { useState } from 'react';
import TopMovies from './components/TopMovies';
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
            <div onClick={trendingToggleM} className={trendingTogleM ? "active selector " : "selector "}>
              <h3><a className='ancor' >Movies</a></h3>
            </div>
            <div onClick={trendingToggleTV} className={trendingTogleTV ? "active selector ancor" : "selector ancor"}>
              <h3><a className='ancor'>TV</a></h3>
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
            <div onClick={topRatedToggleM} className={topRatedTogleM ? "active selector" : "selector"}>
              <h3><a className='ancor'>Movies</a></h3>
            </div>
            <div onClick={topRatedToggleTV} className={topRatedTogleTV ? "active selector" : "selector"}>
              <h3><a className='ancor'>TV</a></h3>
            </div>
          </div>
        </div>
        <div className='movie-container'>

          {topRatedTogleM ? <TopMovies /> : <TopRatedTV />}

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
