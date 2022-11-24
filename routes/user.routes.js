const { Router } = require("express");
const router = Router();

// O controller vem importado por aqui:
const {
  listerUsers,
  createUser,
  deleteUser,
  editUser,
  listUserbyId,
} = require("../controller/users");

router.get("/user", listerUsers);

router.get("/user/:id", listUserbyId);

router.post("/user", createUser);

router.delete("/user/:id", deleteUser);

router.put("/user/:id", editUser);

module.exports = router;
