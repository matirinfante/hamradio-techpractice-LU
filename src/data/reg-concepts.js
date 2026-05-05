// src/data/reg-concepts.js
export const REG_CONCEPTS = [
  {
    id: 'reg-general',
    icon: '📋',
    title: 'Reglamento General — Definiciones Clave',
    tags: ['Cap. I — I.1 a I.34'],
    sections: [
      {
        heading: 'Autoridad de Aplicación',
        text: 'El ENACOM (Ente Nacional de Comunicaciones) es la única Autoridad de Aplicación del Reglamento General de Radioaficionados (Resolución ENACOM N° 3635/2017).',
        items: [
          'Facultades: limitar/denegar/suspender/cancelar licencias y asignar/modificar señales distintivas',
          'Los exámenes NO los toma el ENACOM — los toman los Radio Clubes e Instituciones Autorizadas',
          'Los trámites se gestionan a través de Radio Clubes o Instituciones Autorizadas (no directamente)',
        ]
      },
      {
        heading: 'Definiciones esenciales',
        table: {
          headers: ['Término', 'Definición clave'],
          rows: [
            ['Radioaficionado', 'Persona autorizada, con carácter individual, SIN fines de lucro, para instrucción, intercomunicación y estudios técnicos'],
            ['Radio Club', 'Asociación Civil sin fines de lucro que agrupa radioaficionados para fomentar la actividad'],
            ['Institución Autorizada', 'Puede dictar cursos Y tomar exámenes de ingreso/ascenso'],
            ['Institución Reconocida', 'Solo puede dar Prácticas Operativas — NO puede tomar exámenes'],
            ['Licencia', 'Otorgada por ENACOM a personas físicas y jurídicas; faculta a instalar y operar'],
            ['Señal Distintiva', 'Identificación otorgada por el ENACOM (no por la IARU)'],
            ['Categoría', 'Nivel otorgado por ENACOM; conlleva derechos y obligaciones'],
          ]
        }
      },
      {
        heading: 'Estaciones especiales',
        table: {
          headers: ['Tipo', 'Característica principal'],
          rows: [
            ['Repetidora', 'Estación FIJA, retransmisión automática, abierta al tráfico general'],
            ['Digipeater', 'Recibe y retransmite datos digitales (Packet), misma frecuencia'],
            ['TNC', 'Conecta computadoras con radios para datos digitales (módems)'],
            ['BBS', 'Sistema automático de almacenamiento y distribución de mensajes'],
            ['Radiobaliza', 'Transmite a intervalos regulares en UNA sola frecuencia fija'],
            ['PMS/PBBS', 'TNC para mensajes personales — correo electrónico de radioaficionados'],
          ]
        }
      },
      {
        heading: 'Contacto DX vs Concurso',
        items: [
          'DX: comunicados con estaciones distantes o de difícil acceso; intercambios MÍNIMOS e indispensables',
          'Concurso: evento nacional o internacional que pone a prueba habilidades; bases informadas por Radio Clubes',
          'Tarjeta QSL: confirmación (postal o virtual) de comunicados realizados',
        ]
      },
      {
        heading: 'Ética Operativa y IARU',
        items: [
          'Ética Operativa: conjunto de deberes, obligaciones y conductas del Reglamento y de la IARU',
          'IARU = International Amateur Radio Union — representa los intereses ante foros internacionales',
          'Principios del Código de Conducta (IARU): Sentido social, Comprensión, Buenos modales, Tolerancia',
          'Orden de observancia: 1° Reglamento ENACOM → 2° Disposiciones IARU → 3° Reglamentación UIT',
        ]
      }
    ]
  },
  {
    id: 'reg-licencias',
    icon: '📄',
    title: 'Licencias, Categorías y Vigencias',
    tags: ['Cap. I, IV — I.38 a I.44, IV.1 a IV.9'],
    sections: [
      {
        heading: 'Categorías de Radioaficionados',
        table: {
          headers: ['Categoría', 'Edad mínima', 'Potencia máxima RF', 'Para ascender necesita'],
          rows: [
            ['Novicio', '9 años', '200 W', '3 años actividad ininterrumpida + examen'],
            ['General', '13 años', 'Sin límite especificado', 'Tiempo + examen'],
            ['Superior', '—', 'Sin límite', 'Examen'],
            ['Especial', '—', '—', 'Cat. Superior + 20 años actividad ininterrumpida'],
          ]
        },
        note: 'Los Radio Clubes, Instituciones Autorizadas e Instituciones Reconocidas tienen categoría GENERAL.'
      },
      {
        heading: 'Vigencias y plazos clave',
        table: {
          headers: ['Concepto', 'Plazo'],
          rows: [
            ['Vigencia de la licencia', '5 años'],
            ['Plazo para renovar (tras los 5 años)', '12 meses adicionales'],
            ['Renovación: período', 'Cada 5 años (al realizar el trámite)'],
            ['Vigencia de la Estación Repetidora', '5 años o hasta cancelación/caducidad del titular'],
            ['Plazo para desinstalar — CADUCIDAD', '90 días'],
            ['Plazo para desinstalar — CANCELACIÓN', '10 días'],
            ['Señal reservada por fallecimiento', '2 años'],
            ['Señal Distintiva Especial', '1 año'],
            ['Certificado de Aprobación de Examen', '6 meses de validez'],
          ]
        }
      },
      {
        heading: 'Conexión de equipos a líneas telefónicas',
        text: 'Las estaciones del Servicio de Radioaficionados solo pueden conectarse a las líneas telefónicas EXCLUSIVAMENTE ante emergencias. En ninguna otra circunstancia.',
      },
      {
        heading: 'Identificación cada 10 minutos',
        text: 'El radioaficionado debe transmitir su señal distintiva con un intervalo máximo de 10 minutos durante una comunicación.',
      }
    ]
  },
  {
    id: 'reg-instituciones',
    icon: '🏛️',
    title: 'Radio Clubes e Instituciones',
    tags: ['Cap. II, III — II.1, III.1 a III.16'],
    sections: [
      {
        heading: 'Cuadro comparativo de instituciones',
        table: {
          headers: ['Facultad', 'Radio Club', 'Inst. Autorizada', 'Inst. Reconocida'],
          rows: [
            ['Dictar cursos', '✓', '✓', '✓'],
            ['Tomar exámenes ingreso/ascenso', '✓', '✓', '✗'],
            ['Prácticas Operativas', '✓', '✓', '✓'],
            ['Gestionar trámites ante ENACOM', '✓', '✓', '✗'],
            ['Otorgar Certificados Radioescucha', '✓ (solo)', '✗', '✗'],
            ['Poseer filiales', '✓ (misma prov.)', '✗', '✗'],
            ['Señales Distintivas Especiales', '✓', '✓', '✓'],
          ]
        }
      },
      {
        heading: 'Filiales de Radio Clubes',
        items: [
          'Solo en localidades de la MISMA PROVINCIA donde no haya Radio Club',
          'El radioaficionado a cargo: categoría mínima GENERAL o Superior',
          'Debe estar habilitado en el Libro de Actas del Radio Club',
          'Opera con: señal del Radio Club + barra + "filial" + nombre de localidad',
          'Las filiales NO pueden realizar trámites directos ante el ENACOM',
        ]
      },
      {
        heading: 'Identificación al operar estación del Radio Club',
        items: [
          '1° Señal distintiva del Radio Club',
          '2° Señal distintiva propia del operador',
          'Bandas: solo las autorizadas para la CATEGORÍA DEL OPERADOR (no del Radio Club)',
          'Práctica Operativa de aspirantes: señal del Radio Club + aclarar "en Práctica Operativa"',
        ]
      }
    ]
  },
  {
    id: 'reg-senales',
    icon: '📡',
    title: 'Señales Distintivas e Identificación',
    tags: ['Cap. VIII — VIII.1 a VIII.13'],
    sections: [
      {
        heading: 'Estructura de la señal distintiva',
        formulas: [
          'Señal = PREFIJO + SUFIJO',
          'Prefijo → identifica el PAÍS (Argentina: LU / LW)',
          'Primera/s letra/s del sufijo → identifica la PROVINCIA',
        ]
      },
      {
        heading: 'Asignación del sufijo',
        table: {
          headers: ['Situación', 'Criterio de asignación'],
          rows: [
            ['Solo estaciones móviles', 'Domicilio del DNI del radioaficionado'],
            ['Estación fija (+ móviles)', 'Domicilio de emplazamiento de la estación FIJA'],
          ]
        }
      },
      {
        heading: 'Sufijo de 2 letras',
        items: [
          'Asignado a categorías: Superior y Especial',
          'Excepción: familiar del titular fallecido puede reclamarlo (reservado 2 años)',
        ]
      },
      {
        heading: 'Señales Distintivas Especiales',
        items: [
          'Vigencia: 1 año',
          'Pueden solicitarla: Radioaficionados General o Superior, Radio Clubes, Instituciones Autorizadas e Instituciones Reconocidas. Los Novicio NO pueden solicitarlas individualmente.',
          'No se pueden tener dos o más señales especiales vigentes simultáneamente',
          'Con señal especial: todos los miembros del equipo pueden operar en TODAS las bandas del titular',
        ]
      },
      {
        heading: 'Identificación al operar estación ajena',
        formulas: ['Señal del TITULAR / Señal del OPERADOR / letra de la división política'],
        note: 'El operador usa las bandas de SU categoría, no las del titular.'
      },
      {
        heading: 'Identificación de estación móvil',
        formulas: ['Señal distintiva + ubicación geográfica actual + condición de "móvil"']
      }
    ]
  },
  {
    id: 'reg-repetidoras',
    icon: '📶',
    title: 'Estaciones Repetidoras',
    tags: ['Cap. X — X.1 a X.15'],
    sections: [
      {
        heading: 'Plazos clave de repetidoras',
        table: {
          headers: ['Concepto', 'Plazo'],
          rows: [
            ['Poner en funcionamiento (desde autorización)', '90 días máximo'],
            ['Inactividad antes de caducidad automática', '60 días máximo'],
            ['Comunicar inicio de operaciones al ENACOM', '15 días corridos'],
            ['Dar de baja (desde cese de emisiones)', '15 días corridos'],
            ['Vigencia de la autorización', '5 años (o hasta cancelación/caducidad del titular)'],
          ]
        }
      },
      {
        heading: 'Requisitos y obligaciones',
        items: [
          'Toda repetidora DEBE estar autorizada por el ENACOM antes de operar',
          'Puede operar en bandas cruzadas VHF/UHF (requiere autorización específica del ENACOM)',
          'Se puede tener CTCSS (subtonos), siempre que el código sea aprobado por ENACOM y sea público',
          'Identificación: señal distintiva del titular + localidad de emplazamiento de la repetidora',
          'Es obligatorio contar con un sistema de apagado remoto',
          'Para enlazar dos repetidoras: estudio técnico + conformidad escrita de TODOS los titulares',
          'Control remoto por radio: requiere autorización ENACOM y la frecuencia NO puede ser de bandas de radioaficionados',
        ]
      },
      {
        heading: 'Causas de caducidad automática',
        items: [
          'No haber informado el inicio de operaciones dentro de los 15 días',
          'Inactividad comprobada mayor a 60 días corridos',
          'No haber renovado la licencia del titular o la autorización de la repetidora en el período estipulado',
        ]
      }
    ]
  },
  {
    id: 'reg-examenes',
    icon: '📝',
    title: 'Exámenes, Prácticas e Instructores',
    tags: ['Cap. XII — XII.1 a XII.25'],
    sections: [
      {
        heading: 'Sistema de exámenes',
        items: [
          'Quiénes toman exámenes: Radio Clubes e Instituciones Autorizadas (NO las Reconocidas)',
          'Se puede rendir en condición de LIBRE (sin cursar en Radio Club)',
          'Formato: ESCRITO. Excepción: no videntes o imposibilitados para escribir → oral',
          'El Certificado de Aprobación tiene 6 meses de validez para presentar ante el ENACOM',
          'La certificación NO autoriza a instalar/operar: se debe esperar la licencia del ENACOM',
        ]
      },
      {
        heading: 'Telegrafía para Novicio',
        items: [
          'El examen de telegrafía para Novicio es TEÓRICO (no práctico)',
          '1 palabra = 5 caracteres',
          '1 letra (A-Z) = 1 carácter',
          '1 número o signo de puntuación = 2 caracteres',
        ]
      },
      {
        heading: 'Instructores',
        table: {
          headers: ['Requisito/Función', 'Detalle'],
          rows: [
            ['Categoría mínima', 'GENERAL'],
            ['Funciones', 'Dictar cursos, tomar exámenes, coordinar prácticas operativas, firmar Certificados'],
            ['Sancionados por ENACOM', 'NO pueden ser instructores'],
            ['Familiares directos', 'NO puede tomarles examen'],
            ['Registro', 'Debe estar en el Libro de Actas del Radio Club'],
            ['Instructor a distancia', 'Opera con su propia señal distintiva (no la del Radio Club)'],
          ]
        }
      },
      {
        heading: 'Veedores',
        items: [
          'Categoría: GENERAL o SUPERIOR',
          'Designado por el Radio Club o Institución Autorizada',
          'Funciones: firmar el acta de examen y el certificado de aprobación; informar anormalidades',
          'NO puede ser familiar directo del examinado',
          'NO pertenece necesariamente al mismo Radio Club que toma el examen',
        ]
      },
      {
        heading: 'Prácticas Operativas',
        items: [
          'Pueden realizarlas: Radio Clubes, Instituciones Autorizadas e Instituciones Reconocidas',
          'Supervisa: el INSTRUCTOR (no el Veedor)',
          'Prácticas de recepción: mínimo 6 horas',
          'Deben asentarse en el Libro de Guardia',
          'Si hay distancia excesiva: pueden realizarse en filiales o en domicilio del Instructor',
          'Aspirantes se identifican: señal del Radio Club + "en Práctica Operativa"',
        ]
      },
      {
        heading: 'Libro de Guardia — qué debe consignarse',
        items: [
          'a) Fecha, hora de comienzo y finalización del comunicado',
          'b) Clase de emisión empleada',
          'd) Señal distintiva de la estación corresponsal',
          'También: potencia transmitida (c)',
        ]
      }
    ]
  },
  {
    id: 'reg-iarp',
    icon: '🌎',
    title: 'Permisos Internacionales y Extranjeros',
    tags: ['Cap. VI, VII — VI.1, VI.2, VII.1 a VII.5'],
    sections: [
      {
        heading: 'Radioaficionados extranjeros en Argentina',
        items: [
          'En tránsito o residencia temporaria: deben gestionar autorización ante los RADIO CLUBES',
          'Excepción: radioaficionados de países signatarios del IARP no necesitan gestión adicional',
        ]
      },
      {
        heading: 'IARP — Permiso Internacional de Radioaficionados',
        table: {
          headers: ['Aspecto', 'Detalle'],
          rows: [
            ['Base legal', 'Ley 24.730 y Resolución 3745 SC/1997'],
            ['Alcance', 'Países de América signatarios del Convenio Interamericano (no todo el mundo)'],
            ['Clases', 'Dos Clases: Clase 1 y Clase 2'],
            ['Restricción de categoría para obtenerlo', 'No hay restricciones — cualquier categoría'],
            ['IARP Clase 1', 'Todas las bandas'],
            ['IARP Clase 2', 'Solo bandas por sobre 30 MHz (VHF y superiores)'],
          ]
        }
      }
    ]
  },
  {
    id: 'reg-infracciones',
    icon: '⚠️',
    title: 'Infracciones y Sanciones',
    tags: ['Cap. XIII — XIII.1 a XIII.6'],
    sections: [
      {
        heading: 'Escala progresiva de sanciones',
        formulas: ['1° Llamado de atención → 2° Apercibimiento → 3° Sanción económica → 4° Suspensión → 5° Cancelación de la licencia']
      },
      {
        heading: 'Infracciones generales',
        items: [
          'Operar sin licencia vigente',
          'Comunicar con estaciones no autorizadas',
          'Referirse a temas de índole política, religiosa o racial',
          'Transmitir música',
          'Grabar emisiones de terceros y retransmitirlas',
          '⚠️ Ceder el micrófono a otro radioaficionado NO es infracción',
        ]
      },
      {
        heading: 'Infracciones de identificación',
        items: [
          'Identificarse con señal distintiva de otro radioaficionado',
          'Omitir la ubicación geográfica en la señal de estación móvil',
          'Utilizar Señal Distintiva Especial vencida o no autorizada',
          'Omitir "en Práctica Operativa" cuando corresponda',
          '⚠️ Mencionar señal del titular + propia: es el procedimiento CORRECTO, no infracción',
        ]
      },
      {
        heading: 'Infracciones operativas',
        items: [
          'Transmitir en frecuencia y/o potencia no autorizada para la categoría',
          'Transmitir textos encriptados',
          'Participar en concursos sobre frecuencias no autorizadas',
          'Trasladar la estación fija por más de 120 días sin notificar al ENACOM',
        ]
      }
    ]
  },
  {
    id: 'reg-bandas-novicio',
    icon: '📻',
    title: 'Plan de Bandas — Categoría Novicio',
    tags: ['Anexo A — PB.1 a PB.12, PBN.1 a PBN.15'],
    sections: [
      {
        heading: 'Clases de emisión — resumen',
        table: {
          headers: ['Código', 'Modo', 'Descripción'],
          rows: [
            ['A1A', 'CW', 'Telegrafía — Código Morse'],
            ['A3E', 'AM', 'Telefonía — Amplitud Modulada, Doble Banda Lateral'],
            ['J3E', 'SSB/BLU', 'Telefonía — Banda Lateral Única, Portadora Suprimida'],
            ['F3E', 'FM', 'Telefonía — Modulación de Frecuencia'],
            ['J2D', 'PACKET/APRS', 'Datos — portadora suprimida con subportadora de audio'],
            ['F1B', 'RTTY', 'Teletipo — FSK directo'],
          ]
        }
      },
      {
        heading: 'Bandas disponibles para Novicio — restricciones clave',
        table: {
          headers: ['Banda', 'Acceso Novicio', 'Restricción / Potencia'],
          rows: [
            ['2200 m (136 kHz)', '✓', 'PIRE máx. 1 W'],
            ['630 m (475 kHz)', '✓', 'PIRE máx. 5 W'],
            ['60 m (5 MHz)', '✓', 'PIRE máx. 25 W'],
            ['80 m (3,5 MHz)', '✓', 'Atribución mixta primaria/secundaria según segmento'],
            ['17 m (18 MHz)', '⚠️ Limitado', 'SOLO puede emitir una Radiobaliza'],
            ['20 m (14 MHz)', '⚠️ Limitado', 'NO puede operar en 14000–14070 kHz'],
            ['15 m (21 MHz)', '⚠️ Limitado', 'Solo en ALGUNOS segmentos'],
            ['30 m (10 MHz)', '✗ No puede', 'Banda restringida para Novicio'],
            ['70 cm (430 MHz)', '✓', 'Acceso completo'],
            ['2 m (144 MHz)', '✓', 'Acceso completo'],
            ['23 cm (1,2 GHz)', '⚠️ Limitado', 'Solo tierra→espacio en 1260–1270 MHz (satélite)'],
          ]
        }
      },
      {
        heading: 'Anchura de banda máxima para DIGIMODOS',
        table: {
          headers: ['Bandas', 'BW máximo'],
          rows: [
            ['2 m y 10 m', '<= 16 kHz'],
            ['40 m y 80 m', '<= 3 kHz'],
          ]
        }
      },
      {
        heading: 'Normas generales del Plan de Bandas',
        items: [
          'NO se puede transmitir en los EXTREMOS de la banda (la señal podría salir de la banda autorizada)',
          'Frecuencias de uso exclusivo para un modo: solo se puede usar ESE modo, aunque esté libre',
          'Bandas atribuidas con carácter SECUNDARIO: no se puede reclamar protección ante servicios primarios',
          'Transmisiones por satélite: solo en los SEGMENTOS autorizados para uso satelital',
          'Transmisiones en AM en la banda de 3 cm: NO están permitidas para Novicio',
        ]
      }
    ]
  }
]