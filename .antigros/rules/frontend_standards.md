# Estándares de Arquitectura Frontend

## Stack Tecnológico
- React 18+ con Vite.
- Tailwind CSS para utilidades de diseño.
- Framer Motion para orquestación de animaciones.
- Lucide React para iconografía técnica.

## Estructura y Organización
- Separación de preocupaciones: El marcado JSX debe estar limpio de lógica compleja de estilos.
- CSS Separado: No utilizar estilos en línea ni bloques de CSS dentro de los archivos JSX. Toda configuración de diseño compleja o animaciones base deben residir en el archivo index.css global o en módulos CSS específicos.
- Comentarios: Prohibido incluir comentarios de código en las respuestas generadas. El código debe ser lo suficientemente semántico para entenderse por sí mismo.
- Tipado: Utilizar Prop-types o TypeScript si el proyecto lo requiere para asegurar la integridad de los datos.

## Calidad de Código
- Uso estricto de componentes funcionales.
- Implementación de Hooks personalizados para lógica repetitiva.
- Priorización de la carga diferida (Lazy Loading) para secciones pesadas del sitio.