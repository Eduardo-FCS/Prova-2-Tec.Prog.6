const service = require('../service/product.service')

const create = async (req, res) => {
    await service.create(req.body)
    res.status(201).send('Product created successfully!')
}

const remove = async (req, res) => {
    const orderId = req.params.id
    await service.remove(orderId)
    res.status(204).send('Product removed successfully')
}

module.exports = {
    create,
    remove
}