# Comunidad Chi 气

Comunidad Chi es una propuesta interactiva para aprender el juego de palabras familiar llamado **Chi**: se habla en español, pero se antepone `chi` a cada sílaba. La página explica su origen, enseña la regla con ejemplos y permite practicar con un traductor y expresiones cotidianas.

## La regla del Chi

1. Separa la palabra en sílabas.
2. Añade `chi` delante de cada sílaba.
3. Une las sílabas y conserva la puntuación.

Por ejemplo, `hola` se divide en `ho-la` y se transforma en `chihochila`. Las respuestas especiales son **sí → chiis** y **no → chion**.

## Contenido y propuesta del curso

La página de inicio presenta el origen y la regla del Chi, ejemplos, expresiones cotidianas y un traductor en ambas direcciones. También incluye controles para escuchar, copiar y limpiar el resultado.

La página `/curso` presenta el recorrido propuesto de tres niveles:

| Nivel | Enfoque | Meta |
| --- | --- | --- |
| **CHIA — El Despertar del Chi** | Bases, frases cortas, cuento y saludos | Presentarse en Chi |
| **CHIB — La Senda del Dragón** | Conversación diaria, emociones, comida, familia y mercado | Conversar sobre lo cotidiano |
| **CHIC — Maestro Chi** | Fluidez, debate, cuentos propios y diálogo libre | Conversar con fluidez |

**Estado actual:** están implementadas la página de inicio, la propuesta del curso y las lecciones de CHIA, CHIB y CHIC.

## Empezar en local

Necesitas Node.js y npm instalados.

```bash
npm install
npm run dev
```

Abre la dirección local que indique Astro en la terminal.

Para generar y previsualizar una compilación:

```bash
npm run build
npm run preview
```

## Publicar en GitHub Pages

El sitio se publica en [https://www.chihochila.com](https://www.chihochila.com). El archivo `public/CNAME` configura el dominio personalizado y, al hacer `push` a `main`, la acción de GitHub en `.github/workflows/deploy.yml` compila y despliega el sitio automáticamente.

En GitHub, configura **Settings → Pages → Build and deployment → Source → GitHub Actions**. El dominio también debe apuntar mediante DNS (`CNAME` → `www`) a GitHub Pages. Puedes iniciar un despliegue manual desde **Actions → Deploy to GitHub Pages**.

## SEO

- `src/components/SEO.astro`: title, meta description, keywords, canonical, Open Graph, Twitter Card, favicon y datos estructurados JSON-LD por página.
- Datos estructurados: `WebSite`, `Organization`, `FAQPage` (inicio), `Course` + `BreadcrumbList` (`/curso/`) y `LearningResource` por nivel (CHIA/CHIB/CHIC).
- `public/robots.txt` y `public/sitemap.xml` apuntando a `https://www.chihochila.com`.
- Imagen social `public/og.png` (1200×630), `favicon.png` y `apple-touch-icon.png`.
- Contenido clave: *aprender chi gratis*, *curso de chi online*, *chi free*, *chihochila*, *chiis*, *chion*.

## Tecnologías

- [Astro](https://astro.build/) 5
- HTML, CSS y JavaScript
- Fuentes web de Google Fonts
- GitHub Actions para el despliegue en GitHub Pages

## Estructura

```text
src/
└── pages/
    ├── index.astro    # Página de inicio y traductor
    ├── curso.astro    # Propuesta del recorrido CHIA, CHIB y CHIC
    ├── chia.astro     # Lección CHIA
    ├── chib.astro     # Lección CHIB
    └── chic.astro     # Lección CHIC
```
