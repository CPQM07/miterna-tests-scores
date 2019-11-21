// Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";
import ProfileScore from "../Profile/ProfileScore";
import FavoriteProfileScore from "../Profile/FavoriteProfileScore";

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
    const differenceScore = Math.abs(optimalScore - profiledScore);

    if (optimalScore && profiledScore && differenceScore <= 5) {
      return (
        <div>
          <div className="d-block relative-item">
            <input
              type="range"
              disabled
              readOnly
              className="custom-range without_slider"
            ></input>
            <FavoriteProfileScore
              profiledScore={profiledScore}
              optimalScore={optimalScore}
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
    if (optimalScore && profiledScore) {
      return (
        <div>
          <div className="d-block relative-item">
            <input
              type="range"
              disabled
              readOnly
              className="custom-range without_slider"
            ></input>
            <ProfileScore
              score={profiledScore}
              tooltipMessage="Puntaje Logrado"
              icon="fa-user"
            />

            <ProfileScore
              score={optimalScore}
              tooltipMessage="Puntaje Óptimo"
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
            readOnly
            className="custom-range without_slider"
          ></input>
          <ProfileScore
            score={roundedScore}
            tooltipMessage="Puntaje Logrado"
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
