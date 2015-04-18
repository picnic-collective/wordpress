module.exports = {
    main: {
        files: [
            {
                cwd: "<%= dev_public %>",
                expand: true,
                dest: "<%= build %>",
                src: [
                    "**/*"
                ]
            }
        ]
    }
};
