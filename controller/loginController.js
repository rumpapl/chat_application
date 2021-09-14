// get login page

function getLogin(req, res, next) {
  res.render("index", {
    title: "login",
  });
}

module.exports = {
  getLogin,
};
