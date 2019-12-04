// Dependencies
import React, { Component } from 'react'

// Components
import Header from './components/Header'
import CognitiveCard from './components/Cognitive/CognitiveCard'
import PersonalityCard from './components/Personality/PersonalityCard'

import './scss/enrollments.scss'

// import scores from '../src/scores/enrollment'

export default class EnrollmentScores extends Component {
  render() {
    const { scores } = this.props
    const { enrollment_id, profile_id } = scores.main_data

    return (
      <div className='container'>
        <Header mainData={scores.main_data} />
        <div className='row'>
          {scores.cognitive_data.scores.length > 0 ? (
            <div className='col'>
              <CognitiveCard
                cognitiveDataMain={scores.cognitive_data.main}
                cognitiveDataScores={scores.cognitive_data.scores}
                hasProfile={!!profile_id}
                enrollment={enrollment_id}
              />
            </div>
          ) : null}
          {scores.personality_data.scores.length > 0 ? (
            <div className='col'>
              <PersonalityCard
                personalityDataMain={scores.personality_data.main}
                personalityDataScores={scores.personality_data.scores}
                hasProfile={!!profile_id}
                enrollment={enrollment_id}
              />
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}
