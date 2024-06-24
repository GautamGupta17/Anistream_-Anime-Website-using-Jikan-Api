import { useState } from "react";
import Popular from "./Popular";
import { useGlobalContext } from "../context/Global";
import Upcoming from "./Upcoming";
import Airing from "./Airing";
import './Home.scss'
import PopularPG from "./PopularPG";

const HomePage = () => {
  const {
    handleSubmit,
    search,
    handleChange,
    getUpcomingAnime,
    getAiringAnime,
    getPopularAnimePG,
    getPopularAnime,
    debouncedHandleChange
  } = useGlobalContext();

  const [rendered, setRendered] = useState("popular");

  const switchComponent = () => {
    switch (rendered) {
      case "popular":
        return <Popular rendered={rendered} />;

      case "airing":
        return <Airing rendered={rendered} />;

      case "upcoming":
        return <Upcoming rendered={rendered} />;
      
      case "popularPG":
        return <PopularPG rendered={rendered}/>
        
      default:
        return <Popular rendered={rendered} />;
    }
  };

  return (
    <div className="HomePageStyles">
      <div className="heading">ANISTREAM</div>
      <header>
        <div className="search-container">
          <div className="filter-btn popular-filter">
            <button
              onClick={() => {
                setRendered("popular");
              }}
            >
              Popular 
            </button>
          </div>

          <div className="filter-btn popular-filter">
            <button
              onClick={() => {
                setRendered("popularPG");
                getPopularAnimePG();
              }}
            >
              Kids 
            </button>
          </div>

          <form className="search-form" onSubmit={handleSubmit}>
            <div className="input-control">
              <input
                type="text"
                placeholder="Search Anime"
                value={search}
                onChange={handleChange}
              />

              <button type="submit">Search</button>
            </div>
          </form>

          <div className="filter-btn airing-filter">
            <button
              onClick={() => {
                setRendered("airing");
                getAiringAnime();
              }}
            >
              Airing
            </button>
          </div>

          <div className="filter-btn upcoming-filter">
            <button
              onClick={() => {
                setRendered("upcoming");
                getUpcomingAnime();
              }}
            >
              Upcoming
            </button>
          </div>
          
        </div>
        
      </header>

      {switchComponent()}
    </div>
  );
};



export default HomePage;