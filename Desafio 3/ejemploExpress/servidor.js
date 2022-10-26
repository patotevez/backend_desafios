const express = require('express')

const servidor = express()

servidor.get('/bienvenida', (peticion, respuesta) => {
    respuesta.end('<h1>Hola!!!!</h1>')
})

servidor.get('/despedida', (peticion, respuesta) => {
    respuesta.send('<h1>Chau!!!!</h1>')
})

servidor.get('/conversaria', (peticion, respuesta) => {
    respuesta.json('<h1>Que ondaaa</h1>')
})

function conectar(puerto = 0) {
    return new Promise((resolve, reject) => {
        const servidorConectador = servidor.listen(puerto, () => {
            resolve(servidorConectador)
        })
        servidorConectador.on("error", error => reject(error))
    })
}

module.exports = {conectar}