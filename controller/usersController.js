// get users page

function getUsers(req, res, next) {
  res.render("users", {
    title: "users",
  });
}

module.exports = {
  getUsers,
};
