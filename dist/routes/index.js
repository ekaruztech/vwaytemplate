"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controller = require("../controller");

var router = (0, _express.Router)();
router.get('/', _controller.AppController.index);
var _default = router;
exports["default"] = _default;