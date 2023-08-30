
const getCurrentUser = (req, res) => {
  const { name, email, subscribe, avatarURL } = req.user;

  res.json({ name, email, subscribe, avatarURL });
};

export default getCurrentUser
