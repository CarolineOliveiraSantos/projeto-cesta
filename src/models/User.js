const { Schema, model } = require("mongoose")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

const UserSchema = new Schema(
    {
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        senha: {
            type: String,
            required: true
        },
        Administrador: {
            type: Boolean,
            default: false
        },
        icecream: [
        {
            type: Schema.Types.ObjectId,
            ref: "Icecream"
        }
        ],
    },
    {
        timestamps: true
    }
);

UserSchema.pre("save", async function(next){
    if(!this.isModified("senha")){
        return next();
    }
    this.senha = await bcrypt.Hash(this.senha, 8);
});
UserSchema.methods = {
    compareHash(senha){
        return  bcrypt.compare(senha, this.senha);
    }
};
UserSchema.statics = {
    generateToken({id}) {
        return jwt.sign({id}, authConfig.secret, {
            expiresIn: authConfig.ttl
        });
    }
};

module.exports = model("User", UserSchema);