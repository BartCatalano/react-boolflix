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
            
               <li key={index}>{curFilm.original_title}

                  </li>  ))}</ul>
                  
            
  
           
        </section>
        
        </>





    )
}

export default HomePage;