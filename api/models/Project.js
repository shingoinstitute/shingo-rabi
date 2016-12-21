/**
 * Project.js
 *
 * @description :: The project model holds many RABIs.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    /*****************************
     ****      ATTRIBUTES     ****
     *****************************/
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

    /*****************************
     ****    RELATIONSHIPS    ****
     *****************************/
    // This role who has responsibility
    // for this project
    owner: {
      model: 'role'
    },

    // All items that belong
    // to this project
    items: {
      collection: 'item',
      via: 'project'
    },

    // The user who created
    createdBy: {
      model: 'user'
    },

    // The last user to modify
    lastModifiedBy: {
      model: 'user'
    }
  }
};
