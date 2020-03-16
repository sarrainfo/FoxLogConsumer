"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllSection = exports.getDataBySection = exports.getTimestamp = exports.parser = void 0;

var _constants = require("../constants");

var _dateFormatParse = require("date-format-parse");

// import
//==============================================================

/**
 * Get informations from w3c formated http
 * @param {string} w3cFormatLine - logfile format w3c
 * @returns {object}
 */
const parser = w3cFormatLine => {
  // use this regex https://www.regextester.com/95830
  const values = w3cFormatLine.match(_constants.W3C_FORMAT_REGEX);
  return {
    host: values[1],
    logName: values[2],
    authUser: values[3],
    date: getTimestamp(values[4]),
    method: values[5],
    url: values[6],
    section: `/${values[6].split('/')[1]}`,
    version: values[7],
    status: parseInt(values[8]),
    bytes: parseInt(values[9] || 0)
  };
};
/**
 * Convert data us-format to timestamp
 * @param {string} date dd/MMM/yyyy:hh:mm:ss ZZZZ 
 * @returns {number} 
 */


exports.parser = parser;

const getTimestamp = date => {
  if (!Array.isArray(date.match(_constants.DATE_FORMAT_REGEX))) {
    throw new Error("Invalid date format");
  }

  return new Date(date.replace(':', ' ')).getTime() / 1000;
};
/**
 *  Filter datas with section
 *  return relevant information
 * @param {[Object]} datas - All parse datas
 * @param {String} section - 
 */


exports.getTimestamp = getTimestamp;

const getDataBySection = (datas, section) => {
  let nbVisited; // check que datas est un array

  const errors = datas.filter(data => data.section === section).filter((data, _, tab) => {
    nbVisited = tab.length;
    return data.status > 300 || data.status === 300;
  });
  return {
    section,
    nbErrors: errors.length,
    nbVisited
  };
};

exports.getDataBySection = getDataBySection;

const getAllSection = datas => {
  let allSections = [];
  datas.forEach(data => allSections.push(data.section));
  return allSections;
};

exports.getAllSection = getAllSection;