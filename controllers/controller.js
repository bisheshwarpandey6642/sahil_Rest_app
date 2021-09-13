const Post = require('../model/model')


//Getting all the data from the database
exports.getData = async(req,res, next) => {
    try{
        const posts = await Post.find();
        res.json(data)
    //     res.render('index',
    // { title : posts }
    // )
    }catch(err){
        message:err
    }
    next();
};

exports.respo = (req,res) => {
    try{
        const posts = "hello world"
        console.log(posts)

    }catch(err){
        message:err
    }
}


//creating/inserting data in the database
exports.sendData = async(req,res) => {
const posts = new Post({
    name: req.body.name,
    phone: req.body.phone,
    vegetarian: req.body.vegetarian
})
try{
    const savePost = await posts.save()
    res.json(savePost);

}catch(err){
    message:err
}
}

 exports.deleteData =  async(req, res) => {
    try{
        const removePost = await Post.remove({_id: req.params.postId})
        res.json(removePost)
    }catch(err){message:err}
}

exports.updateData = async(req,res) => {
    try{
        const updatePost = await Post.updateOne(
            {_id: req.params.postId},
            {
                $set:{name: req.body.name,
                phone: req.body.phone,
                vegetarian: req.body.vegetarian
                }
            }
        )
        res.json(updatePost)
    }catch(err){message:err

    }
}


