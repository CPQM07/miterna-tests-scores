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
          {scores.cognitive_data.scores.length > 0 ? (
            <div className='col'>
              <CognitiveCard
                cognitiveDataMain={scores.cognitive_data.main}
                cognitiveDataScores={scores.cognitive_data.scores}
              />
            </div>
          ) : null}
          {scores.personality_data.scores.length > 0 ? (
            <div className='col'>
              <PersonalityCard
                personalityDataMain={scores.personality_data.main}
                personalityDataScores={scores.personality_data.scores}
              />
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}
