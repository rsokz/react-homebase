const mongoose = require('mongoose');

const User = mongoose.model('user');

const updateName = async (email, name) => {
  try {
    const doc = await User.findOne({ email });
    doc.name = name;

    const user = await doc.save();
    return user;
  } catch (err) {
    throw err;
  }
};

const updateSettings = async (email, settings) => {
  try {
    const doc = await User.findOne({ email });
    doc.settings = settings;

    const user = await doc.save();
    return user;
  } catch (err) {
    throw err;
  }
};

module.exports = { updateName, updateSettings };
