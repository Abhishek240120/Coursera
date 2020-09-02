var express = require('express');
var router = express.Router();
var News=require('../models/news');

router.get('/news',(req,res,next)=>{
	News.find({})
	.then((news)=>{
		res.statuscode=200;
		res.setHeader('Content-Type','text/html');
		 res.json(news);
	}).catch((err)=>next(err));
	
});

router.post('/news',(req,res,next)=>{
	console.log(req.body);
    News.create(req.body).then((news)=>{
    		res.statuscode=200;
			res.setHeader('Content-Type','text/html');
			res.json({"status":"success"});
    		console.log(news);
    	}).catch((err)=>console.log(err));
	 
});


module.exports=router;