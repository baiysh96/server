import User from "./Users.js";

class UserController {
    async create(req, res) {
        try {
            const {name, surname, email} = req.body
            const user = await User.create({name, surname, email})
            res.status(200).json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const user = await User.find()
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
            const user = await User.findById(id)
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
            const updatedUser = await User.findByIdAndUpdate(id, req.body)
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
            const deletedUser = await User.findByIdAndDelete(id)
            return res.json(deletedUser)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new UserController()