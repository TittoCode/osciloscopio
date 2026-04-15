# Protocolo de Animaciones e Interacción

## Framer Motion Configuration
- Transiciones: Utilizar exclusivamente el tipo 'spring' para movimientos naturales. 
- Parámetros base: stiffness: 100, damping: 20, mass: 1.
- Revelación: Implementar Intersection Observer mediante el prop 'whileInView' para que el contenido aparezca conforme el usuario hace scroll.

## Efectos Especiales
- Hover States: Cada elemento interactivo debe tener una reacción visual inmediata (escalado sutil de 1.02 o cambio de brillo).
- Pantalla Osciloscopio: La señal (path SVG) debe tener una animación de trazado infinito para simular el barrido real del haz de electrones.
- Micro-interacciones: Los botones de perillas deben rotar visualmente al interactuar, simulando el hardware físico.