'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = require('express');
var router = express_1.Router();
exports.router = router;
function requireAuth(req, res, next) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send('Forbidden');
}
router.get('/login', function(req, res) {
  res.send(
    '\n    <form method="post">\n    <div>\n    <label for="email">Email</label>\n    <input type="text" name="email" />\n    </div>\n    <div>\n    <label for="password">Password</label>\n    <input type="password" name="password">\n    </div>\n    <button>Submit</button>\n    </form>\n    ',
  );
});
router.get('/', function(req, res) {
  if (req.session && req.session.loggedIn) {
    res.send(
      '\n   <div>\n   <h1>You are logged in</h1>\n   <a href="/logout">LogOut</a>\n</div>\n    ',
    );
  } else {
    res.send(
      '\n   <div>\n   <h1>You are not logged in</h1>\n   <a href="/login">LogOut</a>\n</div>\n    ',
    );
  }
});
router.post('/login', function(req, res) {
  var _a = req.body,
    email = _a.email,
    password = _a.password;
  if (
    email &&
    password &&
    email === 'test@test.com' &&
    password === 'FunFunFun'
  ) {
    // mark this person as logged in
    req.session = { loggedIn: true };
    // redirect them to the root route ( home )
    res.redirect('/');
  } else {
  }
});
router.get('/logout', function(req, res) {
  req.session = undefined;
  res.redirect('/');
});
router.get('/protected', function(req, res) {
  res.send('Welcome to protected route, logged in user');
});
