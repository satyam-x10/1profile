const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlatformSchema = new Schema({
  Platform_name: {
    type: String,
    required: true,
  },
});

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: false,
  },
  List: {
    type: [PlatformSchema],
    required: false,
  },
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
