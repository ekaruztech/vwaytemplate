"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _request = _interopRequireDefault(require("../controller/request"));

var AppController = {
  index: function index(req, res, next) {
    return res.render('index', {
      title: 'Divine Express'
    });
  },
  contact: function contact(req, res, next) {
    return res.render('contact', {
      title: 'Divine Express'
    });
  },
  about: function about(req, res, next) {
    return res.render('about', {
      title: 'Divine Express'
    });
  },
  trips: function trips(req, res, next) {
    res.render('trips', {
      title: 'Divine Express',
      host: process.env.HOST
    });
  },
  terminals: function () {
    var _terminals = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(req, res, next) {
      var page, _ref, _meta, data;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              page = req.query.page || 1;
              _context.next = 3;
              return _request["default"].getTerminals({
                page: page
              });

            case 3:
              _ref = _context.sent;
              _meta = _ref._meta;
              data = _ref.data;
              res.render('terminals', {
                title: 'Divine Express',
                terminals: data,
                pagination: _meta.pagination
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function terminals(_x, _x2, _x3) {
      return _terminals.apply(this, arguments);
    }

    return terminals;
  }()
};
exports.AppController = AppController;