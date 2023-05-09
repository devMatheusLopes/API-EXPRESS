const { INTEGER } = require("sequelize")

module.exports = (sequelize, DataType) => {
    const Product = sequelize.define('Product', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING(30),
        valor: DataType.DECIMAL(10, 2),
        cor: DataType.STRING(20),
        descricao: DataType.STRING(100),
        id_categoria: DataType.INTEGER,
        imagem_1: DataType.STRING(),
        imagem_2: DataType.STRING(),
        imagem_3: DataType.STRING()

    }, {
        timestamps: false,
        tableName: 'produto'
    }


    )

    return Product
}