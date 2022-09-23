import User from "./Users.js";
import Post from "./Post.js";

class PostController {
   async create(req, res){
       try {
           const {author, title, content, createdAt} = req.body
           const user = await User.create({author, title, content, createdAt})
           res.status(200).json(user)
       }catch (e) {
           res.status(500).json(e)
       }
   }
    async getAll(req, res) {
        try {
            const user = await Post.find()
            return res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(404).json({message: "ID not found"})
            }
            const user = await Post.findById(id)
            return res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(404).json({message: "ID not found"})
            }
            const updatedUser = await Post.findByIdAndUpdate(id, req.body)
            return res.json(updatedUser)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(404).json({message: "Id not found !!"})
            }
            const deletedUser = await Post.findByIdAndDelete(id)
            return res.json(deletedUser)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}
export default new PostController();