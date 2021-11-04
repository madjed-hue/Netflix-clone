import React from "react";
import requests from "../requests";
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav";
import Row from "./Row";
function HomeScreen({ movie, users }) {
  return (
    <div className="homeScreen">
      <Nav users={users} />
      <Banner movie={movie} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginal}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
      <Row title="Adventure Movies" fetchURL={requests.fetchAdventure} />
      <Row title="Animation Movies" fetchURL={requests.fetchAnimation} />
      <Row title="Drama Movies" fetchURL={requests.fetchDrama} />
      <Row title="Family Movies" fetchURL={requests.fetchFamily} />
      <Row title="Fantasy Movies" fetchURL={requests.fetchFantasy} />
      <Row title="History Movies" fetchURL={requests.fetchHistory} />
      <Row title="Music Movies" fetchURL={requests.fetchMusic} />
      <Row title="Mystery Movies" fetchURL={requests.fetchMystery} />
      <Row
        title="Science Fiction Movies"
        fetchURL={requests.fetchScienceFiction}
      />
      <Row title="TV Movie" fetchURL={requests.fetchTvMovies} />
      <Row title="Thriller Movies" fetchURL={requests.fetchTvThriller} />
      <Row title="War Movies" fetchURL={requests.fetchWar} />
      <Row title="Western Movies" fetchURL={requests.fetchWestern} />
    </div>
  );
}

export default HomeScreen;
