var express = require('express');
var router = express.Router();
const { getMovies, getMovieImg} = require('../controller/movies');

router.get('/page/:pageId', function(req, res, next) {
    getMovies(req, res);
  });
  
router.get('/image/:imageId', function(req, res, next) {
    getMovieImg(req, res);
  });

module.exports = router;