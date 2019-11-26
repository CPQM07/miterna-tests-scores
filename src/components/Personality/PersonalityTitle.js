import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom } from '@fortawesome/free-solid-svg-icons'
import CompletedInfo from '../TestNumber/CompletedInfo'

class PersonalityTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    testsCompleted: PropTypes.number.isRequired,
    testsTotal: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props)
    this.state = { isToggleOn: true }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }

  drawInfoText() {
    return this.state.isToggleOn ? 'ver más' : 'ver menos'
  }

  render() {
    const { title, description, score, testsCompleted, testsTotal } = this.props

    const iconAtom = <FontAwesomeIcon icon={faAtom} />

    return (
      <div className='card-header bg-white'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <i className='fas fa-pull-left h5 mb-0'>{iconAtom}</i>
            <h3 className='h5 mb-0 d-inline-block'>{title}</h3>
          </div>
          <div>
            <CompletedInfo
              testsCompleted={testsCompleted}
              testsTotal={testsTotal}
            />
          </div>
        </div>
        <div className='small text-muted text-justify my-2'>{description}</div>
        <div className='d-flex justify-content-between align-items-center'>
          <span
            className='badge badge-pill badge-primary'
            data-placement='bottom'
            data-toggle='tooltip'
            title='Coincidencia con Perfil - Puntaje Cognitivo'
            data-original-title='Coincidencia con Perfil - Puntaje Cognitivo'
          >
            Coincidencia con el Perfil: {score}%
          </span>

          <small
            onClick={this.handleClick}
            className='text-primary pointer'
            data-toggle='collapse'
            data-target='#personality_toggler'
            aria-expanded='false'
            aria-controls='personality_toggler'
          >
            {this.drawInfoText()}
          </small>
        </div>
      </div>
    )
  }
}

export default PersonalityTitle
