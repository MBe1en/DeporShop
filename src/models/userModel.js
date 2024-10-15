import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },

    lastName:{
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
    },

    address:{
        type: String,
        required: true,
    },

    city:{
        type: String,
        required: true,
    },

    province:{
        type: String,
        required: true,
    },
   
    password:{
        type: String,
        required: true,
    }
 
});

userSchema.pre("save", function(next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

userSchema.pre("findOneAndUpdate", async function(next) {
    const update = this.getUpdate();
    
    if (update.password) {
        // Encripta la nueva contraseña si es que está siendo actualizada
        update.password = await bcrypt.hash(update.password, 10);
    }
    next();
});

export default mongoose.model("user", userSchema);