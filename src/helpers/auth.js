const helpers = {};
helpers.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  //req.flash("error_msg", "not authenticated");
  //res.send("/default");
};

module.exports = helpers;
