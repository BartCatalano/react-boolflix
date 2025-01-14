
import { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext"

function HomePage() {
 
 const { ricercaTotale, filmList , serieList, searchValue, setSearchValue } = useContext( GlobalContext )
  // gestione bandiera lingua
  function LinguaFilm({ filmLanguage }) {
    let bandiera = "";
    if (filmLanguage === "en") { bandiera = "./public/en.png" }
    else if (filmLanguage === "it") { bandiera = "./public/it.png" }
    else { bandiera = "./public/placeholder.png" }

    return <img className="flag" src={bandiera} alt={`${filmLanguage}`} />;
  };

  return (
    <>
   <main className="homeArea">
     <section className="row">
        {filmList.map((curFilm, index) => (
 
          <div className="col" key={index}>
            <div className="card">
            <div className="title">Titolo Film: {curFilm.title}</div>
            <div ><img className="cover" src={`http://image.tmdb.org/t/p/w342${curFilm.poster_path}`}alt="" /></div>
            <div>Titolo Originale:{curFilm.original_title}</div>
            <div>Voto:{curFilm.vote_average}</div>
            <LinguaFilm filmLanguage={curFilm.original_language} />
            </div>
          </div> 
          ))}</section>
     

      {/* section card serie */}
      <section><ul > 
        {serieList.map((curSerie, index) => (

          <li key={index}>
            <div>Titolo Serie Tv: {curSerie.name}</div>
            <div><img className="cover" src={`http://image.tmdb.org/t/p/w200${curSerie.poster_path}`}alt="" /></div>
            <div>Titolo Originale:{curSerie.original_name}</div>
            <div>Voto:{curSerie.vote_average}</div>
            <LinguaFilm filmLanguage={curSerie.original_language} />

          </li>))}</ul>
      </section>
      </main>
    </>





  )
}

export default HomePage;