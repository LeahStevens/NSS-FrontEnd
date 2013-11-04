var mongoose = require('mongoose');

var Artist= mongoose.Schema({
  name:       String,
  website:    String,
  photo:      String,
  bio:        String,
  songs:      [{type: mongoose.Schema.Types.ObjectId, ref: 'Song'}],
  createdAt:  {type: Date, default: Date.now}
});

mongoose.model('Artist', Artist);
