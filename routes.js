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
];

module.exports = routes;