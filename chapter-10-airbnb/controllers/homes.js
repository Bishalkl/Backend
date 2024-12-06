// Local modules
const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  console.log(req.url, req.method);
  res.render("addHomeGet", { pageTitle: "Add home", activeTab: "add-home" });
};

exports.postAddedHome = (req, res, next) => {
  console.log("Home Registration successful for: ", req.body);
  // destructuring
  const { houseName, price, location, rating, photo } = req.body;
  // creating object
  const home = new Home(houseName, price, location, rating, photo);
  home.save();
  res.render("addHomePost", { pageTitle: "Add Post", activeTab: "add-home" });
};

exports.goHome = (req, res, next) => {
  const registeredHomes = Home.fetchAll();
  console.log(registeredHomes);
  res.render("home", {
    registeredHomes: registeredHomes,
    pageTitle: "Airbnb Home",
    activeTab: "home",
  });
};
