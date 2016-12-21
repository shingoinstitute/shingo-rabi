/**
 * Role.js
 *
 * @description :: The role can correspond to departments. It allows for generalized ownership.
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

    // The color of the
    // printed RABI card
    color: {
      type: 'string'
    },

    /*****************************
     ****    RELATIONSHIPS    ****
     *****************************/
    // Users who belong to
    // this role
    users: {
      collection: 'user',
      via: 'role'
    },

    // Items this role owns
    items: {
      collection: 'item',
      via: 'owner'
    },

    // Projects this role owns
    projects: {
      collection: 'project',
      via: 'owner'
    },

    // The user to create
    createdBy: {
      model: 'user'
    },

    // The last user to modify
    lastModifiedBy: {
      model: 'user'
    }
  }
};
