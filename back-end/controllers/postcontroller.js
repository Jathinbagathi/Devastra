const Post= require("../models/Post");
const createPost=async(req,res)=>{
    try{
        const post =await Post.create(req.body);

        res.status(201).json({
            message:"post created successfully",
            post
        })

    }catch(error){
        res.status(500).json({
            message:"Failed to create a post",
            error:error.message
        });
    }
}
const getPosts =async(req,res)=>{
    try{
        const posts= await Post.find();
        res.status(200).json(posts);

    }catch(error){
        res.status(500).json(
            {
                message:"Failed to fetch posts",
                error:error.message
            }
        );
    }
};
const getPostById = async(req,res)=>{
    try{
        const post =await post.findById(req.params.id);
        if(!post)
        {
            return res.status(404).json({
                message:"failed to fetch post"
            });
        }
        res.status(200).json(post);

    }
    catch(error){
        res.status(500).json(
            {
                message:"Failed to fetch posts",
                error:error.message
            }
        );
}
};
const updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );
        if (!post) {
            return res.status(404).json({
                message: "Post Not Found"
            });
        }

        res.status(200).json({
            message: "Post Updated Successfully",
            post
        })
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch",
            error: error.message
        });
    }
}

const deletePost=async(req,res)=>{
    try{
        const post=await post.findByIdAndDelete(req.params.id);

        if(!post){
            return res.status(404).json({
                message:"Post not found"
            });

        }
        res.status(200).json(
            {
                message:"post deleted succesfully"
                
            }
        );
    }
    catch(error){
        res.status(500).json({
            message:"unable to fetch",
            error:error.message

        });

    }
};
module.exports={
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost
};