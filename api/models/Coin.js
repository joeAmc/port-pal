const mongoose = require("mongoose");

const coinSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  ticker: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    validate: {
      validator: async function (userId) {
        const user = await mongoose.model("User").findById(userId);
        return !!user;
      },
      message: "Invalid user ID",
    },
  },
  amount: {
    type: Number,
    required: true,
  },
});

coinSchema.index({ name: 1, user_id: 1 }, { unique: true });
const Coin = mongoose.model("Coin", coinSchema);

module.exports = Coin;
