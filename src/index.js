// Dependencies
import React, { Component } from "react";

// Components
import Header from "./components/Header";
import CognitiveCard from "./components/Cognitive/CognitiveCard";
import PersonalityCard from "./components/Personality/PersonalityCard";

// Assets
import "bootstrap/dist/css/bootstrap.css";
import "./scss/enrollments.scss";

// Data
import sampleScores from "../src/scores/enrollment";

export default class EnrollmentScores extends Component {
  render() {
    return (
      <div className="container">
        <Header mainData={sampleScores.main_data} />
        <div className="row">
          <div className="col-md-12">
            <CognitiveCard
              cognitiveDataMain={sampleScores.cognitive_data.main}
              cognitiveDataScores={sampleScores.cognitive_data.scores}
            />
            <PersonalityCard
              personalityDataMain={sampleScores.personality_data.main}
              personalityDataScores={sampleScores.personality_data.scores}
            />
          </div>
        </div>
      </div>
    );
  }
}
