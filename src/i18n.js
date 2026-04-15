import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      header: {
        nav: [
          { href: "#intro", label: "Intro" },
          { href: "#historia", label: "Historia" },
          { href: "#definicion", label: "Definición" },
          { href: "#tipos", label: "Tipos" },
          { href: "#partes", label: "Partes" },
          { href: "#controles", label: "Controles" },
          { href: "#funcionamiento", label: "Funcionamiento" },
          { href: "#como-usar", label: "Cómo Usar" },
          { href: "#aplicaciones", label: "Aplicaciones" }
        ],
        live: "EN VIVO",
        signal: "Señal activa"
      },
      hero: {
        badge: "CH1 · SEÑAL ACTIVA",
        title_l1: "Visualiza la",
        title_l2: "electricidad",
        sub: "Un viaje al corazón del osciloscopio — desde sus orígenes hasta cómo leer cada onda en pantalla.",
        cta_start: "Comenzar",
        cta_history: "Ver historia",
        wave_label: "CH1 · 1V/div · 1ms/div"
      },
      footer: {
        tagline: "Proyecto educativo sobre instrumentación electrónica.",
        bottom_text: "OSC-SCOPE · Proyecto educativo ·",
        signal: "SEÑAL OK"
      },
      intro: {
        badge: "CH1 · SEÑAL ACTIVA",
        title_l1: "El ",
        title_accent: "Osciloscopio",
        sub: "¿Qué es y por qué es importante?",
        quote_p1: "El osciloscopio es el ",
        quote_strong1: "\"ojo\" de la electrónica",
        quote_p2: ". Mientras que un multímetro te da un valor estático —como decir que un auto va a 60 km/h— un osciloscopio te permite ver la ",
        quote_strong2: "\"película\" completa",
        quote_p3: " del comportamiento de la electricidad.",
        body_p1: "Es una herramienta indispensable en laboratorios, talleres y centros de investigación para ",
        body_span: "analizar cómo cambian los niveles de voltaje",
        body_p2: " a lo largo del tiempo, detectar ruidos, medir frecuencias y depurar circuitos complejos.",
        stats: [
          { value: "20 MHz", label: "Frecuencia máxima" },
          { value: "400V", label: "Categoría II" },
          { value: "2CH", label: "Canales simultáneos" }
        ]
      },
      historia: {
        badge: "MODO HISTORIA",
        title_l1: "Los orígenes del",
        title_l2: "trazado de ondas",
        desc: "De los tubos de vidrio al laboratorio moderno — una línea de tiempo",
        milestone: "HITO",
        events: [
          {
            year: "1897",
            title: "El Tubo de Rayos Catódicos (TRC)",
            body: "El físico Karl Ferdinand Braun inventó el primer osciloscopio utilizando un tubo de rayos catódicos, sentando las bases de la visualización electrónica.",
            icon: "⚡",
            color: "green"
          },
          {
            year: "1920s",
            title: "Los primeros osciloscopios comerciales",
            body: "Surgen los primeros osciloscopios analógicos comerciales. Empresas como Tektronix fueron pioneras en masificar la herramienta para laboratorios.",
            icon: "🏭",
            color: "cyan"
          },
          {
            year: "Era Clásica",
            title: "La época dorada del TRC",
            body: "Modelos analógicos como el MO-1227 representan la cúspide del TRC. Fundamentales en la educación técnica por su respuesta en tiempo real y su fiabilidad sin igual.",
            icon: "🖥",
            color: "blue"
          }
        ]
      },
      definicion: {
        badge: "VISUALIZANDO LO INVISIBLE",
        title_l1: "Definición &",
        title_l2: "Sistema de ejes",
        desc_p1: "Un osciloscopio es un instrumento de medición electrónica que representa gráficamente la ",
        desc_s1: "tensión (voltaje)",
        desc_p2: " en función del ",
        desc_s2: "tiempo",
        desc_p3: ".",
        diagram: {
          window_label: "osciloscopio · CH1 · 1V/div · 1ms/div",
          time: "t",
          voltage: "V",
          signal: "señal ~",
          legend_x: "Eje X · tiempo",
          legend_y: "Eje Y · voltaje"
        },
        cards: [
          {
            axis: "X",
            color: "green",
            label: "Horizontal — Dominio del tiempo",
            description: "Representa el tiempo (el barrido de la señal). Cada división horizontal corresponde a un intervalo de tiempo configurable en ms/div o µs/div.",
            delay: 0.1
          },
          {
            axis: "Y",
            color: "blue",
            label: "Vertical — Amplitud de la señal",
            description: "Representa la tensión o amplitud de la señal. Cada división vertical equivale a un valor de voltaje configurable en V/div o mV/div.",
            delay: 0.25
          }
        ],
        note: {
          label: "Nota Técnica — MO-1227",
          body_p1: "Modelos de laboratorio como el ",
          str1: "MO-1227",
          body_p2: " (Categoría II 400V) soportan mediciones seguras y pueden medir señales de hasta ",
          str2: "20 MHz",
          body_p3: ", siendo ideales para entornos educativos y diagnóstico de circuitos."
        }
      },
      tipos: {
        badge: "COMPARATIVA",
        title_l1: "Analógico vs",
        title_l2: "Digital",
        desc: "Aunque el mundo es digital, la visualización analógica tiene ventajas únicas.",
        cards: [
            {
                id: "analogico",
                tipo: "Analógico (TRC)",
                badge: "Tecnología clásica",
                pros: [
                    "Respuesta en tiempo real sin delay digital",
                    "Ideal para señales muy rápidas y transitorias",
                    "Pantalla forescente de alta persistencia"
                ],
                cons: [
                    "Sin memoria ni captura de pantalla",
                    "Voluminoso y de mayor consumo energético",
                    "Escala fija — requiere ajuste manual"
                ],
                ejemplo: "MO-1227 (doble trazo, hasta 20 MHz)"
            },
            {
                id: "digital",
                tipo: "Digital (DSO)",
                badge: "Tecnología moderna",
                pros: [
                    "Captura y almacenamiento de señales en memoria",
                    "Cálculos automáticos (Vpp, frecuencia, RMS…)",
                    "Conectividad USB/Ethernet para exportar datos"
                ],
                cons: [
                    "Posible aliasing en señales muy rápidas",
                    "Más costoso que su equivalente analógico",
                    "Latencia por el proceso ADC"
                ],
                ejemplo: "Rigol DS1054Z (50 MHz, 4 canales)"
            }
        ]
      },
      partes: {
        badge: "INSPECCIÓN TÉCNICA",
        title_l1: "Partes principales",
        title_l2: "del equipo",
        desc: "Conoce los bloques fundamentales del modelo MO-1227.",
        bloques: [
            { id: "trc", nombre: "Tubo de Rayos Catódicos (TRC)", descripcion: "Pantalla fluorescente de 6\" que brilla cuando los electrones impactan en ella. Un voltaje de aceleración de 2 kV empuja el haz, mientras que placas deflectoras lo mueven en los ejes X e Y.", detalles: ["Tensión de aceleración: 2 kV", "Pantalla fluorescente Ø 6\"", "Fósforo P31 (verde)"] },
            { id: "vertical", nombre: "Sistema Vertical (Amp. Y)", descripcion: "Entradas BNC para CH1/CH2. Posee un atenuador (Volts/div) que amplifica señales débiles o reduce las fuertes. Modos AC, DC y GND.", detalles: ["Sensibilidad: 5 mV/div – 5 V/div", "Acoplamiento AC / DC / GND", "Entradas BNC 50 Ω"] },
            { id: "horizontal", nombre: "Sistema Horizontal (Barrido X)", descripcion: "Generador de rampa (diente de sierra) que mueve el haz de izquierda a derecha. El control Sec/div ajusta la velocidad. Permite modo X-Y (Curvas de Lissajous).", detalles: ["Rango: 0.5 µs/div – 0.2 s/div", "Modo X-Y disponible", "Magnificación × 5"] },
            { id: "trigger", nombre: "Circuito de Disparo (Trigger)", descripcion: "Sincroniza el barrido de la pantalla con la señal de entrada para que la imagen se vea estática. Configura Source, Slope (pendiente) y Level (umbral de disparo).", detalles: ["Modos: AUTO / NORM / TV", "Slope: positivo (+) o negativo (−)", "Level ajustable"] },
            { id: "accesorios", nombre: "Accesorios (Sondas)", descripcion: "Cables especiales con conector BNC, pinza de cocodrilo para masa y punta de prueba. Interruptor 1X / 10X para atenuar la señal. Tornillo compensador para calibración.", detalles: ["Factor de atenuación: ×1 / ×10", "Impedancia de entrada: 10 MΩ", "Calibración con onda cuadrada"] }
        ]
      },
      controles: {
        badge: "PANEL FRONTAL",
        title_l1: "Guía de",
        title_l2: "controles",
        desc: "Aprende para qué sirve cada selector y perilla antes de medir.",
        list: [
            { nombre: "Power", badge: "ENCENDIDO", desc: "Enciende el equipo y activa el TRC. ¡Espera 30 s para que el TRC se estabilice antes de medir!" },
            { nombre: "Intensity / Focus", badge: "PANTALLA", desc: "Ajustan el brillo y la nitidez del trazo. Intensidad alta sin barrido puede quemar el fósforo de la pantalla." },
            { nombre: "Trace Rotation", badge: "ALINEACIÓN", desc: "Alinea la línea horizontal con la cuadrícula si el trazo aparece inclinado. Se ajusta con un destornillador." },
            { nombre: "Position ↕ ↔", badge: "POSICIÓN", desc: "Perillas independientes para mover la gráfica vertical u horizontalmente en la pantalla." },
            { nombre: "Volts/Div", badge: "VERTICAL", desc: "Cambia la escala de amplitud. Ejemplo: 1 V/div = cada cuadro de la pantalla representa 1 voltio." },
            { nombre: "Sec/Div", badge: "HORIZONTAL", desc: "Cambia la escala de tiempo. Ejemplo: 1 ms/div = cada cuadro representa 1 milisegundo." }
        ],
        note: {
          label: "Advertencia — Cuidado con la intensidad",
          body_p1: "Un nivel de ",
          str: "intensidad muy alta sin movimiento del haz",
          body_p2: " puede quemar permanentemente el fósforo de la pantalla TRC. Siempre ajusta a un nivel medio y nunca dejes el punto estático brillante por más de unos segundos."
        }
      },
      funcionamiento: {
        badge: "DINÁMICA INTERNA",
        title_l1: "¿Cómo se dibuja",
        title_l2: "la onda?",
        desc: "El proceso paso a paso desde que entra la señal hasta que la ves en pantalla.",
        pasos: [
            { titulo: "Entrada de señal", cuerpo: "La señal entra por el canal vertical (Y) y es amplificada o atenuada según la escala elegida con el selector Volts/div." },
            { titulo: "Disparo (Trigger)", cuerpo: "El circuito Trigger detecta un nivel de voltaje específico en la señal (borde de subida o bajada) y da la orden de inicio al generador de barrido." },
            { titulo: "Barrido horizontal", cuerpo: "El generador horizontal (X) empieza a mover el haz de electrones de izquierda a derecha a velocidad constante, controlada por el selector Sec/div." },
            { titulo: "Trazado en pantalla", cuerpo: "La combinación del movimiento vertical (señal) y horizontal (tiempo), hace que el haz \"dibuje\" la onda. Al llegar al final, el retrazo apaga el haz y lo devuelve al inicio." }
        ]
      },
      como_usar: {
        badge: "TUTORIAL",
        title_l1: "Instrucciones",
        title_l2: "de uso",
        desc: "El método paso a paso para encender, calibrar y hacer tu primera medición.",
        calculator: { title: "Calculadora de Vpp", tooltip: "(Divisiones × Volts/div) × Sonda", div_v: "Div. verticales:", scale: "Volts/div:", probe: "Sonda:", result_vpp: "Voltaje Pico a Pico (Vpp)", result_v: "Voltios" },
        pasos: [
            { titulo: "Calibración inicial", body: "Conecta la sonda (en 10X) a la terminal COMP del equipo. Ajusta el tornillo compensador hasta ver una onda cuadrada perfecta (esquinas rectas).", tip: "Señal de calibración: ~2 V a 1 kHz" },
            { titulo: "Encendido y ajuste de pantalla", body: "Power ON. Ajusta la Intensidad a un nivel medio y centra el trazo horizontal con las perillas de Position.", tip: "Espera 30 s antes de cualquier medición" },
            { titulo: "Conexión al circuito", body: "Conecta la pinza de masa a la tierra del circuito y la punta de la sonda a la señal que deseas medir.", tip: "Nunca conectes la masa a un punto con tensión" },
            { titulo: "Ajuste del Trigger", body: "Coloca el Trigger en modo NORM o AUTO. Ajusta el Level al centro y el Slope en positivo (+) para empezar.", tip: "Si la imagen salta, gira lentamente el Level" },
            { titulo: "Escalado de la señal", body: "Modifica Volts/div y Sec/div hasta ver 2–3 ciclos completos que ocupen ~6 divisiones verticales.", tip: "Apunta siempre los valores de escala seleccionados" },
            { titulo: "Cálculo Vpp y frecuencia", body: "Cuenta las divisiones verticales del pico al valle y multiplica por Volts/div (×10 si usas sonda 10X). Para la frecuencia: mide el ancho de 1 ciclo en divisiones × Sec/div.", tip: "Usa la calculadora a continuación →" }
        ],
        tip_box: {
            title: "Tip de laboratorio",
            p1: "Si la imagen ",
            s1: "salta o se desplaza",
            p2: " sin control, ajusta ",
            em: "lentamente",
            p3: " la perilla ",
            s2: "Trigger Level",
            p4: " hasta que la onda se estabilice por completo."
        }
      },
      aplicaciones: {
        badge: "MÁS ALLÁ DEL AULA",
        title_l1: "Aplicaciones",
        title_l2: "prácticas",
        desc: "¿Para qué se usa un osciloscopio en el mundo real?",
        list: [
            { titulo: "Fuentes de alimentación", body: "Medición de voltajes pico a pico (Vpp) y frecuencia en fuentes conmutadas y lineales." },
            { titulo: "Circuitos de audio", body: "Análisis de ruido, distorsión armónica e interferencias en amplificadores y preamplificadores." },
            { titulo: "Microcontroladores", body: "Depuración de señales PWM, SPI, I²C y UART de plataformas como ESP32 o Arduino." },
            { titulo: "Diagnóstico automotriz", body: "Revisión de sensores del motor, señales de inyectores y comunicación CAN bus en vehículos modernos." },
            { titulo: "Carga de capacitores", body: "Observación de curvas de carga y descarga RC para cálculo experimental de constantes de tiempo τ." }
        ],
        cta: "El osciloscopio: donde la electricidad se vuelve visible."
      },
      quiz: {
        badge: "AUTOEVALUACIÓN",
        title_l1: "Pon a prueba",
        title_l2: "tu conocimiento",
        desc: "5 preguntas sobre el MO-1227 — ¿cuántas podés responder bien?",
        question_count_1: "Pregunta",
        question_count_2: "de",
        retry: "Reintentar",
        questions: [
            { pregunta: "¿Qué representa el eje X en la pantalla del osciloscopio?", opciones: ["Voltaje", "Corriente", "Tiempo", "Frecuencia"], explicacion: "El eje X siempre representa el tiempo (barrido). Cada división horizontal equivale a un intervalo de tiempo configurado con Sec/div." },
            { pregunta: "¿Cuál es la función principal del circuito Trigger?", opciones: ["Amplificar la señal de entrada", "Estabilizar la imagen en pantalla sincronizando el barrido", "Convertir la señal de AC a DC", "Medir la frecuencia automáticamente"], explicacion: "El Trigger sincroniza el inicio del barrido con un nivel de voltaje específico de la señal, logrando que la onda se vea estática y estable." },
            { pregunta: "El MO-1227 tiene un ancho de banda de:", opciones: ["5 MHz", "10 MHz", "20 MHz", "50 MHz"], explicacion: "El MO-1227 es un osciloscopio analógico de doble trazo con ancho de banda de 20 MHz, ideal para entornos educativos y diagnóstico de circuitos." },
            { pregunta: "¿Qué sucede si dejas el punto del haz estático con intensidad muy alta?", opciones: ["El fusible se quema", "El trigger se desactiva", "Se quema permanentemente el fósforo de la pantalla TRC", "El equipo se apaga automáticamente"], explicacion: "Un haz de electrones estático y brillante quema el fósforo de la pantalla TRC de forma permanente. Siempre mueve el barrido o reduce la intensidad." },
            { pregunta: "Para calcular el Vpp de una señal, ¿qué fórmula se usa con sonda 10X?", opciones: ["Divisiones × Volts/div", "Divisiones × Volts/div × 10", "Divisiones / Volts/div", "Volts/div / Divisiones × 10"], explicacion: "Con sonda 10X el factor de atenuación multiplica el resultado: Vpp = Divisiones verticales × Volts/div × 10." }
        ],
        results: [
            { msg: "Sigue estudiando — la señal aún no es estable." },
            { msg: "¡Bien! El haz está tomando forma." },
            { msg: "¡Muy bien! Casi dominás el osciloscopio." },
            { msg: "¡Perfecto! Señal completamente estabilizada." }
        ]
      }
    }
  },
  en: {
    translation: {
      header: {
        nav: [
          { href: "#intro", label: "Intro" },
          { href: "#historia", label: "History" },
          { href: "#definicion", label: "Definition" },
          { href: "#tipos", label: "Types" },
          { href: "#partes", label: "Parts" },
          { href: "#controles", label: "Controls" },
          { href: "#funcionamiento", label: "Dynamics" },
          { href: "#como-usar", label: "How to Use" },
          { href: "#aplicaciones", label: "Applications" }
        ],
        live: "LIVE",
        signal: "Active signal"
      },
      hero: {
        badge: "CH1 · ACTIVE SIGNAL",
        title_l1: "Visualize",
        title_l2: "electricity",
        sub: "A journey to the heart of the oscilloscope — from its origins to how to read every wave on screen.",
        cta_start: "Start",
        cta_history: "View history",
        wave_label: "CH1 · 1V/div · 1ms/div"
      },
      footer: {
        tagline: "Educational project on electronic instrumentation.",
        bottom_text: "OSC-SCOPE · Educational project ·",
        signal: "SIGNAL OK"
      },
      intro: {
        badge: "CH1 · ACTIVE SIGNAL",
        title_l1: "The ",
        title_accent: "Oscilloscope",
        sub: "What is it and why is it important?",
        quote_p1: "The oscilloscope is the ",
        quote_strong1: "\"eye\" of electronics",
        quote_p2: ". While a multimeter gives you a static value—like saying a car is going 60 km/h—an oscilloscope lets you see the complete ",
        quote_strong2: "\"movie\"",
        quote_p3: " of how electricity behaves.",
        body_p1: "It is an indispensable tool in laboratories, workshops, and research centers to ",
        body_span: "analyze how voltage levels change",
        body_p2: " over time, detect noise, measure frequencies, and debug complex circuits.",
        stats: [
          { value: "20 MHz", label: "Max frequency" },
          { value: "400V", label: "Category II" },
          { value: "2CH", label: "Simultaneous channels" }
        ]
      },
      historia: {
        badge: "HISTORY MODE",
        title_l1: "The origins of",
        title_l2: "wave tracing",
        desc: "From glass tubes to the modern lab — a timeline",
        milestone: "MILESTONE",
        events: [
          {
            year: "1897",
            title: "The Cathode Ray Tube (CRT)",
            body: "Physicist Karl Ferdinand Braun invented the first oscilloscope using a cathode ray tube, laying the foundation for electronic visualization.",
            icon: "⚡",
            color: "green"
          },
          {
            year: "1920s",
            title: "First Commercial Oscilloscopes",
            body: "The first commercial analog oscilloscopes emerge. Companies like Tektronix pioneered making the tool widely available for laboratories.",
            icon: "🏭",
            color: "cyan"
          },
          {
            year: "Classic Era",
            title: "The Golden Age of CRT",
            body: "Analog models like the MO-1227 represent the peak of CRT technology. Fundamental in technical education due to their real-time response and unmatched reliability.",
            icon: "🖥",
            color: "blue"
          }
        ]
      },
      definicion: {
        badge: "VISUALIZING THE INVISIBLE",
        title_l1: "Definition &",
        title_l2: "Axis System",
        desc_p1: "An oscilloscope is an electronic measuring instrument that graphically represents ",
        desc_s1: "voltage",
        desc_p2: " as a function of ",
        desc_s2: "time",
        desc_p3: ".",
        diagram: {
          window_label: "oscilloscope · CH1 · 1V/div · 1ms/div",
          time: "t",
          voltage: "V",
          signal: "signal ~",
          legend_x: "X Axis · time",
          legend_y: "Y Axis · voltage"
        },
        cards: [
          {
            axis: "X",
            color: "green",
            label: "Horizontal — Time Domain",
            description: "Represents time (the signal sweep). Each horizontal division corresponds to a time interval configurable in ms/div or µs/div.",
            delay: 0.1
          },
          {
            axis: "Y",
            color: "blue",
            label: "Vertical — Signal Amplitude",
            description: "Represents the signal's voltage or amplitude. Each vertical division equals a voltage value configurable in V/div or mV/div.",
            delay: 0.25
          }
        ],
        note: {
          label: "Technical Note — MO-1227",
          body_p1: "Laboratory models like the ",
          str1: "MO-1227",
          body_p2: " (Category II 400V) support safe measurements and can measure signals up to ",
          str2: "20 MHz",
          body_p3: ", making them ideal for educational environments and circuit diagnostics."
        }
      },
      tipos: {
        badge: "COMPARISON",
        title_l1: "Analog vs",
        title_l2: "Digital",
        desc: "Although the world is digital, analog visualization has unique advantages.",
        cards: [
            {
                id: "analogico",
                tipo: "Analog (CRT)",
                badge: "Classic Technology",
                pros: ["Real-time response with no digital delay", "Ideal for very fast and transient signals", "High-persistence fluorescent screen"],
                cons: ["No memory or screenshot capture", "Bulky and higher power consumption", "Fixed scale — requires manual adjustment"],
                ejemplo: "MO-1227 (dual trace, up to 20 MHz)"
            },
            {
                id: "digital",
                tipo: "Digital (DSO)",
                badge: "Modern Technology",
                pros: ["Signal capture and memory storage", "Automatic calculations (Vpp, frequency, RMS…)", "USB/Ethernet connectivity for data export"],
                cons: ["Possible aliasing on very fast signals", "More expensive than analog equivalent", "Latency due to ADC process"],
                ejemplo: "Rigol DS1054Z (50 MHz, 4 channels)"
            }
        ]
      },
      partes: {
        badge: "TECHNICAL INSPECTION",
        title_l1: "Main parts",
        title_l2: "of the equipment",
        desc: "Get to know the fundamental blocks of the MO-1227 model.",
        bloques: [
            { id: "trc", nombre: "Cathode Ray Tube (CRT)", descripcion: "6\" fluorescent screen that glows when electrons hit it. A 2 kV acceleration voltage pushes the beam, while deflection plates move it on the X and Y axes.", detalles: ["Acceleration voltage: 2 kV", "Ø 6\" fluorescent screen", "P31 Phosphor (green)"] },
            { id: "vertical", nombre: "Vertical System (Y Amp)", descripcion: "BNC inputs for CH1/CH2. It has an attenuator (Volts/div) that amplifies weak signals or reduces strong ones. AC, DC and GND modes.", detalles: ["Sensitivity: 5 mV/div – 5 V/div", "AC / DC / GND coupling", "50 Ω BNC inputs"] },
            { id: "horizontal", nombre: "Horizontal System (X Sweep)", descripcion: "Ramp generator (sawtooth) that moves the beam from left to right. The Sec/div control adjusts the speed. Allows X-Y mode (Lissajous Curves).", detalles: ["Range: 0.5 µs/div – 0.2 s/div", "X-Y mode available", "× 5 Magnification"] },
            { id: "trigger", nombre: "Trigger Circuit", descripcion: "Synchronizes the screen sweep with the input signal so the image remains static. Configures Source, Slope and Level.", detalles: ["Modes: AUTO / NORM / TV", "Slope: positive (+) or negative (−)", "Adjustable Level"] },
            { id: "accesorios", nombre: "Accessories (Probes)", descripcion: "Special cables with BNC connector, alligator clip for ground and probe tip. 1X / 10X switch to attenuate the signal. Compensation screw for calibration.", detalles: ["Attenuation factor: ×1 / ×10", "Input impedance: 10 MΩ", "Calibration with square wave"] }
        ]
      },
      controles: {
        badge: "FRONT PANEL",
        title_l1: "Controls",
        title_l2: "guide",
        desc: "Learn what each selector and knob does before measuring.",
        list: [
            { nombre: "Power", badge: "POWER", desc: "Turns on the equipment and activates the CRT. Wait 30s for the CRT to stabilize before measuring!" },
            { nombre: "Intensity / Focus", badge: "SCREEN", desc: "Adjust trace brightness and sharpness. High intensity without sweeping can burn the screen's phosphor." },
            { nombre: "Trace Rotation", badge: "ALIGNMENT", desc: "Aligns the horizontal line with the grid if the trace appears tilted. Adjusted with a screwdriver." },
            { nombre: "Position ↕ ↔", badge: "POSITION", desc: "Independent knobs to move the graph vertically or horizontally on the screen." },
            { nombre: "Volts/Div", badge: "VERTICAL", desc: "Changes the amplitude scale. Example: 1 V/div = each screen square represents 1 volt." },
            { nombre: "Sec/Div", badge: "HORIZONTAL", desc: "Changes the time scale. Example: 1 ms/div = each square represents 1 millisecond." }
        ],
        note: {
          label: "Warning — Beware of intensity",
          body_p1: "A level of ",
          str: "very high intensity without beam movement",
          body_p2: " can permanently burn the CRT screen phosphor. Always adjust to a medium level and never leave the bright static spot for more than a few seconds."
        }
      },
      funcionamiento: {
        badge: "INTERNAL DYNAMICS",
        title_l1: "How is the",
        title_l2: "wave drawn?",
        desc: "The step-by-step process from when the signal enters until you see it on screen.",
        pasos: [
            { titulo: "Signal input", cuerpo: "The signal enters through the vertical channel (Y) and is amplified or attenuated based on the chosen scale with the Volts/div selector." },
            { titulo: "Trigger", cuerpo: "The Trigger circuit detects a specific voltage level in the signal (rising or falling edge) and gives the start command to the sweep generator." },
            { titulo: "Horizontal sweep", cuerpo: "The horizontal generator (X) begins to move the electron beam from left to right at constant speed, controlled by the Sec/div selector." },
            { titulo: "Tracing on screen", cuerpo: "The combination of vertical (signal) and horizontal (time) movement makes the beam \"draw\" the wave. At the end, the retrace turns off the beam and returns it to the start." }
        ]
      },
      como_usar: {
        badge: "TUTORIAL",
        title_l1: "Instructions",
        title_l2: "for use",
        desc: "The step-by-step method to turn on, calibrate, and make your first measurement.",
        calculator: { title: "Vpp Calculator", tooltip: "(Divisions × Volts/div) × Probe", div_v: "Vertical Div.:", scale: "Volts/div:", probe: "Probe:", result_vpp: "Peak-to-Peak Volts (Vpp)", result_v: "Volts" },
        pasos: [
            { titulo: "Initial calibration", body: "Connect the probe (on 10X) to the equipment's COMP terminal. Adjust the compensation screw until you see a perfect square wave (straight corners).", tip: "Calibration signal: ~2 V at 1 kHz" },
            { titulo: "Power on & screen tweak", body: "Power ON. Adjust Intensity to a medium level and center the horizontal trace with the Position knobs.", tip: "Wait 30s before measuring" },
            { titulo: "Circuit connection", body: "Connect the ground clip to the circuit ground and the probe tip to the signal you want to measure.", tip: "Never connect ground to a live point" },
            { titulo: "Trigger setup", body: "Set Trigger to NORM or AUTO. Set Level to center and Slope to positive (+) to begin.", tip: "If image jumps, turn Level slowly" },
            { titulo: "Signal scaling", body: "Adjust Volts/div and Sec/div until you see 2–3 full cycles taking up ~6 vertical divisions.", tip: "Always note down selected scale values" },
            { titulo: "Vpp and frequency math", body: "Count vertical divisions from peak to valley and multiply by Volts/div (×10 if using 10X probe). Frequency: measure 1 cycle width in div. × Sec/div.", tip: "Use the calculator below →" }
        ],
        tip_box: {
            title: "Laboratory tip",
            p1: "If the image ",
            s1: "jumps or scrolls",
            p2: " without control, ",
            em: "slowly",
            p3: " turn the ",
            s2: "Trigger Level",
            p4: " knob until the wave completely stabilizes."
        }
      },
      aplicaciones: {
        badge: "BEYOND CLASSROOM",
        title_l1: "Practical",
        title_l2: "applications",
        desc: "What is an oscilloscope used for in the real world?",
        list: [
            { titulo: "Power Supplies", body: "Measuring peak-to-peak voltage (Vpp) and frequency in switching and linear power supplies." },
            { titulo: "Audio Circuits", body: "Analysis of noise, harmonic distortion and interference in amplifiers and preamplifiers." },
            { titulo: "Microcontrollers", body: "Debugging PWM, SPI, I²C and UART signals from platforms like ESP32 or Arduino." },
            { titulo: "Automotive Diagnostics", body: "Checking engine sensors, injector signals and CAN bus communication in modern vehicles." },
            { titulo: "Capacitor Charging", body: "Observation of RC charge and discharge curves for experimental calculation of time constants τ." }
        ],
        cta: "The oscilloscope: where electricity becomes visible."
      },
      quiz: {
        badge: "SELF EVALUATION",
        title_l1: "Test your",
        title_l2: "knowledge",
        desc: "5 questions about the MO-1227 — how many can you get right?",
        question_count_1: "Question",
        question_count_2: "of",
        retry: "Retry",
        questions: [
            { pregunta: "What does the X axis represent on the oscilloscope screen?", opciones: ["Voltage", "Current", "Time", "Frequency"], explicacion: "The X axis always represents time (sweep). Each horizontal division equals a time interval set with Sec/div." },
            { pregunta: "What is the main function of the Trigger circuit?", opciones: ["Amplify the input signal", "Stabilize image on screen by syncing the sweep", "Convert AC signal to DC", "Measure frequency automatically"], explicacion: "The Trigger syncs the start of the sweep with a specific voltage level of the signal, making the wave look static." },
            { pregunta: "The MO-1227 has a bandwidth of:", opciones: ["5 MHz", "10 MHz", "20 MHz", "50 MHz"], explicacion: "The MO-1227 is a dual-trace analog oscilloscope with a 20 MHz bandwidth, ideal for education." },
            { pregunta: "What happens if you leave the beam spot static with very high intensity?", opciones: ["The fuse blows", "The trigger deactivates", "The CRT screen's phosphor permanently burns", "The equipment auto shuts down"], explicacion: "A static and bright electron beam permanently burns the CRT screen phosphor. Always sweep or lower intensity." },
            { pregunta: "To calculate the Vpp of a signal, what formula is used with a 10X probe?", opciones: ["Divisions × Volts/div", "Divisions × Volts/div × 10", "Divisions / Volts/div", "Volts/div / Divisions × 10"], explicacion: "With a 10X probe the attenuation factor multiplies the result: Vpp = Vertical divisions × Volts/div × 10." }
        ],
        results: [
            { msg: "Keep studying — the signal is not stable yet." },
            { msg: "Good! The beam is taking shape." },
            { msg: "Very good! You almost master the oscilloscope." },
            { msg: "Perfect! Signal completely stabilized." }
        ]
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
