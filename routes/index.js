const express = require('express');
const router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Divine Express' });
});

router.get('/vway/trips', function(req, res, next) {
    res.render('trip', { title: 'Divine Express' });
});

module.exports = router;
