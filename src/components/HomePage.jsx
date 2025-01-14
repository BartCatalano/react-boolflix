import axios from "axios";
import { useState } from "react";

function HomePage () {
    const [searchValue, setSearchValue] = useState("");
    const[filmList, setFilmList] = useState([]);

  

    // creo la funzione che mi recupera i film
  function getMovies(){
    axios.get(`https://api.themoviedb.org/3/search/movie`, {
      params:{
        api_key:"9747e71f3892213fee4eb32a803b14d3",
        query: searchValue,
      },
      
    }).then((resp) =>{
        setFilmList(resp.data.results);
        console.log(resp.data.results);
        
    })
  }
const filmLanguage="";
  // gestione bandiera lingua
  function LinguaFilm ({filmLanguage}) {
    let bandiera = "";
    if(filmLanguage === "en"){ bandiera = "./public/en.png"}
    else if (filmLanguage === "it") {bandiera ="./public/it.png"}
     else { bandiera = "./public/placeholder.png"}
      
     return <img src={bandiera} alt={`${filmLanguage}`} />;
      
      

    };

    return(
        <>
        {/* section input serch */}
        <div>
        <input type="search" value={searchValue} onChange={(event) =>setSearchValue(event.target.value)} />
         <button onClick={getMovies}>Cerca</button>
        </div>
        {/* Section card */}
        <section><ul >
         {filmList.map((curFilm, index) => (
           
               <li key={index}>
                <div>Titolo: {curFilm.title}</div>
                <div>Titolo Originale:{curFilm.original_title}</div>
                <div>Voto:{curFilm.vote_average}</div>
                <div><LinguaFilm filmLanguage={curFilm.original_language} /></div>
                
                



                  </li>  ))}</ul>
                  
            
  
           
        </section>
        
        </>





    )
}

export default HomePage;