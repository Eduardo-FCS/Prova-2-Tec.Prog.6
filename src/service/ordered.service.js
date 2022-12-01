const { ordered } = require('../model/index')

const create = async data => {
    await ordered.create(data)
}

const remove = async orderedId => {
    return await ordered.destroy({
        where: {
            id: orderedId
        }
    })
}

module.exports = {
    create,
    remove
}