const fs = require("fs");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");

const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const userdb = JSON.parse(fs.readFileSync("./db.json", "UTF-8"));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = "123456789";
const expiresIn = "7d";

// Create a token from a payload
function createToken(payload: { email: any; password: any; id: any }) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verify the token
function verifyToken(token: any) {
  return jwt.verify(token, SECRET_KEY, (_: any, decode: undefined) =>
    decode !== undefined ? decode : false
  );
}

// Check if the user exists in database
function isAuthenticated({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return (
    userdb.users.findIndex(
      (user: { email: any; password: any }) =>
        user.email === email && user.password === password
    ) !== -1
  );
}

function userAlreadyExists({ email }: { email: string }) {
  return (
    userdb.users.findIndex((user: { email: any }) => user.email === email) !==
    -1
  );
}

server.post(
  "/auth/login",
  (
    req: { body: { email: any; password: any } },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: {
          (arg0: {
            status?: number;
            message?: string;
            access_token?: any;
          }): void;
          new (): any;
        };
      };
    }
  ) => {
    const { email, password } = req.body;
    const { id } = userdb.users.find(
      (user: { email: any }) => user.email === email
    );

    if (!isAuthenticated({ email, password })) {
      const status = 401;
      const message = "Incorrect email or password";
      res.status(status).json({ status, message });
      return;
    }

    const access_token = createToken({ email, password, id });
    res.status(200).json({ access_token });
  }
);

server.post(
  "/auth/register",
  (
    req: { body: { fullName: any; email: any; password: any } },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: {
          (arg0: {
            status?: number;
            message?: string;
            access_token?: any;
          }): void;
          new (): any;
        };
      };
    }
  ) => {
    const { fullName, email, password } = req.body;
    const id = userdb.users.length + 1;

    if (userAlreadyExists({ email })) {
      const status = 409;
      const message = "Email already exists";
      res.status(status).json({ status, message });
      return;
    }

    userdb.users.push({ id, fullName, email, password });
    fs.writeFileSync("./db.json", JSON.stringify(userdb));

    const access_token = createToken({ email, password, id });
    res.status(200).json({ access_token });
  }
);

server.get(
  "/auth/user-profile",
  (
    req: { headers: { authentication: any } },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: {
          (arg0: {
            status?: number;
            message?: string;
            userEmail?: any;
            fullName?: any;
          }): void;
          new (): any;
        };
      };
    }
  ) => {
    const { authentication } = req.headers;

    if (!authentication || !authentication.split(" ")[1]) {
      const status = 401;
      const message = "No token provided";
      res.status(status).json({ status, message });
      return;
    }

    const userToken = authentication.split(" ")[1];

    if (!verifyToken(userToken)) {
      const status = 404;
      const message = "Invalid token";
      res.status(status).json({ status, message });
      return;
    }
    const { email, id } = verifyToken(userToken);
    const { email: userEmail, fullName } = userdb.users.find(
      (user: { email: any; id: any }) => user.email === email && user.id === id
    );

    res.status(200).json({ userEmail, fullName });
  }
);

server.post(
  "/auth/register-recipe",
  (
    req: { body: { token: any; mealID: any } },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: {
          (arg0: { status: number; message: string }): void;
          new (): any;
        };
      };
    }
  ) => {
    const { token, mealID } = req.body;

    if (!token) {
      const status = 401;
      const message = "No token provided";
      res.status(status).json({ status, message });
      return;
    }

    if (!verifyToken(token)) {
      const status = 404;
      const message = "Invalid token";
      res.status(status).json({ status, message });
      return;
    }

    const { id } = verifyToken(token);
    const recipe = userdb["done-recipes"].find(
      (recipe: { id: any }) => recipe.id === mealID
    );

    if (recipe) {
      recipe.userId.push(id);
      fs.writeFileSync("./db.json", JSON.stringify(userdb));
    } else {
      userdb["done-recipes"].push({ id: mealID, userId: [id] });
      fs.writeFileSync("./db.json", JSON.stringify(userdb));
    }

    const status = 200;
    const message = "ok";
    res.status(status).json({ status, message });
  }
);

server.get(
  "/auth/user-recipes-maked",
  (
    req: { headers: { authentication: any } },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: {
          (arg0: { status: number; message: string }): void;
          new (): any;
        };
      };
    }
  ) => {
    const { authentication } = req.headers;

    if (!authentication || !authentication.split(" ")[1]) {
      const status = 401;
      const message = "No token provided";
      res.status(status).json({ status, message });
      return;
    }

    const userToken = authentication.split(" ")[1];

    if (!verifyToken(userToken)) {
      const status = 404;
      const message = "Invalid token";
      res.status(status).json({ status, message });
      return;
    }
    const { id } = verifyToken(userToken);
    const recipesMaked = userdb["done-recipes"].map(
      (recipe: { userId: string | any[]; id: any }) =>
        recipe.userId.includes(id) && recipe.id
    );

    res.status(200).json(recipesMaked);
  }
);

server.use(router);
server.listen(8080, () => {
  console.log("Run Auth API Server");
});
