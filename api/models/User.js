/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    /*****************************
     ****      ATTRIBUTES     ****
     *****************************/
    name: {
      type: 'string'
    },

    email: {
      type: 'string'
    },

    isAdmin: {
      type: 'string'
    },

    lastLoggedIn: {
      type: 'date'
    },

    /*****************************
     ****    RELATIONSHIPS    ****
     *****************************/
    // This user's role
    role: {
      model: 'role'
    },

    // Items assigned to
    // this user
    assigned: {
      collection: 'item',
      via: 'assigned'
    },

    // Projects this user
    // has created
    createdProjects: {
      collection: 'project',
      via: 'createdBy'
    },

    // Roles this user
    // has created
    createdRoles: {
      collection: 'role',
      via: 'createdBy'
    },

    // Items this user
    // has created
    createdItems: {
      collection: 'item',
      via: 'createdBy'
    },

    // Projects that this
    // user was last to modify
    lastToModifyProjects: {
      collection: 'project',
      via: 'lastModifiedBy'
    },

    // Roles that this
    // user was last to modify
    lastToModifyRoles: {
      collection: 'role',
      via: 'lastModifiedBy'
    },

    // Items that this
    // user was last to modify
    lastToModifyItems: {
      collection: 'item',
      via: 'lastModifiedBy'
    }
  }
};
