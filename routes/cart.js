var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/',  function(req, res, next) {
  res.send({
    name:'get cart',  
    status:200,
    key: process.env.KEY_NODE??'no key'
  });
});

module.exports = router;
