"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppController = void 0;

var _request = _interopRequireDefault(require("../controller/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      title: 'Divine Express'
    });
  },
  terminals: function () {
    var _terminals = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(req, res, next) {
      var terminals;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _request["default"].getTerminals();

            case 2:
              terminals = _context.sent;
              res.render('terminals', {
                title: 'Divine Express',
                terminals: terminals
              });

            case 4:
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