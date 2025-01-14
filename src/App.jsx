import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import AppLayout from "./components/AppLayout"
import axios from "axios"
import { createContext, useState } from "react"
import GlobalContext from "./context/GlobalContext"


function App() {

  const [searchValue, setSearchValue] = useState("");

  // creo la funzione che mi recupera i film
  function getMovies(){
  axios.get(`https://api.themoviedb.org/3/search/movie`, {
    params:{
      api_key:"9747e71f3892213fee4eb32a803b14d3",
      query: searchValue,
    },
  }).then((resp) =>{
      
      console.log(resp);
      
      
  })
}
const { global } = createContext(GlobalContext);
const globalContext = {setSearchValue}

  return (
    <>
    <GlobalContext.Provider value={globalContext}>
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
