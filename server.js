// import express from 'express'
// import fs from 'node:fs'
// const Port = 3000
//
// const server = express();
// server.use(express.json())
//
// server.get("/users", (req,res) => {
//     const users = fs.readFileSync('./data.json',{encoding : "utf-8"});
//     const parsedUser = JSON.parse(users)
//     res.json(parsedUser)
// })
// server.get('/users/:slug', (req, res) => {
//     const users = fs.readFileSync('./data.json',{encoding : "utf-8"});
//     const parsedUser = JSON.parse(users)
//     const user = parsedUser.find(user => user.id === +req.params.slug)
//     if(!user) res.status(404).send('Not Found')
//     res.json(user)
// })
//
// server.post('/users', async(req,res) => {
//     const users = fs.readFileSync('./data.json',{encoding : "utf-8"});
//     const updatedUser = [...JSON.parse(users), req.body]
//     await fs.writeFileSync('./data.json', JSON.stringify(updatedUser, null, 2))
//     res.json({status: 'ok'})
// })
//
// server.delete('/users/:slug', async(req, res) => {
//     const users = fs.readFileSync('./data.json',{encoding : "utf-8"});
//     const parsedUser = JSON.parse(users)
//     const filteredUser = parsedUser.filter(item => item.id !== +req.params.slug? item: [])
//     res.json(filteredUser)
//     await fs.writeFileSync('./data.json', JSON.stringify(filteredUser, null, 2))
// })
// server.put('/users/:slug', async(req, res) => {
//     const users = fs.readFileSync('./data.json',{encoding : "utf-8"});
//     const parsedUser = JSON.parse(users)
//     const updatedUser = parsedUser.map(item => {
//         if(item.id === +req.params.slug){
//             return {...req.body}
//         }else {
//             return item
//         }
//     })
//     res.json(updatedUser)
//     await fs.writeFileSync('./data.json', JSON.stringify(updatedUser, null, 2))
// })
//
// server.listen(Port,() => console.log("Server started on port" + "", Port))