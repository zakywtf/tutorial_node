"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _log = _interopRequireDefault(require("./controller/log"));

var _usersCtrl = _interopRequireDefault(require("./controller/usersCtrl"));

var _companyCtrl = _interopRequireDefault(require("./controller/companyCtrl"));

var _userLocCtrl = _interopRequireDefault(require("./controller/userLocCtrl"));

var _login = _interopRequireDefault(require("./controller/login"));

var _signup = _interopRequireDefault(require("./controller/signup"));

var _vehiclesCtrl = _interopRequireDefault(require("./controller/vehiclesCtrl"));

var _reviewsCtrl = _interopRequireDefault(require("./controller/reviewsCtrl"));

var _db = require("./config/db");

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _validateToken = _interopRequireDefault(require("./lib/validateToken"));

var _geoDistance = _interopRequireDefault(require("geo-distance"));

var _masterCache = require("./lib/masterCache");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var app = (0, _express["default"])();

_dotenv["default"].config();

var server = require('http').Server(app);

var io = require('socket.io')(server);

app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(function (req, res, next) {
  req.io = io;
  next();
});
app.get('/', function (req, res) {
  var message = 'Hello World!';
  res.send(message);
}); // app.use('/names', (req,res,next)=>{
//     res.json()
// })

app.use('/api/login', _login["default"]);
app.use('/api/signup', _signup["default"]);
app.use('/api/v1/', _validateToken["default"]);
app.use('/api/v1/log', _log["default"]);
app.use('/api/v1/users', _usersCtrl["default"]);
app.use('/api/v1/company', _companyCtrl["default"]);
app.use('/api/v1/vehicles', _vehiclesCtrl["default"]);
app.use('/api/v1/reviews', _reviewsCtrl["default"]);
app.use('/api/v1/user_location', _userLocCtrl["default"]);
io.on('connection', function (socket) {
  socket.emit('tes');
});
app.get('/test/distance', function (req, res) {
  console.log('1 : ' + (0, _geoDistance["default"])('50 km').human_readable());
  var Oslo = {
    lat: -7.2966855,
    lon: 112.7509655
  };
  var Berlin = {
    lat: -7.3063715,
    lon: 112.7535906
  };

  var OsloToBerlin = _geoDistance["default"].between(Oslo, Berlin);

  console.log('2 : ' + OsloToBerlin.human_readable());

  if (OsloToBerlin > (0, _geoDistance["default"])('1 km')) {
    console.log('Nice journey!');
  }
});
app.get('/test/locationidx', function (req, res) {
  var data = (0, _masterCache.getLocationIdx)()['5e4a3ef64123a126c0871cd1'];
  console.log({
    data: data
  });
});
(0, _db.connectDb)().then(
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          (0, _masterCache.loadFirstData)();
          app.listen(process.env.PORT, '127.0.0.1', function () {
            return console.log("Server connet on port ".concat(process.env.PORT));
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));