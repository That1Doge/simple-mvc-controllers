const controllers = require('./controllers');

const router = (app) => {
    app.get('/', controllers.index);
    app.get('/page1', controllers.page1);
    app.get('/page2', controllers.page2);

    app.get('/getName', controllers.getName);

    // *wild means anything that wasn't hit by the rest
    app.get('/*wild', controllers.notFound);

    // post can be below the 404 call
    app.post('/setName', controllers.setName);
};

module.exports = router;
