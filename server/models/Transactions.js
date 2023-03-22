const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  category: { type: Types.ObjectId, ref: "Category" },
  value: { type: String, required: false },
  date: { type: String, required: false },
  note: { type: String, required: false },
  owner: { type: Types.ObjectId, ref: "User" },
});

module.exports = model("Transaction", schema);
