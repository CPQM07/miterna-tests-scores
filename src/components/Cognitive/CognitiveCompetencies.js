import React, { Component } from "react";
import PropTypes from "prop-types";
import Score from "../Score/Score";

class CognitiveCompetencies extends Component {
  static propTypes = {
    scores: PropTypes.array.isRequired
  };
  render() {
    const scores = this.props.scores;
    return (
      <div className="card-body row">
        {scores.map(score => (
          <Score score={score} key={score.id} />
        ))}
      </div>
    );
  }
}

export default CognitiveCompetencies;
