const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = process.env.PORT || 4395;
const bundledStyles = fs.readFileSync(path.join(root, "styles.css"), "utf8");
const bundledApp = fs.readFileSync(path.join(root, "app.js"), "utf8");
const routes = {
  "/": "index.html",
  "/speisekarte": "speisekarte.html",
  "/reservieren": "reservieren.html",
  "/restaurant": "restaurant.html",
  "/rechtliches": "rechtliches.html"
};
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8"
};

http.createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, `http://${req.headers.host}`).pathname); }
  catch { pathname = "/"; }
  const relative = routes[pathname] || pathname.replace(/^\/+/, "");
  let file = path.resolve(root, relative || "index.html");
  if (!file.startsWith(root)) {
    res.writeHead(403);
    return res.end("Forbidden");
  }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
  if (!fs.existsSync(file)) file = path.join(root, "404.html");
  const ext = path.extname(file).toLowerCase();
  const status = file.endsWith("404.html") ? 404 : 200;

  if (ext === ".html") {
    let html = fs.readFileSync(file, "utf8")
      .replace(/<link rel="stylesheet" href="\/styles\.css">/g, () => `<style data-bundled-styles>${bundledStyles}</style>`)
      .replace(/<script src="\/app\.js" defer><\/script>/g, "");
    if (!file.endsWith("404.html")) {
      html = html.replace("</body>", () => `<script data-bundled-app>${bundledApp}</script></body>`);
    }
    res.writeHead(status, {
      "Content-Type": types[ext],
      "Cache-Control": "no-store",
      "Content-Length": Buffer.byteLength(html)
    });
    return res.end(html);
  }

  res.writeHead(status, {
    "Content-Type": types[ext] || "application/octet-stream",
    "Cache-Control": [".html", ".js", ".css"].includes(ext) ? "no-cache" : "public, max-age=86400"
  });
  fs.createReadStream(file).pipe(res);
}).listen(port, "0.0.0.0", () => console.log(`La Scarpetta concept running on ${port}`));
