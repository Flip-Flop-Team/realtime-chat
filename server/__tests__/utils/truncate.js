const {sequelize}  = require('../../src/models')

module.exports = () => {
    return Promise.all(Object.keys(sequelize.models).map(key => {
        return sequelize.models[key].destroy({truncate: {cascade:true}, restartIdentity: true})
    }))
}