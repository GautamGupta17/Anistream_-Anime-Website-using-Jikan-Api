import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './Details.scss'


const AnimeItem = () => {
  const { id } = useParams();

  // state
  const [anime, setAnime] = useState({});
  const [characters, setCharacters] = useState([]);
  const [showMore, setShowMore] = useState(false);

  // destructure anime
  const {
    title,
    synopsis,
    trailer,
    duration,
    aired,
    season,
    images,
    rank,
    score,
    scored_by,
    popularity,
    status,
    rating,
    source,
  } = anime;

  // get anime based on id
  const getAnime = async (anime) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${anime}`);

    const data = await response.json();
    setAnime(data.data);
  };

  //   get characters
  const getCharacters = async (anime) => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime/${anime}/characters`
    );

    const data = await response.json();

    setCharacters(data.data);
    console.log(data.data);
  };

  // initial renders
  useEffect(() => {
    getAnime(id);
    getCharacters(id);
  }, []);

  console.log(anime)
  console.log(characters)

  return <>
  <nav>
    <Link to={'/'}><div className="heading">ANISTREAM</div></Link>
  </nav>
    <div className="AnimeItemStyled">
      <div className="details">
      <h1>{title}</h1>
        <div className="detail">
          <div className="image">
            <img src={images?.jpg.large_image_url} alt="" />
          </div>
          <p className="description">
            {synopsis}
         </p>
          
        </div>

        <div className="anime-details">
            <p>
              <span>Aired: </span>
              <span>{aired?.string}</span>
            </p>

            <p>
              <span>Rating: </span>
              <span>{rating}</span>
            </p>

            <p>
              <span>Rank: </span>
              <span>{rank}</span>
            </p>

            <p>
              <span>Score: </span>
              <span>{score}</span>
            </p>


            <p>
              <span>Popularity: </span>
              <span>{popularity}</span>
            </p>

            <p>
              <span>Status: </span>
              <span>{status}</span>
            </p>

            <p>
              <span>Source: </span>
              <span>{source}</span>
            </p>

            <p>
              <span>Season: </span>
              <span>{season}</span>
            </p>

            <p>
              <span>Duration: </span>
              <span>{duration}</span>
            </p>
          </div>
        
      </div>

      <h3 className="title">Trailer</h3>

      <div className="trailer-con">
        {trailer?.embed_url ? (
          <iframe
            src={trailer?.embed_url}
            title="Inline Frame Example"
            width="800"
            height="450"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <h3>Trailer and Characters are not available</h3>
        )}
      </div>

      <h3 className="title">Characters</h3>
      <div className="characters">
        {characters?.map((character, index) => {
          const { role } = character;
          const { images, name, mal_id } = character.character;

          return (
            <Link to={`/character/${mal_id}`} key={index}>
              <div className="character">
                <img src={images?.jpg.image_url} alt="" />
                <h4>{name}</h4>
                <p>{role}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
    </>
};



export default AnimeItem;