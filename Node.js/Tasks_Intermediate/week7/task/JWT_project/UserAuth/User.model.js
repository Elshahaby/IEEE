import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// not use arrow function because we will deal with this keyword
UserSchema.pre('save', async function (next)  {
    try {
        const salt = await bcrypt.genSalt(13);
        const hashedPassword = await bcrypt.hash(this.password, 13);    
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
})

UserSchema.methods.isMatchedPassword = async function (password) {
    try{
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw error;
    }
}

export const User = model('user', UserSchema);

