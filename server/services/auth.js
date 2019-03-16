const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = mongoose.model('user');

// SerializeUser is used to provide some identifying token that can be saved
// in the users session.  We traditionally use the 'ID' for this.
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// The counterpart of 'serializeUser'.  Given only a user's ID, we must return
// the user object.  This object is placed on 'req.user'.
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// Instructs Passport how to authenticate a user using a locally saved email
// and password combination.  This strategy is called whenever a user attempts to
// log in.
passport.use(
  new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email: email.toLowerCase() }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, 'Invalid Credentials');
      }
      user.comparePassword(password, (err, isMatch) => {
        if (err) {
          return done(err);
        }
        if (isMatch) {
          return done(null, user);
        }
        return done(null, false, 'Invalid credentials.');
      });
    });
  })
);

// Creates a new user account. After the user is created, it is
// provided to the 'req.logIn' function.  This is apart of Passport JS.
// Notice the Promise created in the second 'then' statement.  This is done
// because Passport only supports callbacks, while GraphQL only supports promises
// for async code!
function signup({ email, password, name, req }) {
  const initialUser = {
    email,
    password,
    name,
    settings: {
      backgroundImage: 0,
      websites: [
        {
          url: 'https://www.google.com/',
          iconURL: 'https://f1.allesedv.com/64/google.com'
        },
        {
          url: 'https://techcrunch.com/',
          iconURL: 'https://f1.allesedv.com/64/techcrunch.com/'
        },
        {
          url: 'https://github.com/',
          iconURL: 'https://f1.allesedv.com/64/github.com'
        },
        {
          url: 'https://www.reddit.com/top/',
          iconURL: 'https://f1.allesedv.com/64/reddit.com'
        }
      ]
    }
  };
  const user = new User(initialUser);
  if (!name) {
    throw new Error('You must provide a name.');
  }
  if (!email || !password) {
    throw new Error('You must provide an email and password.');
  }

  return User.findOne({ email })
    .then(existingUser => {
      if (existingUser) {
        throw new Error('Email in use');
      }
      return user.save();
    })
    .then(user => {
      return new Promise((resolve, reject) => {
        req.logIn(user, err => {
          if (err) {
            reject(err);
          }
          resolve(user);
        });
      });
    });
}

// Logs in a user.  This will invoke the 'local-strategy' defined above in this
// file. Notice the strange method signature here: the 'passport.authenticate'
// function returns a function, as its indended to be used as a middleware with
// Express.  We have another compatibility layer here to make it work nicely with
// GraphQL, as GraphQL always expects to see a promise for handling async code.
function login({ email, password, req }) {
  return new Promise((resolve, reject) => {
    passport.authenticate('local', (err, user) => {
      if (!user) {
        reject('Invalid credentials.');
      }
      req.login(user, () => resolve(user));
    })({ body: { email, password } });
  });
}

module.exports = { signup, login };
