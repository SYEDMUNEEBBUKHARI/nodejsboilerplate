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
      (queryInterface.renameColumn('Users', 'created_at', 'created_At'),
      queryInterface.renameColumn('Users', 'updated_at', 'updated_At'),
      queryInterface.renameColumn('Users', 'deleted_at', 'deleted_At'))
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
      (queryInterface.renameColumn('Users', 'created_At', 'updated_at'),
      queryInterface.renameColumn('Users', 'updated_At', 'updated_at'),
      queryInterface.renameColumn('Users', 'deleted_At', 'deleted_at'))
    ]
  },
}
