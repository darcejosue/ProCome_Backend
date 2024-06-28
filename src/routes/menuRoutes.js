import { Router } from "express";
import { MenuController } from "../controllers/menuController.js";
import { handleInputErrors } from "../middleware/validation.js";

const router = new Router();

router.post('/',
    handleInputErrors,
    MenuController.createMenu)
router.get('/', 
    MenuController.getAllMenu
)
router.get('/:id',
    MenuController.getMenuById
)
router.put('/:id',
    handleInputErrors,
    MenuController.updateMenu
)
router.delete('/:id',
    MenuController.deleteMenu
)

export default router;