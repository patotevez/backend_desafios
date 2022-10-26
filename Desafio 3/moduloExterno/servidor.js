const http = require('http')

const servidor = http.createServer((peticion, respuesta) => {
    respuesta.end("Todo ok")
})

function conectar(puerto = 0) {
    return new Promise((resolve, reject) => {
        const servidorConectador = servidor.listen(puerto,err => 
            if(er) reject(err))
            else resolve(servidorConectador)
    })
}

module.exports = {conectar}