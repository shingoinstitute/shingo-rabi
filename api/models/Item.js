/**
 * Item.js
 *
 * @description :: This is the model to store all RABIs.
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

    // Estimate of the number
    // of days to complete the
    // task. Used in computing
    // dates of this and other tasks
    daysToComplete: {
      type: 'float'
    },

    // If this task involves
    // outbound communication
    // or publishing by the
    // organization
    isPublishTask: {
      type: 'boolean',
      defaultsTo: false
    },

    // If this task involves
    // taking down ads/websites
    // by the organization
    isUnPublishTask: {
      type: 'boolean',
      defaultsTo: false
    },

    // Date to place item on board
    date: {
      type: 'date'
    },

    /*****************************
     ****    RELATIONSHIPS    ****
     *****************************/
    // The item that needs to
    // be finished in order to
    // start this task
    input: {
      model: 'item'
    },

    // The item that is dependant
    // on this item's completion
    output: {
      model: 'item'
    },

    // The role that owns this item
    owner: {
      model: 'role'
    },

    // The specific person assigned
    // responsibility for this item
    assigned: {
      model: 'user'
    },

    // The project that this item
    // belongs to
    project: {
      model: 'project'
    },

    // A group this item belongs to
    group: {
      model: 'group'
    },

    // The user to create this item
    createdBy: {
      model: 'user'
    },

    // The last user to modify
    // this item
    lastModifiedBy: {
      model: 'user'
    }
  }
};
