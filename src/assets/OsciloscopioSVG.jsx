/* OsciloscopioSVG.jsx
   Osciloscopio MO-1227 — Rediseño ultra-realista
   Basado en la imagen real del MO-1227 de Minipa.
   Color chassis: beige/gris claro real, pantalla verde fósforo.
   ViewBox: 0 0 960 600
*/

export default function OsciloscopioSVG({ activeId, onHover, onLeave, onClick }) {
    const isActive = (id) => activeId === id;

    const glowMap = {
        trc: { stroke: "#00e676", fill: "rgba(0,230,118,0.12)" },
        vertical: { stroke: "#29b6f6", fill: "rgba(41,182,246,0.12)" },
        horizontal: { stroke: "#ffca28", fill: "rgba(255,202,40,0.12)" },
        trigger: { stroke: "#ce93d8", fill: "rgba(206,147,216,0.12)" },
        accesorios: { stroke: "#ef9a9a", fill: "rgba(239,154,154,0.12)" },
    };

    const hl = (id) => isActive(id)
        ? { fill: glowMap[id].fill, stroke: glowMap[id].stroke, strokeWidth: 2.5, opacity: 1 }
        : { fill: "transparent", stroke: "transparent", strokeWidth: 0, opacity: 0 };

    const hoverProps = (id) => ({
        onMouseEnter: () => onHover?.(id),
        onMouseLeave: () => onLeave?.(),
        onClick: () => onClick?.(id),
        style: { cursor: "pointer" },
    });

    // Paleta realista del MO-1227
    const C = {
        chassis: "#d8d6d0",   // beige claro del cuerpo real
        chassisDark: "#b8b6b0",   // beige oscuro / sombras
        chassisHi: "#eceae4",   // highlight superior
        panel: "#cccac4",   // panel frontal
        panelDark: "#aeacA6",   // recesos / surcos
        screenBg: "#0a1a0a",   // fondo pantalla apagado
        screenGlow: "#1a3a1a",   // tinte verde de fósforo
        grid: "#1e4a1e",   // cuadrícula verde tenue
        gridBright: "#2a6a2a",   // ejes centrales
        wave: "#33ff66",   // onda
        waveGlow: "#00cc44",
        knobBody: "#9a9890",   // perilla gris
        knobRim: "#7a7870",   // borde perilla
        knobHi: "#bcbab4",   // brillo perilla
        knobTick: "#3a3835",   // marca perilla
        btnOff: "#bcbab4",   // botón normal
        btnOn: "#e8e6e0",   // botón presionado
        btnRim: "#8a8880",
        labelDark: "#3a3835",   // texto oscuro sobre panel claro
        labelBlue: "#1565c0",   // texto azul (etiquetas reales)
        labelRed: "#b71c1c",   // rojo (POWER, CAL)
        labelGreen: "#1b5e20",
        ledGreen: "#76ff03",
        ledRed: "#ff1744",
        bnc: "#5a5855",   // BNC connector body
        bncInner: "#1a1815",
        screenFrame: "#1e2a1e",
        metalDark: "#3a3835",
        metal: "#6a6865",
    };

    // Helper: perilla realista con gradiente y marca
    const Knob = ({ cx, cy, r, angle = -90, color = C.knobBody, label = "", labelDy = 20, fontSize = 7 }) => {
        const rad = (angle * Math.PI) / 180;
        const tx = cx + (r - 5) * Math.cos(rad);
        const ty = cy + (r - 5) * Math.sin(rad);
        const id = `kg-${cx}-${cy}`;
        return (
            <g>
                <defs>
                    <radialGradient id={id} cx="35%" cy="30%" r="65%">
                        <stop offset="0%" stopColor={C.knobHi} />
                        <stop offset="60%" stopColor={color} />
                        <stop offset="100%" stopColor={C.knobRim} />
                    </radialGradient>
                </defs>
                {/* sombra */}
                <circle cx={cx + 1.5} cy={cy + 2} r={r + 1} fill="rgba(0,0,0,0.35)" />
                {/* cuerpo */}
                <circle cx={cx} cy={cy} r={r} fill={`url(#${id})`} stroke={C.knobRim} strokeWidth="1" />
                {/* aro interior */}
                <circle cx={cx} cy={cy} r={r * 0.72} fill="none" stroke={C.knobRim} strokeWidth="0.6" opacity="0.5" />
                {/* marca indicadora */}
                <line x1={cx} y1={cy} x2={tx} y2={ty} stroke={C.knobTick} strokeWidth="2" strokeLinecap="round" />
                <circle cx={tx} cy={ty} r="1.5" fill={C.knobTick} />
                {label && (
                    <text x={cx} y={cy + r + labelDy} textAnchor="middle"
                        fill={C.labelDark} fontSize={fontSize} fontFamily="'Arial Narrow', Arial, sans-serif"
                        fontWeight="bold" letterSpacing="0.5">
                        {label}
                    </text>
                )}
            </g>
        );
    };

    // Helper: conector BNC realista
    const BNC = ({ cx, cy, r = 13, label = "", labelDy = 18 }) => (
        <g>
            <circle cx={cx + 1} cy={cy + 1.5} r={r + 2} fill="rgba(0,0,0,0.3)" />
            <circle cx={cx} cy={cy} r={r + 2} fill={C.metal} stroke={C.metalDark} strokeWidth="1" />
            <circle cx={cx} cy={cy} r={r} fill={C.bnc} stroke={C.metalDark} strokeWidth="0.8" />
            <circle cx={cx} cy={cy} r={r * 0.5} fill={C.bncInner} />
            <circle cx={cx} cy={cy} r={r * 0.2} fill={C.metal} />
            {/* ranuras BNC */}
            {[0, 72, 144, 216, 288].map((a, i) => {
                const rad = (a * Math.PI) / 180;
                return <line key={i}
                    x1={cx + (r * 0.55) * Math.cos(rad)} y1={cy + (r * 0.55) * Math.sin(rad)}
                    x2={cx + (r * 0.82) * Math.cos(rad)} y2={cy + (r * 0.82) * Math.sin(rad)}
                    stroke={C.metalDark} strokeWidth="1" />;
            })}
            {label && (
                <text x={cx} y={cy + r + labelDy} textAnchor="middle"
                    fill={C.labelDark} fontSize="6.5" fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">
                    {label}
                </text>
            )}
        </g>
    );

    // Helper: botón rectangular
    const Btn = ({ x, y, w = 38, h = 14, label = "", active = false, color = C.labelDark }) => (
        <g>
            <rect x={x + 1} y={y + 1.5} width={w} height={h} rx="2" fill="rgba(0,0,0,0.2)" />
            <rect x={x} y={y} width={w} height={h} rx="2"
                fill={active ? C.btnOn : C.btnOff} stroke={C.btnRim} strokeWidth="0.8" />
            <rect x={x} y={y} width={w} height={h * 0.45} rx="2"
                fill="rgba(255,255,255,0.25)" />
            <text x={x + w / 2} y={y + h * 0.68} textAnchor="middle"
                fill={color} fontSize="5.8" fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">
                {label}
            </text>
        </g>
    );

    // Helper: LED indicador
    const LED = ({ cx, cy, r = 4, color = C.ledGreen, on = true }) => (
        <g>
            <circle cx={cx} cy={cy} r={r + 1} fill="rgba(0,0,0,0.4)" />
            <circle cx={cx} cy={cy} r={r} fill={on ? color : "#333"} />
            {on && <circle cx={cx - r * 0.3} cy={cy - r * 0.3} r={r * 0.35} fill="rgba(255,255,255,0.6)" />}
        </g>
    );

    // Helper: sección con título grabado
    const SectionLabel = ({ x, y, w, label, color = C.labelBlue }) => (
        <g>
            <line x1={x} y1={y + 8} x2={x + w} y2={y + 8} stroke={color} strokeWidth="0.6" opacity="0.5" />
            <text x={x + w / 2} y={y + 6} textAnchor="middle"
                fill={color} fontSize="7" fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold" letterSpacing="1.5">
                {label}
            </text>
        </g>
    );

    return (
        <svg
            viewBox="0 0 960 600"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Osciloscopio MO-1227 Minipa — Vista frontal realista"
            style={{ filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.5))" }}
        >
            <defs>
                {/* Chassis gradient */}
                <linearGradient id="chassisGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={C.chassisHi} />
                    <stop offset="40%" stopColor={C.chassis} />
                    <stop offset="100%" stopColor={C.chassisDark} />
                </linearGradient>

                {/* Panel frontal */}
                <linearGradient id="panelGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#d0cec8" />
                    <stop offset="100%" stopColor="#b8b6b0" />
                </linearGradient>

                {/* Screen phosphor gradient */}
                <radialGradient id="screenGrad" cx="50%" cy="50%" r="65%">
                    <stop offset="0%" stopColor="#0d200d" />
                    <stop offset="70%" stopColor="#081508" />
                    <stop offset="100%" stopColor="#030a03" />
                </radialGradient>

                {/* Screen glare */}
                <radialGradient id="screenGlare" cx="20%" cy="18%" r="60%">
                    <stop offset="0%" stopColor="rgba(150,220,150,0.10)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                </radialGradient>

                {/* Knob gradients are generated inline per knob */}

                {/* Wave glow filter */}
                <filter id="waveGlow">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>

                {/* Recessed groove */}
                <filter id="groove">
                    <feDropShadow dx="0" dy="1" stdDeviation="0.5" floodColor="rgba(0,0,0,0.4)" />
                </filter>
            </defs>

            {/* ══════════════════════════════════════════════
          CHASSIS EXTERIOR
      ══════════════════════════════════════════════ */}
            {/* Sombra del chassis */}
            <rect x="18" y="28" width="924" height="554" rx="18" fill="rgba(0,0,0,0.5)" />
            {/* Cuerpo principal */}
            <rect x="14" y="20" width="924" height="554" rx="16" fill="url(#chassisGrad)"
                stroke="#a8a6a0" strokeWidth="1.5" />

            {/* Ranuras de ventilación inferiores */}
            {Array.from({ length: 18 }, (_, i) => (
                <rect key={i} x={300 + i * 22} y="548" width="14" height="6" rx="2"
                    fill={C.chassisDark} stroke={C.panelDark} strokeWidth="0.5" />
            ))}

            {/* Patas del frente (soporte inclinado) */}
            <rect x="80" y="555" width="12" height="18" rx="3" fill={C.metalDark} />
            <rect x="868" y="555" width="12" height="18" rx="3" fill={C.metalDark} />

            {/* ══════════════════════════════════════════════
          PANEL FRONTAL (área principal)
      ══════════════════════════════════════════════ */}
            <rect x="30" y="32" width="900" height="520" rx="10" fill="url(#panelGrad)"
                stroke="#a0a09a" strokeWidth="1" />

            {/* Marca / Título */}
            <text x="96" y="56" fill={C.labelDark} fontSize="7.5" fontFamily="Arial, sans-serif" opacity="0.7">Minipa</text>
            <text x="190" y="56" fill={C.labelDark} fontSize="8" fontFamily="Arial, sans-serif" fontStyle="italic">Oscilloscope</text>
            <text x="560" y="56" fill={C.labelDark} fontSize="9" fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold" letterSpacing="1">MO-1227</text>
            <text x="650" y="56" fill={C.labelRed} fontSize="7" fontFamily="Arial, sans-serif" fontWeight="bold">20MHz</text>

            {/* ══════════════════════════════════════════════
          ZONA TRC — PANTALLA  (x30..400)
      ══════════════════════════════════════════════ */}
            <g id="svg-trc" {...hoverProps("trc")}>

                {/* Marco externo de pantalla (plástico negro) */}
                <rect x="42" y="66" width="358" height="408" rx="8"
                    fill={C.screenFrame} stroke="#101810" strokeWidth="2" />

                {/* Bisel interior grabado */}
                <rect x="50" y="74" width="342" height="392" rx="5"
                    fill="#050f05" stroke="#0d180d" strokeWidth="1" />

                {/* Pantalla fósforo */}
                <rect x="54" y="78" width="334" height="384" rx="3" fill="url(#screenGrad)" />

                {/* Cuadrícula 10×8 divisiones */}
                {/* Líneas verticales */}
                {Array.from({ length: 11 }, (_, i) => (
                    <line key={`v${i}`}
                        x1={54 + i * 33.4} y1="78" x2={54 + i * 33.4} y2="462"
                        stroke={C.grid} strokeWidth={i === 0 || i === 10 ? "0.8" : "0.5"}
                        strokeDasharray={i === 5 ? "none" : "2 6"} />
                ))}
                {/* Líneas horizontales */}
                {Array.from({ length: 9 }, (_, i) => (
                    <line key={`h${i}`}
                        x1="54" y1={78 + i * 48} x2="388" y2={78 + i * 48}
                        stroke={C.grid} strokeWidth={i === 0 || i === 8 ? "0.8" : "0.5"}
                        strokeDasharray={i === 4 ? "none" : "2 6"} />
                ))}

                {/* Ejes centrales más brillantes */}
                <line x1="54" y1="270" x2="388" y2="270" stroke={C.gridBright} strokeWidth="0.8" />
                <line x1="221" y1="78" x2="221" y2="462" stroke={C.gridBright} strokeWidth="0.8" />

                {/* Marcas de 1/5 en ejes centrales */}
                {Array.from({ length: 51 }, (_, i) => (
                    <line key={`xm${i}`}
                        x1={54 + i * 6.68} y1="268" x2={54 + i * 6.68} y2="272"
                        stroke={C.gridBright} strokeWidth="0.5" />
                ))}
                {Array.from({ length: 41 }, (_, i) => (
                    <line key={`ym${i}`}
                        x1="219" y1={78 + i * 9.6} x2="223" y2={78 + i * 9.6}
                        stroke={C.gridBright} strokeWidth="0.5" />
                ))}

                {/* Onda senoidal CH1 (amarillo) */}
                <path
                    d="M54 270 C70 232,86 208,103 270 S136 308,153 270 S186 232,203 270 S236 308,253 270 S286 232,303 270 S336 308,353 270 S375 247,388 260"
                    fill="none" stroke="#ffeb3b" strokeWidth="1.8" strokeLinecap="round"
                    filter="url(#waveGlow)" />

                {/* Onda CH2 (cian) — ligeramente desfasada */}
                <path
                    d="M54 290 C70 252,86 228,103 290 S136 328,153 290 S186 252,203 290 S236 328,253 290 S286 252,303 290 S336 328,353 290 S375 267,388 280"
                    fill="none" stroke="#00e5ff" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />

                {/* Cursor horizontal (línea de medición) */}
                <line x1="54" y1="222" x2="388" y2="222" stroke="#ff9800" strokeWidth="0.7"
                    strokeDasharray="6 4" opacity="0.6" />

                {/* Glare pantalla */}
                <rect x="54" y="78" width="334" height="384" rx="3" fill="url(#screenGlare)" />

                {/* Overlay interactivo */}
                <rect x="42" y="66" width="358" height="408" rx="8"
                    fill={hl("trc").fill} stroke={hl("trc").stroke}
                    strokeWidth={hl("trc").strokeWidth}
                    style={{ transition: "all 0.3s ease", pointerEvents: "none" }} />

                {/* Etiqueta CH1/CH2 */}
                <text x="60" y="456" fill="#ffeb3b" fontSize="7.5" fontFamily="'Courier New', monospace" opacity="0.9">CH1  1V/div</text>
                <text x="210" y="456" fill="#00e5ff" fontSize="7.5" fontFamily="'Courier New', monospace" opacity="0.7">CH2  0.5V/div</text>
                <text x="310" y="456" fill="#ff9800" fontSize="7.5" fontFamily="'Courier New', monospace" opacity="0.7">1ms/div</text>

                {/* Label de sección */}
                <text x="221" y="495" textAnchor="middle"
                    fill={isActive("trc") ? "#00e676" : C.panelDark}
                    fontSize="8.5" fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold"
                    style={{ transition: "fill 0.3s" }}>
                    TRC — PANTALLA
                </text>
            </g>

            {/* ══════════════════════════════════════════════
          ZONA VERTICAL — CH1/CH2  (x408..590 | y66..390)
      ══════════════════════════════════════════════ */}
            <g id="svg-vertical" {...hoverProps("vertical")}>
                {/* Fondo sección */}
                <rect x="408" y="66" width="188" height="332" rx="5"
                    fill="rgba(0,0,0,0.04)" stroke={C.panelDark} strokeWidth="0.8" />

                <SectionLabel x="415" y="70" w="174" label="VERTICAL" color={C.labelBlue} />

                {/* POSICIÓN CH1 */}
                <text x="442" y="95" textAnchor="middle" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">POSITION</text>
                <Knob cx={442} cy={120} r={18} angle={-60} label="CH1" labelDy={16} fontSize={6.5} />

                {/* POSICIÓN CH2 */}
                <text x="550" y="95" textAnchor="middle" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">POSITION</text>
                <Knob cx={550} cy={120} r={18} angle={-60} label="CH2" labelDy={16} fontSize={6.5} />

                {/* MODE buttons */}
                <text x="496" y="165" textAnchor="middle" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">MODE</text>
                {[["CHOP", false], ["CH1", true], ["CH2", false], ["DUAL", false], ["ADD", false]].map(([lbl, act], i) => (
                    <Btn key={lbl} x={412 + i * 38} y={168} w={34} h={14} label={lbl} active={act} />
                ))}

                {/* VOLTS/DIV CH1 — perilla grande */}
                <text x="448" y="210" textAnchor="middle" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">VOLTS/DIV</text>
                <Knob cx={448} cy={248} r={30} angle={-30} label="CH1" labelDy={22} fontSize={7} />

                {/* VOLTS/DIV CH2 — perilla mediana */}
                <text x="548" y="210" textAnchor="middle" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">VOLTS/DIV</text>
                <Knob cx={548} cy={248} r={26} angle={-30} label="CH2" labelDy={20} fontSize={7} />

                {/* VAR trimmers */}
                <text x="438" y="292" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif">VAR.</text>
                <circle cx={430} cy={305} r={8} fill={C.knobBody} stroke={C.knobRim} strokeWidth="1" />
                <text x="534" y="292" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif">VAR.</text>
                <circle cx={526} cy={305} r={8} fill={C.knobBody} stroke={C.knobRim} strokeWidth="1" />

                {/* AC / DC / GND switches CH1 */}
                <text x="414" y="325" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">CH1 ▶</text>
                {["AC", "⏚", "GND"].map((lbl, i) => (
                    <Btn key={`c1${i}`} x={412 + i * 28} y={328} w={24} h={12} label={lbl} active={i === 0} />
                ))}

                {/* AC / DC / GND switches CH2 */}
                <text x="498" y="325" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">CH2 ▶</text>
                {["AC", "⏚", "GND"].map((lbl, i) => (
                    <Btn key={`c2${i}`} x={498 + i * 28} y={328} w={24} h={12} label={lbl} active={i === 0} />
                ))}

                {/* Overlay */}
                <rect x="408" y="66" width="188" height="332" rx="5"
                    fill={hl("vertical").fill} stroke={hl("vertical").stroke}
                    strokeWidth={hl("vertical").strokeWidth}
                    style={{ transition: "all 0.3s ease", pointerEvents: "none" }} />
                <text x="502" y="413" textAnchor="middle"
                    fill={isActive("vertical") ? "#29b6f6" : C.panelDark}
                    fontSize="8" fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold"
                    style={{ transition: "fill 0.3s" }}>
                    VERTICAL
                </text>
            </g>

            {/* ══════════════════════════════════════════════
          ZONA HORIZONTAL  (x604..760 | y66..220)
      ══════════════════════════════════════════════ */}
            <g id="svg-horizontal" {...hoverProps("horizontal")}>
                <rect x="604" y="66" width="164" height="200" rx="5"
                    fill="rgba(0,0,0,0.04)" stroke={C.panelDark} strokeWidth="0.8" />

                <SectionLabel x="610" y="70" w="152" label="HORIZONTAL" color={C.labelBlue} />

                {/* POSITION */}
                <text x="644" y="95" textAnchor="middle" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">POSITION</text>
                <Knob cx={644} cy={120} r={18} angle={20} label="" />

                {/* TIME/DIV */}
                <text x="730" y="95" textAnchor="middle" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">TIME/DIV</text>
                <Knob cx={730} cy={130} r={32} angle={-60} label="TIME/DIV" labelDy={26} fontSize={7} />

                {/* SWP.VAR */}
                <text x="620" y="180" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif">SWP.VAR.</text>
                <circle cx={614} cy={195} r={9} fill={C.knobBody} stroke={C.knobRim} strokeWidth="1" />

                {/* Overlay */}
                <rect x="604" y="66" width="164" height="200" rx="5"
                    fill={hl("horizontal").fill} stroke={hl("horizontal").stroke}
                    strokeWidth={hl("horizontal").strokeWidth}
                    style={{ transition: "all 0.3s ease", pointerEvents: "none" }} />
                <text x="686" y="280" textAnchor="middle"
                    fill={isActive("horizontal") ? "#ffca28" : C.panelDark}
                    fontSize="8" fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold"
                    style={{ transition: "fill 0.3s" }}>
                    HORIZONTAL
                </text>
            </g>

            {/* ══════════════════════════════════════════════
          ZONA TRIGGER  (x604..760 | y230..398)
      ══════════════════════════════════════════════ */}
            <g id="svg-trigger" {...hoverProps("trigger")}>
                <rect x="604" y="230" width="164" height="168" rx="5"
                    fill="rgba(0,0,0,0.04)" stroke={C.panelDark} strokeWidth="0.8" />

                <SectionLabel x="610" y="234" w="152" label="TRIGGER" color={C.labelBlue} />

                {/* HOLD OFF */}
                <text x="634" y="258" textAnchor="middle" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">HOLD/OFF</text>
                <Knob cx={634} cy={280} r={18} angle={45} />

                {/* LEVEL */}
                <text x="732" y="258" textAnchor="middle" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">LEVEL</text>
                <Knob cx={732} cy={280} r={20} angle={10} />

                {/* AUTO / NORM / TV / SINGLE buttons */}
                {[["AUTO", true], ["NORM", false], ["TV", false], ["SGL", false]].map(([lbl, act], i) => (
                    <Btn key={lbl} x={608 + i * 40} y={316} w={36} h={13} label={lbl} active={act} />
                ))}

                {/* SOURCE: CH1/CH2/EXT/LINE */}
                <text x="614" y="344" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">SOURCE</text>
                {[["CH1", true], ["CH2", false], ["EXT", false], ["LINE", false]].map(([lbl, act], i) => (
                    <Btn key={lbl} x={608 + i * 40} y={348} w={36} h={12} label={lbl} active={act} />
                ))}

                {/* SLOPE + / - */}
                <text x="614" y="374" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">SLOPE</text>
                {[["▲+", true], ["▼-", false]].map(([lbl, act], i) => (
                    <Btn key={lbl} x={648 + i * 58} y={377} w={50} h={12} label={lbl} active={act} />
                ))}

                {/* Overlay */}
                <rect x="604" y="230" width="164" height="168" rx="5"
                    fill={hl("trigger").fill} stroke={hl("trigger").stroke}
                    strokeWidth={hl("trigger").strokeWidth}
                    style={{ transition: "all 0.3s ease", pointerEvents: "none" }} />
                <text x="686" y="412" textAnchor="middle"
                    fill={isActive("trigger") ? "#ce93d8" : C.panelDark}
                    fontSize="8" fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold"
                    style={{ transition: "fill 0.3s" }}>
                    TRIGGER
                </text>
            </g>

            {/* ══════════════════════════════════════════════
          ZONA CURSOR / READOUT  (x768..880 | y66..230)
      ══════════════════════════════════════════════ */}
            <g>
                <rect x="772" y="66" width="148" height="198" rx="5"
                    fill="rgba(0,0,0,0.04)" stroke={C.panelDark} strokeWidth="0.8" />
                <SectionLabel x="778" y="70" w="136" label="CURSOR" color={C.labelBlue} />

                {/* READOUT button */}
                <Btn x={780} y={88} w={60} h={14} label="READOUT ON/OFF" active />
                {/* TRACK / CURSOR */}
                <Btn x={850} y={88} w={64} h={14} label="TRACK▶CURSOR" />

                {/* ΔV / ΔT / 1/ΔT */}
                {[["ΔV", true], ["ΔT", false], ["1/ΔT", false]].map(([lbl, act], i) => (
                    <Btn key={lbl} x={780 + i * 47} y={110} w={42} h={13} label={lbl} active={act} />
                ))}

                {/* Cursor 1 / 2 perillas */}
                <text x="805" y="140" textAnchor="middle" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">CURSOR 1</text>
                <Knob cx={805} cy={165} r={20} angle={-80} />

                <text x="878" y="140" textAnchor="middle" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">CURSOR 2</text>
                <Knob cx={878} cy={165} r={20} angle={40} />

                {/* Readout display mini */}
                <rect x="780" y="194" width="132" height="24" rx="3"
                    fill="#0d1a0d" stroke="#1a3a1a" strokeWidth="1" />
                <text x="786" y="210" fill="#33ff66" fontSize="8" fontFamily="'Courier New', monospace">ΔV: 1.24V  ΔT: 2.0ms</text>
            </g>

            {/* ══════════════════════════════════════════════
          ZONA ACCESORIOS / POWER / BNC  (x408..920 | y415..540)
      ══════════════════════════════════════════════ */}
            <g id="svg-accesorios" {...hoverProps("accesorios")}>
                <rect x="408" y="415" width="504" height="128" rx="5"
                    fill="rgba(0,0,0,0.04)" stroke={C.panelDark} strokeWidth="0.8" />

                <SectionLabel x="414" y="419" w="492" label="ENTRADAS / CALIBRACIÓN / CONTROL" color={C.labelBlue} />

                {/* ── POWER ── */}
                <text x="434" y="445" textAnchor="middle" fill={C.labelRed} fontSize="6"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">POWER</text>
                {/* Botón power rojo */}
                <circle cx={434} cy={468} r={18}
                    fill="#c62828" stroke="#7f0000" strokeWidth="1.5" />
                <circle cx={434} cy={468} r={13}
                    fill="#e53935" stroke="#b71c1c" strokeWidth="1" />
                <circle cx={430} cy={464} r={5}
                    fill="rgba(255,255,255,0.3)" />
                <text x="434" y="472" textAnchor="middle"
                    fill="white" fontSize="9" fontFamily="Arial, sans-serif" fontWeight="bold">⏻</text>

                {/* LED POWER */}
                <LED cx={434} cy={492} r={4} color={C.ledGreen} />
                <text x="434" y="504" textAnchor="middle" fill={C.labelDark} fontSize="5"
                    fontFamily="'Arial Narrow', Arial, sans-serif">PWR</text>

                {/* ── INTENSITY / FOCUS / TRACE ROT ── */}
                <text x="480" y="440" textAnchor="middle" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">INTEN.</text>
                <Knob cx={480} cy={463} r={16} angle={-90} />

                <text x="526" y="440" textAnchor="middle" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">FOCUS</text>
                <Knob cx={526} cy={463} r={16} angle={-90} />

                <text x="572" y="440" textAnchor="middle" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">TR.ROT.</text>
                <rect x="556" y="451" width="32" height="22" rx="3"
                    fill={C.btnOff} stroke={C.btnRim} strokeWidth="0.8" />
                <line x1="562" y1="462" x2="582" y2="462" stroke={C.labelDark} strokeWidth="1" />

                {/* ── CAL output ── */}
                <text x="630" y="440" textAnchor="middle" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">CAL</text>
                <text x="630" y="450" textAnchor="middle" fill={C.labelDark} fontSize="4.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif">2Vp-p / 1kHz</text>
                <BNC cx={630} cy={475} r={11} label="" />

                {/* ── CH1 INPUT ── */}
                <text x="690" y="440" textAnchor="middle" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">CH1 INPUT(X)</text>
                <text x="690" y="450" textAnchor="middle" fill={C.labelDark} fontSize="4.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif">1MΩ / 20pF</text>
                <BNC cx={690} cy={476} r={13} label="" />
                {/* Triángulo de advertencia */}
                <polygon points="682,492 698,492 690,503" fill="#ffb300" stroke="#e65100" strokeWidth="0.6" />
                <text x="690" y="499" textAnchor="middle" fill={C.metalDark} fontSize="4" fontFamily="Arial, sans-serif" fontWeight="bold">!</text>
                <text x="690" y="510" textAnchor="middle" fill={C.labelDark} fontSize="4.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif">400Vpk MAX</text>

                {/* ── CH2 INPUT ── */}
                <text x="766" y="440" textAnchor="middle" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">CH2 INPUT(Y)</text>
                <text x="766" y="450" textAnchor="middle" fill={C.labelDark} fontSize="4.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif">1MΩ / 20pF</text>
                <BNC cx={766} cy={476} r={13} label="" />
                <polygon points="758,492 774,492 766,503" fill="#ffb300" stroke="#e65100" strokeWidth="0.6" />
                <text x="766" y="499" textAnchor="middle" fill={C.metalDark} fontSize="4" fontFamily="Arial, sans-serif" fontWeight="bold">!</text>
                <text x="766" y="510" textAnchor="middle" fill={C.labelDark} fontSize="4.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif">400Vpk MAX</text>

                {/* ── EXT INPUT ── */}
                <text x="848" y="440" textAnchor="middle" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">EXT INPUT</text>
                <text x="848" y="450" textAnchor="middle" fill={C.labelDark} fontSize="4.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif">1MΩ / 20pF</text>
                <BNC cx={848} cy={476} r={12} label="" />
                <polygon points="840,492 856,492 848,503" fill="#ffb300" stroke="#e65100" strokeWidth="0.6" />
                <text x="848" y="499" textAnchor="middle" fill={C.metalDark} fontSize="4" fontFamily="Arial, sans-serif" fontWeight="bold">!</text>

                {/* Overlay */}
                <rect x="408" y="415" width="504" height="128" rx="5"
                    fill={hl("accesorios").fill} stroke={hl("accesorios").stroke}
                    strokeWidth={hl("accesorios").strokeWidth}
                    style={{ transition: "all 0.3s ease", pointerEvents: "none" }} />
                <text x="660" y="554" textAnchor="middle"
                    fill={isActive("accesorios") ? "#ef9a9a" : C.panelDark}
                    fontSize="8" fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold"
                    style={{ transition: "fill 0.3s" }}>
                    ENTRADAS / CALIBRACIÓN / CONTROL
                </text>
            </g>

            {/* ══════════════════════════════════════════════
          PANEL LATERAL DERECHO — COUPLING / SOURCE extra
      ══════════════════════════════════════════════ */}
            <g>
                <rect x="772" y="272" width="148" height="140" rx="5"
                    fill="rgba(0,0,0,0.04)" stroke={C.panelDark} strokeWidth="0.8" />
                <SectionLabel x="778" y="276" w="136" label="COUPLING" color={C.labelBlue} />

                {/* AC / DC / HF REJ / LF REJ */}
                {[["AC", true], ["DC", false], ["HF REJ", false], ["LF REJ", false]].map(([lbl, act], i) => (
                    <Btn key={lbl} x={778 + (i % 2) * 72} y={292 + Math.floor(i / 2) * 18} w={66} h={14} label={lbl} active={act} />
                ))}

                <SectionLabel x="778" y="340" w="136" label="SOURCE" color={C.labelBlue} />
                {[["CH1", true], ["CH2", false], ["EXT", false], ["LINE", false]].map(([lbl, act], i) => (
                    <Btn key={`src${lbl}`} x={778 + (i % 2) * 72} y={356 + Math.floor(i / 2) * 18} w={66} h={14} label={lbl} active={act} />
                ))}
            </g>

            {/* ══════════════════════════════════════════════
          PANEL IZQUIERDO — Controls TRC
      ══════════════════════════════════════════════ */}
            <g>
                {/* CAL screwdriver */}
                <text x="57" y="490" textAnchor="middle" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">CAL</text>
                <circle cx={57} cy={505} r={8} fill="#a0a09a" stroke={C.knobRim} strokeWidth="1" />
                <line x1="50" y1="505" x2="64" y2="505" stroke={C.metalDark} strokeWidth="1.5" />

                {/* INTEN, FOCUS */}
                <text x="88" y="490" textAnchor="middle" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">INTEN.</text>
                <Knob cx={88} cy={508} r={12} angle={-90} />

                <text x="118" y="490" textAnchor="middle" fill={C.labelDark} fontSize="5.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">FOCUS</text>
                <Knob cx={118} cy={508} r={12} angle={-90} />

                {/* TRACE ROTATION */}
                <text x="160" y="490" textAnchor="middle" fill={C.labelDark} fontSize="5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">TRACE ROT.</text>
                <rect x="144" y="495" width="32" height="22" rx="3"
                    fill={C.btnOff} stroke={C.btnRim} strokeWidth="0.8" />

                {/* READOUT INTEN */}
                <text x="215" y="490" textAnchor="middle" fill={C.labelDark} fontSize="5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">READOUT INTEN.</text>
                <Knob cx={215} cy={508} r={10} angle={-90} />

                {/* POWER led + label */}
                <LED cx={270} cy={503} r={5} color={C.ledGreen} />
                <text x="270" y="520" textAnchor="middle" fill={C.labelRed} fontSize="6.5"
                    fontFamily="'Arial Narrow', Arial, sans-serif" fontWeight="bold">POWER</text>

                {/* Línea divisoria */}
                <line x1="42" y1="482" x2="400" y2="482" stroke={C.panelDark} strokeWidth="0.8" />
            </g>

            {/* ══════════════════════════════════════════════
          BORDE INFERIOR Y PIES ch
      ══════════════════════════════════════════════ */}
            {/* Pies de goma */}
            <rect x="60" y="560" width="40" height="10" rx="5" fill={C.metalDark} />
            <rect x="860" y="560" width="40" height="10" rx="5" fill={C.metalDark} />

            {/* Logo inferior */}
            <text x="490" y="575" textAnchor="middle" fill={C.chassisDark} fontSize="8"
                fontFamily="Arial, sans-serif" fontWeight="bold" letterSpacing="2">
                MO-1227 • DUAL TRACE OSCILLOSCOPE • 20MHz
            </text>
        </svg>
    );
}