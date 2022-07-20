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
      (queryInterface.renameColumn('Users', 'created_At', 'createdAt'),
      queryInterface.renameColumn('Users', 'updated_At', 'updatedAt'),
      queryInterface.renameColumn('Users', 'deleted_At', 'deletedAt'))
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
      (queryInterface.renameColumn('Users', 'createdAt', 'updated_At'),
      queryInterface.renameColumn('Users', 'updatedAt', 'updated_At'),
      queryInterface.renameColumn('Users', 'deletedAt', 'deleted_At'))
    ]
  },
}
