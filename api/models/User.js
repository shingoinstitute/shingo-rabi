/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },

    email: {
      type: 'string',
      primaryKey: true,
      required: true
    },

    lastLoggedIn: {
      type: 'date'
    },

    // Relationships
    role: {
      model: 'role'
    },

    assigned: {
      collection: 'task',
      via: 'assigned'
    },

    createdProjects: {
      collection: 'project',
      via: 'createdBy'
    },

    createdRoles: {
      collection: 'role',
      via: 'createdBy'
    },

    createdItems: {
      collection: 'item',
      via: 'createdBy'
    },

    createdTasks: {
      collection: 'task',
      via: 'createdBy'
    },

    lastToModifyProjects: {
      collection: 'project',
      via: 'lastModifiedBy'
    },

    lastToModifyRoles: {
      collection: 'role',
      via: 'lastModifiedBy'
    },

    lastToModifyItems: {
      collection: 'item',
      via: 'lastModifiedBy'
    },

    lastToModifyTasks: {
      collection: 'task',
      via: 'lastModifiedBy'
    }
  }
};
