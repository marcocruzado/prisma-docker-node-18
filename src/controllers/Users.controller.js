import prisma from "../database/connection.js";

const GetUsers = async (req, res) => {
  const users = await prisma.user.findMany();

  let results = {
    messages: "todo listo",
    count: 1,
    data: users,
  };

  return res.status(200).json(results);
};

const GetUsersById = async (req, res) => {
  const { id } = req.params;

  const userById = await prisma.user.findFirst({
    where: {
      id,
    },
  });

  let results = {
    messages: "todo bien",
    count: 1,
    data: userById,
  };

  res.status(200).json(results);
};

const CreateUser = async (req, res) => {
  const { email, name, profile } = req.body;

  const newUser = await prisma.user.create({
    data: {
      email,
      name,
      profile,
    },
  });

  let results = {
    messages: "todo bien",
    count: 1,
    data: newUser,
  };

  res.status(200).json(results);
};

export { GetUsers, GetUsersById };
