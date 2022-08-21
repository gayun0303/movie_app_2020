import React from "react";
import './App.css';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from "./components/Navigation";
import Detail from './routes/Detail';

function App() {
  //return <Home />;
  return(
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/movie-detail" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// return(
//   <HashRouter>
//     <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/home" element={<h1>Home</h1>}/>
//       <Route path="/home/introduction" element={<h1>Introduction</h1>}/>
//       <Route path="/about" element={<h1>About</h1>}/>
//     </Routes>
//   </HashRouter>
// );