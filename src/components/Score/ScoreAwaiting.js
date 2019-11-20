// Dependencies
import React, { Component } from "react";

class ScoreAwaiting extends Component {
  render() {
    return (
      <small className="text-info">
        <strong>
          <i className="fas fa-spinner fa-pulse mr-1" />
          &nbsp;En espera de resultados:
        </strong>
        &nbsp;
        <span>El candidato no ha rendido esta evaluación</span>
      </small>
    );
  }
}

export default ScoreAwaiting;
