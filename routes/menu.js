var express = require('express');
const {FBTypeProduct } = require('../utils/firebaseFun');
var router = express.Router();

/* GET users listing. */
router.get('/all-type', async(req, res, next)=> {
  let data=await FBTypeProduct.getAllData()
  data = data.map(item=>{
    return {
      key:item.key,
      name:item.name,
      icon:item?.icon||item?.image||''
    }
  })

  res.send({
    data,
    status:200
  });
});

module.exports = router;
