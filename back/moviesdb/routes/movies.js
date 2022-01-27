var express = require('express');
var router = express.Router();
const { getMovies } = require('../controller/movies');

router.get('/', function(req, res, next) {
    getMovies(req, res);
  });
  
module.exports = router;