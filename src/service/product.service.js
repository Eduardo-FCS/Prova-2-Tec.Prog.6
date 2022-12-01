const { product } = require('../model/index')

const create = async data => {
    await product.create(data)
}

const remove = async productId => {
    return await product.destroy({
        where: {
            id: productId
        }
    })
}

module.exports = {
    create,
    remove
}