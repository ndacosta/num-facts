module.exports.function = function findRandomFact (type) {
  var url = "http://numbersapi.com/"
  
  var res = http.getUrl(url + "/random/" + type)
  
  return res
}
