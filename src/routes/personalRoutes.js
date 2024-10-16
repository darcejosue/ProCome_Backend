import { Router } from "express";
import { PersonalController } from "../controllers/personalController.js";
import { handleInputErrors } from "../middleware/validation.js";

const router = Router();

router.post('/',
    handleInputErrors,
    PersonalController.createPersonal
)

router.get('/',
    PersonalController.getAllPersonals)

router.get('/:id',
        PersonalController.getPersonalById
    )

router.put('/:id',
    handleInputErrors,
    PersonalController.updatePersonal)

router.delete('/:id',
    PersonalController.deletePersonal)

export default router