/**
 * Role.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string'
    },

    description: {
      type: 'string'
    },

    // Relationships
    users: {
      collection: 'user',
      via: 'role'
    },

    items: {
      collection: 'item',
      via: 'owner'
    },

    projects: {
      collection: 'project',
      via: 'owner'
    },

    createdBy: {
      model: 'user'
    },

    lastModifiedBy: {
      model: 'user'
    }
  }
};
