import React, { Component } from 'react';
import DrumMachine from "./DrumMachine";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Drum Machine</h1>
        </header>
        <main>
        <DrumMachine />
        </main>
        <footer>
          <p>Coded by <a href="https://deepanshusinha.me" target="_blank" rel="noopener noreferrer">Deepanshu Sinha</a></p>
          <p>
            Samples from the&nbsp;
            <a href="https://soundpacks.com/free-sound-packs/live-percussion-sample-pack/" target="_blank" rel="noopener noreferrer">
              Live Percussion Sample Pack (Free Download) - SoundPacks.com
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
