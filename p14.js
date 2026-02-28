function key(obj) {
    return Object.keys(obj);
}

const user = { name: "John", age: 30 };
console.log(key(user));