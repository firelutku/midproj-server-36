var express=require('express');
var router=express.Router();
const db=require('../../utils/database');


router.get('/',async function(req,res,next){
    try{
        const results=await db.query('select * from card_36');
        // console.log('json data',JSON.stringify(results.rows));
        // res.render('card2_36/index',{data:results.rows ,name:'TaiLin Lu',id:'210410436'});
        res.json(results.rows)
      }catch(error){
          console.log(error);
      }
    
});

module.exports=router;