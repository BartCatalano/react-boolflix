
import { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext"

function HomePage() {
 
 const {  filmList , serieList, } = useContext( GlobalContext )
  // gestione bandiera lingua
  function LinguaFilm({ filmLanguage }) {
    let bandiera = "";
    if (filmLanguage === "en") { bandiera = "./public/en.png" }
    else if (filmLanguage === "it") { bandiera = "./public/it.png" }
    else { bandiera = "./public/placeholder.png" }

    return <img className="flag" src={bandiera} alt={`${filmLanguage}`} />;
  };
// creo la funzione che divide il voto e lo arrotonda 
function creaStelle(voto) {
  let votoNumero = parseInt(voto);
  let votoStella = Math.ceil(votoNumero / 2);  // Arrotonda il numero verso l'alto

  let stelle = "";
  
  if (votoStella === 0) {
    stelle = "☆☆☆☆☆";
  } else if (votoStella === 1) {
    stelle = "★☆☆☆☆";
  } else if (votoStella === 2) {
    stelle = "★★☆☆☆";
  } else if (votoStella === 3) {
    stelle = "★★★☆☆";
  } else if (votoStella === 4) {
    stelle = "★★★★☆";
  } else if (votoStella === 5) {
    stelle = "★★★★★";
  }

  return stelle;
}



  return (
    <>
   <main className="homeArea">
     <section className="row">
      {filmList.length || serieList.length > 0 ? (""): ( <div className="homeTitle"> <h1 >Utilizza la barra di ricerca per trovare i tuoi film preferiti! </h1>
        <img className="logoHome" src="Boolflix.png" alt=""/>
      </div>)}
        {filmList.map((curFilm) => (
 
          <div className="col" key={curFilm.id}>
<div className="card">
<div className="badge">Film</div>
  <div className="content">
    <img className="cover" src={`http://image.tmdb.org/t/p/w200${curFilm.poster_path}`} alt="" />
    <div className="info">
    <div>Titolo Film: {curFilm.title}</div>
    <div>Titolo Originale:{curFilm.original_title}</div>
    <LinguaFilm filmLanguage={curFilm.original_language} />
    <div>Voto:{curFilm.vote_average}</div>
     <div>{creaStelle(curFilm.vote_average)}</div> 
    </div>
  </div>
</div>
          </div> 
          ))}</section>
     
{/* serie tv card section  */}

     <section className="row">
        {serieList.map((curSerie) => (
 
          <div className="col" key={curSerie.id}>
<div className="card">
  <div className="badge">Serie</div>
  <div className="content">
    <img className="cover" src={`http://image.tmdb.org/t/p/w200${curSerie.poster_path}`} alt="" />
    <div className="info">
    <div>Titolo SerieTv: {curSerie.name}</div>
    <div>Titolo Originale:{curSerie.original_name}</div>
    <LinguaFilm filmLanguage={curSerie.original_language} />
    <div>Voto:{creaStelle(curSerie.vote_average)}</div>
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