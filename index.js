module.exports = {
	add: addComma,
	remove: removeComma,
	replace: replaceDots
}

function addComma(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

// Remove Comma (ex. 1,000 => 1000)
function removeComma(n) {
  return Number(n.split(',').join(''))
}

function replaceDots(n) {
	return n.split(',').join('.');
}
