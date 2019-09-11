"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controller = require("../controller");

var router = (0, _express.Router)();
router.get('/', _controller.AppController.index);
router.get('/vway/trips', _controller.AppController.trips);
router.get('/vway/trips/receipt/*', _controller.AppController.trips);
router.get('/vway/trips/book/*', _controller.AppController.trips);
router.get('/vway/trips/bookings', _controller.AppController.trips);
router.get('/terminals', _controller.AppController.terminals);
router.get('/about', _controller.AppController.about);
router.get('/contact', _controller.AppController.contact);
var _default = router;
exports["default"] = _default;