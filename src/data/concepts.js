// src/data/concepts.js
export const CONCEPTS = [
  {
    id: 'ohm',
    icon: '⚡',
    title: 'Ley de Ohm y Potencia',
    tags: ['Pregs 6–13, 17, 19–21, 55, 59, 60, 62, 87, 143, 145'],
    sections: [
      {
        heading: 'Ley de Ohm',
        text: 'La relación fundamental entre tensión, corriente y resistencia:',
        formulas: ['I = V / R', 'V = I × R', 'R = V / I'],
        note: 'I = Intensidad (A) · V = Tensión (V) · R = Resistencia (Ω)'
      },
      {
        heading: 'Potencia eléctrica',
        formulas: ['P = V × I', 'P = V² / R', 'P = I² × R'],
        note: 'Las tres formas son equivalentes. Usa la que tenga los datos disponibles.'
      },
      {
        heading: 'Unidades fundamentales',
        table: {
          headers: ['Magnitud', 'Unidad', 'Símbolo', 'Subunidades comunes'],
          rows: [
            ['Tensión', 'Voltio', 'V', 'mV, µV, kV'],
            ['Corriente', 'Amper', 'A', 'mA, µA'],
            ['Resistencia', 'Ohm', 'Ω', 'kΩ, MΩ'],
            ['Potencia', 'Watt', 'W', 'mW, kW'],
            ['Inductancia', 'Henrio', 'H', 'mH, µH'],
            ['Capacidad', 'Faradio', 'F', 'µF, nF, pF'],
          ]
        }
      },
      {
        heading: 'Frecuencia y Período',
        formulas: ['f = 1 / T', 'T = 1 / f'],
        note: 'f en Hz · T en segundos. Ejemplo: T = 4 ms → f = 1/0,004 = 250 Hz'
      },
      {
        heading: 'Conversiones de frecuencia',
        table: {
          headers: ['Unidad', 'Equivalencia', 'Ejemplo'],
          rows: [
            ['1 MHz', '= 1000 kHz = 1.000.000 Hz', '7125 kHz = 7,125 MHz'],
            ['1 GHz', '= 1000 MHz', '1,2 GHz = 1200 MHz'],
          ]
        }
      },
      {
        heading: 'Valor eficaz (RMS) de señales alternas',
        formulas: ['V_ef = V_max / √2 ≈ V_max × 0,7071'],
        note: 'La red de 220V tiene un pico de 220 × √2 ≈ 311V. Los instrumentos AC miden el valor eficaz.'
      },
      {
        heading: 'Fusibles — cálculo',
        formulas: ['I = P / V', 'Elegir el fusible inmediato superior con margen'],
        note: 'Equipo 220V / 1kW: I = 1000/220 ≈ 4,5A → Fusible de 6A'
      }
    ]
  },
  {
    id: 'components',
    icon: '🔧',
    title: 'Componentes Electrónicos',
    tags: ['Pregs 1, 3–5, 22–27, 30–31, 88, 104, 124, 137, 147–148, 150'],
    sections: [
      {
        heading: 'Código de colores de resistencias',
        table: {
          headers: ['Color', 'Dígito', 'Multiplicador', 'Tolerancia'],
          rows: [
            ['Negro', '0', '×1', '—'],
            ['Marrón', '1', '×10', '±1%'],
            ['Rojo', '2', '×100', '±2%'],
            ['Naranja', '3', '×1.000', '—'],
            ['Amarillo', '4', '×10.000', '—'],
            ['Verde', '5', '×100.000', '±0,5%'],
            ['Azul', '6', '×1.000.000', '—'],
            ['Violeta', '7', '—', '—'],
            ['Gris', '8', '—', '—'],
            ['Blanco', '9', '—', '—'],
            ['Dorado', '—', '×0,1', '±5%'],
            ['Plata', '—', '×0,01', '±10%'],
          ]
        },
        note: 'Ejemplo: Rojo-Naranja-Rojo = 23 × 100 = 2.300Ω = 2,3 kΩ. Ejemplo: Gris-Violeta-Negro = 87 × 1 = 87Ω'
      },
      {
        heading: 'Capacitor',
        items: [
          'Bloquea la CC, permite pasar la CA',
          'La corriente ADELANTA 90° a la tensión (mnemónica ICE)',
          'Dieléctrico: material aislante entre las placas',
          'En PARALELO suman: Ct = C1 + C2 + C3',
          'En SERIE se usa la fórmula recíproca (como resistencias en paralelo)',
        ]
      },
      {
        heading: 'Inductor (Bobina)',
        items: [
          'Se mide en Henrios (H)',
          'La tensión ADELANTA 90° a la corriente (mnemónica ELI)',
          'Bloquea la CA, permite pasar la CC',
          'En SERIE suman: Lt = L1 + L2',
        ]
      },
      {
        heading: 'Resonancia LC',
        formulas: ['Resonancia: XC = XL', 'f₀ = 1 / (2π × √(L × C))'],
        note: 'En resonancia la impedancia del circuito serie es mínima (máxima corriente), y en paralelo es máxima.'
      },
      {
        heading: 'Diodo',
        items: [
          'Conducción UNIDIRECCIONAL: sólo en polarización directa (ánodo +)',
          'Caída de tensión directa: ≈0,6V (silicio), ≈0,3V (germanio)',
          'Puente rectificador: 4 diodos en configuración puente (Graetz)',
          'Diodo Zener: se usa en ruptura inversa como regulador de tensión',
        ]
      },
      {
        heading: 'Transistor Bipolar (BJT)',
        items: [
          'Tres terminales: Colector (C), Base (B), Emisor (E)',
          'Función principal: AMPLIFICAR señales débiles',
          'Ganancia de corriente: β = IC / IB (típicamente 100–300)',
          'La flecha en el símbolo = EMISOR (NPN: apunta afuera, PNP: apunta adentro)',
          'Mnemónica NPN: "Never Points iN"',
        ]
      },
      {
        heading: 'Transformador',
        items: [
          'Dos bobinas acopladas magnéticamente (núcleo de hierro)',
          'Relación de transformación: V1/V2 = N1/N2',
          'Reductor: primario tiene MÁS vueltas que el secundario',
          'SÓLO funciona con CA; con CC sólo conduce en el instante de conexión',
        ],
        formulas: ['V1 / V2 = N1 / N2', 'I1 / I2 = N2 / N1']
      }
    ]
  },
  {
    id: 'circuits',
    icon: '🔌',
    title: 'Circuitos en Serie y Paralelo',
    tags: ['Pregs 9, 14, 36, 44, 61, 125, 126, 129, 134, 135, 141, 142, 149'],
    sections: [
      {
        heading: 'Circuito en SERIE',
        formulas: ['R_total = R1 + R2 + R3 + ...'],
        items: [
          'La CORRIENTE es la misma en todos los elementos',
          'La TENSIÓN se divide (suma de caídas = tensión total)',
          'La resistencia total es MAYOR que la mayor de las resistencias',
        ]
      },
      {
        heading: 'Circuito en PARALELO',
        formulas: ['1/R_t = 1/R1 + 1/R2 + 1/R3', 'Dos iguales: R_t = R / 2', 'C_t = C1 + C2 + C3 (capacitores en paralelo)'],
        items: [
          'La TENSIÓN es la misma en todos los elementos (= tensión de la fuente)',
          'La CORRIENTE se divide entre las ramas',
          'La resistencia total es MENOR que la menor de las resistencias',
        ]
      },
      {
        heading: 'Ejemplo tipo examen: R en paralelo a 12V',
        table: {
          headers: ['R', 'Valor', 'Corriente I=12/R', 'Potencia P=144/R'],
          rows: [
            ['R1', '50 Ω', '240 mA', '2,88 W'],
            ['R2', '10 Ω', '1200 mA', '14,4 W'],
            ['R3', '120 Ω', '100 mA', '1,2 W'],
            ['R4', '4700 Ω', '2,55 mA', '0,031 W'],
            ['Total', '≈ 7,77 Ω', '≈ 1542 mA = 1,54 A', '—'],
          ]
        },
        note: 'Resistencia total: 1/Rt = 0,02+0,1+0,0083+0,000213 = 0,1285 → Rt = 7,77Ω'
      }
    ]
  },
  {
    id: 'antennas',
    icon: '📡',
    title: 'Antenas — Tipos y Fórmulas',
    tags: ['Pregs 15–16, 34, 56, 63–74, 80–83, 86, 89–90, 98–99, 102, 109–110, 128, 132, 140, 144'],
    sections: [
      {
        heading: 'Fórmulas esenciales',
        table: {
          headers: ['Antena', 'Fórmula', 'Nota'],
          rows: [
            ['Longitud de onda λ', 'λ(m) = 300 / f(MHz)', 'Siempre'],
            ['Dipolo ½ onda', 'L(m) = 142,5 / f(MHz)', 'K = 142,5'],
            ['Cada rama del dipolo', 'L(m) = 71,25 / f(MHz)', '= λ/4'],
            ['Vertical ¼ onda', 'L(m) = 71,25 / f(MHz)', 'Algunos libros usan 72'],
          ]
        },
        note: 'Se usa 142,5 en vez de 150 (teórico) por el factor de velocidad del conductor y el efecto de extremo.'
      },
      {
        heading: 'Tipos de antenas y características',
        table: {
          headers: ['Antena', 'Radiación', 'Impedancia', 'Ganancia'],
          rows: [
            ['Dipolo ½ onda (horizontal)', 'Bidireccional (⊥ al eje)', '≈ 73 Ω', '2,15 dBi'],
            ['Dipolo V invertida 90°', 'Cuasi-omnidireccional', '≈ 52 Ω', '≈ 2 dBi'],
            ['Dipolo plegado', 'Bidireccional', '≈ 300 Ω', '2,15 dBi'],
            ['Dipolo horizontal (180°)', 'Bidireccional', '≈ 73 Ω', 'Referencia'],
            ['Vertical ¼ onda', 'Omnidireccional', '≈ 50 Ω', '0 dBd'],
            ['Vertical 5/8 onda', 'Omnidireccional bajo', '≠ 50Ω (adap.)', '3 dBd'],
            ['Colineal 11 dBi', 'Omnidireccional', 'var.', '11 dBi'],
            ['Yagi 3 elementos', 'Direccional', 'var.', '6–8 dBi'],
          ]
        }
      },
      {
        heading: 'Antena Yagi — Estructura',
        items: [
          'Reflector: detrás del excitado, ≈5% más largo — "empuja" hacia adelante',
          'Elemento Excitado: el único alimentado por el coaxil',
          'Director: delante del excitado, ≈5% más corto — "jala" hacia adelante',
          'Mínimo 2 elementos para ser Yagi',
          'Yagi 3 elem: ≈6 a 8 dBi, relación F/B ≈15 dB',
        ]
      },
      {
        heading: 'Polarización y usos',
        table: {
          headers: ['Modo / Uso', 'Polarización', 'Razón'],
          rows: [
            ['Repetidoras VHF/UHF (F3E)', 'Vertical', 'Handies son verticales'],
            ['BLU/SSB en VHF (J3E)', 'Horizontal', 'Menor ruido artificial'],
            ['Satélites', 'Circular', 'Evita desvanecimiento por giro'],
          ]
        }
      },
      {
        heading: 'Adaptación de impedancias',
        items: [
          'BALUN (BALanced-UNbalanced): adapta coaxil desbalanceado a dipolo balanceado',
          'Transmatch / ATU: adapta impedancia del TX a la línea de alimentación',
          'Transformador λ/4: sección de coaxil de Z = √(Z1×Z2)',
          'Dipolo plegado → 300Ω → usar balun 4:1 para coaxil de 75Ω',
        ]
      },
      {
        heading: 'ROE y dirección de ajuste',
        items: [
          'ROE empeora al SUBIR f → antena DEMASIADO LARGA → ACORTAR',
          'ROE empeora al BAJAR f → antena DEMASIADO CORTA → ALARGAR',
          'La frecuencia de menor ROE = frecuencia de resonancia de la antena',
        ]
      }
    ]
  },
  {
    id: 'transmission-lines',
    icon: '〰️',
    title: 'Líneas de Transmisión y ROE',
    tags: ['Pregs 2, 37, 75–79, 81, 85, 111–113, 118–119, 131'],
    sections: [
      {
        heading: 'Impedancias características de cables',
        table: {
          headers: ['Cable', 'Z (Ω)', 'Uso', 'Pérdida aprox. a 146 MHz'],
          rows: [
            ['RG-58U', '50', 'Radioaficionado (más pérdida)', '≈ 10 dB/100m'],
            ['RG-8U / RG-213U', '50', 'Radioaficionado (baja pérdida)', '≈ 4 dB/100m'],
            ['RG-59U', '75', 'TV / CCTV / video', '≈ 7 dB/100m'],
            ['Cinta plana (TV)', '300', 'Antenas TV, dipolos', 'Muy baja'],
            ['Ladder line 450Ω', '450', 'HF, dipolo multibanda', 'Mínima'],
          ]
        }
      },
      {
        heading: 'ROE — Relación de Ondas Estacionarias',
        formulas: [
          'ROE = (√P_directa + √P_reflejada) / (√P_directa - √P_reflejada)',
          'Ejemplo: 10W directos, 1W reflejado → ROE = (3,162+1)/(3,162-1) ≈ 1,92:1',
          'ROE = Z_mayor / Z_menor (cuando hay desadaptación pura resistiva)'
        ],
        table: {
          headers: ['ROE', 'Potencia reflejada', 'Eficiencia de TX', 'Evaluación'],
          rows: [
            ['1:1', '0%', '100%', 'Perfecto'],
            ['1,5:1', '4%', '96%', 'Excelente'],
            ['2:1', '11%', '89%', 'Aceptable'],
            ['3:1', '25%', '75%', 'Mejorable'],
            ['5:1', '44%', '56%', 'Malo'],
          ]
        }
      },
      {
        heading: 'Tipos de líneas',
        table: {
          headers: ['Tipo', 'Balance', 'Pérdida', 'Uso con'],
          rows: [
            ['Coaxil', 'Desbalanceada', 'Moderada–alta a VHF', 'Transceptores (con balun para dipolo)'],
            ['Línea abierta paralela', 'Balanceada', 'Muy baja', 'Dipolos, antenas multibanda + ATU'],
          ]
        }
      },
      {
        heading: 'Sintonizador de antena (Transmatch / ATU)',
        items: [
          'Adapta la impedancia del transmisor (50Ω) a la línea de alimentación',
          'NO amplifica potencia — sólo adapta impedancias',
          'Permite usar antenas no resonantes en múltiples bandas',
          'La ROE entre el ATU y la antena puede ser alta; lo que importa es la ROE vista por el TX',
        ]
      }
    ]
  },
  {
    id: 'propagation',
    icon: '🌐',
    title: 'Propagación y Ionosfera',
    tags: ['Pregs 66–67, 91–96, 108, 117, 120, 138–139, 146'],
    sections: [
      {
        heading: 'Velocidad de la luz y longitud de onda',
        formulas: [
          'c = 300.000 km/s = 3 × 10⁸ m/s',
          'λ (m) = 300 / f (MHz)',
          'λ y f son INVERSAMENTE proporcionales: mayor f → menor λ',
        ]
      },
      {
        heading: 'Capas ionosféricas',
        table: {
          headers: ['Capa', 'Altura aprox.', 'Existe de noche', 'Efecto'],
          rows: [
            ['D', '60–90 km', 'No (desaparece)', 'Absorbe ondas HF bajas (80m, 160m)'],
            ['E', '90–150 km', 'Débil', 'Reflexión de día, Esporádica-E'],
            ['F1', '150–250 km', 'Se une con F2', 'Sólo de día'],
            ['F2', '250–400 km', 'Sí (más densa)', 'Principal capa para DX en HF'],
          ]
        }
      },
      {
        heading: 'Factores que afectan la propagación HF',
        items: [
          'Ciclo solar (≈11 años): máximo solar → ionosfera densa → mejor propagación en frecuencias altas',
          'Época del año: las capas varían con los solsticios y equinoccios',
          'Hora del día: capa D desaparece de noche → mejor propagación en 80m/160m',
          'Latitud geográfica: el ángulo de incidencia solar cambia',
          'La meteorología NO afecta significativamente la propagación ionosférica HF',
        ]
      },
      {
        heading: 'VHF y UHF',
        items: [
          'Propagación normal: en LÍNEA RECTA (visión directa / troposférica)',
          'No se reflejan en ionosfera en condiciones normales',
          'Excepciones: Esporádica-E, propagación tropo-ducting, aurora (anomalías)',
          'Por eso VHF/UHF requieren repetidoras en lugares elevados',
        ]
      },
      {
        heading: 'Bandas — distancias típicas',
        table: {
          headers: ['Banda', 'Frecuencia', 'Distancia típica', 'Mejor horario'],
          rows: [
            ['160m', '1,8–2 MHz', 'Regional, corta', 'Noche'],
            ['80m', '3,5–4 MHz', 'Regional/continental', 'Noche'],
            ['40m', '7–7,3 MHz', '≈300 km al mediodía, DX de noche', 'Todo el día'],
            ['20m', '14–14,35 MHz', 'Internacional DX', 'Día'],
            ['15m', '21–21,45 MHz', 'Internacional en máx. solar', 'Día'],
            ['10m', '28–29,7 MHz', 'DX fácil en máx. solar', 'Día'],
          ]
        }
      },
      {
        heading: 'Armónicas',
        items: [
          'Son múltiplos enteros EXACTOS de la frecuencia fundamental: 2f, 3f, 4f...',
          'Si el TX opera en 7,1 MHz → armónicas en 14,2 / 21,3 / 28,4 MHz',
          'Los filtros paso-bajo del TX deben suprimir las armónicas (norma: -40 dB)',
        ]
      }
    ]
  },
  {
    id: 'receivers',
    icon: '📻',
    title: 'Receptores Superheterodinos',
    tags: ['Pregs 38–43, 53–54, 57, 100–116, 121–123'],
    sections: [
      {
        heading: 'Cadena del receptor AM (A3E)',
        text: 'Ant → Amp RF → Mezclador ← OFV → Amp FI → Detector de envolvente → Amp Audio → 🔊',
        items: [
          'Amp RF: amplifica la señal débil captada (µV), baja figura de ruido',
          'Mezclador: combina RF con OFV → produce la FI (fija)',
          'OFV: oscilador local, se sintoniza para seleccionar la estación',
          'Amp FI: alta ganancia y selectividad a frecuencia fija (ej. 455 kHz)',
          'Detector: demodula la señal AM recuperando el audio',
        ]
      },
      {
        heading: 'Cadena del receptor FM (F3E)',
        text: 'Ant → Amp RF → Mezclador ← OFV → Amp FI → Limitador → Discriminador → Amp Audio → 🔊',
        items: [
          'Limitador: elimina variaciones de amplitud (ruido AM) → FM inmune a interferencias de amplitud',
          'Discriminador de frecuencia: convierte variaciones de f en variaciones de audio',
          'El receptor FM NO tiene detector de envolvente AM',
        ]
      },
      {
        heading: 'Parámetros del receptor',
        table: {
          headers: ['Parámetro', 'Definición', 'Cómo mejorarlo'],
          rows: [
            ['Sensibilidad', 'Capacidad de captar señales muy débiles', 'Amp RF de baja figura de ruido'],
            ['Selectividad', 'Capacidad de rechazar señales adyacentes en frecuencia', 'Filtros de FI estrechos (cristal, cerámico)'],
            ['Imagen', 'Interferencia de la frecuencia imagen (= fRF + 2×FI)', 'Mayor FI, filtro de RF previo'],
          ]
        }
      },
      {
        heading: 'El mezclador — función clave',
        text: 'FI = |f_RF - f_OFV|. Convierte CUALQUIER frecuencia sintonizada a la MISMA FI fija. Ejemplo: para sintonizar 7,1 MHz con FI de 455 kHz, el OFV oscila a 7,555 MHz.',
        formulas: ['FI = |f_RF - f_OFV|']
      },
      {
        heading: 'Instrumentos de medición RF',
        table: {
          headers: ['Instrumento', 'Mide', 'Conexión'],
          rows: [
            ['Voltímetro', 'Tensión', 'En paralelo'],
            ['Amperímetro', 'Corriente', 'En serie'],
            ['Vatímetro (wattímetro)', 'Potencia RF', 'En línea (serie)'],
            ['Medidor de ROE', 'ROE / pot. reflejada', 'En línea (serie)'],
            ['Osciloscopio', 'Forma de onda', 'En paralelo'],
            ['Frecuencímetro', 'Frecuencia', 'En paralelo'],
          ]
        }
      }
    ]
  },
  {
    id: 'transmitters-modes',
    icon: '🎛️',
    title: 'Transmisores y Modos de Emisión',
    tags: ['Pregs 45–52, 100–102, 107, 122, 130, 133, 136'],
    sections: [
      {
        heading: 'Transmisor BLU (J3E) — cadena',
        text: 'Mic → Amp Micrófono → Modulador Balanceado ← Osc RF → Filtro BLU → Mezclador → Amp Lineal de Potencia → Ant',
        items: [
          'Modulador Balanceado: suprime la portadora y genera DSB (doble banda lateral)',
          'Filtro BLU: elimina UNA de las dos bandas laterales → queda SSB (J3E)',
          'Mezclador: convierte a la frecuencia de transmisión final',
          'Amp Lineal: amplifica la potencia manteniendo la linealidad (evita distorsión)',
        ]
      },
      {
        heading: 'Modos de emisión — comparativa',
        table: {
          headers: ['Código', 'Modo', 'BW aprox.', 'Descripción'],
          rows: [
            ['A1A', 'CW / Morse', '< 1 kHz', 'Portadora encendida/apagada al ritmo del manipulador'],
            ['A3E', 'AM con portadora', '6 kHz', 'Amplitud modulada, portadora + 2 bandas laterales'],
            ['J3E', 'BLU / SSB', '≈ 3 kHz', 'Una sola banda lateral, portadora suprimida'],
            ['F3E', 'FM con voz', '6–25 kHz', 'Frecuencia modulada, amplitud constante'],
            ['F2D', 'Packet (AFSK)', '≈ 16 kHz', 'FM con dos tonos de audio como datos'],
            ['RTTY', 'Télex por radio', '≈ 500 Hz', 'FSK/AFSK con 2 tonos (marca y espacio)'],
          ]
        }
      },
      {
        heading: 'Siglas clave del equipo',
        table: {
          headers: ['Sigla', 'Significado', 'Función'],
          rows: [
            ['OFV', 'Oscilador de Frecuencia Variable', 'Permite sintonizar la frecuencia de trabajo'],
            ['CAF', 'Control Automático de Frecuencia', 'Corrige derivas del oscilador automáticamente'],
            ['ALC', 'Automatic Level Control', 'Evita sobremodulación controlando la ganancia'],
            ['PTT', 'Push-To-Talk', 'Activa la transmisión al presionarlo'],
            ['DTMF', 'Dual Tone Multi-Frequency', 'Tonos de teclado para acceso a repetidoras'],
            ['CTCSS', 'Continuous Tone-Coded Squelch', 'Tono sub-audible para acceso selectivo'],
            ['ROE / SWR', 'Relación de Ondas Estacionarias', 'Mide adaptación de impedancias'],
          ]
        }
      },
      {
        heading: 'Packet Radio',
        items: [
          'Protocolo AX.25, estándar para VHF/UHF',
          'A 1200 baud: tonos AFSK 1200 Hz (Mark) y 2200 Hz (Space)',
          'TNC (Terminal Node Controller) conectado al PUERTO SERIE de la PC',
          'TNC también conectado al mic/parlante del transceptor',
        ]
      },
      {
        heading: 'Amplificador lineal',
        items: [
          'Amplifica la potencia de salida de RF del transmisor',
          'DEBE ser lineal para no distorsionar BLU/SSB',
          'No amplifica potencia de la fuente de alimentación ni de audio',
          'Para usarlo se necesita licencia de mayor categoría (en muchos países)',
        ]
      },
      {
        heading: 'Fuente de alimentación para radioaficionados',
        text: 'Cadena: 220V CA → Transformador → Puente rectificador (4 diodos) → Capacitor de filtro → [Regulador] → 12–13,8V CC',
        items: [
          'El transformador reduce 220V a ≈15–17V CA',
          'El puente de diodos rectifica (CC pulsante)',
          'El capacitor elimina el rizado',
          'El regulador (ej. LM7812) estabiliza la tensión',
          'El fusible va en la entrada del transformador',
        ]
      }
    ]
  }
]
