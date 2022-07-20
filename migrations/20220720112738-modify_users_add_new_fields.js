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
      (queryInterface.addColumn(
        'Users', // table name
        'created_at', // new field name
        {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        }
      ),
      queryInterface.addColumn(
        'Users', // table name
        'updated_at', // new field name
        {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        }
      ),
      queryInterface.addColumn(
        'Users', // table name
        'deleted_at', // new field name
        {
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        }
      ))
    ]
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([
      queryInterface.removeColumn('Users', 'created_at'),
      queryInterface.removeColumn('Users', 'updated_at'),
      queryInterface.removeColumn('Users', 'deleted_at'),
    ])
  },
}
