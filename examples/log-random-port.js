const randomPortPromise = require('../src/index');

(async () => {
    const port = await randomPortPromise();

    console.log('Port:', port);
})();
