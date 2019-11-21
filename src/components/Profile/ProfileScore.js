// Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";

class ProfileScore extends Component {
  static propTypes = {
    score: PropTypes.number.isRequired,
    tooltipMessage: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };
  render() {
    const { score, tooltipMessage, icon } = this.props;
    const _roundedScore = Math.round(score);
    const message = `${tooltipMessage}: ${_roundedScore}%`;

    return (
      <div className="indicator" style={{ left: _roundedScore + "%" }}>
        <span
          className="btn _btn-circle _btn-circle-sm m-1"
          data-placement="top"
          data-toggle="tooltip"
          data-original-title={`${message}`}
        >
          <i className={`fas ${icon} fa-uxs text-primary mt-1`} />
        </span>
      </div>
    );
  }
}

export default ProfileScore;
