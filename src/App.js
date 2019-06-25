import React from 'react';
import './App.css';
import Jumbotron from './components/Jumbotron/Jumbotron'
import HightlightsPanel from './components/HighlightsPannel/HighlightsPannel'
import Footer from './components/Footer/Footer';
import EmailBar from './components/EmailBar/EmailBar';

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
