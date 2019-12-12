const User = require("../models/User")

module.exports = {
  async store(req, res) {
    const { email } = req.body;
    if (await User.findOne({ email })) {
      return res.status(400).json({ error: "Usuário já existe" });
    }
    const user = await User.create(req.body);
    return res.json(user);
  },
  async index(req, res) {
    const user = await User.findOne({ email: req.params.email }).populate([
      "icecreams",
    ]);
    if (user) {
      return res.json(user);
    }
    return res.status(400).json({ error: "Usuário não encontrado" });
  },
  async update(req, res) {
    const user = await Usuarios.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    return res.json(user)
  },
  async destroy(req, res) {
    await User.deleteOne({ _id: req.params.id })
    return res.json({ message: "Excluído!"});
  }
};
