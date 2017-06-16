const schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "some desc",
  "title": "Person",
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string",
      "description": "First Name",
    },
    "lastName": {
      "type": "string",
      "description": "Last Name"
    },
    "age": {
      "description": "Age in years",
      "type": "integer",
      "minimum": 0
    }
  },
  "required": ["firstName", "lastName"]
};

const refs = {};

module.exports = {
  schema,
  refs
};
