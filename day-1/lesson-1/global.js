// console.log(global)
setTimeout(() => {
    console.log("1 sn sonra çalışacak")
    clearInterval(interval)
}, 3000);

const interval = setInterval(() => {
    console.log("1 sn her defasında çalışacak")
}, 1000);

//how we can see the file paths in node.js
// console.log(__dirname)
// console.log(__filename)
