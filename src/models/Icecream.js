const { Schema, model } = require("mongoose");

const IcecreamSchema = new Schema(
  {
    sabor: {
      type: String,
      required: true
    },
    preco: {
      type: Number,
      required: true
    },
    quantidade: {
      type: Number,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Icecream", IcecreamSchema);
