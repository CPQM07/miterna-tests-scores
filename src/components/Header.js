// Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import CompletedInfo from "./TestNumber/CompletedInfo";
import Profile from "./Profile/Profile";

class Header extends Component {
  static propTypes = {
    mainData: PropTypes.object.isRequired
  };

  render() {
    const mainData = this.props.mainData;

    return (
      <div className="card bg-white mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-12 col-md-8">
              <CompletedInfo
                testsCompleted={mainData.count_rendered}
                testsTotal={mainData.count_total}
              />
              <span className="badge badge-success">
                <i className="fas mr-1" />
                Estado: {mainData.es_status}
              </span>
              <span className="badge badge-success">
                <i className="fas mr-1" />
                Estado: {mainData.profile_name}
              </span>
            </div>
            <div className="col-sm-12 col-md-4 text-right">
              <span className="badge rounded-lg  text-center p-3 my-2 mx-auto badge-secondary">
                <h2 className="h3 mb-0 font-weight-bold">
                  {mainData.main_score}%
                </h2>
                <small>Puntaje Total</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
