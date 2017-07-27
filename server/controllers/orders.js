var Order = require('../models/Order.js')

//create action to display all orders
function index(req, res) {
	Order.find({}, function(err, orders){
		if (err) throw err
		res.json(orders)
	})
}

// //create action to add a new order
// pOrder#: String,
// atgOrder: String,
// orderDate/Time: Date,
// sku: Number,
// productForm: String,
// fragrance: String,

function create(req, res, next) {
	var order = new Order()
	order.pOrder = req.body.pOrder
	order.atgOrder = req.body.atgOrder
	order.orderDateTime = req.body.orderDateTime
	order.sku = req.body.sku
	order.productForm = req.body.productForm
	order.fragrance = req.body.fragrance

	order.save(function(err, order, count) {
		if (err) throw err
		res.json({success: true, message: 'Welcome!'})
	})
}

//create action to show a single order
function show(req, res) {
	Order.find({pOrder: req.params.pOrder}, function(err, order){
		if (err) throw err
		res.json(order)
	})
}

//create action to edit a single order
function update(req, res) {
	Order.findOneAndUpdate({pOrder: req.params.pOrder}, {atgOrder: req.body.atgOrder}, function(err, order) {
		if (err) throw err
		res.json(order)
	})
}

//create action to delete a single order
function destroy(req, res) {
	Order.remove({email: req.params.pOrder}, function(err){
		if (err) throw err
		res.json({success: true, message: 'BYE, FELICIA!'})
	})
}

module.exports = {
	index: index,
	create: create,
	show: show,
	update: update,
	destroy: destroy
}
