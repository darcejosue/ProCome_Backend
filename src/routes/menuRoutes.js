import { Router } from "express";
import { MenuController } from "../controllers/menuController";
import { handleInputErrors } from "../middleware/validation";

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