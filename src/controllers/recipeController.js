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

    static getAllRecipe = async(req, res)=>{
        try {
            const recipe = await Recipe.find({});
            res.json(recipe);
        } catch (error) {
            console.log(error);
        }
    }

    static getRecipeById = async(req, res)=>{
        const {id} = req.params;
        try {
            const recipe = await Recipe.findById(id)
            if (!recipe) {
                const err = new Error('Recipe not found')
                return res.status(404).json({err: err})
            }
            res.json(recipe)
        } 
        catch (error) {
            console.log(error);
        }
    }

    static updateRecipeById = async(req, res)=>{
        const {id} = req.params;
        try {
            const recipe = await Recipe.findByIdAndUpdate(id, req.body)
            await recipe.save()
            res.send('Recipe updated successfully')
        } catch (error) {
            console.log(error);
        }
    }

    static deleteRecipeById = async(req, res) =>{
        const {id} = req.params;
        try {
            const recipe = await Recipe.findById(id)
            if(!recipe) {
                const error = new Error('Recipe not found')
                return res.status(404).json({error: {message}})
            }
            await recipe.deleteOne()
            res.send('Recipe deleted successfully')
        } catch (error) {
            console.log(error);
        }
    }
}