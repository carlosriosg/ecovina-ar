# EcoViña AR — Aliados Invisibles del Campo

Landing page del proyecto **EcoViña AR**, una aplicación móvil gratuita de Realidad Aumentada que enseña a los agricultores de Chile central sobre el **control biológico de plagas** mediante la conservación de aves y murciélagos.

## Enfoque

La página comunica tres ideas centrales:

- **Ecolocalización en Acción:** simulaciones 3D de murciélagos cazando polillas nocturnas.
- **El Valor de los Cercos Vivos:** comparación visual entre vegetación nativa y monocultivo.
- **Ciencia Aplicada en Terreno:** respaldo de la investigación en agroecología y conservación.

Además, destaca la accesibilidad de la herramienta (audiodescripción y lengua de señas) y su carácter gratuito y abierto.

## Stack

- HTML5 semántico
- Tailwind CSS vía CDN + hoja de estilos propia (`styles.css`)
- JavaScript sin dependencias (`app.js`)
- FontAwesome para iconografía de navegación y pie de página
- Ilustraciones SVG propias para las tarjetas y el diagrama científico

## Estructura

```
.
├── index.html
├── styles.css
├── app.js
├── .gitignore
└── .github/
    └── workflows/
        └── pages.yml
```

## Cómo verlo en local

Abre `index.html` directamente en el navegador, o levanta un servidor sencillo:

```bash
python -m http.server 8000
```

Luego visita `http://localhost:8000`.

## Accesibilidad

- Enlace para saltar al contenido principal.
- Marcas ARIA en navegación, menú móvil y mensajes de estado.
- Textos alternativos descriptivos en imágenes e ilustraciones.
- Respeto por `prefers-reduced-motion`.
- Contraste alto y foco visible por teclado.

## Publicación en GitHub Pages

El flujo de trabajo incluido en `.github/workflows/pages.yml` publica la raíz del repositorio automáticamente.

1. Sube el código a la rama `main`.
2. En el repositorio, entra a `Settings` → `Pages`.
3. En `Source`, selecciona `GitHub Actions`.
4. Cada nuevo envío a `main` regenerará el sitio.

## Comandos de Git

```bash
git init
git add .
git commit -m "Lanzamiento inicial de la landing page EcoViña AR"
git remote add origin https://github.com/carlosriosg/ecovina-ar.git
git branch -M main
git push -u origin main
```

> El repositorio `ecovina-ar` debe existir vacío en GitHub antes de ejecutar el último comando.

## Contacto

- Correo: carlos@dar2.cl
- GitHub: https://github.com/carlosriosg

---

&copy; EcoViña AR. Todos los derechos reservados.
