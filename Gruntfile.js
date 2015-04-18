var config = require("./config.json");

module.exports = function(grunt) {
    // displays the time each task takes
    require("time-grunt")(grunt);

    // Load tasks
    require("load-grunt-config")(grunt, {
        config: {
            theme_name: config.db.name,
            build: "build",
            dev_public: "public",
            dev_assets: "theme"
        }
    });
};
