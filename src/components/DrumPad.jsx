import React, { Component } from "react";

import "./DrumPad.css";

class DrumPad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      audioElement: null,
      active: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.setInactive = this.setInactive.bind(this);
  }

  componentDidMount() {
    const audioElement = document.querySelector(`#drum-pad-${this.props.keyboard} > audio`);
    audioElement.onended = this.setInactive;
    this.setState({
      audioElement
    });
  }

  handleClick({ target }) {
    this.setState({
      active: true
    });
    const audioElement = this.state.audioElement;

    audioElement.pause();
    audioElement.currentTime = 0;
    audioElement.play();

    this.props.triggered(this.props.instrument.name);
  }

  render() {
    return (
      <div
        className={"drum-pad" + (this.state.active ? " playing" : "")}
        id={`drum-pad-${this.props.keyboard}`}
        onClick={this.handleClick}
      >
        <audio className="clip" src={this.props.instrument.audio} id={this.props.keyboard.toUpperCase()} />
        <img src={this.props.instrument.image} alt={this.props.instrument.name} />
        <span>{this.props.keyboard.toUpperCase()}</span>
      </div>
    );
  }

  setInactive() {
    this.setState({
      active: false
    });
  }
}

export default DrumPad;
