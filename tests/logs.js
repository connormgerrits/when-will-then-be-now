const allLogs = [
  { environment: 'qa', timestamp: 1553796277000, message: 'Error: could not find property `price` of undefined' },
  { environment: 'qa', timestamp: 1553810677000, message: 'Error: array index out of range' },
  { environment: 'qa', timestamp: 1553834756000, message: 'Error: undefined has no method forEach' },
  { environment: 'production', timestamp: 1553807783000, message: 'Error: failed login threshold reached, account locked' },
  { environment: 'production', timestamp: 1553816777000, message: 'Error: invalid product ID: 1h4x0rU' },
  { environment: 'production', timestamp: 1553825938000, message: 'Error: node process out of memory' },
]

module.exports = allLogs
