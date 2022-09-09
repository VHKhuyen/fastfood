const Post = require('../models/Post')

class PostController {
    async index(req, res) {
        try {
            const posts = await Post.find()
            res.json({ success: true, posts })
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "internal server" })
        }
    }

    async create(req, res) {
        const { title, description, author, userId, image, category } = req.body

        //Simple validation
        if (!title) {
            res.status(400).json({ success: false, message: 'title is required' })
        }
        try {
            const newPost = new Post({ title, description, author: req.username, userId: req.userId, image, category })

            await newPost.save()
            res.json({ success: true, message: 'Post successfully!', newPost })
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "internal server" })
        }
    }

    async update(req, res) {
        const { title, description, author, userId, image, category } = req.body

        //Simple validation
        if (!title) {
            res.status(400).json({ success: false, message: 'title is required' })
        }
        try {
            let updatePost = { title, description, author: req.username, userId: req.userId, image, category }

            const postUpdateCondition = { _id: req.params.id, userId: req.userId }

            updatePost = await Post.findOneAndUpdate(postUpdateCondition, updatePost, { new: true })
            if (!updatePost) {
                res.status(401).json({ success: false, message: 'Post not found or user not authenticated ' })
            }
            res.json({ success: true, message: 'Post updated', updatePost})
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "internal server" })
        }
    }

    async delete(req, res) {

        try {
            const postDeleteCondition = { _id: req.params.id, userId: req.userId }
            const deletePost = await Post.findOneAndDelete(postDeleteCondition)
            if (!deletePost) {
                res.status(401).json({ success: false, message: 'Post not found or user not authenticated'})
            }
            res.json({ success: true, message: 'Post deleted successfully', deletePost})
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "internal server" })
        }
    }
}

module.exports = new PostController()