// Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";

// Components
import CompletedInfo from "./TestNumber/CompletedInfo";
import Profile from "./Profile/Profile";
import { Circle } from "rc-progress";

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

            <div style={{ width: "60px", height: "60px" }}>
              <Circle
                percent={mainData.main_score}
                strokeWidth="10"
                strokeLinecap="round"
                strokeColor={
                  ("#87d068",
                  {
                    "0%": "#20bcfa",
                    "100%": "#5a3ee0"
                  })
                }
              />
            </div>
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
