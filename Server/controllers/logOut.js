const logOut = (req, res) => {
  const token = req.cookies.campusProUserToken;

  res.cookie("campusProUserToken", "", { maxAge: 1 });
  res.status(201).send("Successfully logged out");

  // blacklist.add(token);
  // res.json({ message: "Logged out successfully" });
};
module.exports = logOut;
