var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('user router')
  res.json({"message" : "respond with a resource"});
});

router.post('/', function(req, res, next){
  console.log('user router post');
  res.json({"message" : "respond with a resource (post)"})
})

module.exports = router;
