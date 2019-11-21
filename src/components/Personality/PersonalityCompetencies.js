import React, { Component } from "react";
import Score from "../Score/Score";
import PropTypes from "prop-types";

class PersonalityCompetencies extends Component {
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

export default PersonalityCompetencies;
