import Recipe from "../model/Recipe.js";

export class RecipeController{


    static createRecipe = async(req, res)=>{
        const recipe = new Recipe(req.body);
        try {
            await recipe.save();
            res.send('create success')
        } catch (error) {
            console.log(error);
        }
    }
}