const routes  = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: 'GET',
        path:'/about',
        handler: (request, h) => {
            return 'About';
        },
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = "strange"} = request.params;
            return `hello, ${name}!`;
        },
    },
];

module.exports = routes;