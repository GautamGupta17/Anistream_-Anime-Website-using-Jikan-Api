
import { useGlobalContext } from "../context/Global";
import { Link } from "react-router-dom";
import './SideBar.scss'

const Sidebar = () => {
  const { popularAnime } = useGlobalContext();

  const sorted = popularAnime?.sort((a, b) => {
    return b.score - a.score;
  });

  //console.log(popularAnime)

  return (
    <div className="SidebarStyled">
      <h3>TOP 5</h3>
      <div className="anime">
        {sorted?.slice(0, 5)?.map((anime) => {
          return (
            <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
              <img src={anime.images.jpg.large_image_url} alt="" />

              <h5>{anime.title}</h5>
            </Link>
          );
        })}
      </div>
    </div>
  );
};



export default Sidebar;