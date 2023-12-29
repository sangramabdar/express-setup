const googleCallback = (req, res) => {
  res.cookie("token", req.user);
  res.redirect("/auth/success");
};

const success = (req, res) => {
  res.send(`Welcome ${req.user.name}`);
};

const failure = (req, res) => {
  res.send("Failed");
};

const authController = {
  googleCallback,
  success,
  failure,
};

export { authController };
