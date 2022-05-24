const { authFirebase } = require("../firebase/firebase");

// middleware to validate token (protected routes)
module.exports = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    let token = null;

    if (authorization && authorization.startsWith("Bearer ")) {
      token = authorization.substr(7);
    }

    if (!token) return res.status(401).json({ error: "token missing" });

    const userFirebase = await authFirebase.verifyIdToken(token);

    if (!userFirebase) return res.status(404).json({ error: "Unhautorized" });

    const { email, uid } = userFirebase;

    req.user = { email: email, uid: uid };

    next();
  } catch (error) {
    next(error);
  }
};
