const database = require("../db/models");

//Listando usuarios

//Listar todos os usarios
const listerUsers = async (req, res) => {
  const allUsers = await database.Users.findAll();
  console.log(allUsers);
  if (allUsers) {
    return res.send(allUsers);
  }
  return res.send("Não existe usuário cadastrado. Ps: pular linha é de graça.");
};

//Listar usuario por id
const listUserbyId = async (req, res) => {
  const { id } = req.params;
  const consultId = await database.Users.findOne({
    where: {
      id: Number(id),
    },
  });
  if (consultId) {
    return res.send(consultId);
  }
  return res.send("Usuário não existe");
};

//Adicionar usuario
const createUser = async (req, res) => {
  await database.Users.create(req.body);
  console.log(req.body);
  return res.send("Usuario cadastrado com sucesso");
};

//Deletar usuario
const deleteUser = async (req, res) => {
  const { id } = req.params;

  const consultId = await database.Users.findOne({
    where: {
      id: Number(id),
    },
  });

  if (consultId) {
    await database.Users.destroy({
      where: {
        id: Number(id),
      },
    });

    return res.send("Usuario deletado com sucesso");
  }
  return res.send("Não existe esse usuario");
};

//Editar usuario
const editUser = async (req, res) => {
  const { id } = req.params;
  const consultId = await database.Users.findOne({
    where: {
      id: Number(id),
    },
  });
  if (consultId) {
    await database.Users.update(req.body, {
      where: {
        id: Number(id),
      },
    });
    return res.send("Usuario editado com sucesso");
  }
  return res.send("Usuario não editado");
};

// estrutura para editar usuario

module.exports = {
  listerUsers,
  createUser,
  deleteUser,
  editUser,
  listUserbyId,
};
