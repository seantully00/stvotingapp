'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
   twitter: {
       id: String,
       name: String,
       screen_name: String
   }
});

/*var PollChoiceSchema = new Schema({
   choice: String,
   votes: Number
})

var Poll = new Schema({
   id: String,
   title: String,
   owner: String,
   question: String,
   choices: [PollChoiceSchema]
});*/

module.exports = mongoose.model('User', User);
//module.exports = mongoose.model('Poll', Poll);
