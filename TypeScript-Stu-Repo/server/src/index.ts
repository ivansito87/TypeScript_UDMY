import express, { Request, Response } from 'express';
import cookieSession from 'cookie-session';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // <- without the body parser the request has no body
app.use(cookieSession({ keys: ['lock'] })); // <- this will keep the session for the user's browser
app.use(router);

app.listen(3000, () => {
  console.log(`listening on port 3000`);
});
