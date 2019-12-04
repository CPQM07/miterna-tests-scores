// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain } from '@fortawesome/free-solid-svg-icons'
import CompletedInfo from '../TestNumber/CompletedInfo'

class CognitiveTitle extends Component {
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

  drawCoincidenceText() {
    return this.props.hasProfile ? 'Coincidencia con el Perfil: ' : 'Puntaje: '
  }

  render() {
    const {
      title,
      description,
      score,
      testsCompleted,
      testsTotal,
      enrollment
    } = this.props

    const iconBrain = <FontAwesomeIcon icon={faBrain} />

    return (
      <div className='card-header bg-white'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <i className='fas fa-pull-left h5 mb-0'>{iconBrain}</i>
            <h3 className='h5 mb-0 d-inline-block'>{title}</h3>
          </div>
          <div className='text-info'>
            <CompletedInfo
              testsCompleted={testsCompleted}
              testsTotal={testsTotal}
            />
          </div>
        </div>
        <div className='small text-muted text-justify py-4'>{description}</div>
        <div className='d-flex justify-content-between align-items-center'>
          <span
            className='badge badge-pill badge-primary'
            data-placement='bottom'
            data-toggle='tooltip'
            title='Coincidencia - Puntaje Cognitivo'
            data-original-title='Coincidencia - Puntaje Cognitivo'
          >
            {this.drawCoincidenceText()}
            {score}%
          </span>

          <small
            onClick={this.handleClick}
            className='text-primary pointer'
            data-toggle='collapse'
            data-target={`#cognitive_${enrollment}_toggler`}
            aria-expanded='false'
            aria-controls={`cognitive_${enrollment}_toggler`}
          >
            {this.drawInfoText()}
          </small>
        </div>
      </div>
    )
  }
}

export default CognitiveTitle
