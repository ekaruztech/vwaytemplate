"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _request = _interopRequireDefault(require("../controller/request"));

function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}

function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys(source, true).forEach(function (key) {
                (0, _defineProperty2["default"])(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys(source).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}

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
        var page, _ref, _meta, data, response;

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
                response = {
                    title: 'Divine Express'
                };
    
                if (data && _meta) {
                    response = _objectSpread({}, response, {
                        terminals: data,
                        pagination: _meta.pagination
                    });
                }
    
                res.render('terminals', response);

          case 9:
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