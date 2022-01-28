import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/layout';
import {  Movies } from "./components/movies";
import { Details } from "./components/details";


// import AutoSizer from 'react-virtualized-auto-sizer';
// import { FixedSizeList as List } from 'react-window';
 
// const Row = ({ index, style }) => (
//   <div style={style}>Row {index}</div>
// );


// const MakeList = ({height, width}) => (
//     <List
//       height={height}
//       itemCount={100}
//       itemSize={35}
//       width={width}
//     >
//       {Row}
//     </List>
// )

//     <div className="app-container">
//       <AutoSizer>
//         {MakeList}
//       </AutoSizer> 
//     </div>  


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
