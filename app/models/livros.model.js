module.exports = (sequelize, Sequelize) => {
    const Livro = sequelize.define("livro", {
      nome:{
        type: Sequelize.STRING
      },
      autor: {
        type: Sequelize.STRING
      },
      sinopse:{
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
        field: 'created_at'
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
        field: 'updated_at'
      },
      status:{
        type: Sequelize.BOOLEAN
      }
    });

    return Livro;
};