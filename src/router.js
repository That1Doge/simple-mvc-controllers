const controllers = require('./controllers');

const router = (app) => {
    app.get('/', controllers.index);
    app.get('/page1', controllers.page1);
    app.get('/page2', controllers.page2);

    // *wild means anything that wasn't hit by the rest
    app.get('/*wild', controllers.notFound);
};

module.exports = router;
