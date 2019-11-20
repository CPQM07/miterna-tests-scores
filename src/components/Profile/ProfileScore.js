// Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";

class ProfileScore extends Component {
  static propTypes = {
    profiledScore: PropTypes.number.isRequired,
    optimalScore: PropTypes.number.isRequired,
    isPostulationScore: PropTypes.bool.isRequired
  };
  render() {
    const { score, tooltipMessage, icon } = this.props;
    const _roundedScore = Math.round(score);
    const message = `${tooltipMessage}: ${_roundedScore}%`;

    return (
      <div className="indicator" style={{ left: _roundedScore + "%" }}>
        <button
          className="button btn btn-link p-2 border-0 text-primary"
          data-placement="top"
          data-toggle="tooltip"
          data-original-title={`${message}`}
        >
          <i className={`fas ${icon} fa-xs text-primary`} />
        </button>
      </div>
    );
  }
}

export default ProfileScore;
