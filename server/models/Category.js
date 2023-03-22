const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  label: { type: String, required: false },
  limit: { type: Number, required: false },
  owner: { type: Types.ObjectId, ref: "User" },
});

module.exports = model("Category", schema);
