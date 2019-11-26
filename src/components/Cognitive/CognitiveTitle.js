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

  render() {
    const { title, description, score, testsCompleted, testsTotal } = this.props

    const iconBrain = <FontAwesomeIcon icon={faBrain} />

    return (
      <div className='card-header bg-white'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <i className='fas fa-pull-left h5 mb-0'>{iconBrain}</i>
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
        <div className='text-center'>
          <span
            className='badge badge-pill badge-primary'
            data-placement='bottom'
            data-toggle='tooltip'
            title='Coincidencia con Perfil - Puntaje Cognitivo'
            data-original-title='Coincidencia con Perfil - Puntaje Cognitivo'
          >
            Coincidencia con el Perfil: {score}%
          </span>
        </div>
      </div>
    )
  }
}

export default CognitiveTitle
