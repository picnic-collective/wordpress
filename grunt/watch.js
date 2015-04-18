module.exports = function(grunt) {
    // Set JS Hint to only check the changed file
    grunt.event.on("watch", function(action, filepath) {
        grunt.config("jshint.watch.src", [filepath]);
    });

    return {
        options: {
            livereload: true
        },

        js: {
            options: {
                spawn: false // Spawn should be false so that the settings can be set
            },
            tasks: ["jshint:watch"],
            files: [
                "<%= dev_assets %>/**/*.js",
                "!<%= dev_assets %>/vendor/**",
            ]
        },

        sass: {
            tasks: ["sass:watch"],
            files: [
                "<%= dev_assets %>/scss/**/*.scss"
            ]
        }
    };
};
