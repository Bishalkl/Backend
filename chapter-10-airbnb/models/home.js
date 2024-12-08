// core modules
const path = require("path");
const fs = require("fs");

// local modules
const rootdir = require("../utils/pathUtils");

// fake database
const registeredHomes = [];
module.exports = class Home {
  // create constructor
  constructor(houseName, price, location, rating, photo) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photo = photo;
  }

  save() {
    this.id = Math.random().toString();
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      // file work
      const filePath = path.join(rootdir, "data", "homes.json");
      fs.writeFile(filePath, JSON.stringify(registeredHomes), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callback) {
    const filePath = path.join(rootdir, "data", "homes.json");
    fs.readFile(filePath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static findById(homeId, callback) {
    this.fetchAll((homes) => {
      const homeFound = homes.find((home) => home.id === homeId);
      callback(homeFound);
    });
  }
};
