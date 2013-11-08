var mongoose = require('mongoose');

var Todo = mongoose.Schema({
  title:        String,
  dueDate:      String,
  priority:     {type: mongoose.Schema.Types.ObjectId, ref: 'Priority'},
  createdAt:    {type: Date, default: Date.now},
  completed:    {type: Boolean, default: false}
});

mongoose.model('Todo', Todo);