const Icecream = require("../models/Icecream");
const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const icecream = await icecream.create(req.body);
    const user = await User.update(
      { _id: req.body.user },
      { $push: { icecreams: icecream._id } }
    );
    console.log(user);
    return res.json(icecream);
  },

  async index(req, res) {
    const icecream = await Icecream.findOne({ _id: req.params.id }).populate("user");
    return res.json(icecream);
  }
};
