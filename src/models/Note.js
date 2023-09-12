const {Model , DataTypes } = require ('sequelize')

class Note extends Model {
    static init (sequelize){
        super.init({
            title : DataTypes.STRING,
            nota: DataTypes.STRING
        } ,{
            sequelize
        })
    }
}

module.exports = Note