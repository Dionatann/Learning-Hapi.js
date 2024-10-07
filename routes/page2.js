// routes/page2.js
module.exports = [
    {
      method: 'GET',
      path: '/page2',
      handler: (request, h) => {
        return h.view('page2', { title: 'Página 2' });
      }
    }
  ];
  