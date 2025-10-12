# 🚀 ERP Integral para PYMEs (QwenTuty)

Sistema ERP moderno, modular y escalable diseñado para potenciar a pequeñas y medianas empresas a través de una arquitectura de microservicios.

## 📁 Estructura del Proyecto

- `docs/`: Documentación funcional y técnica.
- `infra/`: Scripts de Infraestructura como Código (IaC).
- `src/`: Código fuente de los microservicios (core, finance, etc.).
- `specs/`: Especificaciones de la API (OpenAPI).
- `diagrams/`: Diagramas de arquitectura (PlantUML).
- `ci-cd/`: Pipelines de Integración y Despliegue Continuo.

## 🚀 Despliegue Local

1.  **Asegúrate de tener Docker y Docker Compose instalados.**
2.  **Clona el repositorio.**
3.  **Levanta todo el entorno con un solo comando:**
    ```bash
    docker-compose up --build
    ```

## ⚙️ Pipeline CI/CD

El repositorio está configurado con un pipeline de GitHub Actions que automáticamente:
- Ejecuta tests y linting para los microservicios modificados.
- Construye y publica imágenes Docker en Docker Hub en cada push a `main`.
