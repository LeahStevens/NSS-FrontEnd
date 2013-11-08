var mongoose = require('mongoose');

var Song = mongoose.Schema({
  title: {type: String, required: [true, 'Title is required.'], match: [/^[a-zA-Z]+[a-zA-Z]$/, '{VALUE} is an invalid name.']},

  duration: {type: Number, required: [true, 'Duration is require.'], match: [/^\d{1,}$/, '{VALUE} is an invalid field']},

  genres: [{type: mongoose.Schema.Types.ObjectId, ref: 'Genre'}],

  art: {type: String, required: [true, 'Art is required.'], match: [/^[a-zA-Z][a-zA-Z-]*.(jpg|png|jpeg)$/, '{VALUE} is an invalid field.']},

  filename: String,

  lyrics: String,

  createdAt: {type: Date, default: Date.now}
});

mongoose.model('Song', Song);
