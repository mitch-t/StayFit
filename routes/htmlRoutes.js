
// the path package to get the correct file path for our html

var path = require("path");

module.exports = function(app) {
  // Called when "Countinue Workout" or "new Workout" is clicked in index.html
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  // Called when "Dashboard" is clicked in index.html
  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};