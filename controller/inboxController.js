// get index page
function getInbox(req, res, next) {
  res.render("inbox", {
    title: "Index",
  });
}

module.exports = {
  getInbox,
};
