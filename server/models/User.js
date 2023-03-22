const { model, Schema, Types } = require("mongoose");


const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  transaction: [{ type: Types.ObjectId, ref: "transaction" }],
  category: [{ type: Types.ObjectId, ref: "category" }],
});

module.exports = model("User", schema);
