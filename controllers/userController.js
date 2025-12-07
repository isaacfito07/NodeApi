module.exports = {
  getAll: (req, res) => {
    res.json([{ id: 1, name: "Ejemplo" }]);
  },

  create: (req, res) => {
    const user = req.body;
    res.status(201).json({ message: "Usuario creado", user });
  }
};
