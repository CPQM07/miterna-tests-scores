// Dependencies
import React, { Component } from 'react'

// Components
import Header from './components/Header'
import CognitiveCard from './components/Cognitive/CognitiveCard'
import PersonalityCard from './components/Personality/PersonalityCard'

import './scss/enrollments.scss'

// Data
import sampleScores from '../src/scores/enrollment'

export default class EnrollmentScores extends Component {
  render() {
    return (
      <div className='container'>
        <Header mainData={sampleScores.main_data} />
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <CognitiveCard
              cognitiveDataMain={sampleScores.cognitive_data.main}
              cognitiveDataScores={sampleScores.cognitive_data.scores}
            />
          </div>
          <div className='col-sm-12 col-md-6'>
            <PersonalityCard
              personalityDataMain={sampleScores.personality_data.main}
              personalityDataScores={sampleScores.personality_data.scores}
            />
          </div>
        </div>
      </div>
    )
  }
}
