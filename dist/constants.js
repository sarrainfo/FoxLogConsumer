"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTTP_METHODS = exports.PATCH = exports.TRACE = exports.CONNECT = exports.OPTIONS = exports.DELETE = exports.HEAD = exports.PUT = exports.POST = exports.GET = exports.DATE_FORMAT_REGEX = exports.W3C_FORMAT_REGEX = exports.ACCESS_LOG_PATH = void 0;
const ACCESS_LOG_PATH = "/tmp/access.log";
exports.ACCESS_LOG_PATH = ACCESS_LOG_PATH;
const W3C_FORMAT_REGEX = /^(\S+) (\S+) (\S+) \[([\w:/]+\s[+\-]\d{4})\] "(\S+)\s?(\S+)?\s?(\S+)?" (\d{3}|-) (\d+|-)\s?"?([^"]*)"?\s?"?([^"]*)?"?$/;
exports.W3C_FORMAT_REGEX = W3C_FORMAT_REGEX;
const DATE_FORMAT_REGEX = /^(([0-9])|([0-2][0-9])|([3][0-1]))\/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\/\d{4}:\d{2}:\d{2}:\d{2} [+-]\d{4}$/;
exports.DATE_FORMAT_REGEX = DATE_FORMAT_REGEX;
const GET = 'GET';
exports.GET = GET;
const POST = 'POST';
exports.POST = POST;
const PUT = 'PUT';
exports.PUT = PUT;
const HEAD = 'HEAD';
exports.HEAD = HEAD;
const DELETE = 'DELETE';
exports.DELETE = DELETE;
const OPTIONS = 'OPTIONS';
exports.OPTIONS = OPTIONS;
const CONNECT = 'CONNECT';
exports.CONNECT = CONNECT;
const TRACE = 'TRACE';
exports.TRACE = TRACE;
const PATCH = 'PATCH';
exports.PATCH = PATCH;
const HTTP_METHODS = [GET, PATCH, POST, PUT, HEAD, DELETE, OPTIONS, CONNECT, TRACE];
exports.HTTP_METHODS = HTTP_METHODS;