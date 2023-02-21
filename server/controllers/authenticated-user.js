'use strict';

const { validateProfileUpdateInput } = require('../validation/user');
const { getService } = require('../utils');

module.exports = {
  async getMe(ctx) {
    const userInfo = getService('user').sanitizeUser(ctx.state.user);

    ctx.body = {
      data: userInfo,
    };
  },

  async updateMe(ctx) {
    const input = ctx.request.body;

    await validateProfileUpdateInput(input);

    const userService = getService('user');
    const authServer = getService('auth');

    const { currentPassword, ...userInfo } = input;

    if (currentPassword && userInfo.password) {
      const isValid = await authServer.validatePassword(currentPassword, ctx.state.user.password);

      if (!isValid) {
        return ctx.badRequest('ValidationError', {
          currentPassword: ['Invalid credentials'],
        });
      }
    }

    const updatedUser = await userService.updateById(ctx.state.user.id, userInfo);
    console.log(updatedUser);
    if (updatedUser.roles[0].name === "Author") {
          let getAuthor = await strapi.entityService.findMany('api::author.author', {
                filters: {
                  relationWithAuthorUser: {
                    $contains: updatedUser.id,
                  },
                },
          });
      console.log(getAuthor);
      const entry = await strapi.entityService.update('api::author.author', getAuthor[0].id, {
            data: {
                    Name: updatedUser.firstname + " " + updatedUser.lastname,
                    Email: updatedUser.email,
                  },
          });

    }

    ctx.body = {
      data: userService.sanitizeUser(updatedUser),
    };
  },

  async getOwnPermissions(ctx) {
    const { findUserPermissions, sanitizePermission } = getService('permission');
    const { user } = ctx.state;

    const userPermissions = await findUserPermissions(user);

    ctx.body = {
      data: userPermissions.map(sanitizePermission),
    };
  },
};
