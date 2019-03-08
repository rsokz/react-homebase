const mongoose = require('mongoose');

const User = mongoose.model('user');

const updateSettings = async email => {
  try {
    const doc = await User.findOne({ email });
    console.log('mongoUser', doc);
    doc.settings = { backgroundImage: 1 };

    const user = await doc.save();
    console.log('updated user', user);
    return user;
  } catch (err) {
    throw err;
  }
};

module.exports = { updateSettings };
