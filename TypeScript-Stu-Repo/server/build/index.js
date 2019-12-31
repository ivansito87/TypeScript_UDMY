'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = __importDefault(require('express'));
var cookie_session_1 = __importDefault(require('cookie-session'));
var loginRoutes_1 = require('./routes/loginRoutes');
var body_parser_1 = __importDefault(require('body-parser'));
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true })); // <- without the body parser the request has no body
app.use(cookie_session_1.default({ keys: ['lock'] })); // <- this will keep the session for the user's browser
app.use(loginRoutes_1.router);
app.listen(3000, function() {
  console.log('listening on port 3000');
});
