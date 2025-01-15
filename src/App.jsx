import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import AppLayout from "./components/AppLayout"
import { createContext, useContext, useState  } from "react";
import GlobalContext from "./context/GlobalContext"
import axios from "axios";
function App() {
 
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

// funzione che fa le due chiamate axios
function ricercaTotale() {
  getMovies();
  getSeries()
}

// imposto il global context
// const { global } = createContext(GlobalContext);



const globalContextData = { 
  ricercaTotale ,
  filmList, 
  serieList, 
  searchValue, 
  setSearchValue,
}
 

return (
    <>
    <GlobalContext.Provider value={globalContextData}>
      <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
        <Route path="/" element={<HomePage />} />
      </Route>
      </Routes>
      </BrowserRouter>
     </GlobalContext.Provider>
    </>
  )
}

export default App
