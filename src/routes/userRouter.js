import { Router } from "express";
import { UserController } from "../controllers/userController.js";
import { handleInputErrors } from "../middleware/validation.js";

const router = Router();

router.post('/',
    handleInputErrors,
    UserController.createUser
)

router.get('/',
    UserController.getAllUsers)

router.get('/:id',
        UserController.getUserById
    )

router.put('/:id',
    handleInputErrors,
    UserController.updateUser)

router.delete('/:id',
    UserController.deleteUser)

export default router