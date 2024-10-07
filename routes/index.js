module.exports = [
    {
      method: 'GET',
      path: '/',
      handler: (request, h) => {
        return h.view('home', { message: 'Bem-vindo ao Hapi com Handlebars!' });
      }
    }
  ];
  