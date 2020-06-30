const Creator = require("../lib/api/creator");
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const c = Creator("https://pharaoh-api.herokuapp.com", headers);
c.get("D_YhuC9Dl").then(console.log);
