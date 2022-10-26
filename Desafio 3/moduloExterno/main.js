const {conectar} = require("./servidor.js");

async function main () {
    try {
        const serv = await conectar (8080);
        console.log(`Conectando al puerto ${serv.address().port}`);
    } catch (error) {
        console.log("algo fallo " + error);
    }
}

main()