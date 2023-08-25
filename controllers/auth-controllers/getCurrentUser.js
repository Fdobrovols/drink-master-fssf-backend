
const getCurrentUser = (req, res) => {
  const { name, email, subscribe } = req.user;

  res.json({ name, email, subscribe });
};

export default getCurrentUser
