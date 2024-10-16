import mongoose, { Schema } from "mongoose";

const RecipeSchema = new Schema({
  recipeName: {
    type: String,
    required: true,
    trim: true,
  },
  recipeDescription: {
    type: String,
    required: true,
    trim: true,
  },
  recipeIngredients: [
    {
      type: Schema.Types.ObjectId,
      ref: "Stock",
    },
    { type: Number, required: true, trim: true },
  ],
  recipePreparation: {
    type: String,
    required: true,
    trim: true,
  },
  recipePrice: {
    //precio individual de la receta
    type: Number,
    required: true,
    trim: true,
  },
});

const Recipe = mongoose.model("Recipe", RecipeSchema);
export default Recipe;
