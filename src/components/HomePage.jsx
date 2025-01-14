
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
<div class="card">
<div className="badge">Film</div>
  <div class="content">
    <img className="cover" src={`http://image.tmdb.org/t/p/w200${curFilm.poster_path}`} alt="" />
    <div class="info">
    <div>Titolo Film: {curFilm.title}</div>
    <div>Titolo Originale:{curFilm.original_title}</div>
    <LinguaFilm filmLanguage={curFilm.original_language} />
    <div>Voto:{curFilm.vote_average}</div>
    </div>
  </div>
</div>
          </div> 
          ))}</section>
     
{/* serie tv card section  */}

     <section className="row">
        {serieList.map((curSerie, index) => (
 
          <div className="col" key={index}>
<div class="card">
  <div className="badge">Serie</div>
  <div class="content">
    <img className="cover" src={`http://image.tmdb.org/t/p/w200${curSerie.poster_path}`} alt="" />
    <div class="info">
    <div>Titolo SerieTv: {curSerie.name}</div>
    <div>Titolo Originale:{curSerie.original_name}</div>
    <LinguaFilm filmLanguage={curSerie.original_language} />
    <div>Voto:{curSerie.vote_average}</div>
    </div>
  </div>
</div>
          </div> 
          ))}</section>

      
      </main>
    </>





  )
}

export default HomePage;