const fs = require('fs');

let readStream = fs.createReadStream('../docs/test4.txt', {encoding: 'utf-8'})
//let writeStream = fs.createWriteStream('../docs/test4.txt')

readStream.on('data', (chunk) => {
    console.log('----YENİ CHUNK----')
    console.log(chunk)
    //writeStream.write(chunk)
})

//readStream.pipe(writeStream)