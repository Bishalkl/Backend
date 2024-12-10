// core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

const favouriteDataPath = path.join(rootDir, "data", "favourite.json");

module.exports = class Favourite {
  static addToFavourite(homeId, callback) {
    Favourite.getFavourite((favourites) => {
      if (favourites.includes(homeId)) {
        callback("Home is already marked favourite");
      } else {
        favourites.push(homeId);
        fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback);
      }
    });
  }

  static getFavourite(callback) {
    fs.readFile(favouriteDataPath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
        callback([]);
        return;
      }

      try {
        const parsedData = data ? JSON.parse(data) : []; // If the data is empty, return an empty array
        callback(parsedData);
      } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
        callback([]);
      }
    });
  }

  static deleteById(delHomeId, callback) {
    Favourite.getFavourite((homesIds) => {
      homesIds = homesIds.filter((homeId) => delHomeId !== homeId);
      fs.writeFile(favouriteDataPath, JSON.stringify(homesIds), callback);
    });
  }
};
