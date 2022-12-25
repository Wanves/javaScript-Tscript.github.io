
const http = require('http');

function sitioWeb(req, res){
    req.writeHead(200,{'content-type': 'text/plain'});
    res.end('Mi primer servidor');
}

let servidor = http.createServer(sitioWeb);

servidor.listen(6969, '192.168.0.4');

console.log('Servidor corriendo en el puerto 6969');


