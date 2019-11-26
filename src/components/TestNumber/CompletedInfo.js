// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Components
import CompletedFinished from './CompletedFinished'
import CompletedProgress from './CompletedProgress'

class CompletedInfo extends Component {
  static propTypes = {
    testsCompleted: PropTypes.number.isRequired,
    testsTotal: PropTypes.number.isRequired
  }
  render() {
    const { testsCompleted, testsTotal, status } = this.props

    if (testsCompleted === testsTotal) {
      return (
        <CompletedFinished
          testsCompleted={testsCompleted}
          testsTotal={testsTotal}
          status={status}
        />
      )
    }
    return (
      <CompletedProgress
        testsCompleted={testsCompleted}
        testsTotal={testsTotal}
        status={status}
      />
    )
  }
}

export default CompletedInfo
