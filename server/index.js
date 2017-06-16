const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const restify = require("express-restify-mongoose");
const app = express();
const router = express.Router();
const createMongooseSchema = require("json-schema-to-mongoose");

const { refs, schema } = require("../schema/Person.schema.js");

app.use(bodyParser.json());
app.use(methodOverride());

mongoose.connect("mongodb://localhost:27017/database");

const version = "/v1";
restify.serve(
    router,
    mongoose.model(
        "Person",
        new mongoose.Schema(
            createMongooseSchema(
                refs,
                schema
            )
        )
    ),
    { version }
);

app.use(router);

const port = 3000;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
