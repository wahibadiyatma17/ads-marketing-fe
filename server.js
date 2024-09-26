const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
 
const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
 
app.prepare().then(() => {
  createServer((req, res) => {
    let reqUrl = req.url;

    if (reqUrl.includes('/_next/image') && !reqUrl.startsWith('/_next/image?url=')) {
      const path = (/^(.+)\/_next\/image\?url=/g).exec(req.url)[1];
      const encodedPath = encodeURIComponent(path);

      if (!req.url.replace(/^(.+)\/_next\/image\?url=/g, '').startsWith(encodedPath)) { 
        reqUrl = reqUrl.replace('/_next/image?url=', '/_next/image?url=' + encodedPath);
      }
    }

    const parsedUrl = parse(reqUrl, true);

    handle(req, res, parsedUrl);
  }).listen(port);

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`,
  );
});
