const mongoose = require("mongoose");

const User = require("../models/user");

const listingSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  listingImage: { type: String, required: true },
  description: { type: String, required: true },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  biddingApplicable: { type: Boolean, required: true },
  offerApplicable: { type: Boolean, required: true },
});

module.exports = mongoose.model("Listing", listingSchema);
