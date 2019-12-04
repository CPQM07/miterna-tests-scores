// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import PersonalityTitle from './PersonalityTitle'
import PersonalityCompetencies from './PersonalityCompetencies'

class PersonalityCard extends Component {
  static propTypes = {
    personalityDataMain: PropTypes.object.isRequired,
    personalityDataScores: PropTypes.array.isRequired
  }

  render() {
    const {
      personalityDataMain,
      personalityDataScores,
      hasProfile,
      enrollment
    } = this.props

    return (
      <div className='card card-hover mb-4'>
        <PersonalityTitle
          title={personalityDataMain.title}
          description={personalityDataMain.description}
          score={personalityDataMain.personality_score}
          testsCompleted={personalityDataMain.count_rendered}
          testsTotal={personalityDataMain.count_total}
          hasProfile={hasProfile}
          enrollment={enrollment}
        />
        <div className='collapse' id={`personality_${enrollment}_toggler`}>
          <PersonalityCompetencies scores={personalityDataScores} />
        </div>
      </div>
    )
  }
}

export default PersonalityCard
