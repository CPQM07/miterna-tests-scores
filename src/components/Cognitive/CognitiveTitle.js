// Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import CompletedInfo from "../TestNumber/CompletedInfo";

class CognitiveTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    testsCompleted: PropTypes.number.isRequired,
    testsTotal: PropTypes.number.isRequired
  };

  render() {
    const {
      title,
      description,
      score,
      testsCompleted,
      testsTotal
    } = this.props;

    const iconBrain = <FontAwesomeIcon icon={faBrain} />;

    return (
      <div
        className="card-header bg-white border-bottom-0 __with_collapsible-icons"
        id="headingCognitiveSkills"
      >
        <button
          aria-controls="collapseCognitiveSkills"
          aria-expanded="true"
          className="btn btn-link no-underline p-0 d-block text-left text-dark w-100"
          data-target="#collapseCognitiveSkills"
          data-toggle="collapse"
          type="button"
        >
          <div className="d-flex justify-content-between">
            <div>
              <div className="d-inline-block w-100 d-flex align-items-center my-1">
                <i className="fas fa-pull-left h5 mb-0">{iconBrain}</i>
                <h3 className="h5 mb-0 d-inline-block">{title}</h3>
                <span
                  className="badge badge-pill badge-primary text-center ml-2"
                  data-placement="bottom"
                  data-toggle="tooltip"
                  title="Puntaje Cognitivo"
                  data-original-title="Puntaje Cognitivo"
                >
                  {score}%
                </span>
              </div>
              <small className="text-muted mb-0 pr-2 pr-sm-0">
                {description}
              </small>
            </div>

            <div className="d-flex align-items-center">
              <CompletedInfo
                testsCompleted={testsCompleted}
                testsTotal={testsTotal}
              />
            </div>
          </div>
        </button>
      </div>
    );
  }
}

export default CognitiveTitle;
