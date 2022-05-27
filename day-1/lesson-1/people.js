const names = ['Alex', 'Bob', 'Charlie', 'David', 'Eve', 'Fred'];
const ages = [32, 33, 16, 40, 28, 55];
//console.log(names)

const greeting = (name) => {
    console.log(`Hello ${name}`)
}

// You can use module.exports to export a function or an object
// if we want to use names and ages in other files. you can give a name to the object or function for calling it.
module.exports = {
    isim: names,
    yas: ages,
    selamla: greeting
}
