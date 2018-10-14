module.exports.function = function findDateFact (dateFact) {
  var url = "http://numbersapi.com/"
  
  var res = http.getUrl(url + "/" + dateFact.month + "/" + dateFact.day)
  
  return res
}
