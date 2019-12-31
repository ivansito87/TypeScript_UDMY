import { Router, Request, Response, NextFunction } from 'express';
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}
const router = Router();
function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send('Forbidden');
}

router.get('/login', (req: Request, res: Response) => {
  res.send(
    `
    <form method="post">
    <div>
    <label for="email">Email</label>
    <input type="text" name="email" />
    </div>
    <div>
    <label for="password">Password</label>
    <input type="password" name="password">
    </div>
    <button>Submit</button>
    </form>
    `,
  );
});

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(
      `
   <div>
   <h1>You are logged in</h1>
   <a href="/logout">LogOut</a>
</div>
    `,
    );
  } else {
    res.send(
      `
   <div>
   <h1>You are not logged in</h1>
   <a href="/login">LogOut</a>
</div>
    `,
    );
  }
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
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

router.get('/logout', (req: RequestWithBody, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', (req: Request, res: Response) => {
  res.send('Welcome to protected route, logged in user');
});
export { router };
