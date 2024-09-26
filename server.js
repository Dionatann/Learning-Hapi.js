const Hapi = require('@hapi/hapi');  // Certifique-se de que está usando "require"

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'  // Certifique-se de que "localhost" está entre aspas
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello, Hapi!';
        }
    });

    await server.start();
    console.log("Server inicializado em:", server.info.uri);
};


process.on('unhandledRejection', (err) => {
    console.log(err);  // Imprime o erro real
    process.exit(1);
});

init();
