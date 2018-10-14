module.exports.function = function findNumFact (numFact, type) {
  
  var url = "http://numbersapi.com/"
  
  var res = http.getUrl(url + "/" + numFact + "/" + type)
  
  return res
}
