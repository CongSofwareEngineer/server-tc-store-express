var express = require('express');
const { FBUser, FBTypeProduct } = require('../utils/firebaseFun');
var router = express.Router();

/* GET users listing. */
router.get('/', async(req, res, next)=> {
  let data=await FBTypeProduct.getAllData()
  data = data.map(item=>{
    return {
      key:item.key,
      name:item.name
    }
  })

  res.send({
    data,
    status:200
  });
});

module.exports = router;
