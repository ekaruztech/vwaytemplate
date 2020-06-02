"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppController = void 0;
var AppController = {
  index: function index(req, res, next) {
    return res.render('index', {
      title: 'Efext'
    });
  }
};
exports.AppController = AppController;