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

**Estado actual:** están implementadas la página de inicio (`/`), la propuesta del curso (`/curso`) y la primera lección (`/chia`). Las páginas de los niveles CHIB y CHIC todavía no están implementadas.

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

## Tecnologías

- [Astro](https://astro.build/) 5
- HTML, CSS y JavaScript
- Fuentes web de Google Fonts

## Estructura

```text
src/
└── pages/
    ├── index.astro    # Página de inicio y traductor
    ├── curso.astro    # Propuesta del recorrido CHIA, CHIB y CHIC
    └── chia.astro     # Lección del nivel inicial
```
