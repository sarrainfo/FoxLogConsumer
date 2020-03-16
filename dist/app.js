"use strict";

var _cron = _interopRequireDefault(require("cron"));

var _tail = _interopRequireDefault(require("tail"));

var _lineReader = _interopRequireDefault(require("line-reader"));

var _socket = _interopRequireDefault(require("socket.io"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var _helpers = require("./helpers");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import package
//Tail = require('tail').Tail;
//var CronJob = require('cron').CronJob;
//const lineReader = require('line-reader');
//=====================================================
//var app = require('express')();
//var http = require('http').createServer(app);
var app = (0, _express.default)();

var httpServer = _http.default.createServer(app); //var io = require('socket.io')(http);


var io = (0, _socket.default)(httpServer);
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
httpServer.listen(3000, function () {
  console.log('listening on *:3000');
});
io.on('connection', function (socket) {
  console.log('a user connected');
});
let traffics = [];
let sectionDatas = []; //const data = fs.readFileSync(ACCESS_LOG_PATH, 'utf8')

_lineReader.default.eachLine(_constants.ACCESS_LOG_PATH, (line, last) => {
  //console.log(line);
  traffics.push((0, _helpers.parser)(line));
}); //parser(data)


var job = new _cron.default.CronJob('*/10 * * * * *', function () {
  //console.log('You will see this message every 10 second');
  sectionDatas = (0, _helpers.getAllSection)(traffics).map(section => (0, _helpers.getDataBySection)(traffics, section)); //console.log('ssss', sectionDatas);
  //const essai = getAllSection(data).map(section=>getSectionDatas(data,section));
});
job.start(); //console.log('sarra')

const watcher = new _tail.default.Tail(_constants.ACCESS_LOG_PATH);
watcher.on("line", function (data) {
  // parser(data);
  //traffics.push(data);
  traffics.push((0, _helpers.parser)(data));
});