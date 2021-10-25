const Twit_post = require('../seervice/Post-twit');
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
    const postReqData = new TwitpostModel(req.body)
//check null
    if(req.body.constructor ===Object && Object.keys(req.body).length===0){
        res.status(400).send({success: false, message: 'Please all the fields'})
    }else{
        TwitpostModel.createPost(postReqData,(err, twit_post)=>{
            if(err)
            res.send(err)
            res.json({status: true, message:' success', data: twit_post})
        
        })
    }
}






//actions to perform
//        post  postTwit,
//        get  getAllTwitPost,
//        get  getSingleTwitPost,
//        put  likePost, 
//         delete  deleteTwitPost
