import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import AppLayout from "./components/AppLayout"

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
        <Route path="/" element={<HomePage />} />
      </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
