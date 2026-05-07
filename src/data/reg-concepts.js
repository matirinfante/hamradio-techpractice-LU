// src/data/reg-concepts.js
// Contenido verificado contra las respuestas exactas del banco ENACOM (reg-questions.js)

export const REG_CONCEPTS = [
  {
    id: 'reg-general',
    icon: '📋',
    title: 'Reglamento General — Definiciones Clave',
    tags: ['Cap. I — I.1 a I.34'],
    sections: [
      {
        heading: 'Autoridad de Aplicación (ENACOM)',
        text: 'El ENACOM (Ente Nacional de Comunicaciones) es la única Autoridad de Aplicación del Reglamento General de Radioaficionados (Resolución ENACOM N° 3635 del 30 de octubre de 2017).',
        items: [
          'Facultades ENACOM: limitar / denegar / suspender / cancelar licencias, y asignar / modificar señales distintivas (II.1 → a y b)',
          'Tomar exámenes y dictar cursos NO son facultades del ENACOM — son competencia de Radio Clubes e Instituciones Autorizadas',
          'Los trámites ante ENACOM los gestionan los Radio Clubes y las Instituciones Autorizadas (IV.2 → a y d)',
        ]
      },
      {
        heading: 'Definiciones esenciales',
        table: {
          headers: ['Término', 'Definición clave'],
          rows: [
            ['Radioaficionado', 'Persona autorizada, carácter individual, SIN fines de lucro — instrucción, intercomunicación y estudios técnicos (I.7)'],
            ['Radio Club', 'Persona Jurídica de Orden Privado — Asociación Civil sin fines de lucro que agrupa radioaficionados (I.8)'],
            ['Institución Autorizada', 'Puede dictar cursos Y tomar exámenes de ingreso/ascenso (III.13 = Sí, III.16 = Sí)'],
            ['Institución Reconocida', 'Puede dictar cursos y dar Prácticas Operativas — NO puede tomar exámenes (III.14 = Sí, III.15 = No)'],
            ['Licencia', 'Otorgada por ENACOM a personas físicas y jurídicas; faculta a instalar y operar en sus bandas, categorías y condiciones (I.11)'],
            ['Señal Distintiva', 'Identificación otorgada por el ENACOM — NO por la IARU (I.14)'],
            ['Categoría', 'Nivel otorgado por ENACOM; conlleva derechos y obligaciones (I.15)'],
          ]
        },
        note: 'La Institución Reconocida SÍ puede dictar cursos — lo que NO puede es tomar exámenes de ingreso o ascenso.'
      },
      {
        heading: 'Estaciones y sistemas digitales',
        table: {
          headers: ['Tipo', 'Característica principal'],
          rows: [
            ['Repetidora', 'Estación FIJA, retransmisión automática, abierta al tráfico general — caracterizada por señal distintiva, posición, subtono y frecuencia (I.17)'],
            ['Digipeater', 'Recibe y retransmite datos digitales (Packet-Radio) en tiempo real en la MISMA frecuencia (I.18)'],
            ['TNC', 'Conecta computadoras con equipos de radio para datos digitales mediante un módem (I.19)'],
            ['BBS', 'Sistema automático de almacenamiento y distribución de mensajes; acceso sin limitaciones; responsable = titular (I.20)'],
            ['PMS/PBBS', 'TNC para almacenamiento de mensajes personales — realiza correo electrónico entre radioaficionados (I.21)'],
            ['Forwarding', 'Mecanismo de los BBS para distribuir mensajes con otros BBS (I.22)'],
            ['Radiobaliza', 'Estación transmisora; emite a intervalos regulares en UNA sola frecuencia fija; datos de potencia, antena y altura (I.27)'],
          ]
        }
      },
      {
        heading: 'Definiciones operativas',
        table: {
          headers: ['Término', 'Definición'],
          rows: [
            ['Contacto DX', 'Comunicados entre estaciones con distancia o inaccesibilidad geográfica; intercambios MÍNIMOS e indispensables (I.16)'],
            ['Concurso', 'Evento nacional y/o internacional donde se ponen a prueba las habilidades de los radioaficionados (I.32)'],
            ['Tarjeta QSL', 'Confirmación (postal o virtual) que intercambian los Radioaficionados por sus comunicados (I.23)'],
            ['Código Morse', 'Sistema de escritura UIT-R M.1677-1: puntos (cortos), rayas (largos) y silencios (espacios) (I.25)'],
            ['Ética Operativa', 'Conjunto de deberes, obligaciones, conductas y principios del Reglamento y la IARU (I.33)'],
            ['Desastre', 'Interrupción del funcionamiento social con desproporción entre medios necesarios y disponibles (I.30)'],
            ['Emergencia', 'Situación adversa que puede ser atendida por los medios disponibles localmente (I.31)'],
          ]
        }
      },
      {
        heading: 'Ética Operativa y IARU',
        items: [
          'IARU = International Amateur Radio Union — representa los intereses de los radioaficionados ante foros internacionales (I.46)',
          'Principios del Código de Conducta IARU (I.45 → a, c, e, g): Sentido social y espíritu fraternal · Comprensión · Buenos modales · Tolerancia',
          'Orden de observancia (I.47 → a): 1° Reglamento General de Radioaficionados → 2° Disposiciones IARU → 3° Reglamentación UIT',
          'IBP: red mundial de radiofaros HF organizado por IARU, una frecuencia por banda (20, 17, 15, 12 y 10 metros) (I.29)',
        ]
      }
    ]
  },

  {
    id: 'reg-licencias',
    icon: '📄',
    title: 'Licencias, Categorías y Vigencias',
    tags: ['Cap. I, IV — I.35 a I.44, IV.1 a IV.9'],
    sections: [
      {
        heading: 'Categorías de Radioaficionados',
        table: {
          headers: ['Categoría', 'Edad mínima', 'Potencia máxima RF', 'Requisito de ascenso'],
          rows: [
            ['Novicio',  '9 años',  '200 W', '3 años de actividad ininterrumpida + examen (IV.6)'],
            ['General',  '13 años', 'No especificada', 'Examen (IV.4)'],
            ['Superior', '—',       'No especificada', 'Examen'],
            ['Especial', '—',       '—', 'Cat. Superior + 20 años de actividad ininterrumpida (IV.8)'],
          ]
        },
        note: 'Radio Clubes, Instituciones Autorizadas e Instituciones Reconocidas tienen categoría GENERAL (III.1). Las categorías válidas son SOLO: Novicio, General, Superior y Especial (IV.1 → b, d, e, f).'
      },
      {
        heading: 'Vigencias y plazos clave',
        table: {
          headers: ['Concepto', 'Plazo / Condición'],
          rows: [
            ['Vigencia de la licencia', '5 años (I.38)'],
            ['Plazo para renovar (tras los 5 años)', '12 meses adicionales (IV.9)'],
            ['Condición de renovación', 'Al realizar el trámite — NO es automática (I.39)'],
            ['Vigencia de autorización de Repetidora', '5 años o hasta cancelación/caducidad del titular (I.40)'],
            ['Plazo para desinstalar — CADUCIDAD de licencia', '90 días (I.43)'],
            ['Plazo para desinstalar — CANCELACIÓN de licencia', '10 días (I.44)'],
            ['Señal distintiva reservada por fallecimiento', '2 años (VIII.8)'],
            ['Señal Distintiva Especial', '1 año de vigencia (VIII.9)'],
            ['Certificado de Aprobación de Examen', '6 meses de validez ante ENACOM (XII.17)'],
          ]
        }
      },
      {
        heading: 'Reglas importantes sobre la licencia',
        items: [
          'La licencia habilita AMBOS servicios: Radioaficionados Y Radioaficionados por Satélite (I.35)',
          'Conexión a líneas telefónicas: SOLO está permitida exclusivamente ante emergencias (I.37)',
          'Señal distintiva: debe transmitirse cada 10 minutos (I.41)',
          'Redes de Emergencia/Desastre: en frecuencias designadas y en los casos/plazos que determine la Autoridad competente (I.42)',
          'Estaciones sujetas a Resolución SC 329/2000 o las que la reemplacen (I.36)',
        ]
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
            ['Dictar cursos', '✓', '✓', '✓ (III.14)'],
            ['Tomar exámenes ingreso/ascenso', '✓', '✓', '✗ (III.15)'],
            ['Dar Prácticas Operativas', '✓', '✓', '✓ (XII.4)'],
            ['Gestionar trámites ante ENACOM', '✓', '✓ (III.16)', '✗'],
            ['Otorgar Certificados de Radioescucha', '✓ (solo RC)', '✗', '✗'],
            ['Poseer filiales', '✓ (misma prov.)', '✗', '✗'],
            ['Solicitar Señales Distintivas Especiales', '✓', '✓', '✓'],
          ]
        },
        note: 'La diferencia clave entre Autorizada y Reconocida: la Reconocida puede dictar cursos y dar prácticas, pero NO puede tomar exámenes ni gestionar trámites ante ENACOM.'
      },
      {
        heading: 'Filiales de Radio Clubes',
        items: [
          'Solo en localidades de la MISMA PROVINCIA donde no haya Radio Club (III.8)',
          'El radioaficionado a cargo: categoría mínima GENERAL o Superior (III.9 → b y c)',
          'Debe estar habilitado en el Libro de Actas del Radio Club (III.10)',
          'Operación: señal del Radio Club + barra + "filial" + nombre de localidad (III.11)',
          'Las filiales NO pueden efectuar trámites ante el ENACOM (III.12)',
        ]
      },
      {
        heading: 'Identificación al operar estación del Radio Club',
        items: [
          '1° Señal distintiva del Radio Club — 2° Señal distintiva propia (III.2 → a)',
          'Bandas permitidas: las de la CATEGORÍA DEL OPERADOR, no las del Radio Club (III.3)',
          'Práctica Operativa de aspirantes: señal del Radio Club + aclarar "en Práctica Operativa" (III.4)',
        ]
      },
      {
        heading: 'El Radioaficionado y los trámites',
        items: [
          'El radioaficionado NO puede tramitar directamente ante el ENACOM (III.6 → No)',
          'Los trámites ante ENACOM los gestionan: Radio Clubes y/o Instituciones Autorizadas (IV.2 → a y d)',
        ]
      }
    ]
  },

  {
    id: 'reg-estaciones',
    icon: '📡',
    title: 'Estaciones — Tipos, Operación e Identificación',
    tags: ['Cap. VIII, IX — VIII.1 a VIII.13, IX.1 a IX.11'],
    sections: [
      {
        heading: 'Estructura de la señal distintiva',
        formulas: [
          'Señal = PREFIJO + SUFIJO',
          'Prefijo → identifica el PAÍS (Argentina: LU / LW) (VIII.2)',
          'Primera/s letra/s del sufijo → identifica la PROVINCIA (VIII.3)',
        ]
      },
      {
        heading: 'Asignación del sufijo',
        table: {
          headers: ['Situación', 'Criterio de asignación'],
          rows: [
            ['Solo estaciones móviles', 'Domicilio del DNI del radioaficionado (VIII.4)'],
            ['Estación fija (+ móviles)', 'Domicilio de emplazamiento de la estación FIJA (VIII.5)'],
          ]
        }
      },
      {
        heading: 'Sufijo de 2 letras',
        items: [
          'Asignado a categorías: Superior y Especial (VIII.6)',
          'Excepción: familiar del titular fallecido puede reclamarlo; señal reservada por 2 años (VIII.7, VIII.8)',
        ]
      },
      {
        heading: 'Señales Distintivas Especiales',
        items: [
          'Vigencia: 1 año (VIII.9)',
          'Pueden solicitarlas: Radioaficionados General o Superior, Radio Clubes, Instituciones Autorizadas e Instituciones Reconocidas (VIII.10 → a y b)',
          'Los Novicio NO pueden solicitarlas individualmente',
          'No se pueden tener dos o más vigentes simultáneamente (VIII.13)',
          'Con señal especial: cualquier radioaficionado del equipo puede operar en TODAS las bandas del titular (VIII.11)',
        ]
      },
      {
        heading: 'Condiciones para solicitar Señal Distintiva Especial',
        items: [
          'Haber participado en tres concursos distintos con señal distintiva propia (VIII.12 → a)',
          'Haber realizado en cada uno un mínimo de 500 contactos (VIII.12 → b)',
        ]
      },
      {
        heading: 'Operación de estaciones ajenas',
        formulas: [
          'Identificación: señal del TITULAR + barra + señal del OPERADOR + letra de la división política (IX.3)',
        ],
        items: [
          'Solo puede operar quien el titular autorice — no cualquier radioaficionado (IX.2)',
          'Bandas: las de la categoría del OPERADOR, no las del titular (IX.4)',
          'Estaciones fijas múltiples: todas deben declararse ante el ENACOM (IX.6)',
          'Traslado de estación fija por más de 120 días: solicitar cambio de domicilio (IX.7)',
          'Operación de estación móvil: mencionar señal distintiva + ubicación geográfica + condición de "móvil" (IX.9)',
          'Estructura soporte de antenas: autorización ante la ANAC (IX.8)',
          'Estaciones terrenas del servicio por satélite: NO requieren registro ante ENACOM (IX.11)',
          'Estación espacial (satélite): responsable primario debe ser categoría GENERAL o SUPERIOR (IX.10)',
        ]
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
            ['Poner en funcionamiento (desde autorización)', '90 días máximo (X.4)'],
            ['Inactividad máxima antes de caducidad automática', '60 días corridos (X.5)'],
            ['Comunicar inicio de operaciones al ENACOM', '15 días corridos (X.8)'],
            ['Dar de baja (desde el cese de emisiones)', '15 días corridos (X.10)'],
            ['Vigencia de la autorización', '5 años o hasta cancelación/caducidad del titular (I.40)'],
          ]
        }
      },
      {
        heading: 'Causas de caducidad de la autorización',
        items: [
          'No haber informado el inicio de operaciones dentro de los 15 días (X.9 → a)',
          'Inactividad comprobada mayor a 60 días corridos (X.9 → b)',
          'No haber renovado la licencia del titular o la autorización en el período reglamentario (X.9 → c)',
          '⚠️ Un apercibimiento por infracción NO causa caducidad automática (X.9 → d no es respuesta correcta)',
        ]
      },
      {
        heading: 'Requisitos y obligaciones',
        items: [
          'Toda repetidora DEBE estar autorizada por el ENACOM antes de operar (X.1)',
          'Bandas cruzadas VHF/UHF: se puede solicitar; se autoriza en determinadas zonas geográficas (X.2, X.3)',
          'Subtonos CTCSS: permitidos si el código es aprobado por ENACOM y es de conocimiento público (X.6)',
          'Identificación: señal distintiva del titular + localidad de emplazamiento de la repetidora (X.7)',
          'Sistema de apagado: obligatorio (X.13)',
          'Al dar de baja: siempre se deben desmantelar las instalaciones radioeléctricas (X.11)',
          'Enlace de 2+ repetidoras: requiere estudio técnico de enlace + conformidad escrita de todos los titulares (X.12)',
          'Control remoto por radio: requiere autorización ENACOM; la frecuencia NO puede ser de bandas de radioaficionados (X.14, X.15)',
        ]
      }
    ]
  },

  {
    id: 'reg-examenes',
    icon: '📝',
    title: 'Exámenes, Prácticas e Instructores',
    tags: ['Cap. XI, XII — XI.1 a XI.3, XII.1 a XII.25'],
    sections: [
      {
        heading: 'Radiobalizas (Cap. XI)',
        items: [
          'Categoría requerida: ninguna determinada — cualquier radioaficionado con licencia vigente (XI.1)',
          'Límite por emplazamiento: solo UNA señal de radiobaliza desde el mismo lugar (XI.2)',
          'Notificación al ENACOM: con 15 días de anticipación, indicando frecuencia, domicilio y potencia (XI.3)',
        ]
      },
      {
        heading: 'Sistema de exámenes',
        items: [
          'Quiénes pueden tomar exámenes: Radio Clubes e Instituciones Autorizadas — NO las Reconocidas (XII.1 → a y b)',
          'Quiénes pueden dar Prácticas Operativas: Radio Clubes, Instituciones Autorizadas e Instituciones Reconocidas (XII.4 → a, b y c)',
          'Se puede rendir en condición de LIBRE sin haber cursado en ninguna institución (XII.2)',
          'Formato del examen: ESCRITO. Excepción: no videntes o imposibilitados para escribir → oral (XII.3)',
          'Certificado de Aprobación: 6 meses de validez para presentar ante ENACOM (XII.17)',
          'La certificación de aprobación NO autoriza a instalar ni operar equipos — hay que esperar la licencia del ENACOM (XII.18)',
        ]
      },
      {
        heading: 'Telegrafía para Novicio',
        items: [
          'El examen de telegrafía para Novicio es TEÓRICO (no práctico) (XII.19)',
          '1 palabra = 5 caracteres (XII.20)',
          '1 letra (A-Z) = 1 carácter (XII.21)',
          '1 número o signo de puntuación = 2 caracteres (XII.22)',
        ]
      },
      {
        heading: 'Instructores',
        table: {
          headers: ['Aspecto', 'Detalle'],
          rows: [
            ['Categoría mínima', 'GENERAL (XII.13)'],
            ['Funciones (XII.12 → a, b, c)', 'Dictar cursos · Tomar exámenes · Coordinar Prácticas Operativas'],
            ['Sancionados por ENACOM', 'NO pueden ser instructores (XII.14)'],
            ['Familiares directos', 'NO puede tomarles examen (XII.15)'],
            ['Registro', 'Debe estar en el Libro de Actas del Radio Club (XII.6)'],
            ['Instructor a distancia', 'Opera con su PROPIA señal distintiva, no la del Radio Club (XII.10)'],
            ['Autorización a distancia', 'Debe constar en el Libro de Actas con validez expresamente detallada (XII.11)'],
          ]
        },
        note: 'Firmar Certificados de Aprobación NO es función del Instructor — eso corresponde al Veedor y autoridades del Radio Club.'
      },
      {
        heading: 'Veedores',
        items: [
          'Categoría: GENERAL o SUPERIOR (I.34)',
          'Designado por el Radio Club o Institución Autorizada',
          'Funciones (XII.24 → b y c): firmar el acta de examen y el certificado de aprobación',
          'NO participa en la confección del examen ni atiende consultas de los examinados',
          'NO necesita pertenecer al mismo Radio Club o Institución que toma el examen (XII.25b)',
          'Ante requerimiento de Inst. Autorizada a un RC: el RC designa radioaficionado de categoría mínima General o Superior (XII.16 → a y b)',
        ]
      },
      {
        heading: 'Prácticas Operativas',
        items: [
          'Supervisa: el INSTRUCTOR (no el Veedor) (XII.5)',
          'El instructor certifica que el aspirante cumplió los requisitos (XII.6)',
          'Prácticas de recepción: mínimo 6 horas (XII.7)',
          'Deben asentarse en el Libro de Guardia (XII.8)',
          'Con distancia o dificultad geográfica: pueden realizarse en filiales o en el domicilio del Instructor (XII.9)',
          'Aspirantes se identifican: señal del Radio Club + "en Práctica Operativa" (III.4)',
        ]
      },
      {
        heading: 'Libro de Guardia — qué debe consignarse',
        items: [
          'a) Fecha, hora de comienzo y finalización del comunicado (XII.23 → a)',
          'b) Clase de emisión empleada (XII.23 → b)',
          'd) Señal distintiva de la estación corresponsal (XII.23 → d)',
          '⚠️ La potencia transmitida (c) NO figura en las respuestas correctas de XII.23',
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
          'En tránsito o residencia temporaria: deben gestionar autorización ante los RADIO CLUBES (VI.1 → a)',
          'Excepción: radioaficionados de países signatarios del IARP están exceptuados de gestionar autorización (VI.2 → a)',
        ]
      },
      {
        heading: 'IARP — Permiso Internacional de Radioaficionados',
        table: {
          headers: ['Aspecto', 'Detalle'],
          rows: [
            ['Base legal', 'Ley 24.730 y Resolución 3745 SC/1997 (I.13)'],
            ['Sigla', 'I.A.R.P. (I.12)'],
            ['Alcance', 'Países de América signatarios del Convenio Interamericano — no todo el mundo (VII.1)'],
            ['Clases', 'Dos Clases: Clase 1 y Clase 2 (VII.2)'],
            ['Restricción de categoría', 'No hay restricciones — cualquier categoría puede obtenerlo (VII.3 → d)'],
            ['IARP Clase 1', 'Faculta a operar en TODAS las bandas (VII.4)'],
            ['IARP Clase 2', 'Faculta a operar SOLO en bandas por sobre 30 MHz / VHF y superiores (VII.5)'],
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
        heading: 'Escala progresiva de sanciones (XIII.6)',
        formulas: ['1° Llamado de atención → 2° Apercibimiento → 3° Sanción económica → 4° Suspensión → 5° Cancelación de la licencia']
      },
      {
        heading: 'Infracciones generales (XIII.1 → a, c, e, f)',
        items: [
          'a) Operar la estación sin licencia vigente',
          'c) Comunicar con estaciones no autorizadas',
          'e) Referirse a temas de índole política, religiosa o racial',
          'f) Transmitir música',
          '✓ NO es infracción: ceder el micrófono a otro Radioaficionado (b)',
          '✓ NO es infracción: grabar emisiones de terceros (d) — sí lo es retransmitirlas',
        ]
      },
      {
        heading: 'Infracciones de identificación (XIII.2 → a, b, d, f)',
        items: [
          'a) Identificarse con señal distintiva de otro Radioaficionado',
          'b) Omitir la ubicación geográfica al operar una estación móvil',
          'd) Utilizar Señal Distintiva Especial vencida o no autorizada',
          'f) Omitir mencionar "en Práctica Operativa" cuando corresponda',
          '✓ NO es infracción (c): mencionar señal del titular + propia al usar su estación — es el procedimiento CORRECTO',
          '✓ NO es infracción (e): mencionar señal del Radio Club + propia al usar su estación — es el procedimiento CORRECTO',
        ]
      },
      {
        heading: 'Infracciones operativas (XIII.3 → a, b, c)',
        items: [
          'a) Transmitir en frecuencia y/o potencia no autorizada para la categoría',
          'b) Transmitir textos encriptados',
          'c) Realizar o participar en concursos sobre frecuencias no autorizadas',
          '⚠️ Trasladar la estación fija por 90 días sin notificar NO es infracción (d incorrecta) — el límite es 120 días (IX.7)',
        ]
      },
      {
        heading: 'Infracciones relativas a Repetidoras (XIII.4 → a, b, c)',
        items: [
          'a) No contar con dispositivos de identificación',
          'b) Utilizar frecuencias diferentes a las autorizadas',
          'c) Entrelazar Estaciones Repetidoras sin la autorización correspondiente',
          '⚠️ Ceder la autorización de una repetidora (d) no figura entre las respuestas correctas del banco',
        ]
      },
      {
        heading: 'Infracciones relativas a Radiobalizas (XIII.5 → a, b, c)',
        items: [
          'a) Operar una Radiobaliza no notificada a la Autoridad de Aplicación',
          'b) Emitir simultáneamente más de una Radiobaliza en la misma banda y desde el mismo emplazamiento',
          'c) Operar con potencias superiores a las autorizadas en el Reglamento',
          '⚠️ Operar con 50 W en la banda de 2m (d) no figura entre las respuestas correctas — la restricción es c)',
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
        heading: 'Clases de emisión — resumen completo',
        table: {
          headers: ['Modo', 'Clase', 'Tipo / Modulación'],
          rows: [
            ['CW',    'A1A',     'Telegrafía — Código Morse'],
            ['AM',    'A3E',     'Telefonía — Amplitud Modulada — Doble Banda Lateral'],
            ['SSB',   'J3E',     'Telefonía — Banda Lateral Única con Portadora Suprimida'],
            ['FM',    'F3E',     'Telefonía — Modulación de Frecuencia — Doble Banda Lateral'],
            ['PACKET (HF)',  'J2D', 'Telemando — BLU con Portadora Suprimida — datos digitales'],
            ['PACKET (VHF/UHF)', 'F2D', 'Telemando — Modulación de Frecuencia — datos digitales'],
            ['APRS',  'F2D / J2D', 'Sistema de Informe de Posición Automático'],
            ['RTTY',  'F1B',     'Teletipo — Telegrafía por Desplazamiento de Frecuencia'],
            ['ATV',   'A3F',     'Televisión — Doble Banda Lateral'],
            ['SSTV',  'F3F',     'Televisión — Modulación de Frecuencia'],
            ['FAX',   'A3C',     'Facsímil'],
            ['DV',    'F1E / G1E', 'Voz Digital'],
          ]
        },
        note: 'PB.6: J2D corresponde a PACKET (HF) y APRS (respuestas b y d correctas).'
      },
      {
        heading: 'Bandas HF — acceso Novicio (según Plan de Bandas oficial)',
        table: {
          headers: ['Banda', 'Frecuencias', 'Acceso Novicio', 'Notas clave'],
          rows: [
            ['2200 m', '135,7–137,8 kHz', '✓ Todo — Secundario', 'PIRE máx. 1 W · BW máx. 200 Hz · AM, FM, CW, SSB, DIGIMODOS…'],
            ['630 m',  '472–479 kHz',     '✓ Todo — Secundario', 'PIRE máx. 5 W · BW máx. 500 Hz · CW y DIGIMODOS únicamente'],
            ['160 m',  '1800–2000 kHz',   '✓ Todo — Primario',   'BW DIGIMODOS ≤ 3 kHz · QRP SSB: 1910 kHz'],
            ['80 m',   '3500–3800 kHz',   '✓ Todo — Primario',   'BW DIGIMODOS ≤ 3 kHz · Emergencias: 3750 kHz · QRP CW: 3560 kHz'],
            ['80 m',   '3800–4000 kHz',   '✓ Todo — Secundario', 'Emergencias IARU: 3985 kHz'],
            ['60 m',   '5351,5–5366,5 kHz', '✓ Todo — Secundario', 'PIRE máx. 25 W · CW, SSB, FM, DIGIMODOS, ATV, SSTV, FAX, PACKET'],
            ['40 m',   '7000–7300 kHz',   '✓ Todo — Primario',   'BW DIGIMODOS ≤ 3 kHz · Emergencias: 7060/7240/7275 kHz'],
            ['30 m',   '10100–10150 kHz', '✗ NO disponible',     'Solo G y S · Potencia máx. 250 W · Prohibido concursos'],
            ['20 m',   '14000–14070 kHz', '✗ NO (solo G y S)',   'CW exclusivo para General y Superior'],
            ['20 m',   '14070–14099 kHz', '✓ Sí',               'CW, DIGIMODOS, RTTY, PACKET · BW ≤ 3 kHz'],
            ['20 m',   '14099–14101 kHz', '✗ Exclusivo IBP',     'Solo radiofaros internacionales IBP'],
            ['20 m',   '14101–14350 kHz', '✗ NO (solo G y S)',   'SSB, CW, DIGIMODOS — solo General y Superior'],
            ['17 m',   '18068–18168 kHz', '⚠️ Solo Radiobaliza', 'Ningún segmento con N en el plan — solo permitida Radiobaliza (PBN.12)'],
            ['15 m',   '21000–21070 kHz', '✗ NO (solo G y S)',   'CW exclusivo General y Superior'],
            ['15 m',   '21070–21149 kHz', '✓ Sí',               'CW, DIGIMODOS, RTTY, PACKET · BW ≤ 3 kHz'],
            ['15 m',   '21149–21151 kHz', '✗ Exclusivo IBP',     'Solo radiofaros internacionales IBP'],
            ['15 m',   '21151–21250 kHz', '✗ NO (solo G y S)',   'CW y SSB — General y Superior'],
            ['15 m',   '21200–21310 kHz', '✓ Solo Satélite',     'Novicio EXCLUSIVAMENTE usando SATÉLITES como repetidores'],
            ['15 m',   '21250–21450 kHz', '✗ NO (solo S)',       'Solo Superior'],
            ['12 m',   '24890–24990 kHz', '✗ NO disponible',     'Solo G y S — Novicio no puede emitir en esta banda'],
          ]
        }
      },
      {
        heading: 'Bandas VHF/UHF/SHF — acceso Novicio',
        table: {
          headers: ['Banda', 'Frecuencias', 'Acceso Novicio', 'Notas clave'],
          rows: [
            ['10 m',   '28000–29700 kHz', '✓ Casi todo', 'BW DIGIMODOS ≤ 16 kHz · 28300–28350: solo DX · Satélite: 29300–29510 kHz'],
            ['6 m',    '50–54 MHz',       '✓ Todo',       'BW DIGIMODOS ≤ 16 kHz · 51–51,1 MHz: Novicio SOLO en CW'],
            ['2 m',    '144–148 MHz',     '✓ Casi todo',  'BW DIGIMODOS ≤ 16 kHz · 145,79–145,8 MHz: PROHIBIDA (banda de protección) · 145,8–146 MHz: satélite exclusivo'],
            ['1,25 m', '220–225 MHz',     '✓ Todo',       'BW DIGIMODOS ≤ 200 kHz · 220,5–221 MHz: Novicio ÚNICAMENTE en PACKET'],
            ['70 cm',  '430–440 MHz',     '✓ Todo',       'BW DIGIMODOS ≤ 300 kHz · 432,08–432,1 MHz: solo señales débiles, potencia máx. 1 W · Satélite: 435–438 MHz'],
            ['23 cm',  '1240–1300 MHz',   '✓ Todo',       'BW DIGIMODOS ≤ 3 MHz · Satélite 1260–1270 MHz: Novicio solo uplink (tierra→espacio) por RR 5.282'],
            ['13 cm',  '2390–2450 MHz',   '✓ Todo',       'Satélite: 2400–2450 MHz'],
            ['9 cm',   '3300–3400 MHz',   '✓ Todo',       'BW DIGIMODOS ≤ 10 MHz'],
            ['5 cm',   '5650–5925 MHz',   '✓ Todo',       'Satélite 5830–5850 MHz: solo sentido Espacio→Tierra'],
            ['3 cm',   '10–10,5 GHz',     '✓ Todo',       'CW, SSB, FM, SSTV, ATV, FAX, DIGIMODOS — AM NO figura en la tabla (PBN.14)'],
            ['1,2 cm', '24–24,25 GHz',    '✓ Todo',       'Satélite: 24,048–24,049 GHz y 24,049–24,05 GHz'],
            ['6 mm',   '47–47,2 GHz',     '✓ Todo',       'AM, ATV, CW, SSB, DIGIMODOS, SSTV, FAX, PACKET'],
          ]
        }
      },
      {
        heading: 'Anchura de banda máxima para DIGIMODOS por banda',
        table: {
          headers: ['Bandas', 'BW DIGIMODOS máximo'],
          rows: [
            ['160 m, 80 m, 60 m, 40 m, 30 m, 20 m, 17 m, 15 m, 12 m', '≤ 3 kHz'],
            ['10 m, 6 m, 2 m', '≤ 16 kHz'],
            ['1,25 m (220 MHz)', '≤ 200 kHz'],
            ['70 cm (430 MHz)', '≤ 300 kHz'],
            ['23 cm (1,2 GHz)', '≤ 3 MHz'],
            ['9 cm, 5 cm, 3 cm, 1,2 cm, 6 mm', '≤ 10 MHz'],
          ]
        },
        note: 'PBN.10: BW ≤ 16 kHz en bandas de 2m y 10m. PBN.11: BW ≤ 3 kHz en bandas de 40m y 80m.'
      },
      {
        heading: 'Normas generales del Plan de Bandas',
        items: [
          'NO transmitir en los EXTREMOS de banda — la anchura de la señal saldría fuera del sector autorizado (PB.1)',
          'Frecuencias de uso exclusivo para un modo: solo se puede usar ESE modo, aunque esté libre (PBN.13)',
          'Bandas de carácter SECUNDARIO: solo se puede reclamar protección ante servicios también secundarios (PB.11)',
          'Transmisiones por satélite: solo en los segmentos ESPECÍFICAMENTE autorizados para satélite (PB.12)',
          'AM en la banda de 3 cm: NO figura en la tabla de destinos — no permitida para ninguna categoría (PBN.14)',
          '23 cm Satélite (Novicio): SOLO sentido tierra→espacio en 1260–1270 MHz (PBN.15, RR 5.282)',
          '15m Satélite (Novicio/General): 21200–21310 kHz SOLO usando satélites como repetidores',
          '10m Satélite (Novicio/General): 29300–29510 kHz SOLO usando satélites como repetidores',
          '5 cm Satélite: 5830–5850 MHz — limitado al sentido Espacio→Tierra (al revés que 23 cm)',
          'Forwarding en VHF: en 144 MHz solo entre 01:00 y 06:00 hs. En 220 MHz, 430 MHz y superiores: 24 hs.',
          '145,79–145,8 MHz: BANDA DE PROTECCIÓN — transmisión completamente prohibida para todas las categorías',
        ]
      }
    ]
  }
]