const express = require('express')
const routerOrder = require('./router/ordered.router')
const routerProduct = require('./router/product.router')
const routerCustomer = require('./router/customer.router')

const app = express()
app.use(express.json())
app.use('/api/v1/ordereds', routerOrder)
app.use('/api/v1/products', routerProduct)
app.use('/api/v1/customers', routerCustomer)

const HOST = 8087
app.listen(HOST, () => console.log(`Server up on port ${HOST}!`))