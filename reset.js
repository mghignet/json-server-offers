const fs = require("fs");

module.exports = {
  reset: function () {
    fs.writeFileSync("./db.json", fs.readFileSync("./db.sample.json"));
  },
};
