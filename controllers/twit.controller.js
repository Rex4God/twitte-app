const TwitpostModel =require('../seervice/Post-twit')


//Get all Twit Post
exports.getAllTwitPostlist =(req, res)=>{
TwitpostModel.getAllTwitPosts((err,twit_post)=>{
       if(err)
        res.send(err);
        console.log('Twit posts',twit_post);
        res.send(twit_post);
    
})
}
//GET TWIT POST BY ID
exports.getSingleTwitPost =(req, res)=>{
    //console.log('get twit by id')
    TwitpostModel.getSingleTwitPost(req.params.id,(err, twit_post)=>{
        if(err)
        res.send(err);
        console.log(twit_post)
        res.send(twit_post);

    })   
}

exports.createPost=(req, res)=>{
    console.log('req data',req.body)

    if(req.body.constructor ===Object && Object(req.body).length===0){
        res.status(400).send({success: false, message: 'Please all the fields'})
    }else{
        console.log('valid data') 
    }
}






//actions to perform
//        post  postTwit,
//        get  getAllTwitPost,
//        get  getSingleTwitPost,
//        put  likePost, 
//         delete  deleteTwitPost
