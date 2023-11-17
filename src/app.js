function greet(name) {
    if (name === undefined || name === null || name === '') {
        return 'Hello, my friend.';
    }
    return `Hello, ${name}.`;
};

module.exports = greet;