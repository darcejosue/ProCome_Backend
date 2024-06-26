import { Router } from "express";
import { RecipeController } from "../controllers/recipeController.js";
import { handleInputErrors } from "../middleware/validation.js";

const router = Router();

router.post('/',
    handleInputErrors,
    RecipeController.createRecipe
)

export default router