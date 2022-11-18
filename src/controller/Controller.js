class Controller {
  static async HomePage(req, res) {
    res.status(200).json({
      title: "HomePage",
      message: "Welcome to Homepage",
    });
  }
}

module.exports = { Controller };
