module.exports = {
    git_stash: {
        command: "git stash 2> /dev/null"
    },

    git_unstash: {
        command: "git stash pop 2> /dev/null",
        exitCode: [0, 1]
    }
};
