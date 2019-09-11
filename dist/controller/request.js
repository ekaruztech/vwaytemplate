"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

console.log(' process.env.VOOMSWAY_API_HOST : ', process.env.VOOMSWAY_API_HOST);
var defaultOptions = {
  baseURL: process.env.VOOMSWAY_API_HOST,
  headers: {}
};

var instance = _axios["default"].create(defaultOptions);

instance.interceptors.request.use(function (config) {
  config.headers['x-api-key'] = process.env.VOOMSWAY_API_KEY;
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
instance.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data;
}, function (error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    throw error.response.data;
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log('error request', error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
});
/**
 * Get User by id
 * @param {Object} config The request object
 * @return {Object} res The response object
 */

var createRequest = function createRequest(config) {
  return instance(config);
};

var APPRequest = {
  /**
   * Get Terminals of a company
   * @return {Object} res The response object
   */
  getTerminals: function () {
    var _getTerminals = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee() {
      var config;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              config = {
                method: 'get',
                url: '/terminals',
                params: {
                  population: JSON.stringify(['destinations'])
                }
              };
              return _context.abrupt("return", createRequest(config).then(function (response) {
                return response.data;
              }, function (err) {
                return {};
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function getTerminals() {
      return _getTerminals.apply(this, arguments);
    }

    return getTerminals;
  }()
};
var _default = APPRequest;
exports["default"] = _default;