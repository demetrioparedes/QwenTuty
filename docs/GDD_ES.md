# DOCUMENTO DE DISEÑO DE JUEGO (GDD)
## ANTIGRAVITY: Academia de Jefes Robot

### 1. Resumen Ejecutivo
**Nombre del Proyecto:** ANTIGRAVITY: Academia de Jefes Robot
**Público Objetivo:** Principiantes en programación de 12 años (Hablantes de español).
**Plataforma:** Web (HTML5 + React + Phaser 3).
**Concepto Central:** Un juego educativo interactivo donde los jugadores asumen el rol de un "Jefe Robot" en una estación espacial. Comandando robots IA, aprenden a usar la plataforma Antigravity.
**Objetivo:** Completar 12 misiones gamificadas para ganar el título de "Jefe Robot Junior Certificado".

### 2. Narrativa
- **Escenario:** La "Nave Espacial Antigravity", explorando el cosmos del código.
- **Rol del Jugador:** Cadete / Comandante Junior.
- **Compañeros:** Robots IA adorables que ejecutan comandos.
- **Tema:** "Jefe de Robots" – enfatizando que el jugador dirige a la IA, en lugar de escribir cada línea de código manualmente.

### 3. Ciclo de Juego Principal
1.  **Informe:** Recibir una misión desde el Centro de Mando (ej. "Necesitamos escanear este planeta usando el agente navegador").
2.  **Acción:** Entrar al "Espacio de Trabajo" (Vista de Juego).
3.  **Comando:** Usar la terminal simulada o interfaz de arrastrar y soltar para dar órdenes al robot.
4.  **Retroalimentación:** El robot realiza la acción (animada) y proporciona registros/salida en tiempo real.
5.  **Resultado:** Éxito (Insignia otorgada) o Reintento (Pista proporcionada).
6.  **Progresión:** Desbloquear la siguiente misión y personalizar la nave/robot.

### 4. Sistema de Progresión
- **Niveles:** 4 Niveles (Novato, Explorador, Constructor, Experto).
- **Misiones:** 12 en Total (3 por nivel).
- **Sistema de XP:**
    - 50-200 XP por misión.
    - 1200 XP requeridos para la certificación.
- **Insignias:** 12 insignias únicas coleccionables.

### 5. Enganches de Compromiso (Engagement)
- **Gratificación Instantánea:** Cada comando correcto activa una animación/sonido satisfactorio.
- **Progresión Visual:** La nave espacial se mejora a medida que se completan las misiones.
- **Certificación:** Un certificado descargable al completar el juego.

### 6. Estilo Visual
- **Paleta:** Azul Espacial Profundo (#1A1D3A), Púrpura Eléctrico (#7B68EE), Cian Neón (#00D4FF), Estrella Dorada (#FFD700).
- **Estilo de Arte:** Diseño plano (flat), futurista, acentos neón.
- **UI:** Bordes redondeados, botones interactivos grandes, estética de terminal simplificada.

### 7. Accesibilidad
- **Idioma:** Español (Latinoamérica) e Inglés.
- **Controles:** Teclado + Ratón.
- **Soporte:** Compatible con lectores de pantalla (WCAG AA).

### 8. Lista de Misiones (Resumen)
*Ver MISIONES_ES.md para detalles completos.*

- **Nivel 1 (Novato):** Hola Mundo, Centro de Mando, Configuración Segura.
- **Nivel 2 (Explorador):** Navegador Fantasma, Cazador de Pruebas, Maestro del Inbox.
- **Nivel 3 (Constructor):** Plan de Acción, Modo Rápido, Mago del Código.
- **Nivel 4 (Experto):** Reglas de Oro, Multitarea, El Gran Combo.
