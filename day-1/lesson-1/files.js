//using modules
// let os = require('os');
// console.log(os.platform(),os.homedir());
let fs = require('fs');

// console.log(fs)

//! fs.readFile('../docs/test.txt', 'UTF-8', (err, data)=> {
//!     if(err) {
//!       console.log(err);
//!     } else {
//!         console.log(data);
//!     }
//! })

//? fs.writeFile('../docs/test2.txt', 'Merhaba tekrardan ulen', (err)=> {
//?     if(err) {
//?         console.log(err);
//?     } else {
//?         console.log('File created');
//?     }
//? })

if(!fs.existsSync('../docs/test3')) {
    fs.mkdir('../docs/test3', (err)=> {
        if(err) throw err
        console.log('Directory created');
    })
}else{
    fs.rmdir('../docs/test3', (err)=> {
        if(err) throw err
        console.log('Directory removed');
    })
}

fs.unlink('../docs/test2.txt', (err)=> {
    if(err) throw err
    console.log('File removed');
})
