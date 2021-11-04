import axios from "../axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "../requests";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";

function Banner() {
  const [movie, setMovie] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal);
      const result = request.data.results;
      setMovie(result[Math.floor(Math.random() * result.length - 1)]);
      return request;
    }
    fetchData();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${
          movie?.backdrop_path || movie?.poster_path
        })`,
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="bunner__buttons">
          <button className="banner__btn">
            <PlayArrowIcon /> Play
          </button>
          <button className="banner__btn">
            <PlaylistPlayIcon /> My List
          </button>
        </div>
        <h1 className="banner__desc">{truncate(`${movie.overview}`, 150)}</h1>
      </div>
      <div className="banner--fadeButton" />
    </header>
  );
}

export default Banner;
