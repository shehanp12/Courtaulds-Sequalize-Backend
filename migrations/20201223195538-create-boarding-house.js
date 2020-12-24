
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BoardingHouses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      subtitle: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      distance: {
        type: Sequelize.DOUBLE
      },
      perMonth: {
        type: Sequelize.DOUBLE
      },
      keyMoney: {
        type: Sequelize.DOUBLE
      },
      imageUrl: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Employees',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BoardingHouses');
  }
};
