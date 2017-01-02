/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your controllers.
 * You can apply one or more policies to a given controller, or protect
 * its actions individually.
 *
 * Any policy file (e.g. `api/policies/authenticated.js`) can be accessed
 * below by its filename, minus the extension, (e.g. "authenticated")
 *
 * For more information on how policies work, see:
 * http://sailsjs.org/#!/documentation/concepts/Policies
 *
 * For more information on configuring policies, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.policies.html
 */


module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions (`sessionAuth`            *
  * allows authorized access)                                                *
  *                                                                          *
  ***************************************************************************/

  '*': 'sessionAuth',

  /***************************************************************************
  *                                                                          *
  * Policy for User and Role controllers is to have everything restricted    *
  * admin users and the findAll is allowed for authenticated users           *
  * ('sessionAuth' allows authorized access, 'isAdmin' allows admin access)  *
  *                                                                          *
  ***************************************************************************/
  UserController: {
    '*': ['sessionAuth', 'isAdmin'],
    findAll: ['sessionAuth']
  },

  RoleController: {
    '*': ['sessionAuth', 'isAdmin'],
    findAll: ['sessionAuth']
  },

  /***************************************************************************
  *                                                                          *
  * Default policy for the auth controller (`true` allows public access)     *
  *                                                                          *
  ***************************************************************************/
  AuthController: {
    '*': true
  },

  '*': true

};
