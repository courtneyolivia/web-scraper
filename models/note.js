let mongoose = require("mongoose");
// Save a reference to the Schema constructor
let Schema = mongoose.Schema;
// Creating a new NoteSchema object similar to a sequelize model

let NoteSchema = new Schema({
 
  title: String,
 
  body: String
});
// This creates our model from the above schema, using mongoose's model method
let Note = mongoose.model("Note", NoteSchema);
// Export the Note model
module.exports = Note;
