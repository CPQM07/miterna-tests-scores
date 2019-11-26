// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FavoriteProfileScore extends Component {
  static propTypes = {
    profiledScore: PropTypes.number.isRequired,
    optimalScore: PropTypes.number.isRequired
  }
  render() {
    const { profiledScore, optimalScore } = this.props
    const optimalScoreRounded = Math.round(optimalScore)
    const profiledScoreRounded = Math.round(profiledScore)
    const average = (optimalScoreRounded + profiledScoreRounded) / 2
    const message = `<strong class="text-primary">Puntaje Logrado:</strong>
                    ${profiledScoreRounded}% <br/>
                    <strong class="text-info">Puntaje Óptimo:</strong>
                    ${optimalScoreRounded}%`

    return (
      <div className='indicator' style={{ left: average + '%' }}>
        <span
          className='btn _btn-circle _btn-circle-sm m-1'
          data-placement='top'
          data-toggle='tooltip'
          data-html='true'
          data-original-title={message}
        >
          <i className='fas fa-heart fa-uxs text-primary mt-1' />
        </span>
      </div>
    )
  }
}

export default FavoriteProfileScore
