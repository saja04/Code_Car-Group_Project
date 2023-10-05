const { getAllUsers } = require("../Controllers/getAlllUsers");

const getAllUsersHandler = async (req, res) => {
  try {
    const response = await getAllUsers();
    if (response.length === 0) {
      res.status(404).json({ message: "No se encontraron usuarios" });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllUsersHandler;
