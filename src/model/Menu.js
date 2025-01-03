import mongoose, {Schema} from "mongoose";

const MenuSchema = new Schema({
    menuSaucer: { //que plato se hara
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    },
    menuPreparationDay: { //Dia de la semana o por fecha
        type: Date,
        required: true,
        trim: true
    },
    menuMealtime: { //desayuno, almuerzo o cena
        type:String, 
        required: true,
        trim: true
    },
    menuPortions: { //cuantos platos se cocinaran
        type: Number,
        required: true,
        trim: true
    }, 
    menuEstado: { 
        type: Boolean,
        default: false
    }
})

const Menu = mongoose.model('Menu', MenuSchema)
export default Menu