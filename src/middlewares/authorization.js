const User = require("../models/User");

module.exports = async (req, res, next) => {
  const user = await User.findById(req.userId);

  if (user.Admistrador) {
    return next();
  }

  return res.status(401).json({ error: "Usuário não autorizado" });
};
