module.exports.function = function findYearFact (yearFact) {
  var url = "http://numbersapi.com/"
  
  var res = http.getUrl(url + "/" + yearFact + "/year")
  
  return res
}
