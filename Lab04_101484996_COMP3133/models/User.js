const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  username: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 100
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
  },

  address: {
    street: {
      type: String,
      required: true
    },
    suite: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true,
      match: [/^[A-Za-z\s]+$/, "City must contain only letters and spaces"]
    },
    zipcode: {
      type: String,
      required: true,
      match: [/^\d{5}-\d{4}$/, "Zipcode must be in format 12345-1234"]
    }
  },

  phone: {
    type: String,
    required: true,
    match: [/^\d-\d{3}-\d{3}-\d{4}$/, "Phone format must be 1-123-123-1234"]
  },

  website: {
    type: String,
    required: true,
    match: [/^https?:\/\/.+$/, "Website must be a valid URL"]
  },

  company: {
    name: {
      type: String,
      required: true
    }
  }

});

module.exports = mongoose.model("User", userSchema);
