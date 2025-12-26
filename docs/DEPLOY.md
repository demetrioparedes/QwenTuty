# GUÍA DE DESPLIEGUE (DEPLOY)

Esta guía explica cómo desplegar "ANTIGRAVITY: Robot Boss Academy" en Firebase Hosting.

## Prerrequisitos
- Tener una cuenta de Google/Firebase.
- Tener Node.js instalado.

## Pasos

1.  **Instalar Firebase CLI**
    ```bash
    npm install -g firebase-tools
    ```

2.  **Iniciar Sesión**
    ```bash
    firebase login
    ```

3.  **Inicializar Proyecto**
    Ejecuta el siguiente comando en la raíz del proyecto:
    ```bash
    firebase init
    ```
    - Selecciona: **Hosting: Configure files for Firebase Hosting...**
    - Selecciona: **Use an existing project** (o crea uno nuevo en la consola de Firebase).
    - **What do you want to use as your public directory?** Escribe: `dist`
    - **Configure as a single-page app?** Escribe: `y` (Sí)
    - **Set up automatic builds and deploys with GitHub?** `n` (No, por ahora)

4.  **Construir el Proyecto**
    Genera los archivos de producción:
    ```bash
    npm run build
    ```

5.  **Desplegar**
    Sube los archivos a Firebase:
    ```bash
    firebase deploy
    ```

¡Listo! El juego estará disponible en la URL proporcionada (ej. `https://tu-proyecto.web.app`).

## Verificación Local
Para probar la versión de producción localmente antes de subir:
```bash
npm run preview
```
