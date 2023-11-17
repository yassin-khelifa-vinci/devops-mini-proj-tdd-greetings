const greet = require('../app.js');

test('greet function should return "Hello, Bob." when given "Bob"', () => {
    const result = greet('Bob');
    
    expect(result).toEqual('Hello, Bob.');
});

test("greet function should return 'Hello, my friend.' when given undefined value", () => {
    const result = greet();

    expect(result).toEqual('Hello, my friend.');
});

test("greet function should return 'Hello, my friend.' when given null value", () => {
    const result = greet(null);

    expect(result).toEqual('Hello, my friend.');
});

test("greet function should return 'Hello, my friend.' when given empty value", () => {
    const result = greet('');

    expect(result).toEqual('Hello, my friend.');
})