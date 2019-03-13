const mongoose = require('mongoose');

const User = mongoose.model('user');

const updateName = async (email, name) => {
  try {
    const doc = await User.findOne({ email });
    console.log('mongoUser', doc);
    doc.name = name;

    const user = await doc.save();
    console.log('updated user', user);
    return user;
  } catch (err) {
    throw err;
  }
};

module.exports = { updateName };
