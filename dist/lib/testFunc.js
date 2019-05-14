"use strict";

function test() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'World';
  console.log('ini bukan constructor', str);

  var exec = function exec() {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ini';
    console.log('hello' + str);
  };

  return {
    exec: exec
  };
}

function delay(ms) {
  return new Promise(function (resolve, rejects) {
    setTimeout(resolve, ms);
  });
}

module.exports = {
  test: test,
  delay: delay
};