// Package Imports
const express = require("express");
const expressHandlebars = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const request = require("request");
var logger = require("morgan");

// Scraping tools
const axios = require("axios");
const cheerio = require("cheerio");

// Require all models
const article = require("./models.article.js");
const comment = require("./models.comment.js");
const index = require("./models.index.js");

// Define port
let PORT = process.env.PORT || 3000;

// Initialize Express
let app = express();

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/week18Populater", {
  useMongoClient: true
});