import express from 'express';
import webpack from 'webpack';
import yields from 'express-yields';
import fs from 'fs-extra';

const port = process.env.PORT || 3000;
const app = express();

if(process.env.NODE_ENV === 'development') {
    const config = require('../webpack.config.dev.babel.js').default;
    const compiler = webpack(config);

    app.use(require('webpack-dev-middleware')(compiler,{
        noInfo: true,
        stats: {
            assets: false,
            colors: true,
            version: false,
            hash: false,
            timings: false,
            chunks: false,
            chunkModules: false
        }
    }));

    app.use(require('webpack-hot-middleware')(compiler));
}

app.get(['/'], function * (req,res){
    let index = yield fs.readFile('./public/index.html','utf-8');
    res.send(index);
});

app.listen(port, '0.0.0.0', ()=>console.log(`App listening on ${port}`));