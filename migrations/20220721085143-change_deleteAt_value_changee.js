/* eslint-disable no-unused-vars */
'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all[
      queryInterface.changeColumn('Users', 'deletedAt', {
        type: Sequelize.DATE,
        allowNull: true,
      })
    ]
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all[
      queryInterface.changeColumn('Users', 'deletedAt', {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      })
    ]
  },
}
