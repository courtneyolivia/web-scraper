const mongoose = require("mongoose");
// Saving to the Schema constructor
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true
  },
  // the `url link` is required and of type String
   url: {
    type: String,
    required: true
  },
  // Allows us to populate the Article with an associated Note
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});
// This creates our model from the above schema, using mongoose's model method
const Article = mongoose.model("Article", ArticleSchema);
// Export the Article model
module.exports = Article;
