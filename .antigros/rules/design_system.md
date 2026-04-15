# Sistema de Diseño: Estética Técnica de Alta Fidelidad

## Paleta de Colores (Tailwind Tokens)
- Fondo principal: slate-950 (Oscuro profundo).
- Superficies: slate-900 con opacidad (Glassmorphism).
- Acento Primario: cyan-400 (Azul eléctrico de laboratorio).
- Acento Secundario: emerald-400 (Verde fósforo de pantalla TRC).
- Alertas/Peligro: rose-500.

## Identidad Visual
- Bordes: Utilizar rings de Tailwind con efectos de brillo (glow) mediante box-shadows personalizados en index.css.
- Tipografía: Inter para lectura general y JetBrains Mono para datos técnicos y valores numéricos.
- Efectos de Cristal: Uso de backdrop-blur-md y border-white/10 para crear profundidad en las secciones.

## Responsividad
- Enfoque Mobile-First obligatorio.
- Grid y Flexbox dinámicos para reordenar secciones según el tamaño de pantalla.
- Tipografía fluida que se ajuste automáticamente entre 320px y 1920px.