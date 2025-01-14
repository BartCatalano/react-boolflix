import { useContext, useState } from "react";
import GlobalContext from "./context/GlobalContext";

function AppHeader () {


const {setSearchValue, searchValue, getMovies} = useContext(GlobalContext);

    return(
        <div>
        <h1>sono Header</h1>
        <input type="search" value={searchValue} onChange={(event) =>setSearchValue(event.target.value)} />
         <button onClick={getMovies}>Cerca</button>
        </div>
    )
}

export default AppHeader;