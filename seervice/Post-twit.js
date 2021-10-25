const dbConn = require('../db/connect')

 const  Twit_post =(twit_post)=>{
     this.name =twit_post.name;
     this.date_posted =new Date();
     this.time_posted =new Date();
     this.post_content =twit_post.post_content;
     this.like_post =twit_post.like_post;

 }


 //get all post twit

     Twit_post.getAllTwitPosts =(result)=>{
     dbConn.query('SELECT * FROM  twit_post',(err, res)=>{
         if(err){
          console.log('Error while fetching the twit post from the database', err);
          result(null, err); 
         }else{
             console.log('Twit post fetched successfully');
             result(null, res);
         }
     } )

 }
 //GET SINGLE POST BY ID 
  Twit_post.getSingleTwitPost=(id,result)=>{
  dbConn.query('SELECT * FROM twit_post WHERE user_id=?', id,(err, res)=>{
  if(err){
      console.log('Error while fetching single twit by id', err);
      result(null, err) ;  
  }else{
      console.log('single twit fetching successfully')
      result(null,res);
  }
  })
  }

 module.exports= Twit_post;






