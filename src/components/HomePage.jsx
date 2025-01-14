import axios from "axios";
import { useState } from "react";

function HomePage() {
  const [searchValue, setSearchValue] = useState("");
  const [filmList, setFilmList] = useState([]);
  const [serieList, setSerieList] = useState([]);




  // creo la funzione che mi recupera i film
  function getMovies() {
    axios.get(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        api_key: "9747e71f3892213fee4eb32a803b14d3",
        query: searchValue,
      },

    }).then((resp) => {
      setFilmList(resp.data.results);
      
    })
  }
// creo la funzione che chiama api per prendere le serie tv
  function getSeries() {
    axios.get(`https://api.themoviedb.org/3/search/tv`, {
      params: {
        api_key: "9747e71f3892213fee4eb32a803b14d3",
        query: searchValue,
      },
    }).then((resp) => {
      setSerieList(resp.data.results)
    })
  }

  // creo una funzione che richiama entrambe le liste
  function ricercaTotale() {
    getMovies();
    getSeries()
  }

  // gestione bandiera lingua
  function LinguaFilm({ filmLanguage }) {
    let bandiera = "";
    if (filmLanguage === "en") { bandiera = "./public/en.png" }
    else if (filmLanguage === "it") { bandiera = "./public/it.png" }
    else { bandiera = "./public/placeholder.png" }

    return <img src={bandiera} alt={`${filmLanguage}`} />;
  };

  return (
    <>
      {/* section input serch */}
      <div>
        <input type="search" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
        <button onClick={ricercaTotale}>Cerca</button>
      </div>
      {/* Section card film */}
      <section><ul >
        {filmList.map((curFilm, index) => (

          <li key={index}>
            <div>Titolo Film: {curFilm.title}</div>
            <div><img src={`http://image.tmdb.org/t/p/w200${curFilm.poster_path}`}alt="" /></div>
            <div>Titolo Originale:{curFilm.original_title}</div>
            <div>Voto:{curFilm.vote_average}</div>
            <LinguaFilm filmLanguage={curFilm.original_language} />

          </li>))}</ul>
      </section>

      {/* section card serie */}
      <section><ul > 
        {serieList.map((curSerie, index) => (

          <li key={index}>
            <div>Titolo Serie Tv: {curSerie.name}</div>
            <div><img src={`http://image.tmdb.org/t/p/w200${curSerie.poster_path}`}alt="" /></div>
            <div>Titolo Originale:{curSerie.original_name}</div>
            <div>Voto:{curSerie.vote_average}</div>
            <LinguaFilm filmLanguage={curSerie.original_language} />

          </li>))}</ul>
      </section>
    </>





  )
}

export default HomePage;