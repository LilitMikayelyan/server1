

var express = require('express');
const { stringify } = require('querystring');
var app = express();
var PORT = 3000;

app.get('/:number', function (req, res) {
  var a = req.path.length - 1;
  if (isNaN(req.path[a])) {
    res.send("insert numbers");
  }
  else {
    var s = 0;
    var k = 1;
    while (req.path[a] != '/') {
      s += req.path[a] * k;
      k *= 10;
      a--;
    }

    console.log(req.path);
    res.send(String(factorial(s)));
  }
});
console.log();
app.listen(PORT, function (err) {
  if (err) {
    console.log(err);
  }
  console.log("Server listening on PORT", PORT);
});
function factorial(n) {
  if (n == 1)
    return n;
  else if (n == 0)
    return 1;
  return n * factorial(n - 1);
}
