const http = require('http');

// Method request
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    const {method, url} = request;
    if(url === '/') {
        if(method === 'GET'){
            response.end('<h1>Ini Adalah Homepage</h1>')
        }else{
            response.end(`<h1>halaman tidak dapat diakses dengan ${method} request</h1>`)
        }
    }else if(url === '/about'){
        if(method === 'GET'){
            response.end('<h1>Halo! ini adalah halaman about</h1>')
        }else if(method === 'POST'){
            let body = [];

            request.on('data', (chunck) => {
                body.push(chunck);
            });

            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                response.end(`<h1>Halo, ${name}! ini adalah halaman about</h1`);

            });
        }else{
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);

        }
    }else{
        response.end('<h1>Halaman tidak ditemukan!</h1>');
    }


    //function logic body request version 2
    // if(method === 'GET') {
    //     response.end('<h1>Hello!</h1>');
    // }

    // if(method === 'POST'){
    //    let body = [];

    //    request.on('data', (chunck) => {
    //     body.push(chunck);
    //    });

    //    request.on('end', () => {
    //     body = Buffer.concat(body).toString();
    //     const {name} = JSON.parse(body);
    //     response.end(`<h1>Hai, ${name}!</h1>`);
    //    });
    // }

    // if (method === 'PUT') {
    //     response.end('<h1>Bonjour!</h1>')
    // }

    // if (method === 'DELETE') {
    //     response.end('<h1>Salam!</h1>')
    // }

};


// Body Request dengan stream request
// const requestListener = (request, response) => {
//     let body = [];

//     request.on('data', (chunck) => {
//         body.push(chunck);
//     });

//     request.on('end', () => {
//         body = Buffer.concat(body).toString();
//     });

    
// }
const server = http.createServer(requestListener);

const port = 5000;
const host =  'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
})