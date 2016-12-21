/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var passport = require('passport');

module.exports = {
	login: function(req,res,next){
		passport.authenticate('forcedotcom')(req,res,next)
	},

	token: function(req, res, next){
		passport.authenticate('forcedotcom', function(err, user, info, state){
			sails.log.debug('err', err)
			if(err) return next(err);

			req.session.authenticated = user._raw.asserted_user;

      User.findOne({email: user.Email})
      .then(function(localUser){
        req.session.user = localUser;
      })
      .catch(function(err){
        next(err);
      })
		})(req,res,next);
	},

	logout: function(req,res,next){
		req.session.authenticated = false;
		req.session.user = null;
		return res.redirect('/');
	},

	me: function(req,res,next){
		res.ok(req.session.user);
	}
};
