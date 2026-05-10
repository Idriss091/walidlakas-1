import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = Number(process.env.PORT) || 3000;
const distDir = path.join(__dirname, 'dist');
const indexFile = path.join(distDir, 'index.html');

app.disable('x-powered-by');

app.use(
  express.static(distDir, {
    index: false,
    maxAge: '7d',
  }),
);

// Send the SPA shell for frontend routes so React Router can resolve them.
app.get(/^(?!.*\.[a-zA-Z0-9]+$).*$/, (_req, res) => {
  res.sendFile(indexFile);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${port}`);
});
