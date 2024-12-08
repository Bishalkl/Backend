// Local modules
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "Index Home",
      activeTab: "Home",
    })
  );
};

exports.goHome = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Airbnb Home",
      activeTab: "home",
    })
  );
};

exports.getAddHome = (req, res, next) => {
  console.log(req.url, req.method);
  res.render("host/addHomeGet", {
    pageTitle: "Add home",
    activeTab: "add-home",
  });
};

exports.postAddedHome = (req, res, next) => {
  console.log("Home Registration successful for: ", req.body);
  // destructuring
  const { houseName, price, location, rating, photo } = req.body;
  // creating object
  const home = new Home(houseName, price, location, rating, photo);
  home.save();
  res.render("host/addHomePost", {
    pageTitle: "Add Post",
    activeTab: "add-home",
  });
};

exports.getBooking = (req, res, next) => {
  res.render("store/booking", {
    pageTitle: "My Bookings",
    activeTab: "home",
  });
};

exports.getFavouriteList = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/favourite-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Favourite",
      activeTab: "home",
    })
  );
};

exports.HostHome = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Home list",
      activeTab: "home",
    });
  });
};

exports.getHomesDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("At home details page", homeId);
  Home.findById(homeId, (home) => {
    res.render("store/home-detail", {
      pageTitle: "Home Detail",
      activeTab: "home",
    });
  });
};
