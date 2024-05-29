const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const { v4: uuidv4 } = require('uuid');

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
  address: {
    type: String,
    required: false,
  },
  socialLinks: {
    type: Map,
    of: String,
    required: false,
  },

  verified: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
