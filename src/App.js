import React from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron/Jumbotron'
import HightlightsPanel from './components/HighlightsPannel/HighlightsPannel'
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div>
      <Jumbotron/>
        <HightlightsPanel/>
      <Footer/>
    </div>
  );
}

export default App;
