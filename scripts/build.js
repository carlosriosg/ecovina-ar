const fs = require('fs');
const path = require('path');

const raiz = path.resolve(__dirname, '..');
const destino = path.join(raiz, 'dist');

const archivos = ['index.html', 'styles.css', 'app.js', 'README.md'];

fs.rmSync(destino, { recursive: true, force: true });
fs.mkdirSync(destino, { recursive: true });

for (const archivo of archivos) {
  const origen = path.join(raiz, archivo);
  if (fs.existsSync(origen)) {
    fs.copyFileSync(origen, path.join(destino, archivo));
  }
}

console.log('Sitio estatico generado en dist/ con ' + archivos.length + ' archivos base.');
