# OSC-SCOPE · Guía del Osciloscopio MO-1227 

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

Una plataforma interactiva educacional diseñada para aprender a usar y comprender el funcionamiento técnico del osciloscopio analógico.
El software ofrece explicaciones dinámicas, visualización de trazados, herramientas de simulación y soporte bilingüe completo (i18n).

## Características Principales

*   **Diagrama Interactivo (SVG):** Explora en detalle cada mando y bloque interno de un osciloscopio haciendo clic e interactuando con su representación vectorial.
*   **Calculadora Interactiva de Vpp:** Simula lecturas en la grilla y cálcula de voltaje pico a pico ajustando divisores y factores de atenuación de sonda.
*   **Físicas UI y Animaciones Spring:** Todo el sistema se nutre de animaciones altamente responsivas logradas mediante `framer-motion` (Glassmorphism, glow effects).
*   **Soporte Bilingüe (i18n):** Interfaz unificada con traducción instantánea y sin recargas entre Español e Inglés mediante `react-i18next`.
*   **Modo Autoevaluación:** Módulo tipo Quiz para verificar conocimientos con barras de progresión dinámicas y calificación condicional.

## Tecnologías Empleadas

- **Core:** React 18 / Vite
- **Estilos:** Tailwind CSS / Vanilla CSS (para efectos complejos / glow filters)
- **Animaciones:** Framer Motion (Spring physics)
- **Internacionalización:** i18next + react-i18next

## Instalación y Uso Local

Este proyecto utiliza `npm` y fue empaquetado con Vite. Sigue estos pasos para correrlo localmente:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/TittoCode/osciloscopio.git
   cd osciloscopio
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Arrancar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. Abre tu navegador y dirígete a `http://localhost:5173`.

## Estructura del Código

- `/src/components`: Componentes interactivos modulares (Quiz, Diagramas, Arrays generativos).
- `/src/sections`: Bloques de Layout o páginas principales (Hero, Header, Footer).
- `/src/utils`: Utilidades puras, constantes estáticas (para desacoplar JS de UI) y presets de animaciones.
- `/src/i18n.js`: Archivo core de la internacionalización global del proyecto con objetos multilingües.
- `/src/index.css`: Fila integral de estilos conteniendo el *Design System*, paleta de variables y utilidades glow.

## Contribuir

¡Las contribuciones son bienvenidas! Si deseas añadir nuevas secciones de aprendizaje, corregir un bug o extender el rango de idiomas, sintete libre de crear un pull request o abrir un issue.

## Licencia

Este proyecto se distribuye bajo la licencia **MIT** (Licencia Libre).
Ver el archivo [LICENSE](LICENSE) (o este mismo apartado) para más detalles. Siéntete libre de modificar, clonar y publicar ramas de este repositorio tanto para fines educativos y personales como comerciales.
