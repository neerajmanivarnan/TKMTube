
import "./App.css";
import React from "react";
import Header from "./components/Header";
import Blog from "./components/Blog";


function App() {

  return (
    <>
   <Header />
   <Blog/>
   </>
  );
}
export default App;

// App.js

import React from 'react';
import Navbar from './Navbar';
import './App.css';
import Footer from './Footer';
import Blog from './Blog';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* Your other components and content will go here */}
        <h1>Welcome to My Blog</h1>
        <Blog />
      </div>
      <Footer />
    </div>
  );
}

export default App;

