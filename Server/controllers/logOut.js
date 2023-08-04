const logOut = (req, res) => {
  res.cookie("campusProUserToken", "", { maxAge: 1 });
  res.status(201).send("Successfully logged out");
};
module.exports = logOut;
