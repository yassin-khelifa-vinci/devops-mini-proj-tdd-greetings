function greet(name) {
    if (isUndefinedNullOrEmpty(name)) {
        return 'Hello, my friend.';
    }
    return `Hello, ${name}.`;
};

module.exports = greet;

function isUndefinedNullOrEmpty(name) {
    return name === undefined || name === null || name === '';
}
