import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/layout';
import {  Movies } from "./components/movies";
import { Details } from "./components/details";

function App() {
  return (
    <> 
      <BrowserRouter>
      <Routes>
          <Route element={<Layout />}>
            <Route exact path="/" element={<Movies/>}/>
            <Route exact path="movies" element={<Movies/>}/>
            <Route exact path='details' element={<Details />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
