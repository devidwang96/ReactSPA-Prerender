const path = require('path');
const devPath = path.join(__dirname, '/src');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const basicPath = path.join(__dirname, '/');

module.exports = {
    entry: {
        main: './nothing.html'
    },
    plugins: [
        new PrerenderSPAPlugin({
            staticDir: path.join(basicPath, 'web'),
            routes: ['/', '/about', '/zip-codes'],
            renderer: new Renderer({
                renderAfterDocumentEvent: 'prerender',
            })
        })
    ],
};
