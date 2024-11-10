module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('Videos', {
        id: {
            type: Sequelize.UUID,defaultValue: Sequelize.UUIDV4,primaryKey: true,allowNull: false,unique: true}
            ,title: Sequelize.STRING,description: Sequelize.STRING,url: Sequelize.STRING,createdAt: {
                type: Sequelize.DATE,allowNull: true}
                ,updatedAt: {
                    type: Sequelize.DATE,allowNull: true}
                    ,deletedAt: {
                        type: Sequelize.DATE,allowNull: true}
                        ,}
                        ),down: (queryInterface, Sequelize) => queryInterface.dropTable('Videos')}
                        ;