import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route  } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={}>

          </Route>
          <Route element={<Layout />}>
            <Route path='movies' element={}/>
            <Route path='details:id' element={}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
