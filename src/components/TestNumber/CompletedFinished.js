import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CompletedFinished extends Component {
  static propTypes = {
    testsCompleted: PropTypes.number.isRequired,
    testsTotal: PropTypes.number.isRequired
  }
  render() {
    const { testsCompleted, testsTotal, status } = this.props
    return (
      <span className='text-center'>
        <i className='fas fa-check mr-1' />
        Completados {testsCompleted} de {testsTotal}
        <small className='d-block text-muted'>{status}</small>
      </span>
    )
  }
}

export default CompletedFinished
