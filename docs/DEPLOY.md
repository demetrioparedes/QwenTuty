# GUÍA DE DESPLIEGUE Y PUESTA EN MARCHA

Este documento explica las mejores opciones para poner en marcha "ANTIGRAVITY: Robot Boss Academy" para que el mundo (o tus alumnos) lo vean.

## Opción 1: Ejecución Local (Para Desarrollo y Pruebas)
Si solo quieres ejecutarlo en tu computadora:

1.  **Modo Desarrollo** (con recarga rápida):
    ```bash
    npm run dev
    ```
    Abre `http://localhost:5173` (o el puerto que indique) en tu navegador.

2.  **Modo Producción Local** (simula el servidor real):
    ```bash
    npm run build
    npm run preview
    ```
    Esto es útil para verificar que todo funcione exactamente como se verá en internet.

---

## Opción 2: Vercel (Recomendada por Rapidez)
Es la opción más rápida y sencilla (cero configuración).

1.  Crea una cuenta en [Vercel.com](https://vercel.com).
2.  Instala Vercel CLI: `npm i -g vercel` o simplemente arrastra tu carpeta.
3.  **Método Drag & Drop (Web):**
    - Ejecuta `npm run build` para generar la carpeta `dist`.
    - Arrastra la carpeta `dist` al dashboard de Vercel.
4.  **Método CLI (Consola):**
    - En la terminal, escribe: `vercel`
    - Sigue las instrucciones (Enter, Enter, Enter).
    - ¡Listo! Te dará una URL pública `https://antigravity-game...vercel.app`.

---

## Opción 3: Netlify (Alternativa Sencilla)
Similar a Vercel.

1.  Ve a [Netlify.com](https://netlify.com) y regístrate.
2.  Ejecuta `npm run build` en tu proyecto.
3.  Arrastra la carpeta `dist` generada al área de "Netlify Drop".
4.  El juego estará online en segundos.

---

## Opción 4: Firebase Hosting (Profesional / Google)
Ideal si ya usas Firebase para bases de datos (como sugerimos en la arquitectura).

1.  **Instalar Firebase CLI:**
    ```bash
    npm install -g firebase-tools
    ```

2.  **Iniciar Sesión:**
    ```bash
    firebase login
    ```

3.  **Inicializar Proyecto:**
    ```bash
    firebase init
    ```
    - Selecciona: **Hosting**.
    - Directorio público: `dist`.
    - Single-page app: `Yes`.

4.  **Desplegar:**
    ```bash
    npm run build
    firebase deploy
    ```

---

## 🎯 Recomendación del Experto
Para este proyecto educativo:

- **Para demos rápidas:** Usa **Vercel** o **Netlify**. Es gratis, rápido y no requiere configuración compleja.
- **Para el producto final (LMS):** Usa **Firebase Hosting**. Se integra mejor con la autenticación y base de datos que planeamos en la arquitectura técnica (para guardar el progreso de los alumnos en la nube real).
