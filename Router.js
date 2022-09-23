import Router from 'express'
import userController from "./UserController.js";
import postController from "./postController.js";
const router = new Router();

router.post("/users", userController.create )
router.get("/users", userController.getAll )
router.get("/users/:id", userController.getOne )
router.put("/users/:id", userController.update )
router.delete("/users/:id", userController.delete )

router.post("/users", postController.create )
router.get("/users", postController.getAll )
router.get("/users/:id", postController.getOne )
router.put("/users/:id", postController.update )
router.delete("/users/:id", postController.delete )


export default router;