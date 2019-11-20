// Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";
import ProfileScore from "../Profile/ProfileScore";

class ScoreCompleted extends Component {
  static propTypes = {
    score: PropTypes.number.isRequired,
    lowLevel: PropTypes.string.isRequired,
    highLevel: PropTypes.string.isRequired
  };

  render() {
    const { score, lowLevel, highLevel } = this.props;
    const { profiledScore, optimalScore } = this.props;
    const roundedScore = Math.round(score);

    if (optimalScore && profiledScore) {
      return (
        <div>
          <div className="d-block relative-item">
            <input
              type="range"
              disabled
              readonly
              min="0"
              max="100"
              class="custom-range without_slider"
            ></input>
            <ProfileScore
              score={profiledScore}
              tooltipMessage="Porcentaje Logrado"
              icon="fa-user"
            />

            <ProfileScore
              score={optimalScore}
              tooltipMessage="Porcentaje Óptimo"
              icon="fa-star"
            />
          </div>

          <div className="row text-primary">
            <div className="col-sm-6 text-left">
              <small>{lowLevel}</small>
            </div>

            <div className="col-sm-6 text-right">
              <small>{highLevel}</small>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="d-block relative-item">
          <input
            type="range"
            disabled
            readonly
            min="0"
            max="100"
            class="custom-range without_slider"
          ></input>
          <ProfileScore
            score={roundedScore}
            tooltipMessage="Porcentaje Logrado"
            icon="fa-user"
          />
        </div>

        <div className="row text-primary">
          <div className="col-sm-6 text-left">
            <small>{lowLevel}</small>
          </div>

          <div className="col-sm-6 text-right">
            <small>{highLevel}</small>
          </div>
        </div>
      </div>
    );
  }
}

export default ScoreCompleted;
