module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('Tasks', {
        id: {
            type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true, allowNull: false, unique: true }
            , isComplete: {
                type: Sequelize.BOOLEAN, allowNull: false }
                , dueDate: {
                    type: Sequelize.DATE, allowNull: false }
                    , createdAt: {
                        type: Sequelize.DATE, allowNull: true }
                        , updatedAt: {
                            type: Sequelize.DATE, allowNull: true }
                            , deletedAt: {
                                type: Sequelize.DATE, allowNull: true }
                            }
                            ), down: (queryInterface, Sequelize) => queryInterface.dropTable('Tasks') }