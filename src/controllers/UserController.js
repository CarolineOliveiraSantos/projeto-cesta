const Usuarios = require("../models/User")
module.exports = {
  async store(req, res) {
    const user = await Usuarios.create(req.body)
    return res.json(user)
  },
  async index(req, res) {
    const user = await Usuarios.findOne({ email: req.params.email })
    return res.json(user)
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
    return res.json({
      message: "Excluído!"
    })
  }
}
