const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    maxlength: 35,
    match: /^[A-Za-z\s'-]+$/,
  },
  last_name: {
    type: String,
    required: true,
    maxlength: 35,
    match: /^[A-Za-z\s'-]+$/,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    validate: {
      validator: function (v) {
        return /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(v);
      },
      message: "Password must contain at least one uppercase letter, one number, and one special character.",
    },
  },
}, { timestamps: true });

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

module.exports = mongoose.model("User", userSchema);
