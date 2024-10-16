import { Router } from "express";
import { SupplierController } from "../controllers/supplierController.js";
import { handleInputErrors } from "../middleware/validation.js";

const router = Router();

router.post('/',
    handleInputErrors,
    SupplierController.createSupplier
)

router.get('/',
    SupplierController.getAllSuppliers)

router.get('/:id',
        SupplierController.getSupplierById
    )

router.put('/:id',
    handleInputErrors,
    SupplierController.updateSupplier)

router.delete('/:id',
    SupplierController.deleteSupplier)

export default router