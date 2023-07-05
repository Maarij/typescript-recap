function generateEmail(input, force) {
    if (input.isVisitor && !force) {
        return undefined;
    }
    else {
        return `${input.firstName}.${input.lastName}@email.com`;
    }
}
function isPerson(potentialPerson) {
    if ('firstName' in potentialPerson && 'lastName' in potentialPerson) {
        return true;
    }
    else {
        return false;
    }
}
function printEmailIfPerson(potentialPerson) {
    if (isPerson(potentialPerson)) {
        console.log(generateEmail(potentialPerson));
    }
    else {
        console.log('Input is not a person');
    }
}
printEmailIfPerson({
    firstName: 'John',
    lastNameZ: 'Doe'
});
async function someAsync() {
}
