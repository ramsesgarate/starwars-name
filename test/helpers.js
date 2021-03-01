function isArrayOfStrings(array) {
  return array.every(item=> typeof item === 'string')
}

module.exports = {
  isArrayOfStrings,
}