// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import CompletedInfo from './TestNumber/CompletedInfo'
import Profile from './Profile/Profile'

class Header extends Component {
  static propTypes = {
    mainData: PropTypes.object.isRequired
  }

  render() {
    const { mainData } = this.props

    return (
      <div className='d-flex align-items-center justify-content-around text-bold m-4'>
        <span className='text-center'>
          <i className='fas fa-medal mr-1' />
          Puntaje Global:
          <strong className='ml-1'>{mainData.main_score}%</strong>
          <small className='d-block text-muted'>
            Coincidencia con el perfil buscado
          </small>
        </span>

        <span className='text-center'>
          <i className='far fa-id-card mr-1' />
          {mainData.profile_name}
          <small className='d-block text-muted'>
            Puntuación en base a este perfil
          </small>
        </span>

        <CompletedInfo
          testsCompleted={mainData.count_rendered}
          testsTotal={mainData.count_total}
          status={mainData.es_status}
        />
      </div>
    )
  }
}

export default Header
