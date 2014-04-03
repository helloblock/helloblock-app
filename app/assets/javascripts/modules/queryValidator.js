var QueryValidator = {};

QueryValidator.hexRegex = /^[0-9a-f]+$/i;

QueryValidator.address = function(query) {
  return cryptocoin.Address.validate(query)
}

QueryValidator.transaction = function(query) {
  if (query.slice(0, 7) === "00000000") {
    return false
  }

  if (query.length !== 64) {
    return false
  }

  if (query.match(QueryValidator.hexRegex) === null) {
    return false
  }

  return true
}

QueryValidator.block = function(query) {
  if (query.match(/^\d+$/) && parseInt(query) > 0) {
    return true
  }

  if (query.match(QueryValidator.hexRegex) && query.length === 64) {
    return true
  }

  return false
}
