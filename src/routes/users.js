const router = require("koa-router");
// const { User } = require("../model/UserModel");

// async function insert(user) {
//     return User.create({
//         username: user.username,
//         password: user.password,
//         email: user.email,
//     });
// }

router.prefix("/users");

router.get("/", function (ctx, next) {
    ctx.body = "this is a users response!";
});

router.get("/bar", function (ctx, next) {
    ctx.body = "this is a users/bar response";
});

module.exports = router;
