import React, { Component } from "react";
import DrumPad from "./DrumPad";

import "./DrumMachine.css";

class DrumMachine extends Component {
  constructor(props) {
    super(props);

    const instrumentList = [
      "Cabasas",
      "Claves",
      "Congas",
      "Cowbell",
      "Cuicas",
      "Guiros",
      "Maracas",
      "Taiko",
      "Vibraslap"
    ];

    const instruments = [];
    instrumentList.forEach(inst => {
      instruments.push({
        name: inst,
        audio: require(`../assets/${inst.toLowerCase()}.m4a`),
        image: require(`../assets/${inst.toLowerCase()}.jpg`)
      });
    });

    this.state = {
      instruments,
      lastInstrument: "Drum Machine"
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.updateLastInstrument = this.updateLastInstrument.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown({ keyCode }) {
    const div = document.querySelector(`#drum-pad-${String.fromCharCode(keyCode).toLowerCase()}`);
    if (div) {
      div.click();
    }
  }

  render() {
    const keys = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];
    const drumPads = this.state.instruments.map((inst, index) =>
      <DrumPad
        key={keys[index]}
        keyboard={keys[index]}
        instrument={inst}
        triggered={this.updateLastInstrument}
      />
    );
    return (
      <div id="drum-machine">
        {drumPads}
        <p id="display">{this.state.lastInstrument}</p>
      </div>
    );
  }

  updateLastInstrument(lastInstrument) {
    this.setState({
      lastInstrument
    })
  }
}

export default DrumMachine;
