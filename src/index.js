// Dependencies
import React, { Component } from 'react'

// Components
import Header from './components/Header'
import CognitiveCard from './components/Cognitive/CognitiveCard'
import PersonalityCard from './components/Personality/PersonalityCard'

import './scss/enrollments.scss'

// Data
// import sampleScores from '../src/scores/enrollment'

export default class EnrollmentScores extends Component {
  render() {
    const { scores } = this.props

    return (
      <div className='container'>
        <Header mainData={scores.main_data} />
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <CognitiveCard
              cognitiveDataMain={scores.cognitive_data.main}
              cognitiveDataScores={scores.cognitive_data.scores}
            />
          </div>
          <div className='col-sm-12 col-md-6'>
            <PersonalityCard
              personalityDataMain={scores.personality_data.main}
              personalityDataScores={scores.personality_data.scores}
            />
          </div>
        </div>
      </div>
    )
  }
}
