import express from "express"
import mongoose from "mongoose"
import router from './Router.js'

const PORT = 3000;
const DB_URL = "mongodb+srv://user:user@cluster0.8g0uicx.mongodb.net/?retryWrites=true&w=majority"
const server = express()

server.use(express.json())
server.use('/api', router)


async function startApp() {
    try{
        await mongoose.connect(DB_URL)
        server.listen(PORT,() => console.log("Server Work on port" + " ", PORT))
    } catch(e) {
        console.log(e)
    }
}
startApp()