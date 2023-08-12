import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import AllNews from './components/AllNews';

 export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div style={{marginTop: "6rem"}}>
          <Routes>
            <Route path={"/"} element={<News key={"general"} category={"general"} />} />
            <Route path={"/sports"} element={<News key={"sports"} category={"sports"} />} />
            <Route path={"/business"} element={<News key={"business"} category={"business"} />} />
            <Route path={"/entertainment"} element={<News key={"entertainment"} category={"entertainment"} />} />
            <Route path={"/health"} element={<News key={"health"} category={"health"} />} />
            <Route path={"/science"} element={<News key={"science"} category={"science"} />} />
            <Route path={"/sports"} element={<News key={"sports"} category={"sports"} />} />
            <Route path={"/technology"} element={<News key={"technology"} category={"technology"} />} />
            <Route path={"/everything"} element={<AllNews />} />
          </Routes>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
