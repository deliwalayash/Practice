function identity(value) {
    return value;
}
var a = identity("yash").toUpperCase();
function lastelement(value) {
    return value[value.length - 1];
}
console.log(lastelement([1, 2, 3, 4, 5]));
function echo(value) {
    return value;
}
console.log(echo(10));
console.log(echo("yash"));
function abc(value) {
    return [value];
}
function makePair(first, second) {
    return [first, second];
}
function getId(value) {
    return value.id;
}
console.log(getId({ id: 4, name: "yash" }));
function getName(value) {
    return value.map(function (i) { return i.name; });
}
console.log(getName([{ name: "a", id: 1 }, { id: 3, name: "b" }]));
