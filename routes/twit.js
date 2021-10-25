const express = require('express');
const router =express.Router();
const twitController = require('../controllers/twit.controller')


//GET ALL TWIT POST ROUTE

router.get('/',twitController.getAllTwitPostlist);

router.get('/:id',twitController.getSingleTwitPost);

router.post('/',twitController.createPost)







//action to perform
// //post twits
// //get single twit post
// //get show all twit posts
// //put like  posts
// //delete twit posts


module.exports=router