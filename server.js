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
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verify the token
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) =>
    decode !== undefined ? decode : err
  );
}

// Check if the user exists in database
function isAuthenticated({ email, password }) {
  return (
    userdb.users.findIndex(
      (user) => user.email === email && user.password === password
    ) !== -1
  );
}

function userAlreadyExists({ email }) {
  return userdb.users.findIndex((user) => user.email === email) !== -1;
}

server.post("/auth/login", (req, res) => {
  const { email, password } = req.body;

  if (!isAuthenticated({ email, password })) {
    const status = 401;
    const message = "Incorrect email or password";
    res.status(status).json({ status, message });
    return;
  }

  const access_token = createToken({ email, password });
  res.status(200).json({ access_token });
});

server.post("/auth/register", (req, res) => {
  const { fullName, email, password } = req.body;

  if (userAlreadyExists({ email })) {
    const status = 409;
    const message = "Email already exists";
    res.status(status).json({ status, message });
    return;
  }


  userdb.users.push({ id: userdb.users.length + 1, fullName, email, password });
  fs.writeFileSync("./db.json", JSON.stringify(userdb));

  const access_token = createToken({ email, password });
  res.status(200).json({ access_token });
});

server.use(router);
server.listen(8080, () => {
  console.log("Run Auth API Server");
});
