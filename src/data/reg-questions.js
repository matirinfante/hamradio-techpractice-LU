// src/data/reg-questions.js
// Banco ENACOM — Reglamentación y Ética Operativa (IF-2018-28577551-APN-DNPYC#ENACOM)
// Preguntas para categoría NOVICIO: Capítulos I–XIII + Preguntas Generales PB + Específicas PBN
//
// Campo `ans`: número (índice 0-based) para respuesta única, o array de números para múltiple.
// Las preguntas son EXACTAMENTE como aparecen en el banco oficial ENACOM, sin modificaciones.

export const REG_QUESTIONS = [

  // ══════════════════════════════════════════════════════════════
  // CAPÍTULO I – DISPOSICIONES GENERALES
  // ══════════════════════════════════════════════════════════════

  { id:'I.1', cat:'Cap. I',
    q:'¿Cuál es el objeto del "Reglamento General de Radioaficionados"?',
    opts:[
      'Regular la actividad de los Radioaficionados, Radio Clubes, Instituciones Autorizadas e Instituciones Reconocidas.',
      'Atribuir y reglamentar el uso de las bandas de frecuencias para el Servicio de Aficionados y el Servicio de Aficionados por Satélite, teniendo en consideración las condiciones de diseño, instalación y operación de estaciones radioeléctricas en sus respectivas bandas de frecuencias, resultantes de los avances tecnológicos, a fin de facilitar el acceso y el desarrollo de la actividad.',
      'Establecer criterios técnicos para el diseño de equipamiento destinado a la actividad de los Radioaficionados.',
    ],
    ans:[0,1],
    exp:'La respuesta correcta incluye las opciones a) y b). El objeto es tanto regular la actividad de los radioaficionados e instituciones, como atribuir y reglamentar el uso de las bandas de frecuencias para el Servicio de Aficionados y por Satélite.' },

  { id:'I.2', cat:'Cap. I',
    q:'¿Cuál es el alcance del "Reglamento General de Radioaficionados"?',
    opts:[
      'Servicio de Aficionados.',
      'Servicio de Aficionados por Satélite.',
      'Servicio de Aficionados y Servicio de Aficionados por Satélite.',
    ],
    ans:2,
    exp:'El alcance del Reglamento es el Servicio de Aficionados Y el Servicio de Aficionados por Satélite (opción c).' },

  { id:'I.3', cat:'Cap. I',
    q:'¿Cuál es la Autoridad de Aplicación para el "Reglamento General de Radioaficionados"?',
    opts:[
      'SECRETARÍA DE COMUNICACIONES (SC).',
      'COMISIÓN NACIONAL DE COMUNICACIONES (CNC).',
      'ENTE NACIONAL DE COMUNICACIONES (ENACOM).',
      'MINISTERIO DE COMUNICACIONES (MINCOM).',
    ],
    ans:2,
    exp:'La Autoridad de Aplicación es el ENACOM (Ente Nacional de Comunicaciones), según la Resolución ENACOM N° 3635 del 30 de octubre de 2017.' },

  { id:'I.4', cat:'Cap. I',
    q:'A los fines del Reglamento vigente en la República Argentina, los términos "aficionados" y "aficionados por satélite" ¿son considerados equivalentes a "radioaficionados" y "radioaficionados por satélite", respectivamente?',
    opts:['Sí.','No.'],
    ans:0,
    exp:'Sí (opción a). El Reglamento considera equivalentes ambos pares de términos.' },

  { id:'I.5', cat:'Cap. I',
    q:'Defina "SERVICIO DE RADIOAFICIONADOS":',
    opts:[
      'Servicio de radiocomunicación privado que tiene por objeto la instrucción de operadores comerciales.',
      'Servicio de radiocomunicación público que tiene por objeto los estudios técnicos efectuados por operadores comerciales.',
      'Servicio de radiocomunicación que tiene por objeto la instrucción individual, la intercomunicación y los estudios técnicos efectuados por Radioaficionados.',
      'Servicio de radiocomunicación privado que tiene por objeto la instrucción de operadores de radiodifusión.',
    ],
    ans:2,
    exp:'Opción c). El Servicio de Radioaficionados tiene por objeto la instrucción individual, la intercomunicación y los estudios técnicos efectuados por Radioaficionados.' },

  { id:'I.6', cat:'Cap. I',
    q:'Defina "SERVICIO DE RADIOAFICIONADOS POR SATÉLITE":',
    opts:[
      'Servicio de radiocomunicación privado que tiene por objeto la instrucción de operadores comerciales.',
      'Servicio de radiocomunicación que utiliza estaciones espaciales situadas en satélites artificiales de la Tierra para los mismos fines que el Servicio de Radioaficionados.',
      'Servicio de radiocomunicación privado que tiene por objeto la instrucción de operadores de radiodifusión.',
      'Servicio de radiocomunicación en el cual las señales emitidas o retransmitidas por estaciones espaciales están destinadas a la recepción directa por el público en general.',
    ],
    ans:1,
    exp:'Opción b). El Servicio de Radioaficionados por Satélite utiliza estaciones espaciales en satélites artificiales de la Tierra para los mismos fines que el Servicio de Radioaficionados.' },

  { id:'I.7', cat:'Cap. I',
    q:'Defina "RADIOAFICIONADO":',
    opts:[
      'Persona debidamente autorizada que se interesa en la radiotecnia con carácter exclusivamente individual, sin fines de lucro y que realiza con su estación actividades de instrucción, de intercomunicación y estudios técnicos.',
      'Persona debidamente autorizada que se interesa en la radiotecnia con carácter exclusivamente comercial, con fines de lucro y que realiza con su estación actividades de instrucción, de intercomunicación y estudios técnicos.',
      'Persona debidamente autorizada que se interesa en la radiotecnia con carácter exclusivamente individual, con fines de lucro y que realiza con su estación actividades de instrucción, de intercomunicación y estudios técnicos.',
      'Persona debidamente autorizada que se interesa en la radiotecnia con carácter exclusivamente individual, sin fines de lucro y que realiza con su estación actividades de intercomunicación con fines particulares.',
    ],
    ans:0,
    exp:'Opción a). El Radioaficionado actúa con carácter individual, sin fines de lucro, realizando instrucción, intercomunicación y estudios técnicos.' },

  { id:'I.8', cat:'Cap. I',
    q:'Defina "RADIO CLUB":',
    opts:[
      'Asociación Civil, integrada por cualquier operador de radio habilitado, cuyos objetivos fundamentales se apoyan en la agrupación de los mismos para propender a la difusión y fomento de la actividad radial.',
      'Asociación Civil, integrada por entidades que agrupan a operadores de radio, cuyos objetivos fundamentales se basan en la enseñanza y práctica de la actividad comercial.',
      'Persona Jurídica de Orden Privado cuya composición se tipifica dentro de la figura de Asociación Civil sin fines de lucro y sus objetivos fundamentales se apoyan en la agrupación de los Radioaficionados para fomentar el ingreso, enseñanza, difusión y práctica de la actividad.',
      'Asociación Civil, integrada por usuarios del Servicios de Banda Ciudadana cuyos objetivos fundamentales se apoyan en la agrupación de los mismos para propender a la difusión y fomento de la actividad radial.',
    ],
    ans:2,
    exp:'Opción c). El Radio Club es una Persona Jurídica de Orden Privado, Asociación Civil sin fines de lucro, cuyo objetivo es agrupar Radioaficionados para fomentar el ingreso, enseñanza, difusión y práctica de la actividad.' },

  { id:'I.9', cat:'Cap. I',
    q:'Defina "INSTITUCIÓN AUTORIZADA":',
    opts:[
      'Aquella institución, distinta de los Radio Clubes y de las Instituciones Reconocidas, autorizada por la Autoridad de Aplicación para dictar cursos sobre técnica, reglamentación y ética operativa, telegrafía y todo otro curso afín a la actividad, como así también, tomar exámenes para ingreso y ascenso de categorías de Radioaficionados.',
      'Aquella institución, distinta de los Radio Clubes, autorizada por la Autoridad de Aplicación para fomentar el ingreso, difusión y práctica de la actividad, a través de Prácticas Operativas.',
    ],
    ans:0,
    exp:'Opción a). La Institución Autorizada puede dictar cursos y tomar exámenes para ingreso y ascenso de categorías.' },

  { id:'I.10', cat:'Cap. I',
    q:'Defina "INSTITUCIÓN RECONOCIDA":',
    opts:[
      'Aquella institución, distinta de los Radio Clubes y de las Instituciones Autorizadas, reconocida por la Autoridad de Aplicación para fomentar el ingreso, difusión y práctica de la actividad, a través de Prácticas Operativas.',
      'Aquella institución, distinta de los Radio Clubes, autorizada por la Autoridad de Aplicación para dictar cursos sobre técnica, reglamentación y ética operativa, telegrafía y todo otro curso afín a la actividad, como así también, tomar exámenes para ingreso y ascenso de categorías de Radioaficionados.',
    ],
    ans:0,
    exp:'Opción a). La Institución Reconocida solo puede fomentar la actividad a través de Prácticas Operativas. NO toma exámenes.' },

  { id:'I.11', cat:'Cap. I',
    q:'Defina "LICENCIA DE RADIOAFICIONADO":',
    opts:[
      'Autorización que otorga un Radio Club reconocido a todas aquellas personas físicas o jurídicas que han cumplido con los requisitos reglamentarios.',
      'Autorización que otorga la Autoridad de Aplicación a todas aquellas personas jurídicas que hayan cumplido con los requisitos reglamentarios para obtener licencia, no facultando a instalar y operar estaciones del Servicio de Radioaficionados.',
      'Autorización que otorga la Autoridad de Aplicación a todas aquellas personas físicas y jurídicas que han cumplido con los requisitos establecidos en el Reglamento. Su otorgamiento las faculta a instalar y operar estaciones en sus respectivas bandas de frecuencia, categorías y condiciones.',
      'Autorización que otorga la Autoridad de Aplicación a todas aquellas personas jurídicas que han cumplido con los requisitos reglamentarios para obtener licencia y lo faculta para instalar y operar estaciones de Radioaficionado.',
    ],
    ans:2,
    exp:'Opción c). La Licencia la otorga el ENACOM a personas físicas y jurídicas que cumplen los requisitos, facultándolas a instalar y operar estaciones en sus bandas, categorías y condiciones.' },

  { id:'I.12', cat:'Cap. I',
    q:'¿Cuál es la sigla del PERMISO INTERNACIONAL DE RADIOAFICIONADOS?',
    opts:['I.A.R.P.','P.I.R.A.','I.R.P.A.'],
    ans:0,
    exp:'Opción a). La sigla correcta es I.A.R.P. (International Amateur Radio Permit / Permiso Internacional de Radioaficionados).' },

  { id:'I.13', cat:'Cap. I',
    q:'Defina "PERMISO INTERNACIONAL DE RADIOAFICIONADOS":',
    opts:[
      'Autorización extendida por la Autoridad de Aplicación de acuerdo con lo previsto en la Ley 24.730 y la Resolución 3745 SC/1997.',
      'Autorización extendida por la Autoridad de Aplicación de acuerdo con lo previsto en la Resolución SC 50/1998.',
    ],
    ans:0,
    exp:'Opción a). El IARP es la autorización extendida por la Autoridad de Aplicación según la Ley 24.730 y la Resolución 3745 SC/1997.' },

  { id:'I.14', cat:'Cap. I',
    q:'Defina "SEÑAL DISTINTIVA":',
    opts:[
      'Identificación otorgada por la Autoridad de Aplicación a un Radioaficionado, Radio Club, Institución Autorizada o Institución Reconocida.',
      'Identificación otorgada por IARU a un Radioaficionado, Radio Club, Institución Autorizada o Institución Reconocida.',
      'Código que representa una clase de emisión, compuesta por el tipo de modulación, anchura de banda y naturaleza de la información.',
    ],
    ans:0,
    exp:'Opción a). La Señal Distintiva es la identificación otorgada por la Autoridad de Aplicación (ENACOM).' },

  { id:'I.15', cat:'Cap. I',
    q:'Defina "CATEGORÍA" de Radioaficionado:',
    opts:[
      'Es el nivel de calificación que otorga la Autoridad de Aplicación a los titulares de licencias comerciales que hayan cumplido con los requisitos establecidos.',
      'Es el nivel de calificación que otorgan los a los titulares de licencia de Radioaficionado que hayan cumplido con los requisitos que para cada una de ellas se exige.',
      'Nivel de calificación que otorga la Autoridad de Aplicación a aquel Radioaficionado que cumpla con los requisitos establecidos en el Reglamento. Cada categoría conlleva derechos y obligaciones asociados a la misma.',
      'Es el nivel de calificación que otorga la Autoridad de Aplicación a los titulares de licencia de radiodifusión.',
    ],
    ans:2,
    exp:'Opción c). Cada categoría es otorgada por el ENACOM y conlleva derechos y obligaciones específicos (bandas, potencia, etc.).' },

  { id:'I.16', cat:'Cap. I',
    q:'Defina "CONTACTO DE DX":',
    opts:[
      'Se conviene en denominar así a aquellos comunicados de duración ilimitada en donde se intercambian datos, comentarios técnicos y nombre de los operadores.',
      'Comunicados entre estaciones que, por la distancia que las separa, inaccesibilidad geográfica, u otro factor de dificultad, no resulte frecuente la comunicación. Se realizan en los segmentos de bandas en que los contactos DX tienen prioridad y se limitan exclusivamente a intercambios de comunicación mínima e indispensable, con el objeto de facilitar la mayor cantidad de contactos posibles.',
      'Se conviene en denominar así a aquellos comunicados con varios Radioaficionados a la vez, en los que se intercambian datos técnicos, nombre de los operadores, domicilios y números de orden.',
      'Se conviene en denominar así a aquellos comunicados en los que se intercambian datos, comentarios generales, nombre de los operadores y datos de las estaciones.',
    ],
    ans:1,
    exp:'Opción b). Los contactos DX son comunicados entre estaciones distantes o de difícil acceso, limitados a intercambios mínimos indispensables.' },

  { id:'I.17', cat:'Cap. I',
    q:'Defina "ESTACIÓN REPETIDORA DE AFICIONADO":',
    opts:[
      'Estación destinada a la retransmisión automática de las comunicaciones que se realicen en el Servicio de Radioaficionados, reservada únicamente al titular de la misma.',
      'Estación destinada a la transmisión de comunicaciones que se realicen en la actividad comercial de radio y abierta a todos los usuarios.',
      'Estación fija, destinada a la retransmisión automática de las comunicaciones que se realicen en el Servicio de Radioaficionados y abierta al tráfico general de los mismos, caracterizada por la señal distintiva del titular de la estación, posición geográfica, subtono y frecuencia asignada.',
      'Estación destinada a la retransmisión automática de las comunicaciones que se realicen en el Servicio de Radioaficionados, reservada únicamente a los Radio Clubes titulares de la misma.',
    ],
    ans:2,
    exp:'Opción c). Estación FIJA, retransmisión automática, abierta al tráfico general, caracterizada por señal distintiva del titular, posición geográfica, subtono y frecuencia.' },

  { id:'I.18', cat:'Cap. I',
    q:'Defina "REPETIDOR DIGITAL (Digipeater)":',
    opts:[
      'Estación capaz de recibir y retransmitir información digital por paquete (Packet-Radio), en tiempo real, en la misma frecuencia, con capacidad de enlazar dos estaciones automáticamente. Se identifica con la señal distintiva del titular.',
      'Estación capaz de recibir información digital, en distinta frecuencia, con capacidad de enlazar dos estaciones automáticamente. Se identifica con la señal distintiva del titular.',
      'Estación capaz de recibir y retransmitir información emitida en cualquier modo, en tiempo real, en la misma frecuencia y con capacidad para enlazar varias estaciones a la vez.',
      'Estación capaz de recibir información analógica, en distinta frecuencia con capacidad de enlazar dos estaciones automáticamente. Se identifica con la señal distintiva del titular.',
    ],
    ans:0,
    exp:'Opción a). El Digipeater recibe y retransmite datos digitales (Packet-Radio) en tiempo real en la MISMA frecuencia.' },

  { id:'I.19', cat:'Cap. I',
    q:'Defina "CONTROLADOR NODO TERMINAL (TNC)":',
    opts:[
      'Es una unidad o programa que permite la conexión radial entre transceptores para el envío de datos analógicos. Se identifica con la señal distintiva del titular.',
      'Unidad o programa que permite la conexión entre computadoras y equipos de radio, para la recepción y transmisión de datos digitales mediante un módem, en las bandas y modos atribuidos al Servicio de Radioaficionados. Se identifica con la señal distintiva del titular.',
      'Es un equipo que permite la retransmisión automática de mensajes analógicos emitidos desde un radioaficionado a otro.',
      'Es un transceptor que permite la retransmisión automática de mensajes analógicos emitidos desde un radioaficionado a otro.',
    ],
    ans:1,
    exp:'Opción b). El TNC conecta computadoras con equipos de radio para transmisión y recepción de datos digitales mediante un módem.' },

  { id:'I.20', cat:'Cap. I',
    q:'Defina "SISTEMA DE BOLETINES Y BASE DE DATOS (BBS)":',
    opts:[
      'Sistema automático, compuesto por computadoras, equipos radioeléctricos y Controladores Nodo Terminal que permite el almacenamiento y la distribución de mensajes y archivos de Radioaficionados. El ingreso y utilización del mismo por parte de los Radioaficionados es sin ningún tipo de limitación de acceso o de impedimento de uso. Su responsable es el titular de la licencia y se identifica con la señal distintiva del mismo.',
      'Sistema manual, compuesto de transceptor y computadora, que agiliza el tránsito de paquetes digitales y distribuye información relativa a la actividad.',
      'Sistema automático, atendido o no, compuesto de uno o más equipos, que permite el contacto entre dos estaciones que emiten comunicaciones analógicas.',
      'Sistema manual, compuesto de transceptor y antena, que agiliza el tránsito de paquetes analógicos y distribuye información relativa a la actividad.',
    ],
    ans:0,
    exp:'Opción a). El BBS es un sistema automático compuesto por computadoras, equipos y TNCs, de acceso libre, cuyo responsable es el titular de la licencia.' },

  { id:'I.21', cat:'Cap. I',
    q:'Defina "SISTEMA DE MENSAJES PERSONALES (PMS/PBBS)":',
    opts:[
      'Controlador Nodo Terminal (CNT) para almacenamiento de mensajes personales. Realiza correo electrónico y se identifica con la señal distintiva del titular.',
      'Transceptor que posibilita el envío de mensajes generales dentro del correo electrónico entre Radioaficionados.',
      'TNC para almacenamiento de mensajes abiertos al tráfico general del correo electrónico de radioescuchas.',
      'Transceptor que posibilita el envío de mensajes en general dentro del correo electrónico entre estaciones de banda ciudadana.',
    ],
    ans:0,
    exp:'Opción a). El PMS/PBBS es un TNC para almacenamiento de mensajes personales, realiza correo electrónico y se identifica con la señal distintiva del titular.' },

  { id:'I.22', cat:'Cap. I',
    q:'Defina "DISTRIBUCIÓN DE MENSAJES (Forwarding)":',
    opts:[
      'Mecanismo utilizado por los BBS´s para la distribución de mensajes con otros BBS´s.',
      'Mecanismo utilizado por los digipeaters y TNC´s para almacenar mensajes.',
      'Mecanismo utilizado por las repetidoras del Servicio de Radioaficionados para distribuir y almacenar mensajes analógicos.',
      'Mecanismo utilizado por los Nodos para almacenar mensajes personales.',
    ],
    ans:0,
    exp:'Opción a). El Forwarding es el mecanismo utilizado por los BBS para distribuir mensajes con otros BBS.' },

  { id:'I.23', cat:'Cap. I',
    q:'Defina "TARJETA QSL":',
    opts:[
      'Confirmación (postal o virtual) que intercambian los Radioaficionados por sus comunicados realizados y los Radioescuchas por los comunicados recepcionados.',
      'Confirmación que intercambian los Radioaficionados en todos sus comunicados realizados y los radioescuchas por los comunicados recepcionados de estaciones de Radioaficionados.',
      'Confirmación que intercambian los Radioaficionados en todos sus comunicados realizados y los radioescuchas por los comunicados bilaterales con estaciones de Radioaficionados.',
      'Confirmación que intercambian los Radioaficionados por sus primeros comunicados realizados y los radioescuchas por los comunicados bilaterales con estaciones de Radioaficionado.',
    ],
    ans:0,
    exp:'Opción a). La Tarjeta QSL es una confirmación (postal o virtual) que intercambian los Radioaficionados por sus comunicados y los Radioescuchas por los comunicados recepcionados.' },

  { id:'I.24', cat:'Cap. I',
    q:'Defina "INSTRUCTORES":',
    opts:[
      'Miembros del Radio Club que tomará los exámenes y que se desempeñaron como Instructores de cursos. No podrán intervenir, junto con los miembros de comisión directiva y veedores en la evaluación de los exámenes.',
      'Radioaficionado nombrado por el Radio Club, Institución Autorizada o Institución Reconocida, que por su capacidad, experiencia y estudio acredita la competencia necesaria para el dictado de cursos y/o coordinación de Prácticas Operativas, y que estará presente durante la toma y evaluación de los exámenes, según corresponda.',
      'Miembros de otro Radio Club que, pese a no haber actuado como instructores, podrán intervenir junto con los miembros de comisión directiva en la evaluación de los exámenes.',
      'Miembros de otro Radio Club que, pese a no haberse desempeñado como Instructores, podrán intervenir, junto con los Veedores Voluntarios en la evaluación de los exámenes.',
    ],
    ans:1,
    exp:'Opción b). El Instructor es designado por el Radio Club o Institución, acredita competencia para dictar cursos y/o coordinar Prácticas Operativas, y está presente en la toma y evaluación de exámenes.' },

  { id:'I.25', cat:'Cap. I',
    q:'Defina "CÓDIGO MORSE":',
    opts:[
      'Comunicados entre estaciones que, por la distancia que las separa, inaccesibilidad geográfica, u otro factor de dificultad, no resulte frecuente la comunicación.',
      'Sistema de escritura, estandarizado conforme a la Recomendación UIT-R M.1677-1 o sucesivas, que representa las letras del alfabeto, números y otros signos mediante una combinación de sonidos cortos ("puntos"), sonidos largos ("rayas") y silencios ("espacios").',
      'Condición de operación en que la estación transmite con una potencia máxima de 5 W (CINCO WATTS) (CW) o de 10 W (DIEZ WATTS) (SSB).',
    ],
    ans:1,
    exp:'Opción b). El Código Morse es un sistema de escritura estandarizado (Recomendación UIT-R M.1677-1) que representa letras, números y signos mediante puntos, rayas y silencios.' },

  { id:'I.26', cat:'Cap. I',
    q:'Defina "ESTACIÓN DEL SERVICIO DE RADIOAFICIONADO":',
    opts:[
      'Estación radioeléctrica compuesta por uno o más transmisores, receptores o transceptores, incluyendo los sistemas irradiantes y las instalaciones accesorias, necesarios para operar en el Servicio de Radioaficionados. La misma podrá ser "Fija", instalada en un domicilio, o cuando no tenga capacidad de trasladarse mientras se encuentra en operación; "Móvil", instalada y con capacidad de operación en un vehículo terrestre, marítimo o aéreo; "Móvil de mano", cuando sea transportable manualmente, con fuente de alimentación autónoma y antena incorporada, con capacidad de operación.',
      'Estación fija, destinada a la retransmisión automática de las comunicaciones que se realicen en el Servicio de Radioaficionados y abierta al tráfico general de los mismos, caracterizada por la señal distintiva del titular de la estación, posición geográfica, subtono y frecuencia asignada.',
      'Estación radioeléctrica compuesta por uno o más transmisores, receptores o transceptores, incluyendo los sistemas irradiantes y las instalaciones accesorias, necesarios para operar en el Servicio de Radioaficionados por Satélite. La misma podrá ser "Terrena", situada en la superficie de la Tierra, con sus variantes "Fija" y "Móvil", o "Espacial", situada a bordo de satélites artificiales cuyo cuerpo de referencia es la Tierra.',
    ],
    ans:0,
    exp:'Opción a). La estación del Servicio de Radioaficionado puede ser Fija, Móvil o Móvil de mano.' },

  { id:'I.27', cat:'Cap. I',
    q:'Defina "RADIOBALIZA (RADIOFARO)":',
    opts:[
      'Estación capaz de recibir y retransmitir información digital por paquetes (Packet-Radio), en tiempo real, en la misma frecuencia, con capacidad de enlazar dos estaciones automáticamente. Se identifica con la señal distintiva del titular.',
      'Estación transmisora del Servicio de Radioaficionados, utilizada para determinar las condiciones de propagación y/o ajuste de antenas, etc., que emite a intervalos regulares y en una única frecuencia fija, su señal distintiva y datos referidos, entre otros, a su potencia, antena y altura.',
      'Estación fija, destinada a la retransmisión automática de las comunicaciones que se realicen en el Servicio de Radioaficionados y abierta al tráfico general de los mismos, caracterizada por la señal distintiva del titular de la estación, posición geográfica, subtono y frecuencia asignada.',
    ],
    ans:1,
    exp:'Opción b). La Radiobaliza emite a intervalos regulares en una única frecuencia fija su señal distintiva y datos técnicos (potencia, antena, altura).' },

  { id:'I.28', cat:'Cap. I',
    q:'Defina "ESTACIÓN DEL SERVICIO DE RADIOAFICIONADO POR SATÉLITE":',
    opts:[
      'Estación fija, destinada a la retransmisión automática de las comunicaciones que se realicen en el Servicio de Radioaficionados y abierta al tráfico general de los mismos, caracterizada por la señal distintiva del titular de la estación, posición geográfica, subtono y frecuencia asignada.',
      'Estación capaz de recibir y retransmitir información digital por paquetes (Packet-Radio), en tiempo real, en la misma frecuencia, con capacidad de enlazar dos estaciones automáticamente. Se identifica con la señal distintiva del titular.',
      'Estación radioeléctrica compuesta por uno o más transmisores, receptores o transceptores, incluyendo los sistemas irradiantes y las instalaciones accesorias, necesarios para operar en el Servicio de Radioaficionados por Satélite. La misma podrá ser "Terrena", situada en la superficie de la Tierra, con sus variantes "Fija" y "Móvil", o "Espacial", situada a bordo de satélites artificiales cuyo cuerpo de referencia es la Tierra.',
    ],
    ans:2,
    exp:'Opción c). La estación del Servicio por Satélite puede ser Terrena (Fija o Móvil) o Espacial (a bordo de satélites artificiales).' },

  { id:'I.29', cat:'Cap. I',
    q:'Defina "PROYECTO INTERNACIONAL DE BALIZAS (IBP)":',
    opts:[
      'Autorización extendida por la Autoridad de Aplicación de acuerdo con lo previsto en la Ley 24.730 y la Resolución 3745 SC/1997.',
      'Red mundial de radiofaros en alta frecuencia (HF) organizado por IARU, compartiendo en la misma única frecuencia por banda entre las transmisoras (en 20, 17, 15, 12 y 10 metros).',
      'Método de comunicación empleado por los Radioaficionados, en el que se utiliza la superficie lunar como elemento reflector de ondas de radio.',
    ],
    ans:1,
    exp:'Opción b). El IBP es una red mundial de radiofaros en HF organizado por IARU, compartiendo una misma frecuencia por banda en 20, 17, 15, 12 y 10 metros.' },

  { id:'I.30', cat:'Cap. I',
    q:'Defina "DESASTRE":',
    opts:[
      'Interacción entre una amenaza y una población vulnerable que, por su magnitud, crea una interrupción en el funcionamiento de una sociedad y/o sistema a partir de una desproporción entre los medios necesarios para superarla y aquellos medios a disposición de la comunidad afectada conforme a Ley Nº 27.287, Artículo 2º.',
      'Situación, daño provocado por un evento adverso de origen natural o provocado por los seres humanos que, por su magnitud, puede ser atendida por los medios disponibles localmente, conforme a Ley Nº 27.287, Artículo 2º.',
    ],
    ans:0,
    exp:'Opción a). El Desastre es la interacción entre amenaza y población vulnerable con desproporción entre medios necesarios y disponibles. Se diferencia de la Emergencia (opción b), que sí puede atenderse localmente.' },

  { id:'I.31', cat:'Cap. I',
    q:'Defina "EMERGENCIA":',
    opts:[
      'Interacción entre una amenaza y una población vulnerable que, por su magnitud, crea una interrupción en el funcionamiento de una sociedad y/o sistema a partir de una desproporción entre los medios necesarios para superarla y aquellos medios a disposición de la comunidad afectada conforme a Ley Nº 27.287, Artículo 2º.',
      'Situación, daño provocado por un evento adverso de origen natural o provocado por los seres humanos que, por su magnitud, puede ser atendida por los medios disponibles localmente, conforme a Ley Nº 27.287, Artículo 2º.',
    ],
    ans:1,
    exp:'Opción b). La Emergencia es una situación que puede ser atendida por los medios disponibles localmente. El Desastre (opción a) supera la capacidad local de respuesta.' },

  { id:'I.32', cat:'Cap. I',
    q:'Defina "CONCURSO":',
    opts:[
      'Evento nacional y/o internacional en donde se ponen a prueba las habilidades de los Radioaficionados. Sus bases y condiciones son informadas mediante los boletines y revistas de los Radio Clubes, Instituciones Autorizadas e Instituciones Reconocidas.',
      'Comunicados entre estaciones que, por la distancia que las separa, inaccesibilidad geográfica, u otro factor de dificultad, no resulte frecuente la comunicación.',
      'Sistema de escritura, estandarizado conforme a la Recomendación UIT-R M.1677-1 o sucesivas, que representa las letras del alfabeto, números y otros signos mediante una combinación de sonidos cortos, sonidos largos y silencios.',
    ],
    ans:0,
    exp:'Opción a). El Concurso es un evento nacional y/o internacional donde se ponen a prueba las habilidades de los Radioaficionados.' },

  { id:'I.33', cat:'Cap. I',
    q:'Defina "ÉTICA OPERATIVA":',
    opts:[
      'Es el conjunto de deberes, obligaciones, conductas y principios establecidos en el Reglamento y en las disposiciones, recomendaciones y procedimientos fijados por la Unión Internacional de Radioaficionados (IARU), que rigen el normal desenvolvimiento de la actividad de los Radioaficionados.',
      'Es el conjunto de símbolos, alfabetos y códigos establecidos en el Reglamento y en las disposiciones, recomendaciones y procedimientos fijados por la Unión Internacional de Radioaficionados (IARU), que rigen el normal desenvolvimiento de la actividad de los Radioaficionados.',
    ],
    ans:0,
    exp:'Opción a). La Ética Operativa es el conjunto de deberes, obligaciones, conductas y principios del Reglamento y las disposiciones de la IARU.' },

  { id:'I.34', cat:'Cap. I',
    q:'Defina "VEEDOR":',
    opts:[
      'Radioaficionado nombrado por el Radio Club, Institución Autorizada o Institución Reconocida, que por su capacidad, experiencia y estudio acredita la competencia necesaria para el dictado de cursos y/o coordinación de Prácticas Operativas.',
      'Radioaficionado de categoría GENERAL o SUPERIOR, designado por un Radio Club o Institución Autorizada, para estar presente en la sesión de exámenes, firmar las actas y certificados correspondientes e informar anormalidades si las hubiere.',
      'Responsable de evaluar a los aspirantes al ingreso y ascenso de categorías de conformidad con los procedimientos y condiciones establecidas en el presente Reglamento.',
    ],
    ans:1,
    exp:'Opción b). El Veedor es un radioaficionado de categoría GENERAL o SUPERIOR designado por el Radio Club o Institución Autorizada para estar presente en el examen, firmar actas y certificados e informar anormalidades.' },

  { id:'I.35', cat:'Cap. I',
    q:'La licencia habilita a su titular a instalar y/u operar estaciones de:',
    opts:[
      'Servicio de Radioaficionados.',
      'Servicio de Radioaficionados por Satélite.',
      'Servicio de Radioaficionados y Radioaficionados por Satélite.',
    ],
    ans:2,
    exp:'Opción c). Una licencia habilita a instalar y operar en AMBOS servicios: Radioaficionados y Radioaficionados por Satélite.' },

  { id:'I.36', cat:'Cap. I',
    q:'Las estaciones del Servicio de Radioaficionados y de Radioaficionados por Satélite que operen actualmente y las que se autoricen e instalen en el futuro, dentro o fuera de las zonas de protección de las actuales o futuras Estaciones de Comprobación Técnica de Emisiones, estarán sujetas a lo dispuesto por:',
    opts:[
      'Resolución SC 329/2000 o aquellas que la reemplacen o modifiquen.',
      'LEY N° 27078.',
      'Resolución SC 50/1998 o aquellas que la reemplacen o modifiquen.',
    ],
    ans:0,
    exp:'Opción a). Las estaciones están sujetas a la Resolución SC 329/2000 (o las que la reemplacen o modifiquen).' },

  { id:'I.37', cat:'Cap. I',
    q:'En qué circunstancias las estaciones del Servicio de Radioaficionados y de Radioaficionados por Satélite estarán autorizadas a conectar inductiva o acústicamente, o por cualquier otro medio disponible, sus equipos radioeléctricos a las líneas telefónicas.',
    opts:[
      'Exclusivamente ante emergencias.',
      'En situaciones de interés comunitario.',
      'En eventos propios de la actividad.',
      'En ninguna circunstancia.',
    ],
    ans:0,
    exp:'Opción a). Solo está permitida la conexión a líneas telefónicas exclusivamente ante emergencias.' },

  { id:'I.38', cat:'Cap. I',
    q:'¿Cuál es la vigencia de la licencia de radioaficionados?',
    opts:['1 año.','5 años.','10 años.','Depende de la categoría.'],
    ans:1,
    exp:'Opción b). La licencia de radioaficionados tiene una vigencia de 5 años, independientemente de la categoría.' },

  { id:'I.39', cat:'Cap. I',
    q:'¿Por qué período de tiempo se puede renovar la licencia de radioaficionados y en qué condiciones?',
    opts:[
      '5 años, con renovación automática.',
      'Indefinido.',
      '5 años, al realizar el trámite de renovación, rehabilitación o exámen de ascenso de categoría.',
    ],
    ans:2,
    exp:'Opción c). La licencia se renueva por 5 años, al realizar el trámite de renovación, rehabilitación o examen de ascenso. No es automática.' },

  { id:'I.40', cat:'Cap. I',
    q:'¿Cuál es la vigencia de la autorización de una Estación Repetidora?',
    opts:[
      '1 año.',
      '5 años.',
      '5 años o hasta la cancelación o caducidad de la licencia del titular.',
      'Depende de la categoría.',
    ],
    ans:2,
    exp:'Opción c). La autorización de la Repetidora tiene vigencia de 5 años, o hasta la cancelación o caducidad de la licencia del titular.' },

  { id:'I.41', cat:'Cap. I',
    q:'¿Con qué intervalo de tiempo un Radioaficionado debe transmitir su señal distintiva?',
    opts:['5 minutos.','10 minutos.','30 minutos.','Cuando lo desee.'],
    ans:1,
    exp:'Opción b). El Radioaficionado debe transmitir su señal distintiva cada 10 minutos.' },

  { id:'I.42', cat:'Cap. I',
    q:'¿En qué frecuencias y bajo qué condiciones se permite el funcionamiento de redes de Emergencia y/o Desastre?',
    opts:[
      'En todas las bandas, en aquellos casos y en los plazos que determine la Autoridad competente en materia de protección pública, defensa civil y operaciones de socorro.',
      'En las frecuencias designadas a tal fin, en aquellos casos y en los plazos que determine la Autoridad competente en materia de protección pública, defensa civil y operaciones de socorro.',
      'En las frecuencias designadas a tal fin, cuando el Radioaficionado lo considere necesario.',
    ],
    ans:1,
    exp:'Opción b). Las redes de Emergencia/Desastre funcionan en las frecuencias designadas a tal fin y solo en los casos y plazos que determine la Autoridad competente.' },

  { id:'I.43', cat:'Cap. I',
    q:'¿Cuál es el plazo en que un radioaficionado deberá desinstalar en su totalidad las estaciones radioeléctricas y/o Repetidoras que pudiera poseer instaladas, una vez producida la caducidad de su licencia?',
    opts:['30 días.','60 días.','90 días.','1 año.','Sin plazo, ante requerimiento de la Autoridad de Aplicación.'],
    ans:2,
    exp:'Opción c). El plazo para desinstalar ante la CADUCIDAD de la licencia es de 90 días.' },

  { id:'I.44', cat:'Cap. I',
    q:'¿Cuál es el plazo en que un radioaficionado deberá desinstalar en su totalidad las estaciones radioeléctricas y/o Repetidoras que pudiera poseer instaladas, ante la cancelación de su licencia?',
    opts:['10 días.','30 días.','90 días.','1 año.','Sin plazo, ante requerimiento de la Autoridad de Aplicación.'],
    ans:0,
    exp:'Opción a). El plazo para desinstalar ante la CANCELACIÓN de la licencia es de 10 días, mucho menor que en caso de caducidad.' },

  { id:'I.45', cat:'Cap. I',
    q:'¿De acuerdo al documento "Ética y Procedimientos Operativos para el Radioaficionado" de IARU, cuáles son los principios básicos que rigen el Código de Conducta del Radioaficionado?',
    opts:[
      'Sentido social y espíritu fraternal.',
      'Lealtad.',
      'Comprensión.',
      'No discriminación.',
      'Buenos modales.',
      'Objetividad.',
      'Tolerancia.',
    ],
    ans:[0,2,4,6],
    exp:'Las opciones correctas son a) Sentido social y espíritu fraternal, c) Comprensión, e) Buenos modales, y g) Tolerancia. Según el documento IARU "Ética y Procedimientos Operativos para el Radioaficionado".' },

  { id:'I.46', cat:'Cap. I',
    q:'¿Cuál es la organización de Radioaficionados que representa sus intereses ante los foros internacionales?',
    opts:[
      'American Radio Relay League (A.R.R.L.).',
      'International Telecommunicationsc Union (I.T.U.).',
      'International Amateur Radio Union (I.A.R.U.).',
      'Comisión Interamericana de Telecomunicaciones (C.I.T.E.L.).',
    ],
    ans:2,
    exp:'Opción c). La IARU (International Amateur Radio Union) es la organización que representa los intereses de los radioaficionados ante los foros internacionales.' },

  { id:'I.47', cat:'Cap. I',
    q:'¿Qué orden de observancia tiene la siguiente reglamentación para los Radioaficionados de la República Argentina?',
    opts:[
      'Reglamento General de Radioaficionados - Disposiciones, recomendaciones y procedimientos de la Unión Internacional de Radioaficionados (IARU). Reglamentación UIT.',
      'Disposiciones, recomendaciones y procedimientos de la Unión Internacional de Radioaficionados (IARU). Reglamento General de Radioaficionados, y Reglamentación UIT.',
      'Reglamentación UIT, Disposiciones, recomendaciones y procedimientos de la Unión Internacional de Radioaficionados (IARU). y Reglamento General de Radioaficionados.',
    ],
    ans:0,
    exp:'Opción a). El orden es: 1° Reglamento General de Radioaficionados, 2° Disposiciones de la IARU, 3° Reglamentación UIT.' },

  // ══════════════════════════════════════════════════════════════
  // CAPÍTULO II – FACULTADES DE LA AUTORIDAD DE APLICACIÓN
  // ══════════════════════════════════════════════════════════════

  { id:'II.1', cat:'Cap. II',
    q:'Son facultades de la Autoridad de Aplicación:',
    opts:[
      'Limitar, denegar, suspender o cancelar la licencia de Radioaficionado.',
      'Asignar o modificar las señales distintivas.',
      'Tomar exámenes de ingreso y ascenso de categorías.',
      'Dictar cursos y fomentar la actividad a través de Prácticas Operativas.',
    ],
    ans:[0,1],
    exp:'Las opciones correctas son a) y b). Limitar/denegar/suspender/cancelar licencias y asignar/modificar señales distintivas son facultades del ENACOM. Tomar exámenes (c) y dictar cursos (d) son competencia de los Radio Clubes e Instituciones Autorizadas.' },

  // ══════════════════════════════════════════════════════════════
  // CAPÍTULO III – RADIO CLUBES, INSTITUCIONES AUTORIZADAS E INSTITUCIONES RECONOCIDAS
  // ══════════════════════════════════════════════════════════════

  { id:'III.1', cat:'Cap. III',
    q:'¿Qué categoría se le otorga a los Radio Clubes, Instituciones Autorizadas e Instituciones Reconocidas?',
    opts:['Novicio','General','Superior'],
    ans:1,
    exp:'Opción b). Se les otorga categoría GENERAL.' },

  { id:'III.2', cat:'Cap. III',
    q:'¿Cómo debe identificarse el Radioaficionado cuando opere en forma personal la estación del Radio Club?',
    opts:[
      'Señal distintiva del Radio Club y señal distintiva propia.',
      'Señal distintiva propia y señal distintiva del Radio Club.',
      'Señal distintiva propia.',
      'Señal distintiva del Radio Club.',
    ],
    ans:0,
    exp:'Opción a). Primero la señal distintiva del Radio Club, luego la propia.' },

  { id:'III.3', cat:'Cap. III',
    q:'Cuando el Radioaficionado opere en forma personal la estación del Radio Club, ¿en qué bandas puede operar?',
    opts:[
      'En las bandas autorizadas a su categoría.',
      'En las bandas correspondientes a la categoría Superior.',
    ],
    ans:0,
    exp:'Opción a). Opera en las bandas autorizadas a SU propia categoría, no en las del Radio Club.' },

  { id:'III.4', cat:'Cap. III',
    q:'En condiciones de Práctica Operativa por parte de aspirantes a obtener licencia, ¿cómo se deben identificar?',
    opts:[
      'Con señal distintiva del Radio Club, aclarando "en Práctica Operativa".',
      'Con señal distintiva del Instructor.',
    ],
    ans:0,
    exp:'Opción a). Se identifican con la señal distintiva del Radio Club aclarando "en Práctica Operativa".' },

  { id:'III.5', cat:'Cap. III',
    q:'¿Quiénes podrán otorgar Certificados de Radioescuchas?',
    opts:['Radio Clubes.','Instituciones Autorizadas.','Instituciones Reconocidas.'],
    ans:0,
    exp:'Opción a). Solo los Radio Clubes pueden otorgar Certificados de Radioescuchas.' },

  { id:'III.6', cat:'Cap. III',
    q:'¿El Radioaficionado puede realizar trámites en forma personal ante la Autoridad de Aplicación?',
    opts:['Sí.','No.'],
    ans:1,
    exp:'Opción b). No. Los trámites se realizan a través de los Radio Clubes o Instituciones Autorizadas.' },

  { id:'III.7', cat:'Cap. III',
    q:'¿El Radio Club podrá poseer filiales?',
    opts:['Sí.','No.'],
    ans:0,
    exp:'Opción a). Sí, el Radio Club puede poseer filiales bajo condiciones específicas.' },

  { id:'III.8', cat:'Cap. III',
    q:'¿Bajo qué condiciones la Autoridad de Aplicación podrá autorizar filiales a un Radio Club?',
    opts:[
      'En localidades dentro de la misma provincia en las que no hubiera Radio Club.',
      'En localidades de otra provincia en las que no hubiera Radio Club.',
    ],
    ans:0,
    exp:'Opción a). Las filiales solo se autorizan en localidades de la MISMA PROVINCIA donde no hubiera Radio Club.' },

  { id:'III.9', cat:'Cap. III',
    q:'¿Qué categoría debe tener el Radioaficionado a cargo de la filial?',
    opts:['Novicio','General','Superior'],
    ans:[1,2],
    exp:'Las opciones correctas son b) General y c) Superior. El radioaficionado a cargo de la filial debe tener categoría General o Superior.' },

  { id:'III.10', cat:'Cap. III',
    q:'¿El Radioaficionado a cargo de la filial debe estar habilitado en el Libro de Actas del Radio Club?',
    opts:['Sí.','No.'],
    ans:0,
    exp:'Opción a). Sí, debe estar registrado en el Libro de Actas del Radio Club.' },

  { id:'III.11', cat:'Cap. III',
    q:'¿Cómo debe operarse la estación en una filial de un Radio Club?',
    opts:[
      'Señal distintiva del Radio Club, agregando una barra, la palabra "filial" y el nombre de la localidad.',
      'Señal distintiva del Radioaficionado, agregando una barra, la palabra "filial" y el nombre de la localidad.',
    ],
    ans:0,
    exp:'Opción a). Se opera con la señal del Radio Club seguida de barra, "filial" y nombre de la localidad.' },

  { id:'III.12', cat:'Cap. III',
    q:'¿Podrán las filiales de los Radio Clubes efectuar algún tipo de trámite ante la Autoridad de Aplicación?',
    opts:['Sí.','No.'],
    ans:1,
    exp:'Opción b). No. Las filiales NO pueden efectuar trámites ante el ENACOM.' },

  { id:'III.13', cat:'Cap. III',
    q:'¿Las Instituciones Autorizadas están habilitadas por la Autoridad de Aplicación para dictar cursos sobre técnica, reglamentación y ética operativa, telegrafía y todo otro curso afín a la actividad, como así también tomar exámenes para ingreso y ascenso de categorías de Radioaficionados?',
    opts:['Sí.','No.'],
    ans:0,
    exp:'Opción a). Sí, las Instituciones Autorizadas están habilitadas para dictar cursos Y tomar exámenes.' },

  { id:'III.14', cat:'Cap. III',
    q:'¿Las Instituciones Reconocidas están autorizadas por la Autoridad de Aplicación para dictar cursos sobre técnica, reglamentación y ética operativa, telegrafía y todo otro curso afín a la actividad?',
    opts:['Sí.','No.'],
    ans:0,
    exp:'Opción a). Sí, las Instituciones Reconocidas SÍ pueden dictar cursos, pero NO pueden tomar exámenes de ingreso o ascenso.' },

  { id:'III.15', cat:'Cap. III',
    q:'¿Las Instituciones Reconocidas están autorizadas por la Autoridad de Aplicación para tomar exámenes para ingreso y ascenso de categorías de Radioaficionados?',
    opts:['Sí.','No.'],
    ans:1,
    exp:'Opción b). No. Las Instituciones Reconocidas NO pueden tomar exámenes de ingreso ni de ascenso de categorías.' },

  { id:'III.16', cat:'Cap. III',
    q:'¿Las Instituciones Autorizadas pueden gestionar ante la Autoridad de Aplicación la documentación para ingreso y ascenso de categorías de Radioaficionados?',
    opts:['Sí.','No.'],
    ans:0,
    exp:'Opción a) (c en el PDF). Sí, las Instituciones Autorizadas pueden gestionar directamente ante el ENACOM la documentación para ingreso y ascenso.' },

  // ══════════════════════════════════════════════════════════════
  // CAPÍTULO IV – RADIOAFICIONADOS: CATEGORÍAS Y REQUISITOS
  // ══════════════════════════════════════════════════════════════

  { id:'IV.1', cat:'Cap. IV',
    q:'Identifique las categorías de radioaficionados de acuerdo a la nueva reglamentación:',
    opts:['Inicial','Novicio','Intermedia','General','Superior','Especial'],
    ans:[1,3,4,5],
    exp:'Las categorías correctas son b) Novicio, d) General, e) Superior y f) Especial. "Inicial" e "Intermedia" no son categorías del Reglamento vigente.' },

  { id:'IV.2', cat:'Cap. IV',
    q:'¿Quién tramita ante el ENACOM?',
    opts:['Radio Clubes','Radioaficionados','Instituciones Reconocidas','Instituciones Autorizadas'],
    ans:[0,3],
    exp:'Las opciones correctas son a) Radio Clubes y d) Instituciones Autorizadas. Son quienes gestionan los trámites ante el ENACOM.' },

  { id:'IV.3', cat:'Cap. IV',
    q:'¿Cuál es la edad mínima para la categoría Novicio?',
    opts:['12 años','9 años','18 años'],
    ans:1,
    exp:'Opción b). La edad mínima para la categoría Novicio es 9 años.' },

  { id:'IV.4', cat:'Cap. IV',
    q:'¿Cuál es la edad mínima para la categoría General?',
    opts:['13 años','16 años','18 años'],
    ans:0,
    exp:'Opción a). La edad mínima para la categoría General es 13 años.' },

  { id:'IV.5', cat:'Cap. IV',
    q:'¿Cuál es la potencia de RF máxima permitida para la categoría Novicio?',
    opts:['50 vatios.','100 vatios.','150 vatios.','200 vatios.'],
    ans:3,
    exp:'Opción d). La potencia de RF máxima para la categoría Novicio es 200 vatios.' },

  { id:'IV.6', cat:'Cap. IV',
    q:'Cuántos años de actividad en forma ininterrumpida en categoría NOVICIO hay que acreditar para ascender a categoría GENERAL?',
    opts:['2 años.','1 año.','5 años.','3 años.'],
    ans:3,
    exp:'Opción d). Se deben acreditar 3 años de actividad ininterrumpida en categoría Novicio para ascender a General.' },

  { id:'IV.7', cat:'Cap. IV',
    q:'¿Cada cuántos años debe renovarse la licencia de Radioaficionado?',
    opts:['2 años.','4 años.','5 años.','10 años.'],
    ans:2,
    exp:'Opción c). La licencia de Radioaficionado debe renovarse cada 5 años.' },

  { id:'IV.8', cat:'Cap. IV',
    q:'¿Cuáles son los requerimientos para obtener la categoría ESPECIAL?',
    opts:[
      'Categoría Superior con 60 años de actividad ininterrumpida.',
      'Categoría Superior con 20 años de actividad ininterrumpida.',
      'Categoría Superior con 50 años de actividad ininterrumpida.',
      'Categoría Superior con 50 años de antigüedad.',
    ],
    ans:1,
    exp:'Opción b) (f en el PDF). Se requiere categoría Superior con 20 años de actividad ininterrumpida para obtener la categoría Especial.' },

  { id:'IV.9', cat:'Cap. IV',
    q:'Transcurridos 5 (CINCO) años a partir de la fecha del otorgamiento de la licencia, renovación, rehabilitación o ascenso de categoría, ¿de qué plazo dispondrá el Radioaficionado para solicitar la renovación de la licencia por un nuevo período de 5 (CINCO) años?',
    opts:['3 meses','12 meses','6 meses'],
    ans:1,
    exp:'Opción b). Dispone de 12 meses adicionales para solicitar la renovación una vez cumplidos los 5 años de vigencia.' },

  // ══════════════════════════════════════════════════════════════
  // CAPÍTULO V – RADIOESCUCHAS
  // ══════════════════════════════════════════════════════════════

  { id:'V.1', cat:'Cap. V',
    q:'Defina RADIOESCUCHA:',
    opts:[
      'Persona debidamente autorizada que se interesa en la radiotecnia con carácter exclusivamente personal y sin fines de lucro, y que realiza actividades de instrucción, de intercomunicación y estudios técnicos.',
      'Persona física autorizada exclusivamente a la recepción de emisiones en las bandas de frecuencia atribuidas a los Servicios de Radioaficionados y de Radioaficionados por Satélite. Para acceder a dicha autorización no es necesario contar con una Licencia de Radioaficionado.',
    ],
    ans:1,
    exp:'Opción b). El Radioescucha está autorizado exclusivamente a RECIBIR emisiones en las bandas del Servicio de Radioaficionados. No necesita Licencia de Radioaficionado.' },

  { id:'V.2', cat:'Cap. V',
    q:'En el momento en que un Radioescucha tramita y obtiene su licencia de radioaficionado, ¿qué ocurre con su Certificado de Radioescucha?',
    opts:[
      'Continúa teniendo vigencia.',
      'Automáticamente queda dado de baja.',
      'Le será requerido para el ascenso de categoría.',
      'Ninguna es correcta.',
    ],
    ans:0,
    exp:'Opción a). El Certificado de Radioescucha continúa teniendo vigencia aun después de obtener la licencia de radioaficionado.' },

  // ══════════════════════════════════════════════════════════════
  // CAPÍTULO VI – RADIOAFICIONADOS EXTRANJEROS
  // ══════════════════════════════════════════════════════════════

  { id:'VI.1', cat:'Cap. VI',
    q:'Los Radioaficionados extranjeros "en tránsito" o con "residencia temporaria" en la República Argentina, ¿ante quién deben gestionar la autorización para operar desde nuestro país?',
    opts:[
      'Ante los RADIO CLUBES.',
      'Directamente ante la Autoridad de Aplicación.',
      'La Sociedad Nacional miembro de I.A.R.U.',
      'El Comité Federal de Radiodifusión.',
    ],
    ans:0,
    exp:'Opción a). Los radioaficionados extranjeros en tránsito o residencia temporaria deben gestionar la autorización ante los Radio Clubes.' },

  { id:'VI.2', cat:'Cap. VI',
    q:'¿Qué radioaficionado extranjero se encuentra exceptuado de gestionar la autorización para operar en el territorio nacional?',
    opts:[
      'Los que pertenecen a algún país signatario del IARP.',
      'Cualquier radioaficionado extranjero.',
    ],
    ans:0,
    exp:'Opción a). Los radioaficionados de países signatarios del IARP están exceptuados de gestionar autorización especial para operar en Argentina.' },

  // ══════════════════════════════════════════════════════════════
  // CAPÍTULO VII – PERMISOS INTERNACIONALES (IARP – CEPT)
  // ══════════════════════════════════════════════════════════════

  { id:'VII.1', cat:'Cap. VII',
    q:'¿Qué es el Permiso Internacional de Aficionado (I.A.R.P.)?',
    opts:[
      'Un documento que permite a su tenedor operar sin restricciones en todos los países del mundo.',
      'Un documento que faculta a su tenedor operar en los países de América signatarios del Convenio Interamericano sobre el IARP.',
    ],
    ans:1,
    exp:'Opción b). El IARP faculta a operar en los países de América signatarios del Convenio Interamericano, no en todo el mundo.' },

  { id:'VII.2', cat:'Cap. VII',
    q:'¿En cuántas Clases se emite el I.A.R.P. de acuerdo a la Resolución SC 3745/1997?',
    opts:['Una Clase.','Dos Clases.','Tres Clases.','Cuatro Clases.'],
    ans:1,
    exp:'Opción b). El IARP se emite en Dos Clases: Clase 1 y Clase 2.' },

  { id:'VII.3', cat:'Cap. VII',
    q:'¿Qué categoría de Radioaficionado se debe tener para poder obtener el IARP de acuerdo a la Resolución SC 3745/1997?',
    opts:['Sólo Superior.','General y Superior.','Intermedia, General y Superior.','No hay restricciones.'],
    ans:3,
    exp:'Opción d). No hay restricciones de categoría para obtener el IARP. Cualquier radioaficionado con licencia vigente puede solicitarlo.' },

  { id:'VII.4', cat:'Cap. VII',
    q:'El IARP de Clase 1 faculta a operar:',
    opts:[
      'Sólo en bandas por sobre 30 MHz.',
      'Sólo en bandas de 10, 15 y 20 metros.',
      'En todas las bandas.',
      'Sólo en bandas por debajo de 30 MHz.',
    ],
    ans:2,
    exp:'Opción c). El IARP Clase 1 faculta a operar en todas las bandas autorizadas en los países signatarios.' },

  { id:'VII.5', cat:'Cap. VII',
    q:'El IARP de Clase 2 faculta a operar:',
    opts:[
      'En todas las bandas.',
      'Sólo en bandas por sobre 30 MHz.',
      'En todas las bandas.',
      'En bandas de 80, 40 y 20 metros.',
    ],
    ans:1,
    exp:'Opción b). El IARP Clase 2 faculta a operar sólo en bandas por sobre 30 MHz (VHF y superiores).' },

  // ══════════════════════════════════════════════════════════════
  // CAPÍTULO VIII – SEÑALES DISTINTIVAS E IDENTIFICACIÓN
  // ══════════════════════════════════════════════════════════════

  { id:'VIII.1', cat:'Cap. VIII',
    q:'¿En la señal distintiva a qué corresponde el prefijo?',
    opts:['Al país.','A la provincia.','A la categoría del radioaficionado.'],
    ans:0,
    exp:'Opción a). El prefijo de la señal distintiva corresponde al PAÍS. Para Argentina: LU y LW.' },

  { id:'VIII.2', cat:'Cap. VIII',
    q:'¿Cuál es el prefijo correspondiente a la República Argentina?',
    opts:['LU/LW.','CX.','PY.'],
    ans:0,
    exp:'Opción a). Los prefijos de la República Argentina son LU y LW. CX = Uruguay, PY = Brasil.' },

  { id:'VIII.3', cat:'Cap. VIII',
    q:'La/s primera/s letras del sufijo de la señal distintiva corresponden a:',
    opts:['País.','Provincia.','Categoría.'],
    ans:1,
    exp:'Opción b). Las primeras letras del sufijo corresponden a la PROVINCIA.' },

  { id:'VIII.4', cat:'Cap. VIII',
    q:'¿Cuál es el criterio de asignación por parte de la Autoridad de Aplicación del sufijo de la señal distintiva en caso de poseer sólo estaciones móviles?',
    opts:[
      'Domicilio de emplazamiento de la estación fija.',
      'Domicilio indicado en el DNI del Radioaficionado.',
    ],
    ans:1,
    exp:'Opción b). Si solo posee estaciones móviles, el sufijo se asigna según el domicilio del DNI del radioaficionado.' },

  { id:'VIII.5', cat:'Cap. VIII',
    q:'¿Cuál es el criterio de asignación por parte de la Autoridad de Aplicación del sufijo de la señal distintiva en caso de poseer estación fija y móviles?',
    opts:[
      'Domicilio de emplazamiento de la estación fija.',
      'Domicilio del DNI del Radioaficionado.',
    ],
    ans:0,
    exp:'Opción a). Si posee estación fija (además de móviles), el sufijo se asigna según el domicilio de emplazamiento de la estación FIJA.' },

  { id:'VIII.6', cat:'Cap. VIII',
    q:'¿A qué categoría se le puede asignar una señal distintiva con un sufijo de 2 letras?',
    opts:['Categoría General.','Categoría Superior y Especial.','Cualquier categoría.'],
    ans:1,
    exp:'Opción b). Los sufijos de 2 letras se asignan a las categorías Superior y Especial.' },

  { id:'VIII.7', cat:'Cap. VIII',
    q:'¿En qué otro caso a lo planteado en la pregunta VIII.6 se puede asignar una señal distintiva con un sufijo de 2 letras?',
    opts:[
      'Por fallecimiento del titular, a un familiar que la reclame.',
      'Por pedido del titular hacia un tercero.',
    ],
    ans:0,
    exp:'Opción a). Por fallecimiento del titular, un familiar puede reclamar la señal de 2 letras.' },

  { id:'VIII.8', cat:'Cap. VIII',
    q:'¿Por cuánto tiempo queda reservada la señal distintiva por fallecimiento del titular?',
    opts:['2 años.','1 año.','5 años.'],
    ans:0,
    exp:'Opción a). La señal queda reservada por 2 años por fallecimiento del titular.' },

  { id:'VIII.9', cat:'Cap. VIII',
    q:'¿Por cuánto tiempo se otorga la Señal Distintiva Especial?',
    opts:['2 años.','1 año.','5 años.'],
    ans:1,
    exp:'Opción b). La Señal Distintiva Especial se otorga por 1 año.' },

  { id:'VIII.10', cat:'Cap. VIII',
    q:'¿Quiénes podrán solicitar Señales Distintivas Especiales?',
    opts:[
      'Radioaficionados categoría General o Superior.',
      'Radio Clubes, Instituciones Autorizadas, Instituciones Reconocidas.',
      'Radioaficionados categoría Novicio.',
    ],
    ans:[0,1],
    exp:'Las opciones correctas son a) y b). Pueden solicitar Señales Distintivas Especiales los Radioaficionados de categoría General o Superior, y los Radio Clubes, Instituciones Autorizadas e Instituciones Reconocidas.' },

  { id:'VIII.11', cat:'Cap. VIII',
    q:'¿En ocasión de eventos que requieran de Señal Distintiva Especial, puede un radioaficionado de cualquier categoría que forme parte de un equipo de operación, operar en todas las bandas autorizadas al titular del equipo?',
    opts:['Sí.','No.'],
    ans:0,
    exp:'Opción a). Sí, cualquier radioaficionado del equipo puede operar en todas las bandas autorizadas al titular del equipo.' },

  { id:'VIII.12', cat:'Cap. VIII',
    q:'¿Cuáles son las condiciones que deberá acreditar el Radioaficionado para solicitar una Señal Distintiva Especial?',
    opts:[
      'Haber participado en tres concursos distintos con su señal distintiva propia.',
      'Haber realizado en cada uno de ellos un mínimo de 500 contactos.',
      'Haber sido titular de equipo de operación.',
    ],
    ans:[0,1],
    exp:'Las opciones correctas son a) y b). Debe haber participado en tres concursos distintos con su señal propia, habiendo realizado en cada uno un mínimo de 500 contactos.' },

  { id:'VIII.13', cat:'Cap. VIII',
    q:'¿Se pueden tener dos o más Señales Distintivas Especiales vigentes al mismo tiempo?',
    opts:['Sí.','No.'],
    ans:1,
    exp:'Opción b). No. No se pueden tener dos o más Señales Distintivas Especiales vigentes simultáneamente.' },

  // ══════════════════════════════════════════════════════════════
  // CAPÍTULO IX – ESTACIONES FIJAS, MÓVILES, ESPACIALES Y TERRENAS
  // ══════════════════════════════════════════════════════════════

  { id:'IX.1', cat:'Cap. IX',
    q:'¿En qué casos los titulares de licencia de Radioaficionado están autorizados a instalar y operar estaciones móviles?',
    opts:[
      'Sólo en caso de emergencias.',
      'Sólo en período de vacaciones.',
      'Cuando posea licencia de conductor.',
      'No hay restricciones.',
    ],
    ans:3,
    exp:'Opción d). No hay restricciones para instalar y operar estaciones móviles.' },

  { id:'IX.2', cat:'Cap. IX',
    q:'¿Quién puede operar una estación radioeléctrica correspondiente al Servicio de Radioaficionado y al Servicio de Radioaficionado por Satélite?',
    opts:[
      'Su titular u otro Radioaficionado que él mismo autorice.',
      'Cualquier Radioaficionado.',
      'Ningún Radioaficionado distinto a su titular.',
    ],
    ans:0,
    exp:'Opción a). Solo el titular o quien él autorice puede operar su estación.' },

  { id:'IX.3', cat:'Cap. IX',
    q:'Cuando un Radioaficionado opera una estación radioeléctrica de la cual no es titular, ¿cómo se debe identificar?',
    opts:[
      'Haciendo mención de la señal distinta del titular y de la propia, en ese orden, seguido de una barra y la letra correspondiente a la división política.',
      'Haciendo mención de la señal distinta propia y la del titular, en ese orden, seguido de una barra y la letra correspondiente a la división política.',
      'Haciendo mención de la señal distinta propia.',
    ],
    ans:0,
    exp:'Opción a). Primero la señal del TITULAR, luego la del operador, separadas por una barra y la letra de la división política.' },

  { id:'IX.4', cat:'Cap. IX',
    q:'Cuando un Radioaficionado opera una estación radioeléctrica de la cual no es titular, ¿en qué bandas lo hace?',
    opts:[
      'En las permitidas según la categoría del Titular.',
      'En las permitidas según la categoría del Operador.',
    ],
    ans:1,
    exp:'Opción b). El operador utiliza las bandas de SU PROPIA categoría, no las del titular.' },

  { id:'IX.5', cat:'Cap. IX',
    q:'¿Quiénes podrán operar simultáneamente múltiples estaciones de su titularidad durante el dictado de cursos, Práctica Operativa, toma de exámenes, contactos DX o concursos, según corresponda a sus competencias?',
    opts:[
      'Radioaficionados.',
      'Radio Clubes, Instituciones Autorizadas e Instituciones Reconocidas.',
    ],
    ans:1,
    exp:'Opción b). Radio Clubes, Instituciones Autorizadas e Instituciones Reconocidas pueden operar múltiples estaciones simultáneamente en esas situaciones.' },

  { id:'IX.6', cat:'Cap. IX',
    q:'En caso que el Radioaficionado posea más de una estación fija, ¿es necesario declararlas a todas?',
    opts:['Sí.','No.'],
    ans:0,
    exp:'Opción a). Sí, todas las estaciones fijas deben ser declaradas ante el ENACOM.' },

  { id:'IX.7', cat:'Cap. IX',
    q:'¿En caso de trasladar una estación fija por un período mayor a 120 días corridos, se deberá solicitar el cambio de domicilio de emplazamiento?',
    opts:['Sí.','No.'],
    ans:0,
    exp:'Opción a). Sí. Si el traslado supera los 120 días corridos, se debe solicitar el cambio de domicilio ante el ENACOM.' },

  { id:'IX.8', cat:'Cap. IX',
    q:'Con relación a la altura de la estructura soporte de antenas que pretende instalar el Radioaficionado, ¿ante qué Organismo debe realizar el trámite pertinente de autorización?',
    opts:['ENACOM.','ANAC.'],
    ans:1,
    exp:'Opción b). La autorización por altura de estructuras soporte de antenas se tramita ante la ANAC (Administración Nacional de Aviación Civil).' },

  { id:'IX.9', cat:'Cap. IX',
    q:'¿Cómo se debe operar una estación móvil?',
    opts:[
      'Se deberá mencionar su señal distintiva, su ubicación geográfica y su condición de móvil.',
      'Se deberá mencionar su señal distintiva, su ubicación geográfica.',
    ],
    ans:0,
    exp:'Opción a). La estación móvil debe mencionar: señal distintiva + ubicación geográfica + condición de "móvil".' },

  { id:'IX.10', cat:'Cap. IX',
    q:'¿Qué categoría debe poseer el titular de la licencia de Radioaficionado que deseara diseñar, construir, lanzar y/o constituirse como responsable primario de una estación espacial del Servicio de Radioaficionados por Satélite?',
    opts:['GENERAL o SUPERIOR.','ESPECIAL.','NOVICIO.'],
    ans:0,
    exp:'Opción a). Se requiere categoría GENERAL o SUPERIOR para ser responsable primario de una estación espacial.' },

  { id:'IX.11', cat:'Cap. IX',
    q:'En caso de poseer Estaciones Terrenas pertenecientes al Servicio de Radioaficionados por Satélite, ¿es necesario registrarlas ante la Autoridad de Aplicación?',
    opts:['Sí.','No.'],
    ans:1,
    exp:'Opción b). No es necesario registrar las Estaciones Terrenas del Servicio de Radioaficionados por Satélite.' },

  // ══════════════════════════════════════════════════════════════
  // CAPÍTULO X – ESTACIONES REPETIDORAS
  // ══════════════════════════════════════════════════════════════

  { id:'X.1', cat:'Cap. X',
    q:'¿La Estación Repetidora tiene que estar autorizada ante la Autoridad de Aplicación?',
    opts:['Sí.','No.'],
    ans:0,
    exp:'Opción a). Sí, toda Estación Repetidora debe estar autorizada por el ENACOM.' },

  { id:'X.2', cat:'Cap. X',
    q:'¿Se podrá solicitar autorización para una Estación Repetidora para que opere en bandas cruzadas VHF/UHF?',
    opts:['Sí.','No.'],
    ans:0,
    exp:'Opción a). Sí, se puede solicitar, bajo las condiciones que el ENACOM establezca.' },

  { id:'X.3', cat:'Cap. X',
    q:'¿En qué circunstancias la Autoridad de Aplicación podrá otorgar la autorización para el uso de una Estación Repetidora en bandas cruzadas VHF/UHF?',
    opts:[
      'En determinadas zonas geográficas.',
      'Cuando no haya disponibilidad espectral.',
      'Cuando el solicitante sea un Radioaficionado de categoría Superior.',
    ],
    ans:0,
    exp:'Opción a). La autorización para bandas cruzadas VHF/UHF se otorga en determinadas zonas geográficas.' },

  { id:'X.4', cat:'Cap. X',
    q:'¿Cuál es el plazo máximo para poner en funcionamiento una Estación Repetidora ya autorizada por la Autoridad de Aplicación?',
    opts:['72 horas.','30 días.','60 días.','90 días.'],
    ans:3,
    exp:'Opción d). El plazo máximo para poner en funcionamiento una Repetidora autorizada es 90 días.' },

  { id:'X.5', cat:'Cap. X',
    q:'En el caso en que una Estación Repetidora autorizada se encuentra totalmente fuera de servicio, ¿cuál es el plazo máximo en que puede permanecer inactiva, antes que se produzca su caducidad automática?',
    opts:['72 horas.','30 días.','60 días.','90 días.'],
    ans:2,
    exp:'Opción c). El plazo máximo de inactividad antes de la caducidad automática es 60 días corridos.' },

  { id:'X.6', cat:'Cap. X',
    q:'¿Puede haber en nuestro país Estaciones Repetidoras del Servicio de Radioaficionados con acceso codificado mediante subtonos?',
    opts:[
      'No, porque la Reglamentación lo prohibe.',
      'No, porque los equipos para Radioaficionados no disponen de subtonos.',
      'Sí, siempre que el código sea aprobado previamente por la Autoridad de Aplicación y sea de conocimiento público.',
      'Sí, si el código es únicamente de conocimiento previo de la Autoridad de Aplicación.',
    ],
    ans:2,
    exp:'Opción c). Se permiten repetidoras con subtonos (CTCSS), siempre que el código sea aprobado por el ENACOM y sea de conocimiento público.' },

  { id:'X.7', cat:'Cap. X',
    q:'¿Cómo se identifican las Estaciones Repetidoras?',
    opts:[
      'Con la señal distintiva del titular y la localidad del emplazamiento de la Estación Repetidora.',
      'Con la señal distintiva del titular.',
      'Con la señal distintiva del titular, la localidad de emplazamiento de la estación fija y la localidad del emplazamiento de la Estación Repetidora.',
    ],
    ans:0,
    exp:'Opción a). Las Repetidoras se identifican con la señal distintiva del titular y la localidad de emplazamiento de la Repetidora.' },

  { id:'X.8', cat:'Cap. X',
    q:'¿De cuánto tiempo dispone el titular de la Estación repetidora para comunicar a la Autoridad de Aplicación el inicio de su operación?',
    opts:['15 días corridos.','30 días corridos.','60 días corridos.'],
    ans:0,
    exp:'Opción a). El titular dispone de 15 días corridos desde el inicio de operaciones para comunicarlo al ENACOM.' },

  { id:'X.9', cat:'Cap. X',
    q:'¿Ante qué casos caducará la autorización de una Estación Repetidora?',
    opts:[
      'No haber informado dentro de los 15 días corridos, el inicio de su operación.',
      'Inactividad comprobada en un período mayor a los 60 días corridos.',
      'No haber renovado la licencia del titular o la autorización de la Estación Repetidora en el período estipulado en el Reglamento vigente.',
      'Cuando el titular reciba un apercibimiento por parte de la Autoridad de Aplicación por infracción en el uso de la Estación Repetidora.',
    ],
    ans:[0,1,2],
    exp:'Las opciones correctas son a), b) y c). La autorización caduca por: no informar inicio en 15 días, inactividad mayor a 60 días, o no renovar la licencia/autorización en el período reglamentario.' },

  { id:'X.10', cat:'Cap. X',
    q:'¿Para dar de baja una Estación Repetidora de cuánto tiempo se dispone desde el cese de las emisiones?',
    opts:['15 días corridos.','30 días corridos.','60 días corridos.'],
    ans:0,
    exp:'Opción a). Se dispone de 15 días corridos desde el cese de emisiones para dar de baja la Repetidora.' },

  { id:'X.11', cat:'Cap. X',
    q:'¿Cuando se solicita la baja de una Estación Repetidora, se deben desmantelar las instalaciones radioeléctricas?',
    opts:['Siempre.','Sólo cuando la Autoridad de Aplicación lo requiera.','Nunca.'],
    ans:0,
    exp:'Opción a). Siempre se deben desmantelar las instalaciones radioeléctricas al solicitar la baja.' },

  { id:'X.12', cat:'Cap. X',
    q:'¿Qué se requiere para la autorización de un enlace de 2 o más Estaciones Repetidoras por parte de la Autoridad de Aplicación?',
    opts:[
      'La conformidad por escrito de los titulares de las Estaciones Repetidoras.',
      'Sólo el estudio técnico del cálculo de enlace.',
      'El estudio técnico del cálculo de enlace y la conformidad por escrito de los titulares de las Estaciones Repetidoras.',
    ],
    ans:2,
    exp:'Opción c). Se requieren AMBAS cosas: el estudio técnico del cálculo de enlace y la conformidad por escrito de todos los titulares.' },

  { id:'X.13', cat:'Cap. X',
    q:'¿Es obligatorio contar con un sistema de apagado de la Estación Repetidora?',
    opts:['Sí','No'],
    ans:0,
    exp:'Opción a). Sí, es obligatorio contar con un sistema de apagado de la Repetidora.' },

  { id:'X.14', cat:'Cap. X',
    q:'En caso de optarse por control remoto de la Estación Repetidora mediante vínculo radioeléctrico, ¿éste deberá contar con la autorización de la Autoridad de Aplicación?',
    opts:['Sí.','No.'],
    ans:0,
    exp:'Opción a). El vínculo radioeléctrico para control remoto de la Repetidora debe contar con autorización del ENACOM.' },

  { id:'X.15', cat:'Cap. X',
    q:'¿La frecuencia de transmisión para el control remoto de una Estación Repetidora mediante vínculo radioeléctrico, podrá encontrarse dentro de una banda de radioaficionados?',
    opts:['Sí','No'],
    ans:1,
    exp:'Opción b). No. La frecuencia del vínculo radioeléctrico para control remoto NO puede estar dentro de las bandas de radioaficionados.' },

  // ══════════════════════════════════════════════════════════════
  // CAPÍTULO XI – RADIOBALIZAS (RADIOFAROS)
  // ══════════════════════════════════════════════════════════════

  { id:'XI.1', cat:'Cap. XI',
    q:'¿Qué categoría se requiere para instalar y poner en funcionamiento una Radiobaliza (Radiofaro)?',
    opts:['Novicio.','General.','Superior.','No se requiere una categoría determinada.'],
    ans:3,
    exp:'Opción d). No se requiere una categoría determinada. Cualquier radioaficionado con licencia vigente puede instalar una Radiobaliza.' },

  { id:'XI.2', cat:'Cap. XI',
    q:'¿Cuántas señales de Radiobalizas pueden emitirse desde el mismo lugar de emplazamiento?',
    opts:['Sólo una.','Dos.','Tres.','No hay limitaciones.'],
    ans:0,
    exp:'Opción a). Solo puede emitirse UNA señal de Radiobaliza desde el mismo lugar de emplazamiento.' },

  { id:'XI.3', cat:'Cap. XI',
    q:'¿Con cuántos días de anticipación a la instalación el Radioaficionado deberá notificar a la Autoridad de Aplicación la puesta en funcionamiento de la Radiobaliza, en forma fehaciente, la frecuencia de operación, el domicilio de emplazamiento y potencia de transmisión?',
    opts:['10 días.','15 días','30 días.','No se necesita notificar.'],
    ans:1,
    exp:'Opción b). Debe notificarse al ENACOM con 15 días de anticipación.' },

  // ══════════════════════════════════════════════════════════════
  // CAPÍTULO XII – CURSOS, PRÁCTICAS OPERATIVAS Y EXÁMENES
  // ══════════════════════════════════════════════════════════════

  { id:'XII.1', cat:'Cap. XII',
    q:'¿Quiénes podrán dictar cursos y/o tomar examen para ingreso y ascenso de categoría?',
    opts:['Radio Clubes.','Instituciones Autorizadas.','Instituciones Reconocidas.'],
    ans:[0,1],
    exp:'Las opciones correctas son a) y b). Radio Clubes e Instituciones Autorizadas pueden dictar cursos y tomar exámenes. Las Instituciones Reconocidas solo pueden dar Prácticas Operativas.' },

  { id:'XII.2', cat:'Cap. XII',
    q:'¿Se podrá rendir examen en condición de libre, sin realizar cursos en Radio Clubes e Instituciones Autorizadas?',
    opts:['Sí.','No.'],
    ans:0,
    exp:'Opción a). Sí, se puede rendir examen en condición de libre.' },

  { id:'XII.3', cat:'Cap. XII',
    q:'¿Cómo deberán tomarse los exámenes para ingreso o ascenso de categoría?',
    opts:[
      'En forma escrita únicamente.',
      'En forma oral únicamente.',
      'En forma escrita, y para aspirantes no videntes o imposibilitados para escribir, en forma oral.',
    ],
    ans:2,
    exp:'Opción c). Los exámenes son escritos, excepto para aspirantes no videntes o imposibilitados para escribir, que pueden rendirlos en forma oral.' },

  { id:'XII.4', cat:'Cap. XII',
    q:'¿Quiénes están autorizados a dar prácticas operativas?',
    opts:['Radio Clubes.','Instituciones Autorizadas.','Instituciones Reconocidas.'],
    ans:[0,1,2],
    exp:'Todas las opciones: a), b) y c). Radio Clubes, Instituciones Autorizadas e Instituciones Reconocidas están autorizadas a dar Prácticas Operativas.' },

  { id:'XII.5', cat:'Cap. XII',
    q:'¿Quién supervisa las prácticas operativas?',
    opts:[
      'Veedor.',
      'Instructor.',
      'Autoridades del Radio Club, Institución Autorizada y/o Instituciones Reconocidas.',
    ],
    ans:1,
    exp:'Opción b). El Instructor supervisa las Prácticas Operativas.' },

  { id:'XII.6', cat:'Cap. XII',
    q:'El Instructor designado por el Radio Club, Institución Autorizada o Institución Reconocida, ¿debe estar registrado en el Libro de Actas y debe dar fe por medio de un certificado que el aspirante cumplió con los requisitos solicitados durante la práctica operativa?',
    opts:['Sí','No'],
    ans:0,
    exp:'Opción a). Sí, el Instructor debe estar en el Libro de Actas y certificar que el aspirante cumplió los requisitos.' },

  { id:'XII.7', cat:'Cap. XII',
    q:'¿Las prácticas operativas destinadas a recepción deben cumplirse por cuántas horas?',
    opts:['6 hs.','12 hs.'],
    ans:0,
    exp:'Opción a). Las prácticas operativas de recepción deben cumplirse por 6 horas.' },

  { id:'XII.8', cat:'Cap. XII',
    q:'¿Las prácticas operativas deben asentarse en el Libro de Guardia?',
    opts:['Sí.','No.'],
    ans:0,
    exp:'Opción a). Sí, las prácticas operativas deben asentarse en el Libro de Guardia.' },

  { id:'XII.9', cat:'Cap. XII',
    q:'¿En caso de mediar distancias excesivas o dificultades geográficas para acceder a un Radio Club, Institución Autorizada o Institución Reconocida, las prácticas operativas podrán realizarse en las filiales de los Radio Clubes o en el domicilio de un Instructor?',
    opts:['Sí.','No.'],
    ans:0,
    exp:'Opción a). Sí, en caso de distancias o dificultades geográficas, las prácticas pueden realizarse en filiales o en el domicilio del Instructor.' },

  { id:'XII.10', cat:'Cap. XII',
    q:'¿Con qué señal distintiva operará el Instructor a distancia?',
    opts:['Señal distintiva del Radio Club','Señal distintiva propia del Instructor'],
    ans:1,
    exp:'Opción b). El Instructor a distancia opera con su propia señal distintiva.' },

  { id:'XII.11', cat:'Cap. XII',
    q:'¿La autorización del Radio Club, Institución Autorizada o Institución Reconocida al Instructor a distancia deberá estar plasmada en el Libro de Actas (con validez expresamente detallada)?',
    opts:['Sí.','No.'],
    ans:0,
    exp:'Opción a). Sí, la autorización al Instructor a distancia debe constar en el Libro de Actas con validez expresamente detallada.' },

  { id:'XII.12', cat:'Cap. XII',
    q:'¿Cuáles son las funciones de Instructor?',
    opts:[
      'Dictar cursos.',
      'Tomar exámenes.',
      'Coordinar las prácticas operativas.',
      'Organizar concursos.',
      'Firmar los Certificados de Aprobación de Examen.',
    ],
    ans:[0,1,2],
    exp:'Las opciones correctas son a), b) y c). Las funciones del Instructor son: dictar cursos, tomar exámenes y coordinar prácticas operativas. No incluye organizar concursos (d) ni firmar certificados (e, eso es función del veedor y autoridades).' },

  { id:'XII.13', cat:'Cap. XII',
    q:'¿Qué categoría mínima debe tener el Instructor?',
    opts:['Novicio.','General.','Superior.','Especial.'],
    ans:1,
    exp:'Opción b). El Instructor debe tener categoría mínima GENERAL.' },

  { id:'XII.14', cat:'Cap. XII',
    q:'¿Puede un Radioaficionado que ha sido sancionado alguna vez por la Autoridad de Aplicación ser instructor?',
    opts:['Sí.','No.'],
    ans:1,
    exp:'Opción b). No. Un radioaficionado que ha sido sancionado por el ENACOM no puede ser instructor.' },

  { id:'XII.15', cat:'Cap. XII',
    q:'¿Puede un instructor tomar examen a familiares directos?',
    opts:['Sí.','No.'],
    ans:1,
    exp:'Opción b). No. El instructor no puede tomar examen a familiares directos.' },

  { id:'XII.16', cat:'Cap. XII',
    q:'Ante un requerimiento de una Institución Autorizada a un Radio Club para formar parte de la mesa examinadora, el Radio Club debe designar a un radioaficionado de categoría mínima:',
    opts:['General','Superior','Especial'],
    ans:[0,1],
    exp:'Las opciones correctas son a) General y b) Superior. El radioaficionado designado debe tener categoría mínima General.' },

  { id:'XII.17', cat:'Cap. XII',
    q:'¿Cuántos meses de validez tiene el Certificado de Aprobación de examen firmado por las autoridades del Radio Club o Institución Autorizada para ser presentado ante la Autoridad de Aplicación?',
    opts:['3 meses.','6 meses.','12 meses.'],
    ans:1,
    exp:'Opción b). El Certificado de Aprobación tiene 6 meses de validez para ser presentado ante el ENACOM.' },

  { id:'XII.18', cat:'Cap. XII',
    q:'¿Toda certificación de aprobación de examen autoriza a un aspirante a instalar y poner en funcionamiento equipos radioeléctricos, hasta tanto la Autoridad de Aplicación otorgue la licencia correspondiente?',
    opts:['Sí.','No.'],
    ans:1,
    exp:'Opción b). No. La certificación de aprobación NO autoriza a instalar ni operar equipos. Debe esperar que el ENACOM otorgue la licencia.' },

  { id:'XII.19', cat:'Cap. XII',
    q:'Para la categoría Novicio, el examen de telegrafía será:',
    opts:['Teórico.','Práctico.'],
    ans:0,
    exp:'Opción a). Para la categoría Novicio el examen de telegrafía es TEÓRICO (reconocimiento del Código Morse).' },

  { id:'XII.20', cat:'Cap. XII',
    q:'¿En el examen de Telegrafía, ¿cuántos caracteres se consideran una palabra?',
    opts:['5.','10.','Más de 10.'],
    ans:0,
    exp:'Opción a). En el examen de telegrafía, 5 caracteres se consideran una palabra.' },

  { id:'XII.21', cat:'Cap. XII',
    q:'En el examen de Telegrafía, ¿cuántos caracteres se consideran una letra de la A a la Z?',
    opts:['1.','2.','Más de 2.'],
    ans:0,
    exp:'Opción a). Una letra de la A a la Z equivale a 1 carácter en el examen de telegrafía.' },

  { id:'XII.22', cat:'Cap. XII',
    q:'En el examen de Telegrafía, ¿cuántos caracteres se consideran un número y signo de puntuación?',
    opts:['1.','2.','Más de 2.'],
    ans:1,
    exp:'Opción b). Un número o signo de puntuación equivale a 2 caracteres en el examen de telegrafía.' },

  { id:'XII.23', cat:'Cap. XII',
    q:'En el Libro de Guardia se deberá consignar:',
    opts:[
      'Fecha, hora de comienzo y finalización del comunicado.',
      'Clase de emisión empleada.',
      'Potencia transmitida.',
      'Señal distintiva de la estación corresponsal.',
    ],
    ans:[0,1,3],
    exp:'Las opciones correctas son a), b) y d). El Libro de Guardia debe consignar: fecha y hora, clase de emisión, y señal distintiva del corresponsal. La potencia transmitida (c) no aparece en la respuesta oficial del banco.' },

  { id:'XII.24', cat:'Cap. XII',
    q:'¿Cuál es la función de un veedor?',
    opts:[
      'Participar en la confección del examen.',
      'Firmar el acta de examen.',
      'Firmar el certificado de aprobación de examen.',
      'Atender consultas de los examinados durante el examen.',
    ],
    ans:[1,2],
    exp:'Las opciones correctas son b) y c). El veedor firma el acta de examen y el certificado de aprobación. No confecciona el examen ni atiende consultas.' },

  { id:'XII.25a', cat:'Cap. XII',
    q:'¿Cuáles son los requisitos y obligaciones de un veedor?',
    opts:[
      'Ser Radioaficionado argentino o residente con cualquier categoría.',
      'No haber sido sancionado por la Autoridad de Aplicación.',
      'Ser designado por el Radio Club o Institución Autorizada.',
      'Abstenerse de participar en la toma de exámenes a familiares directos de primer grado.',
    ],
    ans:1,
    exp:'Opción b). El requisito principal del veedor es no haber sido sancionado por la Autoridad de Aplicación. (Nota: el banco oficial lista b como respuesta para esta variante de XII.25.)' },

  { id:'XII.25b', cat:'Cap. XII',
    q:'¿El veedor deberá pertenecer al mismo Radio Club o Institución Autorizada que toma el examen?',
    opts:['Sí.','No.','Indistinto.'],
    ans:1,
    exp:'Opción b). No. El veedor no necesita pertenecer al mismo Radio Club o Institución que toma el examen.' },

  // ══════════════════════════════════════════════════════════════
  // CAPÍTULO XIII – RÉGIMEN DE INFRACCIONES Y SANCIONES
  // ══════════════════════════════════════════════════════════════

  { id:'XIII.1', cat:'Cap. XIII',
    q:'Se consideran infracciones de carácter general:',
    opts:[
      'Operar la estación sin licencia vigente.',
      'Ceder el micrófono a otro Radioaficionado.',
      'Comunicar con estaciones no autorizadas.',
      'Grabar emisiones de terceros y retransmitirlas.',
      'Referirse a temas de índole política, religiosa o racial.',
      'Transmitir música.',
    ],
    ans:[0,2,4,5],
    exp:'Las opciones correctas son a), c), e) y f). Son infracciones generales: operar sin licencia, comunicar con estaciones no autorizadas, referirse a temas políticos/religiosos/raciales y transmitir música. Ceder el micrófono (b) NO es infracción.' },

  { id:'XIII.2', cat:'Cap. XIII',
    q:'Se consideran infracciones de identificación:',
    opts:[
      'Identificarse con una señal distintiva perteneciente a otro Radioaficionado.',
      'Omitir mencionar junto con la señal distintiva de la estación móvil, el lugar geográfico de su actual ubicación.',
      'Mencionar la señal distintiva del Radioaficionado titular y la propia cuando se utilice su estación.',
      'Utilizar una Señal Distintiva Especial vencida o no autorizada por la Autoridad de Aplicación.',
      'Mencionar la señal distintiva del Radio Club y la propia cuando se utilice la estación de dicho Radio Club.',
      'Omitir mencionar que se está operando en "Practica Operativa" cuando corresponda.',
    ],
    ans:[0,1,3,5],
    exp:'Las opciones correctas son a), b), d) y f). Son infracciones de identificación. Las opciones c) y e) son procedimientos CORRECTOS, no infracciones.' },

  { id:'XIII.3', cat:'Cap. XIII',
    q:'Se consideran infracciones operativas:',
    opts:[
      'Transmitir en frecuencia y/o potencia no autorizada para la categoría.',
      'Transmitir textos encriptados.',
      'Realizar o participar en concursos de Radioaficionados sobre frecuencias no autorizadas al efecto.',
      'Trasladar la estación fija por 90 días sin notificar a la Autoridad de Aplicación.',
    ],
    ans:[0,1,2],
    exp:'Las opciones correctas son a), b) y c). Son infracciones operativas. La opción d) no es correcta: el traslado sin notificar es infracción solo si supera los 120 días corridos.' },

  { id:'XIII.4', cat:'Cap. XIII',
    q:'Se consideran infracciones relativas a Estaciones Repetidoras:',
    opts:[
      'No contar con dispositivos de identificación.',
      'Utilizar frecuencias diferentes a las autorizadas.',
      'Entrelazar Estaciones Repetidoras sin la autorización correspondiente.',
      'Ceder la autorización de una estación repetidora a otro Radioaficionado.',
    ],
    ans:[0,1,2],
    exp:'Las opciones correctas son a), b) y c). Son infracciones relativas a Repetidoras. Ceder la autorización (d) también podría considerarse infracción pero el banco oficial marca a, b y c.' },

  { id:'XIII.5', cat:'Cap. XIII',
    q:'Se consideran infracciones relativas a Radiobalizas:',
    opts:[
      'Operar una Radiobaliza no notificada a la Autoridad de Aplicación.',
      'Emitir simultáneamente más de una Radiobaliza en la misma banda y desde el mismo emplazamiento.',
      'Operar con potencias superiores a las autorizadas en el Reglamento.',
      'Operar con una potencia de 50 W en la banda de 2 m.',
    ],
    ans:[0,1,2],
    exp:'Las opciones correctas son a), b) y c). Son infracciones relativas a Radiobalizas: operar sin notificar, emitir más de una en el mismo emplazamiento, y operar con potencia no autorizada.' },

  { id:'XIII.6', cat:'Cap. XIII',
    q:'El orden de las sanciones al cometer y reiterar infracciones es:',
    opts:[
      'Llamado de atención – Apercibimiento – Sanción económica – Suspensión – Cancelación de la licencia.',
      'Llamado de atención – Sanción económica – Suspensión – Cancelación de la licencia.',
      'Llamado de atención – Sanción económica – Cancelación de la licencia.',
    ],
    ans:0,
    exp:'Opción a). El orden progresivo es: 1° Llamado de atención, 2° Apercibimiento, 3° Sanción económica, 4° Suspensión, 5° Cancelación de la licencia.' },

  // ══════════════════════════════════════════════════════════════
  // ANEXO A – PREGUNTAS GENERALES (PB)
  // ══════════════════════════════════════════════════════════════

  { id:'PB.1', cat:'Anexo A — General',
    q:'¿Puede un Radioaficionado transmitir en los extremos de las bandas asignadas a su categoría, y por qué?',
    opts:[
      'Sí, porque está en una frecuencia autorizada de acuerdo a la clase de emisión.',
      'No, porque debido a la anchura de banda de la transmisión, saldría fuera del sector o banda autorizada.',
      'Sí, porque está en la banda autorizada para su categoría.',
      'Ninguna es correcta.',
    ],
    ans:1,
    exp:'Opción b). No puede transmitir en los extremos porque la anchura de banda de la emisión podría salir fuera del sector o banda autorizada.' },

  { id:'PB.2', cat:'Anexo A — General',
    q:'¿A qué tipo/modulación corresponde la clase de emisión A3E?',
    opts:[
      'Telefonía. Amplitud Modulada. Doble Banda Lateral.',
      'Telefonía. Modulación de Frecuencia.',
      'Telefonía. Banda Lateral Única con Portadora Suprimida.',
      'Teletipo. Telegrafía por Desplazamiento de Frecuencia.',
    ],
    ans:0,
    exp:'Opción a). A3E = Telefonía con Amplitud Modulada y Doble Banda Lateral (AM convencional).' },

  { id:'PB.3', cat:'Anexo A — General',
    q:'¿A qué tipo/modulación corresponde la clase de emisión A1A?',
    opts:[
      'Telefonía. Modulación de Frecuencia.',
      'Teletipo. Telegrafía por Desplazamiento de Frecuencia.',
      'Telegrafía. Código Morse.',
      'Telefonía. Banda Lateral Única con Portadora Suprimida.',
    ],
    ans:2,
    exp:'Opción c). A1A = Telegrafía con Código Morse (CW).' },

  { id:'PB.4', cat:'Anexo A — General',
    q:'¿A qué tipo/modulación corresponde la clase de emisión J3E?',
    opts:[
      'Telegrafía. Código Morse.',
      'Telefonía. Banda Lateral Única con Portadora Suprimida.',
      'Televisión. Modulación de Frecuencia.',
      'Televisión. Doble Banda Lateral.',
    ],
    ans:1,
    exp:'Opción b). J3E = Telefonía con Banda Lateral Única y Portadora Suprimida (SSB/BLU).' },

  { id:'PB.5', cat:'Anexo A — General',
    q:'¿A qué tipo/modulación corresponde la clase de emisión F3E?',
    opts:[
      'Facsímil.',
      'Telegrafía. Código Morse.',
      'Telefonía. Modulación de Frecuencia. Doble Banda Lateral.',
      'Teletipo. Telegrafía por Desplazamiento de Frecuencia.',
    ],
    ans:2,
    exp:'Opción c). F3E = Telefonía con Modulación de Frecuencia (FM).' },

  { id:'PB.6', cat:'Anexo A — General',
    q:'¿A qué modo de emisión corresponde la clase J2D?',
    opts:['AM.','PACKET.','CW.','APRS.'],
    ans:[1,3],
    exp:'Las opciones correctas son b) PACKET y d) APRS. La clase J2D corresponde a ambos modos.' },

  { id:'PB.7', cat:'Anexo A — General',
    q:'¿A qué modo de emisión corresponde la clase J3E?',
    opts:['SSB.','RTTY.','SSTV.','ATV.'],
    ans:0,
    exp:'Opción a). J3E corresponde al modo SSB (Single Side Band / Banda Lateral Única).' },

  { id:'PB.8', cat:'Anexo A — General',
    q:'¿A qué modo de emisión corresponde la clase A1A?',
    opts:['SSB.','CW.','RTTY.','PACKET.'],
    ans:1,
    exp:'Opción b). A1A corresponde al modo CW (Código Morse).' },

  { id:'PB.9', cat:'Anexo A — General',
    q:'¿A qué modo de emisión corresponde la clase F3E?',
    opts:['ATV.','FM.','FAX.','AM.'],
    ans:1,
    exp:'Opción b). F3E corresponde al modo FM (Modulación de Frecuencia).' },

  { id:'PB.10', cat:'Anexo A — General',
    q:'¿A qué modo de emisión corresponde la clase F1B?',
    opts:['FAX.','CW.','RTTY.','PACKET.'],
    ans:2,
    exp:'Opción c). F1B corresponde al modo RTTY (Radio Teletype / Radioteletipo).' },

  { id:'PB.11', cat:'Anexo A — General',
    q:'¿En qué caso puede una estación de Radioaficionado reclamar protección por interferencias perjudiciales en una banda atribuida con carácter secundario?',
    opts:[
      'Sólo si la interferencia proviene de una estación comercial.',
      'Sólo si la interferencia proviene de una estación de un servicio oficial.',
      'Sólo si la interferencia proviene de una estación del mismo servicio o de otros servicios con atribución también secundaria.',
      'Puede reclamar protección en cualquier caso.',
    ],
    ans:2,
    exp:'Opción c). En banda secundaria, solo puede reclamar protección ante interferencias de estaciones del mismo servicio u otros con atribución también secundaria. Ante servicios primarios debe ceder.' },

  { id:'PB.12', cat:'Anexo A — General',
    q:'Un Radioaficionado puede efectuar transmisiones del Servicio de Radioaficionados por satélite:',
    opts:[
      'En todas las bandas de frecuencias atribuidas al Servicio de Radioaficionados.',
      'En cualquier frecuencia de las bandas atribuidas al Servicio de Radioaficionados por Satélite.',
      'En los segmentos autorizados para uso satelital dentro de las bandas atribuidas al Servicio de Radioaficionados por Satélite.',
    ],
    ans:2,
    exp:'Opción c). Solo en los segmentos específicamente autorizados para uso satelital dentro de las bandas del Servicio de Radioaficionados por Satélite.' },

  // ══════════════════════════════════════════════════════════════
  // ANEXO A – PREGUNTAS ESPECÍFICAS PARA CATEGORÍA NOVICIO (PBN)
  // ══════════════════════════════════════════════════════════════

  { id:'PBN.1', cat:'Anexo A — Novicio',
    q:'¿En cuál de las siguientes bandas de frecuencias puede operar un Radioaficionado de categoría Novicio?',
    opts:['60 metros.','30 metros.','12 metros.','70 centímetros.'],
    ans:[0,3],
    exp:'Las opciones correctas son a) 60 metros y d) 70 centímetros. El Novicio puede operar en estas bandas. Las bandas de 30m y 12m no están disponibles para Novicio.' },

  { id:'PBN.2', cat:'Anexo A — Novicio',
    q:'¿En cuál de las siguientes frecuencias puede operar un Radioaficionado de categoría Novicio?',
    opts:['146000 kHz.','10135 kHz.','3550 kHz.','14235 kHz.'],
    ans:[0,2],
    exp:'Las opciones correctas son a) 146000 kHz (146 MHz, banda de 2m) y c) 3550 kHz (banda de 80m). El Novicio puede operar en ambas frecuencias.' },

  { id:'PBN.3', cat:'Anexo A — Novicio',
    q:'En la banda de 15 metros, un Radioaficionado de categoría Novicio:',
    opts:[
      'Puede emitir en todos los segmentos.',
      'Puede emitir sólo en algunos segmentos.',
      'No puede emitir en esta banda.',
      'Posee restricciones adicionales de potencia.',
    ],
    ans:1,
    exp:'Opción b). En la banda de 15 metros (21 MHz) el Novicio puede emitir SOLO EN ALGUNOS segmentos.' },

  { id:'PBN.4', cat:'Anexo A — Novicio',
    q:'¿En qué porción de la banda de 20 metros NO pueden operar los titulares de licencia de categoría Novicio?',
    opts:['14000 – 14070 kHz.','14070 – 14095 kHz.','14095 – 14099 kHz.'],
    ans:0,
    exp:'Opción a). El Novicio NO puede operar en el segmento 14000–14070 kHz de la banda de 20 metros.' },

  { id:'PBN.5', cat:'Anexo A — Novicio',
    q:'¿Cuál es la potencia máxima autorizada para la categoría Novicio en la banda de 30 metros?',
    opts:['500 W.','250 W.','No puede emitir en esta banda.','La autorizada para la categoría.'],
    ans:2,
    exp:'Opción c). El Novicio NO puede emitir en la banda de 30 metros (10 MHz).' },

  { id:'PBN.6', cat:'Anexo A — Novicio',
    q:'¿Cuál es la PIRE máxima autorizada para la categoría Novicio en la banda de 2200 metros?',
    opts:['1 W.','25 W.','La autorizada para la categoría.','No puede emitir en esta banda.'],
    ans:0,
    exp:'Opción a). En la banda de 2200 metros (136 kHz), la PIRE máxima para el Novicio es 1 W.' },

  { id:'PBN.7', cat:'Anexo A — Novicio',
    q:'¿Cuál es la PIRE máxima autorizada para la categoría Novicio en la banda de 630 metros?',
    opts:['1 W.','5 W.','La autorizada para la categoría.','No puede emitir en esta banda.'],
    ans:1,
    exp:'Opción b). En la banda de 630 metros (475 kHz), la PIRE máxima para el Novicio es 5 W.' },

  { id:'PBN.8', cat:'Anexo A — Novicio',
    q:'¿Cuál es la PIRE máxima autorizada para la categoría Novicio en la banda de 60 metros?',
    opts:['25 W.','100 W.','La autorizada para la categoría.','No puede emitir en esta banda.'],
    ans:0,
    exp:'Opción a). En la banda de 60 metros (5 MHz), la PIRE máxima para el Novicio es 25 W.' },

  { id:'PBN.9', cat:'Anexo A — Novicio',
    q:'La banda de frecuencias de 80 metros:',
    opts:[
      'Está atribuida al Servicio de Radioaficionados con carácter primario.',
      'Está atribuida al Servicio de Radioaficionados con carácter secundario.',
      'Está atribuida al Servicio de Radioaficionados con carácter primario o secundario según el segmento de frecuencias.',
    ],
    ans:2,
    exp:'Opción c). La banda de 80 metros tiene atribución mixta: primaria o secundaria según el segmento de frecuencias.' },

  { id:'PBN.10', cat:'Anexo A — Novicio',
    q:'¿Cuál es la anchura de banda máxima para DIGIMODOS en la banda de 2 y 10 metros?',
    opts:['< = 3 kHz.','< = 16 kHz.','>= 16 kHz.','>= 3 kHz.'],
    ans:1,
    exp:'Opción b). La anchura de banda máxima para DIGIMODOS en las bandas de 2m y 10m es <= 16 kHz.' },

  { id:'PBN.11', cat:'Anexo A — Novicio',
    q:'¿Cuál es la anchura de banda máxima para DIGIMODOS en la banda de 40 y 80 metros?',
    opts:['< = 3 kHz.','< = 50 kHz.','< = 100 kHz.','< = 200 kHz.'],
    ans:0,
    exp:'Opción a). La anchura de banda máxima para DIGIMODOS en las bandas de 40m y 80m es <= 3 kHz.' },

  { id:'PBN.12', cat:'Anexo A — Novicio',
    q:'¿Cuál es la única actividad permitida a un Radioaficionado de categoría Novicio en la banda de 17 metros?',
    opts:['Emitir en RTTY.','Emitir en SSB.','Emitir una Radiobaliza.'],
    ans:2,
    exp:'Opción c). En la banda de 17 metros (18 MHz), el Novicio SOLO puede emitir una Radiobaliza.' },

  { id:'PBN.13', cat:'Anexo A — Novicio',
    q:'Una frecuencia indicada como de uso exclusivo para un modo de emisión puede utilizarse para:',
    opts:[
      'Emitir en un modo diferente sólo si se encuentra desocupada.',
      'Emitir únicamente en ese modo.',
      'Queda supeditado a la categoría del Radioaficionado.',
    ],
    ans:1,
    exp:'Opción b). Una frecuencia de uso exclusivo para un modo SOLO puede usarse para ese modo específico, aunque esté libre.' },

  { id:'PBN.14', cat:'Anexo A — Novicio',
    q:'¿Puede un Radioaficionado de categoría Novicio efectuar transmisiones en AM en la banda de 3 centímetros?',
    opts:[
      'Siempre que se trate de emisiones con baja potencia.',
      'Siempre que se trate de emisiones de prueba.',
      'Siempre, sin restricciones.',
      'No están permitidas las emisiones en ese modo.',
    ],
    ans:3,
    exp:'Opción d). No están permitidas las emisiones en AM en la banda de 3 centímetros para la categoría Novicio.' },

  { id:'PBN.15', cat:'Anexo A — Novicio',
    q:'¿Puede un Radioaficionado de categoría Novicio efectuar transmisiones del Servicio de Radioaficionados por Satélite en la banda de 23 centímetros?',
    opts:[
      'Sólo en sentido espacio – tierra, en el rango 1260 – 1270 MHz.',
      'Sólo en sentido tierra – espacio, en el rango 1260 – 1270 MHz.',
      'Sí, en ambos sentidos, en el rango 1260 – 1270 MHz.',
      'No están permitidas.',
    ],
    ans:1,
    exp:'Opción b). El Novicio puede transmitir por satélite en la banda de 23 cm SOLO en sentido tierra–espacio (uplink), en el rango 1260–1270 MHz.' },
]

export const REG_CATEGORIES = ['Todas', ...new Set(REG_QUESTIONS.map(q => q.cat))]
