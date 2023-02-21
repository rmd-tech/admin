'use strict';

const passport = require('koa-passport');
const compose = require('koa-compose');
const { ApplicationError, ValidationError } = require('@strapi/utils').errors;
const { getService } = require('../utils');
const {
  validateRegistrationInput,
  validateAdminRegistrationInput,
  validateRegistrationInfoQuery,
  validateForgotPasswordInput,
  validateResetPasswordInput,
  validateRenewTokenInput,
} = require('../validation/authentication');

module.exports = {
  login: compose([
    (ctx, next) => {
      return passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err) {
          strapi.eventHub.emit('admin.auth.error', { error: err, provider: 'local' });
          return ctx.notImplemented();
        }

        if (!user) {
          strapi.eventHub.emit('admin.auth.error', {
            error: new Error(info.message),
            provider: 'local',
          });
          throw new ApplicationError(info.message);
        }
       

        ctx.state.user = user;
        
        

        strapi.eventHub.emit('admin.auth.success', { user, provider: 'local' });

        return next();
      })(ctx, next);
    },
    async (ctx) => {
      let { user } = ctx.state;
       let getUserByIdVar;
            getUserByIdVar = await getService('user').findOne(user.id);
            if (getUserByIdVar) {
              
              // user = { ...user, role: getUserByIdVar.roles[0].name };
              console.log(user);
                 ctx.body = {
        data: {
          token: getService('token').createJwtToken(user),
          user: getUserByIdVar, // TODO: fetch more detailed info
        },
      };
               
            }

   
    },
  ]),

  async renewToken(ctx) {
    await validateRenewTokenInput(ctx.request.body);

    const { token } = ctx.request.body;

    const { isValid, payload } = getService('token').decodeJwtToken(token);

    if (!isValid) {
      throw new ValidationError('Invalid token');
    }

    ctx.body = {
      data: {
        token: getService('token').createJwtToken({ id: payload.id }),
      },
    };
  },

  async registrationInfo(ctx) {
    await validateRegistrationInfoQuery(ctx.request.query);

    const { registrationToken } = ctx.request.query;

    const registrationInfo = await getService('user').findRegistrationInfo(registrationToken);

    if (!registrationInfo) {
      throw new ValidationError('Invalid registrationToken');
    }

    ctx.body = { data: registrationInfo };
  },

  async register(ctx) {
    const input = ctx.request.body;

    await validateRegistrationInput(input);

    const user = await getService('user').register(input);
    let getUserByIdVar;
            getUserByIdVar = await getService('user').findOne(user.id);
            if (getUserByIdVar) {
              
              // user = { ...user, role: getUserByIdVar.roles[0].name };
              console.log(user);
              console.log(getUserByIdVar);
                 ctx.body = {
        data: {
          token: getService('token').createJwtToken(user),
          user: getUserByIdVar, // TODO: fetch more detailed info
        },
      };
               
            }

    // ctx.body = {
    //   data: {
    //     token: getService('token').createJwtToken(user),
    //     user: getService('user').sanitizeUser(user),
    //   },
    // };
  },

  async registerAdmin(ctx) {
    const input = ctx.request.body;

    await validateAdminRegistrationInput(input);

    const hasAdmin = await getService('user').exists();

    if (hasAdmin) {
      throw new ApplicationError('You cannot register a new super admin');
    }

    const superAdminRole = await getService('role').getSuperAdmin();

    if (!superAdminRole) {
      throw new ApplicationError(
        "Cannot register the first admin because the super admin role doesn't exist."
      );
    }

    const user = await getService('user').create({
      ...input,
      registrationToken: null,
      isActive: true,
      roles: superAdminRole ? [superAdminRole.id] : [],
    });

    strapi.telemetry.send('didCreateFirstAdmin');

    // ctx.body = {
    //   data: {
    //     token: getService('token').createJwtToken(user),
    //     user: getService('user').sanitizeUser(user),
    //   },
    // };
    let getUserByIdVar;
            getUserByIdVar = await getService('user').findOne(user.id);
            if (getUserByIdVar) {
              
              // user = { ...user, role: getUserByIdVar.roles[0].name };
              console.log(user);
                 ctx.body = {
        data: {
          token: getService('token').createJwtToken(user),
          user: getUserByIdVar, // TODO: fetch more detailed info
        },
      };
               
            }
  },

  async forgotPassword(ctx) {
    const input = ctx.request.body;

    await validateForgotPasswordInput(input);

    getService('auth').forgotPassword(input);

    ctx.status = 204;
  },

  async resetPassword(ctx) {
    const input = ctx.request.body;

    await validateResetPasswordInput(input);

    const user = await getService('auth').resetPassword(input);

    ctx.body = {
      data: {
        token: getService('token').createJwtToken(user),
        user: getService('user').sanitizeUser(user),
      },
    };
  },
};
