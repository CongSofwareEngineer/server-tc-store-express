var express = require('express');
const { FBProductShop } = require('../utils/firebaseFun');
const { processQuery } = require('../utils/function');
var router = express.Router();

/* GET users listing. */
router.get('/all-products',  async(req, res, next)=> {
  console.log({req:req.query});
  if(Object.keys(req.query).length>0){
    const arrQuery=Object.entries(req.query).map(([key,value])=>{
      if(key==='largerPrice'){
        return {
          key:'price',
          match:'>=',
          value
        }
      }
      if(key==='smallerPrice'){
        return {
          key:'price',
          match:'<=',
          value
    
        }
      }
      return {
        key,
        match:'in',
        value:value?.split(',')
      }
            
    })
    const data=await FBProductShop.getDataByListQuery(arrQuery)

    const dataProcess=processQuery(data,req.query)
    res.send({
      ...dataProcess,
      status:200
    });
  }
  else{
    const data=await FBProductShop.getAllData()

    const dataProcess=processQuery(data,req.query)
    res.send({
      ...dataProcess,
      status:200
    });
  }
});

module.exports = router;
