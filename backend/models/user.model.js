
// Los modelos como see muestra en el codigo, se utilizan para definir estructuras y codigo para 
// las validaciones con los docukmentos  dentro de mongoosedb.

import {Schema} from "mongoose"
import mongoose from "mongoose"

const userSchema = new Schema(
    {
        clerkUserId: {
            type: String,
            required: true,
            unique: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        img: {
            type: String,
          },
          savedPosts: {
            type: [String],
            default: [],
          },
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);