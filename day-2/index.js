const http = require("http");
const { testFunction, newFunction } = require('./function.js');

// Promise
const printAgakTelat = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('sudah sampai');
            // reject('saya kena tilang');
        }, 1000 * 5);
    });
}

var server = http.createServer(async (req, res) => {
    switch (req.url) {
        case '/about':
            console.log("Saya otw!");
            try {
                const value = await printAgakTelat();
                console.log(value);
                console.log("Ngopi");
            } catch (error) {
                console.error(error);
            }

            res.write('Ini adalah halaman about');
            res.end();
            break;
        case '/contact':
            res.write('Ini adalah halaman contact');
            res.end();
            break;
        default:
            res.write('404 Not Found');
            res.end();
            break;
    }
});

const port = 3000;
server.listen(port);
console.log(`server berjalan di http://localhost:${port}`);
