var ordersController = require('../controllers/orders.js'),
	express			= require('express'),
	orderRoutes		= express.Router()

//create routes for /users
orderRoutes.route('/')
	.get(ordersController.index)
	.post(ordersController.create)

//create routes for /users/:email
orderRoutes.route('/orders')
	.get(ordersController.show)
	.patch(ordersController.update)
	.delete(ordersController.destroy)

module.exports = orderRoutes
