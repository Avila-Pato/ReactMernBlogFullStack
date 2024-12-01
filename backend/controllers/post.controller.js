 import Post from "../models/post.model.js"
 import User from "../models/user.model.js";

 export const getPosts = async (req, res) => {
    const posts = await postModel.find()
    res.status(200).json(posts)
 }

 export const getPost = async (req, res) => {
    const post = await postModel.findOne({slug:req.params.slug})
    res.status(200).json(post)
 }

 export const createPost = async (req, res) => {
   const clerkUserId = req.auth.userId;
 
   // console.log(req.headers);
 
   if (!clerkUserId) {
     return res.status(401).json("Not authenticated!");
   }
 
   const user = await User.findOne({ clerkUserId });
 
   if (!user) {
     return res.status(404).json("User not found!");
   }

   const newPost = await new Post.findOne(req.body)

    const post = await newPost.save()
    res.status(200).json( post )

 }
 export const deletePost = async (req, res) => {
   const clerkUserId = req.auth.useId;

   if(!clerkUserId)  {
      return res.status(401).json("Not authenticated")
   }

   const user = await User.finOne({ clerkUserId });

    const deletePost = await Post.findOneAndDelete({
      _id: req.params.id,
      user: user._id
    })
    if(!deletePost){
      return res.status(404).json("You should delete only your posts");
    }
    res.status(200).json("Post has been deleted")
 }


 