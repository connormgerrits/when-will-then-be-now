const { expect } = require('chai')
const { describe, it } = require('mocha')
const allLogs = require('./logs.js')
const filterLogs = require('../logFilter')

describe('filterLogs', () => {
  it('retuns the logs for the environment and date provided', () => {
    const expectedLogs = [
      { environment: 'qa', timestamp: 1553796277000, message: 'Error: could not find property `price` of undefined' },
      { environment: 'qa', timestamp: 1553810677000, message: 'Error: array index out of range' },
    ]
    const returnedLogs = filterLogs(allLogs, 'qa', '2019-03-28')

    expect(returnedLogs).to.deep.equal(expectedLogs)
  })

  it('retuns all logs for the environment when no time period is provided', () => {
    const expectedLogs = [
      { environment: 'production', timestamp: 1553807783000, message: 'Error: failed login threshold reached, account locked' },
      { environment: 'production', timestamp: 1553816777000, message: 'Error: invalid product ID: 1h4x0rU' },
      { environment: 'production', timestamp: 1553825938000, message: 'Error: node process out of memory' },
    ]
    const returnedLogs = filterLogs(allLogs, 'production')

    expect(returnedLogs).to.deep.equal(expectedLogs)
  })

  it('returns an empty list when there are no logs for a particular environment', () => {
    const returnedLogs = filterLogs(allLogs, 'staging')

    expect(returnedLogs).to.deep.equal([])
  })

  it('returns an empty list when there are no logs for date range provided', () => {
    const returnedLogs = filterLogs(allLogs, 'qa', '2018-12-31')

    expect(returnedLogs).to.deep.equal([])
  })
})
