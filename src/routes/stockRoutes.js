import { Router } from "express";
import {body, param} from "express-validator";
import { StockController } from "../controllers/stockController.js";
import { handleInputErrors } from "../middleware/validation.js";

const router = Router();

router.post('/', 
    body('stockName')
    .notEmpty().withMessage('El nombre del producto es obligatorio'),
    body('stockDescription')
    .notEmpty().withMessage('La descripció del producto es obligatorio'),
    body('stockQuantity')
    .notEmpty().withMessage('La cantidad del producto es obligatorio'),
    body('stockPrice')
    .notEmpty().withMessage('El precio del producto es obligatorio'),
    handleInputErrors,
     StockController.createStock)
      
router.get('/', StockController.getAllStock)

router.get('/:id',
    param('id').isMongoId().withMessage('ID No valido'),
    handleInputErrors,
    StockController.getStockById)

router.put('/:id',
    StockController.updateStockById)

router.delete('/:id',
    param('id').isMongoId().withMessage('ID No valido'),
    handleInputErrors,
    StockController.deleteStockById)

export default router