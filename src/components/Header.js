// Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import CompletedInfo from "./TestNumber/CompletedInfo";
import Profile from "./Profile/Profile";
// import { Circle } from "rc-progress";

class Header extends Component {
  static propTypes = {
    mainData: PropTypes.object.isRequired
  };

  render() {
    const mainData = this.props.mainData;

    return (
      <div className="card card-hover bg-white mb-4">
        <div className="card-body">
          <div className=" d-flex flex-column align-items-center justify-content-center">
            <small className="text-primary">{`Score: ${mainData.main_score}%`}</small>

            <CompletedInfo
              testsCompleted={mainData.count_rendered}
              testsTotal={mainData.count_total}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
