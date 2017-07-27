const
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  passportLocalMongoose = require('passport-local-mongoose'),
  orderSchema = new Schema({
    pOrder: String,
    atgOrder: String,
    orderDateTime: Date,
    sku: Number,
    productForm: String,
    fragrance: String,

  })

var Order = mongoose.model('orders', orderSchema)
orderSchema.plugin(passportLocalMongoose)
module.exports = Order
