// Import package
//Tail = require('tail').Tail;
//var CronJob = require('cron').CronJob;
import cron from 'cron';
import tail from 'tail';
import lineReader from 'line-reader';
//const lineReader = require('line-reader');
import socket from 'socket.io';
import fs from 'fs-extra'
import express from 'express';
import http from 'http';
import {parser, getDataBySection, getAllSection} from './helpers';
import {ACCESS_LOG_PATH, HTTP_METHODS} from './constants';


//=====================================================


//var app = require('express')();
//var http = require('http').createServer(app);
var app = express();
var httpServer = http.createServer(app);
//var io = require('socket.io')(http);
var io = socket(httpServer);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

httpServer.listen(3000, function(){
  console.log('listening on *:3000');
});
io.on('connection', function(socket){
  console.log('a user connected');
});


let traffics = [];
let sectionDatas=[];
//const data = fs.readFileSync(ACCESS_LOG_PATH, 'utf8')
lineReader.eachLine(ACCESS_LOG_PATH, (line, last) => {
    //console.log(line);
    traffics.push(parser(line));
});

//parser(data)
var job = new cron.CronJob('*/10 * * * * *', function() {
    //console.log('You will see this message every 10 second');
    sectionDatas=getAllSection(traffics).map(section=>getDataBySection(traffics,section));
    //console.log('ssss', sectionDatas);
    //const essai = getAllSection(data).map(section=>getSectionDatas(data,section));
    

  });
job.start();
//console.log('sarra')

const watcher = new tail.Tail(ACCESS_LOG_PATH);
watcher.on("line", function(data) {
   // parser(data);
   //traffics.push(data);
   traffics.push(parser(data));
});