module.exports = {
    watch: {
        options: {
            style: "expanded"
        },
        files: {
            "<%= dev_assets %>/css/main.css": "<%= dev_assets %>/scss/main.scss"
        }
    }
};
