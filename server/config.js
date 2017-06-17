const { schema } = require("../schema/Person.schema.js");
const port = 3000;
const { version = "v1" } = schema;
const url = `/api/${version}/`;

module.exports = {
  url,
  port,
  version
};
