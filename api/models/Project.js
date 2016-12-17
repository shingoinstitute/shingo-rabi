/**
 * Project.js
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

    startDate: {
      type: 'date'
    },

    endDate: {
      type: 'date'
    },

    // Relationships
    owner: {
      model: 'role'
    },

    items: {
      collection: 'item',
      via: 'project'
    },

    createdBy: {
      model: 'owner'
    },

    lastModifiedBy: {
      model: 'owner'
    }
  }
};
