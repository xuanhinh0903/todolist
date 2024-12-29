const authRoute = require("./auth.router");
const express = require("express");
const router = express.Router();

const publicRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
];

const privateRoutes = [];

publicRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

// this check check private router
// let check = true;
// if (check) {
//   publicRoutes.forEach((route) => {
//     router.use(route.path, route.route);
//   });
// }

module.exports = router;
