var http = require('http');
var fs = require('fs');

// http.createServer(function(req, res) {
//     fs.readFile('demofile1.html', function(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         res.end();
//     });
// }).listen(8080);


/* Append file - Appends specified content to a file. creates new file if one
doesn't exist */
// fs.appendFile('mynewfile1.txt', 'Hello content!', function(err) {
//     if (err) throw err;
//     console.log('Saved!');
// });


/* Open file */
// fs.open('mynewfile2.txt', 'w', function(err, file) {
//     if (err) throw err;
//     console.log('Saved!');
// });


/* Write file - Replaces the specified file and content if it exists. If file 
doesn't exist then creates new specified file and content */
// fs.writeFile('mynewfile3.txt', 'Hello content!', function(err) {
//     if (err) throw err;
//     console.log('Saved!');
// });


/* Update files */
// fs.appendFile('mynewfile1.txt', ' This is my text.', function(err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// fs.writeFile('mynewfile3.txt', 'This is my text', function(err) {
//     if (err) throw err;
//     console.log('Replaced!');
// });


/* Delete files */
// fs.unlink('mynewfile2.txt', function(err) {
//     if (err) throw err;
//     console.log('File deleted!');
// });


/* Rename files */
// fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function(err) {
//     if (err) throw err;
//     console.log('File Renamed!');
// });