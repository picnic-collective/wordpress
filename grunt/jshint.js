 module.exports = {
    options: {
        // Use the jshintrc file
        jshintrc: true
    },

    // Run by watch - the `src` property is set by even handler below
    watch: {
        options: {
            // Don't stop the thread on error - avoids reloading Grunt watch each time
            force: true
        }
    }
};
