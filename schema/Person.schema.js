const schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "A very simple form for creating a person.",
  "title": "Person",
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string",
      "title": "First Name"
    },
    "lastName": {
      "type": "string",
      "title": "Last Name"
    },
    "age": {
      "title": "Age",
      "description": "in years",
      "type": "integer",
      "minimum": 0
    }
  },
  "required": ["firstName", "lastName"]
};

const uiSchema = {
  "firstName": {
    "ui:placeholder": "Hans"
  }
};

const refs = {};

module.exports = {
  schema,
  uiSchema,
  refs
};
