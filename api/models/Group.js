/**
 * Group.js
 *
 * @description :: This model is used to store groupings of RABIs.
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

    /*****************************
     ****    RELATIONSHIPS    ****
     *****************************/
    // Items that belong to
    // this group
    items: {
      collection: 'item',
      via: 'group'
    },

    // User who created this group
    createdBy: {
      model: 'user'
    },

    // The last user to modify this group
    lastModifiedBy: {
      model: 'user'
    }
  }
};
