// Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";

class ScoreTitle extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired
  };

  render() {
    const { name, description, tooltip } = this.props;

    return (
      <div className="d-flex justify-content-between align-items-center my-2">
        <div className="d-block">
          <h5 className="text-capitalize h6 mb-0">{name}</h5>
          <small className="text-muted d-block text-justify">
            {description}
          </small>
        </div>

        <span
          className="btn text-muted"
          data-placement="top"
          data-toggle="tooltip"
          data-original-title={tooltip}
        >
          <i className="fas fa-info-circle" />
        </span>
      </div>
    );
  }
}

export default ScoreTitle;
