const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        todoItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'toDoItem' }],
        notifications: { type: Boolean, required: true }//accept email thing
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
