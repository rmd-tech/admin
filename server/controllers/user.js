"use strict";

const _ = require("lodash");
const { ApplicationError } = require("@strapi/utils").errors;
const {
  validateUserCreationInput,
  validateUserUpdateInput,
  validateUsersDeleteInput,
} = require("../validation/user");

const { getService } = require("../utils");

module.exports = {
  async createe(ctx) {
    const { body } = ctx.request;
    const cleanData = {
      ...body,
      email: _.get(body, `email`, ``).toLowerCase(),
    };

    await validateUserCreationInput(cleanData);

    let attributes = _.pick(cleanData, [
      "firstname",
      "lastname",
      "email",
      "roles",
      "preferedLanguage",
    ]);

    console.log("testing the author");

    const userAlreadyExists = await getService("user").exists({
      email: attributes.email,
    });

    if (userAlreadyExists) {
      throw new ApplicationError("Email already taken");
    }

    const createdUser = await getService("user").create(attributes);
    console.log(createdUser.roles);
    console.log(createdUser.roles[0].name);
    console.log(createdUser.roles[0].name === "Author");

    if (createdUser.roles[0].name === "Author") {
      let author = await strapi.entityService.create("api::author.author", {
        data: {
          Name: attributes.firstname + " " + attributes.lastname,
          Email: attributes.email,
          description: "Author",
          relationWithAuthorUser: createdUser.id,
        },
      });
    }

    const userInfo = getService("user").sanitizeUser(createdUser);

    // Note: We need to assign manually the registrationToken to the
    // final user payload so that it's not removed in the sanitation process.
    Object.assign(userInfo, {
      registrationToken: createdUser.registrationToken,
    });

    // Send 201 created
    ctx.created({ data: userInfo });
  },

  async find(ctx) {
    const userService = getService("user");

    const { results, pagination } = await userService.findPage(ctx.query);

    ctx.body = {
      data: {
        results: results.map((user) => userService.sanitizeUser(user)),
        pagination,
      },
    };
  },

  async findOne(ctx) {
    const { id } = ctx.params;

    const user = await getService("user").findOne(id);

    if (!user) {
      return ctx.notFound("User does not exist");
    }

    const authors = await strapi.entityService.findMany("api::author.author", {
      populate: "*",
    });

    //const authors = await strapi.query('author.author').find();
    console.log(authors);

    let userInfo = getService("user").sanitizeUser(user);

    if (userInfo.roles[0].name === "Editor") {
      userInfo = Object.assign(userInfo, { authors: authors });
    }

    ctx.body = {
      data: userInfo,
    };
  },

  async updatee(ctx) {
    const { id } = ctx.params;
    const { body: input } = ctx.request;

    await validateUserUpdateInput(input);

    if (_.has(input, "email")) {
      const uniqueEmailCheck = await getService("user").exists({
        id: { $ne: id },
        email: input.email,
      });

      if (uniqueEmailCheck) {
        throw new ApplicationError(
          "A user with this email address already exists"
        );
      }
    }

    const updatedUser = await getService("user").updateById(id, input);

    if (updatedUser.roles[0].name === "Author") {
      let getAuthor = await strapi.entityService.findMany(
        "api::author.author",
        {
          filters: {
            relationWithAuthorUser: {
              $eq: updatedUser.id,
            },
          },
        }
      );
      console.log(getAuthor);
      const entry = await strapi.entityService.update(
        "api::author.author",
        getAuthor[0].id,
        {
          data: {
            Name: updatedUser.firstname + " " + updatedUser.lastname,
            Email: updatedUser.email,
          },
        }
      );
    }

    if (!updatedUser) {
      return ctx.notFound("User does not exist");
    }

    ctx.body = {
      data: getService("user").sanitizeUser(updatedUser),
    };
  },

  async deleteOnee(ctx) {
    const { id } = ctx.params;

    const deletedUser = await getService("user").deleteById(id);
    console.log("deletedUser");
    console.log(deletedUser);

    if (deletedUser.roles[0].name === "Author") {
      let getAuthor = await strapi.entityService.findMany(
        "api::author.author",
        {
          filters: {
            relationWithAuthorUser: {
              $eq: deletedUser.id,
            },
          },
        }
      );
      console.log("getAuthor");
      console.log(getAuthor);

      let entry = await strapi.entityService.delete(
        "api::author.author",
        getAuthor[0].id
      );
      console.log("entry");
    }

    if (!deletedUser) {
      return ctx.notFound("User not found");
    }

    return ctx.deleted({
      data: getService("user").sanitizeUser(deletedUser),
    });
  },

  /**
   * Delete several users
   * @param {KoaContext} ctx - koa context
   */
  async deleteMany(ctx) {
    console.log("users deleted");
    const { body } = ctx.request;
    await validateUsersDeleteInput(body);

    const users = await getService("user").deleteByIds(body.ids);
    console.log(users[0].roles[0].name);
    console.log(users);

    if (users.length < 2 && users.length > 0) {
      if (users[0].roles[0].name === "Author") {
        let getAuthor = await strapi.entityService.findMany(
          "api::author.author",
          {
            filters: {
              relationWithAuthorUser: {
                $eq: users[0].id,
              },
            },
          }
        );
        console.log("getAuthor");
        console.log(getAuthor);

        let entry = await strapi.entityService.delete(
          "api::author.author",
          getAuthor[0].id
        );
        console.log("entry");
      }
    } else if (users.length > 1) {
      users.forEach(async (element) => {
        if (element.roles[0].name === "Author") {
          let getAuthor = await strapi.entityService.findMany(
            "api::author.author",
            {
              filters: {
                relationWithAuthorUser: {
                  $eq: element.id,
                },
              },
            }
          );
          console.log("getAuthor");
          console.log(getAuthor);

          let entry = await strapi.entityService.delete(
            "api::author.author",
            getAuthor[0].id
          );
          console.log("entry");
        }
      });
    }

    const sanitizedUsers = users.map(getService("user").sanitizeUser);

    return ctx.deleted({
      data: sanitizedUsers,
    });
  },
};
