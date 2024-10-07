const Hapi = require('@hapi/hapi');
const path = require("path");

const init = async() => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    })

    // config do view engine (template engine)
    await server.register(require("@hapi/vision"));

    server.views({
        engines: { html: require('handlebars')}, // using handlebars com template engine
        path: path.join(__dirname, 'views') // caminho do dir para encontras arquivos .html
    })

    // import e resgitrar as rotas de outro arquivos 
    const routes = require('./routes/index');
    const otherRoutes = require('./routes/page2');

    server.route(routes);
    server.route(otherRoutes);
    await server.start();
    console.log(`Servidor rodando em: ${server.info.uri}`);
}

// Tratamento de erros não capturados
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();