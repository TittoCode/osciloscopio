/* constants.js — datos estáticos centralizados */

/* ── Introducción ── */
export const STATS = [
    { value: "20 MHz", label: "Frecuencia máxima" },
    { value: "400V",   label: "Categoría II" },
    { value: "2CH",    label: "Canales simultáneos" },
];

/* ── Historia ── */
export const TIMELINE_EVENTS = [
    {
        year:  "1897",
        title: "El Tubo de Rayos Catódicos (TRC)",
        body:  "El físico Karl Ferdinand Braun inventó el primer osciloscopio utilizando un tubo de rayos catódicos, sentando las bases de la visualización electrónica.",
        icon:  "⚡",
        color: "green",
    },
    {
        year:  "1920s",
        title: "Los primeros osciloscopios comerciales",
        body:  "Surgen los primeros osciloscopios analógicos comerciales. Empresas como Tektronix fueron pioneras en masificar la herramienta para laboratorios.",
        icon:  "🏭",
        color: "cyan",
    },
    {
        year:  "Era Clásica",
        title: "La época dorada del TRC",
        body:  "Modelos analógicos como el MO-1227 representan la cúspide del TRC. Fundamentales en la educación técnica por su respuesta en tiempo real y su fiabilidad sin igual.",
        icon:  "🖥",
        color: "blue",
    },
];

export const TIMELINE_COLOR_MAP = {
    green: {
        dot:   "bg-green-400",
        border:"border-green-500/30",
        glow:  "shadow-[0_0_30px_rgba(34,197,94,0.12)]",
        year:  "text-green-400",
        badge: "bg-green-500/10 text-green-300 border-green-500/20",
        icon:  "bg-green-500/10 text-green-400",
        wave:  "#4ade80",
    },
    cyan: {
        dot:   "bg-cyan-400",
        border:"border-cyan-500/30",
        glow:  "shadow-[0_0_30px_rgba(34,211,238,0.12)]",
        year:  "text-cyan-400",
        badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
        icon:  "bg-cyan-500/10 text-cyan-400",
        wave:  "#22d3ee",
    },
    blue: {
        dot:   "bg-blue-400",
        border:"border-blue-500/30",
        glow:  "shadow-[0_0_30px_rgba(96,165,250,0.12)]",
        year:  "text-blue-400",
        badge: "bg-blue-500/10 text-blue-300 border-blue-500/20",
        icon:  "bg-blue-500/10 text-blue-400",
        wave:  "#60a5fa",
    },
};

/* ── Definición — ejes ── */
export const AXIS_CARDS = [
    {
        axis:        "X",
        color:       "green",
        label:       "Horizontal — Dominio del tiempo",
        description: "Representa el tiempo (el barrido de la señal). Cada división horizontal corresponde a un intervalo de tiempo configurable en ms/div o µs/div.",
        delay:       0.1,
    },
    {
        axis:        "Y",
        color:       "blue",
        label:       "Vertical — Amplitud de la señal",
        description: "Representa la tensión o amplitud de la señal. Cada división vertical equivale a un valor de voltaje configurable en V/div o mV/div.",
        delay:       0.25,
    },
];

/* ── Tipos ── */
export const TIPOS_CARDS = [
    {
        id:    "analogico",
        tipo:  "Analógico (TRC)",
        color: "green",
        badge: "Tecnología clásica",
        icon:  "📺",
        pros: [
            "Respuesta en tiempo real sin delay digital",
            "Ideal para señales muy rápidas y transitorias",
            "Pantalla forescente de alta persistencia",
        ],
        cons: [
            "Sin memoria ni captura de pantalla",
            "Voluminoso y de mayor consumo energético",
            "Escala fija — requiere ajuste manual",
        ],
        ejemplo: "MO-1227 (doble trazo, hasta 20 MHz)",
        wave:    "#4ade80",
    },
    {
        id:    "digital",
        tipo:  "Digital (DSO)",
        color: "blue",
        badge: "Tecnología moderna",
        icon:  "💻",
        pros: [
            "Captura y almacenamiento de señales en memoria",
            "Cálculos automáticos (Vpp, frecuencia, RMS…)",
            "Conectividad USB/Ethernet para exportar datos",
        ],
        cons: [
            "Posible aliasing en señales muy rápidas",
            "Más costoso que su equivalente analógico",
            "Latencia por el proceso ADC",
        ],
        ejemplo: "Rigol DS1054Z (50 MHz, 4 canales)",
        wave:    "#60a5fa",
    },
];

/* ── Partes — bloques del MO-1227 ── */
export const PARTES_BLOQUES = [
    {
        id:          "trc",
        nombre:      "Tubo de Rayos Catódicos (TRC)",
        icono:       "🖥️",
        color:       "green",
        descripcion: "Pantalla fluorescente de 6\" que brilla cuando los electrones impactan en ella. Un voltaje de aceleración de 2 kV empuja el haz, mientras que placas deflectoras lo mueven en los ejes X e Y.",
        detalles:    ["Tensión de aceleración: 2 kV", "Pantalla fluorescente Ø 6\"", "Fósforo P31 (verde)"],
        svgId:       "svg-trc",
    },
    {
        id:          "vertical",
        nombre:      "Sistema Vertical (Amp. Y)",
        icono:       "↕️",
        color:       "cyan",
        descripcion: "Entradas BNC para CH1/CH2. Posee un atenuador (Volts/div) que amplifica señales débiles o reduce las fuertes. Modos AC, DC y GND.",
        detalles:    ["Sensibilidad: 5 mV/div – 5 V/div", "Acoplamiento AC / DC / GND", "Entradas BNC 50 Ω"],
        svgId:       "svg-vertical",
    },
    {
        id:          "horizontal",
        nombre:      "Sistema Horizontal (Barrido X)",
        icono:       "↔️",
        color:       "amber",
        descripcion: "Generador de rampa (diente de sierra) que mueve el haz de izquierda a derecha. El control Sec/div ajusta la velocidad. Permite modo X-Y (Curvas de Lissajous).",
        detalles:    ["Rango: 0.5 µs/div – 0.2 s/div", "Modo X-Y disponible", "Magnificación × 5"],
        svgId:       "svg-horizontal",
    },
    {
        id:          "trigger",
        nombre:      "Circuito de Disparo (Trigger)",
        icono:       "⚡",
        color:       "purple",
        descripcion: "Sincroniza el barrido de la pantalla con la señal de entrada para que la imagen se vea estática. Configura Source, Slope (pendiente) y Level (umbral de disparo).",
        detalles:    ["Modos: AUTO / NORM / TV", "Slope: positivo (+) o negativo (−)", "Level ajustable"],
        svgId:       "svg-trigger",
    },
    {
        id:          "accesorios",
        nombre:      "Accesorios (Sondas)",
        icono:       "🔌",
        color:       "rose",
        descripcion: "Cables especiales con conector BNC, pinza de cocodrilo para masa y punta de prueba. Interruptor 1X / 10X para atenuar la señal. Tornillo compensador para calibración.",
        detalles:    ["Factor de atenuación: ×1 / ×10", "Impedancia de entrada: 10 MΩ", "Calibración con onda cuadrada"],
        svgId:       "svg-accesorios",
    },
];

/* ── Controles ── */
export const CONTROLES_LIST = [
    {
        nombre:   "Power",
        icono:    "⏻",
        badge:    "ENCENDIDO",
        color:    "green",
        desc:    "Enciende el equipo y activa el TRC. ¡Espera 30 s para que el TRC se estabilice antes de medir!",
    },
    {
        nombre:   "Intensity / Focus",
        icono:    "☀",
        badge:    "PANTALLA",
        color:    "amber",
        desc:    "Ajustan el brillo y la nitidez del trazo. Intensidad alta sin barrido puede quemar el fósforo de la pantalla.",
    },
    {
        nombre:   "Trace Rotation",
        icono:    "⟳",
        badge:    "ALINEACIÓN",
        color:    "cyan",
        desc:    "Alinea la línea horizontal con la cuadrícula si el trazo aparece inclinado. Se ajusta con un destornillador.",
    },
    {
        nombre:   "Position ↕ ↔",
        icono:    "✛",
        badge:    "POSICIÓN",
        color:    "blue",
        desc:    "Perillas independientes para mover la gráfica vertical u horizontalmente en la pantalla.",
    },
    {
        nombre:   "Volts/Div",
        icono:    "V",
        badge:    "VERTICAL",
        color:    "purple",
        desc:    "Cambia la escala de amplitud. Ejemplo: 1 V/div = cada cuadro de la pantalla representa 1 voltio.",
    },
    {
        nombre:   "Sec/Div",
        icono:    "t",
        badge:    "HORIZONTAL",
        color:    "rose",
        desc:    "Cambia la escala de tiempo. Ejemplo: 1 ms/div = cada cuadro representa 1 milisegundo.",
    },
];

/* ── Funcionamiento ── */
export const PASOS_FUNCIONAMIENTO = [
    {
        numero:  1,
        titulo:  "Entrada de señal",
        cuerpo:  "La señal entra por el canal vertical (Y) y es amplificada o atenuada según la escala elegida con el selector Volts/div.",
        color:   "green",
        icono:   "🔌",
    },
    {
        numero:  2,
        titulo:  "Disparo (Trigger)",
        cuerpo:  "El circuito Trigger detecta un nivel de voltaje específico en la señal (borde de subida o bajada) y da la orden de inicio al generador de barrido.",
        color:   "cyan",
        icono:   "⚡",
    },
    {
        numero:  3,
        titulo:  "Barrido horizontal",
        cuerpo:  "El generador horizontal (X) empieza a mover el haz de electrones de izquierda a derecha a velocidad constante, controlada por el selector Sec/div.",
        color:   "amber",
        icono:   "→",
    },
    {
        numero:  4,
        titulo:  "Trazado en pantalla",
        cuerpo:  "La combinación del movimiento vertical (señal) y horizontal (tiempo), hace que el haz \"dibuje\" la onda. Al llegar al final, el retrazo apaga el haz y lo devuelve al inicio.",
        color:   "blue",
        icono:   "📺",
    },
];

/* ── Cómo usar ── */
export const PASOS_USO = [
    {
        num:   1,
        titulo:"Calibración inicial",
        body:  "Conecta la sonda (en 10X) a la terminal COMP del equipo. Ajusta el tornillo compensador hasta ver una onda cuadrada perfecta (esquinas rectas).",
        tip:   "Señal de calibración: ~2 V a 1 kHz",
    },
    {
        num:   2,
        titulo:"Encendido y ajuste de pantalla",
        body:  "Power ON. Ajusta la Intensidad a un nivel medio y centra el trazo horizontal con las perillas de Position.",
        tip:   "Espera 30 s antes de cualquier medición",
    },
    {
        num:   3,
        titulo:"Conexión al circuito",
        body:  "Conecta la pinza de masa a la tierra del circuito y la punta de la sonda a la señal que deseas medir.",
        tip:   "Nunca conectes la masa a un punto con tensión",
    },
    {
        num:   4,
        titulo:"Ajuste del Trigger",
        body:  "Coloca el Trigger en modo NORM o AUTO. Ajusta el Level al centro y el Slope en positivo (+) para empezar.",
        tip:   "Si la imagen salta, gira lentamente el Level",
    },
    {
        num:   5,
        titulo:"Escalado de la señal",
        body:  "Modifica Volts/div y Sec/div hasta ver 2–3 ciclos completos que ocupen ~6 divisiones verticales.",
        tip:   "Apunta siempre los valores de escala seleccionados",
    },
    {
        num:   6,
        titulo:"Cálculo Vpp y frecuencia",
        body:  "Cuenta las divisiones verticales del pico al valle y multiplica por Volts/div (×10 si usas sonda 10X). Para la frecuencia: mide el ancho de 1 ciclo en divisiones × Sec/div.",
        tip:   "Usa la calculadora a continuación →",
    },
];

/* ── Aplicaciones ── */
export const APLICACIONES_LIST = [
    {
        icono:"⚡",
        titulo:"Fuentes de alimentación",
        body: "Medición de voltajes pico a pico (Vpp) y frecuencia en fuentes conmutadas y lineales.",
        color:"green",
    },
    {
        icono:"🎵",
        titulo:"Circuitos de audio",
        body: "Análisis de ruido, distorsión armónica e interferencias en amplificadores y preamplificadores.",
        color:"cyan",
    },
    {
        icono:"🤖",
        titulo:"Microcontroladores",
        body: "Depuración de señales PWM, SPI, I²C y UART de plataformas como ESP32 o Arduino.",
        color:"blue",
    },
    {
        icono:"🚗",
        titulo:"Diagnóstico automotriz",
        body: "Revisión de sensores del motor, señales de inyectores y comunicación CAN bus en vehículos modernos.",
        color:"amber",
    },
    {
        icono:"🔋",
        titulo:"Carga de capacitores",
        body: "Observación de curvas de carga y descarga RC para cálculo experimental de constantes de tiempo τ.",
        color:"purple",
    },
];

/* ── Header — navegación ── */
export const NAV_LINKS = [
    { href: "#intro",          label: "Intro" },
    { href: "#historia",       label: "Historia" },
    { href: "#definicion",     label: "Definición" },
    { href: "#tipos",          label: "Tipos" },
    { href: "#partes",         label: "Partes" },
    { href: "#controles",      label: "Controles" },
    { href: "#funcionamiento", label: "Funcionamiento" },
    { href: "#como-usar",      label: "Cómo Usar" },
    { href: "#aplicaciones",   label: "Aplicaciones" },
];

/* ── Autoevaluación ── */
export const QUIZ_QUESTIONS = [
    {
        id: 1,
        pregunta: "¿Qué representa el eje X en la pantalla del osciloscopio?",
        opciones: ["Voltaje", "Corriente", "Tiempo", "Frecuencia"],
        correcta: 2,
        explicacion: "El eje X siempre representa el tiempo (barrido). Cada división horizontal equivale a un intervalo de tiempo configurado con Sec/div.",
    },
    {
        id: 2,
        pregunta: "¿Cuál es la función principal del circuito Trigger?",
        opciones: [
            "Amplificar la señal de entrada",
            "Estabilizar la imagen en pantalla sincronizando el barrido",
            "Convertir la señal de AC a DC",
            "Medir la frecuencia automáticamente",
        ],
        correcta: 1,
        explicacion: "El Trigger sincroniza el inicio del barrido con un nivel de voltaje específico de la señal, logrando que la onda se vea estática y estable.",
    },
    {
        id: 3,
        pregunta: "El MO-1227 tiene un ancho de banda de:",
        opciones: ["5 MHz", "10 MHz", "20 MHz", "50 MHz"],
        correcta: 2,
        explicacion: "El MO-1227 es un osciloscopio analógico de doble trazo con ancho de banda de 20 MHz, ideal para entornos educativos y diagnóstico de circuitos.",
    },
    {
        id: 4,
        pregunta: "¿Qué sucede si dejas el punto del haz estático con intensidad muy alta?",
        opciones: [
            "El fusible se quема",
            "El trigger se desactiva",
            "Se quema permanentemente el fósforo de la pantalla TRC",
            "El equipo se apaga automáticamente",
        ],
        correcta: 2,
        explicacion: "Un haz de electrones estático y brillante quema el fósforo de la pantalla TRC de forma permanente. Siempre mueve el barrido o reduce la intensidad.",
    },
    {
        id: 5,
        pregunta: "Para calcular el Vpp de una señal, ¿qué fórmula se usa con sonda 10X?",
        opciones: [
            "Divisiones × Volts/div",
            "Divisiones × Volts/div × 10",
            "Divisiones / Volts/div",
            "Volts/div / Divisiones × 10",
        ],
        correcta: 1,
        explicacion: "Con sonda 10X el factor de atenuación multiplica el resultado: Vpp = Divisiones verticales × Volts/div × 10.",
    },
];