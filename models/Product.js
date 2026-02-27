const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    sku: {
      type: String,
      required: [true, "SKU is required"],
      unique: true,
      trim: true,
    },
    category: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: 0,
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: 0,
    },
    supplier: {
      type: String,
      trim: true,
    },
    isAvailable: {
      type: Boolean,
      default: function () {
        return this.quantity > 0;
      },
    },
  },
  { timestamps: true }
);

// Automatically update isAvailable when quantity changes
productSchema.pre("save", function () {
  this.isAvailable = this.quantity > 0;
});

module.exports = mongoose.model("Product", productSchema);