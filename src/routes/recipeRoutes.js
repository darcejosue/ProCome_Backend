import { Router } from "express";
import { RecipeController } from "../controllers/recipeController.js";
import { handleInputErrors } from "../middleware/validation.js";

const router = Router();

router.post('/',
    handleInputErrors,
    RecipeController.createRecipe
)

router.get('/',
    RecipeController.getAllRecipe)

router.get('/:id',
        RecipeController.getRecipeById)
    
router.put('/:id', 
    handleInputErrors,
    RecipeController.updateRecipeById
)

router.delete('/:id',
    RecipeController.deleteRecipeById
)
export default router