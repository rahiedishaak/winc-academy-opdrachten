const passwordVerifier = require('./passwordverifier');

const password = passwordVerifier('pass-W0rd');

test('Check if password has minimum of 8 chars', () => {
    expect(password.length).toBeGreaterThan(8);
});

test('Check if password is not null', () => {
    expect(password).not.toBeNull();
});

test('Check if password has a uppercase letter', () => {
    expect(password).toMatch(/[A-Z]/);
});

test('Check if password has a lowercase letter', () => {
    expect(password).toMatch(/[a-z]/);
});

test('Check if password has a number', () => {
    expect(password).toMatch(/[0-9]/);
});