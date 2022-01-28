import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/layout';
import {  Movies } from "./components/movies";
import { Details } from "./components/details";
import {reducer, initialState} from "./hooks/reducer";
import {useReducer} from "react"

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <> 
      <BrowserRouter>
      <Routes>
          <Route element={<Layout />}>
            <Route exact path="/" element={<Movies state = {state} dispatch={dispatch} />}/>
            {/* <Route exact path="movies" element={<Movies/>}/> */}
            <Route exact path='details' element={<Details />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
