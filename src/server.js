import { App } from './App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import fetch from 'node-fetch';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/api/search/*', async (req, res) => {
    try {
      const url = new URL(`https://api.themoviedb.org/3${req.url.slice(4)}`);
      url.searchParams.append('api_key', '9ffbf8794a8e76a676766dd2922588b2');
      console.log(url.href);
      const apiResponse = await fetch(url);
      res.setHeader('Content-Type', 'application/json charset=UTF-8');
      res.send(await apiResponse.buffer());
    } catch (e) {
      console.log(e)
      res.status(500).send('oops!')
    }
  })
  .get('/api/details/:mediaType/:id', async (req, res) => {
    try {
      const { mediaType, id } = req.params
      const url = new URL(`https://api.themoviedb.org/3/${mediaType}/${id}`);
      url.searchParams.append('api_key', '9ffbf8794a8e76a676766dd2922588b2');
      console.log(url.href);
      const apiResponse = await fetch(url);
      res.setHeader('Content-Type', 'application/json charset=UTF-8');
      res.send(await apiResponse.buffer());
    } catch (e) {
      console.log(e)
      res.status(500).send('oops!')
    }
  })
  .get('/*', (req, res) => {
    const context = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ''
        }
        ${
          process.env.NODE_ENV === 'production'
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`
      );
    }
  });
  
  
export default server;
