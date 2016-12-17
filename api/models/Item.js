/**
 * Item.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    color: {
      type: 'string'
    },

    priority: {
      type: 'integer'
    },

    date: {
      type: 'date'
    },

    // Relationships
    tasks: {
      collection: 'task',
      via: 'item'
    },

    owner: {
      model: 'role'
    },

    project: {
      model: 'project'
    },

    createdBy: {
      model: 'user'
    },

    lastModifiedBy: {
      model: 'user'
    }
  }
};
