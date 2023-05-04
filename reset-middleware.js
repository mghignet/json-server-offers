const reset = require("./reset");

module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/reset") {
    reset.reset();
    console.log("The database has been reset");
    res.send();
  } else {
    next();
  }
};
