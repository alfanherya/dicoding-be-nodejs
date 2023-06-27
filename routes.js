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
    {
        method: 'GET',
        path:'/hello/herya/{name?}',
        handler: (request, h) => {
            const { name= "stranger"} = request.params;
            const { lang } = request.query;

            if(lang === 'id'){
                return `Hai, ${name}`;
            }

            return `Hello, ${name}`;
        },
    },
];

module.exports = routes;