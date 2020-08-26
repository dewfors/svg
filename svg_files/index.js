
var recursive = require("recursive-readdir");


let m =[]

// recursive("./files", function (err, files) {
//     // 'files' is an array of file paths
//     // console.log(files);
//
//     console.log(typeof files);
//
//     m.push(files)
// });


// recursive("./files").then(
//     function(files) {
//         //console.log("files are", files);
//         m.push(files)
//     },
//     function(error) {
//         console.error("something exploded", error);
//     }
// );

// const brandsFolder = './files/brands/';
const brandsFolder = 'files/brands/';
// const regularFolder = './files/regular/';
// const solidFolder = './files/solid/';
const fs = require('fs');

let str = ''

fs.readdirSync(brandsFolder).forEach(file => {
    str += brandsFolder + file + ';'
});
// fs.readdirSync(regularFolder).forEach(file => {
//     str += regularFolder + file + ';'
// });
// fs.readdirSync(solidFolder).forEach(file => {
//     str += solidFolder + file + ';'
// });

console.log(str);

m = str.split(';')

console.log(m);

const createCsvWriter = require('csv-writer').createObjectCsvWriter

const csvWriter = createCsvWriter({
    path: 'out.csv',
    header: [
        {id: 'name'},
    ],
    fieldDelimiter: ';'
});

// const data = [
//     {name: 'John', surname: 'Snow', age: 26, gender: 'M' },
//     {name: 'Clair', surname: 'White', age: 33, gender: 'F', },
//     {name: 'Clair', surname: 'White', age: 33, gender: 'F', },
//     {name: 'Clair', surname: 'White', age: 33, gender: 'F', },
//     {name: 'Clair', surname: 'White', age: 33, gender: 'F', },
//     {name: 'Clair', surname: 'White', age: 33, gender: 'F', },
//     {name: 'Clair', surname: 'White', age: 33, gender: 'F', },
//     {name: 'Clair', surname: 'White', age: 33, gender: 'F', },
//     {name: 'Fancy', surname: 'Brown', age: 78, gender: 'F' }
// ];

const data = []

for (let i = 0; i < m.length; i++) {
    data.push({
        name: m[i]
    })
}


console.log(data);


csvWriter.writeRecords(data)
    .then(() => console.log('The CSV file was written successfully'));



