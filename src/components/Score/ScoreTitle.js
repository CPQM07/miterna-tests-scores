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
      <div className="d-flex w-100 justify-content-between align-items-center mb-1">
        <div className="d-block">
          <h5 className="h6  mb-0 mt-2">{name}</h5>
          <small className="text-muted d-block text-justify">
            {description}
          </small>
        </div>
        <div className="float-right">
          <button
            className="btn text-muted"
            data-placement="top"
            data-toggle="tooltip"
            title=""
            type="button"
            data-original-title={tooltip}
          >
            <i className="fas fa-info-circle" />
          </button>
        </div>
      </div>
    );
  }
}

export default ScoreTitle;
