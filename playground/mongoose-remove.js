const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove

Todo.findByIdAndRemove('5a80721d2ed0ac97d4e9df53').then((todo) => {
	console.log(todo);
});