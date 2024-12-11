import { Router } from "express";
import { PerdidaController } from "../controllers/perdidaController.js";
import { handleInputErrors } from "../middleware/validation.js";

const router = new Router();

router.post('/',
    handleInputErrors,
    PerdidaController.createPerdida)
router.get('/', 
    PerdidaController.getAllPerdida
)
router.get('/:id',
    PerdidaController.getPerdidaById
)
router.put('/:id',
    handleInputErrors,
    PerdidaController.updatePerdida
)
router.delete('/:id',
    PerdidaController.deletePerdida
)

export default router;