const id = () => {
    const id = Math.random().toString(16).slice(2, 10);
    return id;
}

const id2 = () => { 
    const id = Math.random().toString(16).slice(2, 10);
    return id;
}

console.log(id());
console.log(id2());
