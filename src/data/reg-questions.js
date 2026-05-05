// src/data/reg-questions.js
// Banco ENACOM — Reglamentación y Ética Operativa
// Preguntas válidas para categoría NOVICIO:
//   • Capítulos I-XIII (todas las generales de reglamentación)
//   • Preguntas Generales del Anexo A (PB.1–PB.12)
//   • Preguntas Específicas Novicio del Anexo A (PBN.1–PBN.15)
// Respuestas verificadas contra la Tabla de Respuestas Correctas oficial.
// Preguntas con respuestas múltiples: se adaptan a formato single-choice
// seleccionando la opción que incluye todas las correctas, o re-formulando.

export const REG_QUESTIONS = [
  // ── CAPÍTULO I — DISPOSICIONES GENERALES ─────────────────
  {id:'R1',cat:'Cap. I — Definiciones',
   q:'¿Cuál es el objeto del "Reglamento General de Radioaficionados"?',
   opts:['Regular la actividad de los Radioaficionados, Radio Clubes, Instituciones Autorizadas e Instituciones Reconocidas','Atribuir y reglamentar el uso de las bandas de frecuencias para el Servicio de Aficionados y por Satélite','Establecer criterios técnicos para el diseño de equipamiento','Las opciones a) y b) son correctas'],
   ans:3,exp:'El objeto es tanto regular la actividad de los radioaficionados y sus instituciones COMO atribuir y reglamentar el uso de las bandas de frecuencias. Ambas opciones (a y b) son correctas según el Reglamento.'},

  {id:'R2',cat:'Cap. I — Definiciones',
   q:'¿Cuál es el alcance del "Reglamento General de Radioaficionados"?',
   opts:['Servicio de Aficionados','Servicio de Aficionados por Satélite','Servicio de Aficionados y Servicio de Aficionados por Satélite','Solo estaciones fijas'],
   ans:2,exp:'El Reglamento tiene alcance sobre AMBOS servicios: Servicio de Aficionados y Servicio de Aficionados por Satélite.'},

  {id:'R3',cat:'Cap. I — Definiciones',
   q:'¿Cuál es la Autoridad de Aplicación para el "Reglamento General de Radioaficionados"?',
   opts:['SECRETARÍA DE COMUNICACIONES (SC)','COMISIÓN NACIONAL DE COMUNICACIONES (CNC)','ENTE NACIONAL DE COMUNICACIONES (ENACOM)','MINISTERIO DE COMUNICACIONES (MINCOM)'],
   ans:2,exp:'La Autoridad de Aplicación es el ENACOM (Ente Nacional de Comunicaciones), creado por el Decreto 267/15 en reemplazo de la CNC y el COMFER.'},

  {id:'R4',cat:'Cap. I — Definiciones',
   q:'Los términos "aficionados" y "aficionados por satélite" ¿son equivalentes a "radioaficionados" y "radioaficionados por satélite"?',
   opts:['Sí','No'],
   ans:0,exp:'Sí. A los fines del Reglamento vigente en Argentina, ambos términos son considerados equivalentes.'},

  {id:'R5',cat:'Cap. I — Definiciones',
   q:'Defina "SERVICIO DE RADIOAFICIONADOS":',
   opts:['Servicio de radiocomunicación privado para instrucción de operadores comerciales','Servicio de radiocomunicación público para estudios técnicos de operadores comerciales','Servicio de radiocomunicación que tiene por objeto la instrucción individual, la intercomunicación y los estudios técnicos efectuados por Radioaficionados','Servicio de radiocomunicación privado para instrucción de operadores de radiodifusión'],
   ans:2,exp:'El Servicio de Radioaficionados es un servicio de radiocomunicación cuyo objeto es la instrucción individual, la intercomunicación y los estudios técnicos efectuados por radioaficionados, sin fines comerciales.'},

  {id:'R6',cat:'Cap. I — Definiciones',
   q:'Defina "SERVICIO DE RADIOAFICIONADOS POR SATÉLITE":',
   opts:['Servicio privado para instrucción de operadores comerciales','Servicio que utiliza estaciones espaciales en satélites artificiales de la Tierra para los mismos fines que el Servicio de Radioaficionados','Servicio privado para instrucción de operadores de radiodifusión','Servicio en que las señales de estaciones espaciales se destinan a recepción directa por el público'],
   ans:1,exp:'Es el servicio que utiliza estaciones espaciales situadas en satélites artificiales de la Tierra para los mismos fines que el Servicio de Radioaficionados.'},

  {id:'R7',cat:'Cap. I — Definiciones',
   q:'Defina "RADIOAFICIONADO":',
   opts:['Persona autorizada que se interesa en la radiotecnia con carácter individual, sin fines de lucro, realizando instrucción, intercomunicación y estudios técnicos','Persona autorizada que se interesa en la radiotecnia con carácter comercial, con fines de lucro','Persona autorizada que se interesa en la radiotecnia con carácter individual, con fines de lucro','Persona autorizada que realiza solo intercomunicación con fines particulares'],
   ans:0,exp:'El Radioaficionado es una persona debidamente autorizada que se interesa en la radiotecnia con carácter exclusivamente individual, sin fines de lucro, realizando actividades de instrucción, intercomunicación y estudios técnicos.'},

  {id:'R8',cat:'Cap. I — Definiciones',
   q:'Defina "RADIO CLUB":',
   opts:['Asociación Civil integrada por cualquier operador de radio habilitado','Asociación Civil integrada por entidades de enseñanza y práctica comercial','Persona Jurídica de Orden Privado — Asociación Civil sin fines de lucro cuyos objetivos se apoyan en la agrupación de Radioaficionados para fomentar el ingreso, enseñanza, difusión y práctica de la actividad','Asociación Civil integrada por usuarios del Servicio de Banda Ciudadana'],
   ans:2,exp:'El Radio Club es una Persona Jurídica de Orden Privado, dentro de la figura de Asociación Civil sin fines de lucro, que agrupa Radioaficionados para fomentar el ingreso, enseñanza, difusión y práctica de la actividad.'},

  {id:'R9',cat:'Cap. I — Definiciones',
   q:'Defina "INSTITUCIÓN AUTORIZADA":',
   opts:['Institución distinta de los Radio Clubes y de las Instituciones Reconocidas, autorizada por la Autoridad de Aplicación para dictar cursos y tomar exámenes para ingreso y ascenso de categorías','Institución autorizada para fomentar el ingreso a través de Prácticas Operativas únicamente'],
   ans:0,exp:'La Institución Autorizada está habilitada por el ENACOM para dictar cursos sobre técnica, reglamentación y ética operativa, telegrafía y cursos afines, y también para tomar exámenes para ingreso y ascenso de categorías.'},

  {id:'R10',cat:'Cap. I — Definiciones',
   q:'Defina "INSTITUCIÓN RECONOCIDA":',
   opts:['Institución distinta de los Radio Clubes y de las Instituciones Autorizadas, reconocida por la Autoridad de Aplicación para fomentar el ingreso, difusión y práctica de la actividad a través de Prácticas Operativas','Institución autorizada para dictar cursos y tomar exámenes de categorías'],
   ans:0,exp:'La Institución Reconocida solo puede fomentar la actividad a través de Prácticas Operativas. NO puede dictar cursos formales ni tomar exámenes de ingreso o ascenso (eso lo hacen los Radio Clubes e Instituciones Autorizadas).'},

  {id:'R11',cat:'Cap. I — Definiciones',
   q:'Defina "LICENCIA DE RADIOAFICIONADO":',
   opts:['Autorización que otorga un Radio Club reconocido a personas físicas o jurídicas','Autorización que otorga la Autoridad de Aplicación a personas jurídicas que no faculta a instalar estaciones','Autorización que otorga la Autoridad de Aplicación a personas físicas y jurídicas que han cumplido los requisitos del Reglamento, facultándolas a instalar y operar estaciones en sus bandas, categorías y condiciones','Autorización que otorga la Autoridad de Aplicación solo a personas jurídicas para instalar estaciones'],
   ans:2,exp:'La Licencia de Radioaficionado es otorgada por el ENACOM a personas físicas Y jurídicas que cumplen los requisitos. Su otorgamiento las faculta a instalar y operar estaciones en sus respectivas bandas, categorías y condiciones.'},

  {id:'R12',cat:'Cap. I — Definiciones',
   q:'¿Cuál es la sigla del PERMISO INTERNACIONAL DE RADIOAFICIONADOS?',
   opts:['I.A.R.P.','P.I.R.A.','I.R.P.A.'],
   ans:0,exp:'La sigla correcta es IARP (International Amateur Radio Permit / Permiso Internacional de Radioaficionados), establecido por el Convenio Interamericano.'},

  {id:'R13',cat:'Cap. I — Definiciones',
   q:'Defina "PERMISO INTERNACIONAL DE RADIOAFICIONADOS":',
   opts:['Autorización extendida por la Autoridad de Aplicación según la Ley 24.730 y la Resolución 3745 SC/1997','Autorización extendida por la Autoridad de Aplicación según la Resolución SC 50/1998'],
   ans:0,exp:'El IARP es la autorización extendida por la Autoridad de Aplicación de acuerdo con lo previsto en la Ley 24.730 y la Resolución 3745 SC/1997.'},

  {id:'R14',cat:'Cap. I — Definiciones',
   q:'Defina "SEÑAL DISTINTIVA":',
   opts:['Identificación otorgada por la Autoridad de Aplicación a un Radioaficionado, Radio Club, Institución Autorizada o Institución Reconocida','Identificación otorgada por IARU','Código que representa una clase de emisión'],
   ans:0,exp:'La Señal Distintiva (indicativo) es la identificación otorgada por el ENACOM (Autoridad de Aplicación) a radioaficionados e instituciones. No es otorgada por la IARU.'},

  {id:'R15',cat:'Cap. I — Definiciones',
   q:'Defina "CATEGORÍA" de Radioaficionado:',
   opts:['Nivel de calificación de titulares de licencias comerciales','Nivel de calificación otorgado por los Radio Clubes','Nivel de calificación que otorga la Autoridad de Aplicación al Radioaficionado que cumple los requisitos del Reglamento. Cada categoría conlleva derechos y obligaciones asociados','Nivel de calificación de titulares de licencia de radiodifusión'],
   ans:2,exp:'La Categoría es el nivel de calificación otorgado por el ENACOM al radioaficionado que cumple los requisitos establecidos. Cada categoría tiene derechos y obligaciones específicas (bandas autorizadas, potencia máxima, etc.).'},

  {id:'R16',cat:'Cap. I — Definiciones',
   q:'Defina "CONTACTO DE DX":',
   opts:['Comunicados de duración ilimitada donde se intercambian datos técnicos y nombre de operadores','Comunicados entre estaciones que por la distancia, inaccesibilidad geográfica u otro factor de dificultad, no resulta frecuente la comunicación. Se realizan en segmentos con prioridad DX y se limitan a intercambios mínimos indispensables','Comunicados con varios Radioaficionados a la vez intercambiando datos técnicos y domicilios','Comunicados donde se intercambian datos, comentarios generales y datos de estaciones'],
   ans:1,exp:'Los contactos DX son comunicados entre estaciones que, por distancia o inaccesibilidad, no son frecuentes. Se realizan en segmentos con prioridad DX y se limitan a intercambios mínimos para facilitar la mayor cantidad de contactos posibles.'},

  {id:'R17',cat:'Cap. I — Definiciones',
   q:'Defina "ESTACIÓN REPETIDORA DE AFICIONADO":',
   opts:['Estación de retransmisión automática reservada únicamente al titular','Estación de transmisión para actividad comercial abierta a todos los usuarios','Estación fija destinada a la retransmisión automática de comunicaciones del Servicio de Radioaficionados, abierta al tráfico general, caracterizada por la señal distintiva del titular, posición geográfica, subtono y frecuencia asignada','Estación de retransmisión automática reservada únicamente a los Radio Clubes titulares'],
   ans:2,exp:'La Estación Repetidora es una estación FIJA que retransmite automáticamente y es abierta al tráfico general. Se identifica con la señal distintiva del titular, su posición geográfica, subtono y frecuencia asignada.'},

  {id:'R18',cat:'Cap. I — Definiciones',
   q:'Defina "REPETIDOR DIGITAL (Digipeater)":',
   opts:['Estación que recibe y retransmite información digital por paquete en tiempo real en la misma frecuencia, con capacidad de enlazar dos estaciones automáticamente. Se identifica con la señal distintiva del titular','Estación que recibe información digital en distinta frecuencia','Estación que recibe y retransmite cualquier modo en tiempo real enlazando varias estaciones','Estación que recibe información analógica en distinta frecuencia'],
   ans:0,exp:'El Digipeater recibe y retransmite datos digitales por paquete (AX.25/Packet Radio) en tiempo real, en la MISMA frecuencia, pudiendo enlazar dos estaciones automáticamente. Se identifica con la señal distintiva del titular.'},

  {id:'R19',cat:'Cap. I — Definiciones',
   q:'Defina "CONTROLADOR NODO TERMINAL (TNC)":',
   opts:['Unidad que permite la conexión radial entre transceptores para envío de datos analógicos','Unidad o programa que permite la conexión entre computadoras y equipos de radio para recepción y transmisión de datos digitales mediante un módem, en las bandas y modos del Servicio de Radioaficionados. Se identifica con la señal distintiva del titular','Equipo que permite la retransmisión automática de mensajes analógicos','Transceptor que permite la retransmisión automática de mensajes analógicos'],
   ans:1,exp:'El TNC (Terminal Node Controller) conecta computadoras con radios, permitiendo transmitir y recibir datos digitales mediante un módem en las bandas de radioaficionados. Opera en modos como Packet Radio (AX.25).'},

  {id:'R20',cat:'Cap. I — Definiciones',
   q:'Defina "SISTEMA DE BOLETINES Y BASE DE DATOS (BBS)":',
   opts:['Sistema automático compuesto por computadoras, equipos radioeléctricos y TNC que permite el almacenamiento y distribución de mensajes y archivos de Radioaficionados, con acceso sin limitaciones. Su responsable es el titular de la licencia','Sistema manual compuesto de transceptor y computadora','Sistema automático que permite el contacto entre dos estaciones con comunicaciones analógicas','Sistema manual compuesto de transceptor y antena'],
   ans:0,exp:'El BBS es un sistema automático que almacena y distribuye mensajes y archivos de radioaficionados. Es de acceso libre (sin limitaciones), su responsable es el titular de la licencia y se identifica con su señal distintiva.'},

  {id:'R21',cat:'Cap. I — Definiciones',
   q:'Defina "SISTEMA DE MENSAJES PERSONALES (PMS/PBBS)":',
   opts:['Controlador Nodo Terminal para almacenamiento de mensajes personales. Realiza correo electrónico y se identifica con la señal distintiva del titular','Transceptor para envío de mensajes generales entre Radioaficionados','TNC para almacenamiento de mensajes abiertos al tráfico de radioescuchas','Transceptor para mensajes de estaciones de banda ciudadana'],
   ans:0,exp:'El PMS/PBBS es un TNC (Controlador Nodo Terminal) para almacenamiento de mensajes personales. Realiza funciones de correo electrónico entre radioaficionados y se identifica con la señal distintiva del titular.'},

  {id:'R22',cat:'Cap. I — Definiciones',
   q:'Defina "DISTRIBUCIÓN DE MENSAJES (Forwarding)":',
   opts:['Mecanismo utilizado por los BBS para la distribución de mensajes con otros BBS','Mecanismo utilizado por los digipeaters y TNC para almacenar mensajes','Mecanismo de repetidoras para distribuir mensajes analógicos','Mecanismo de los Nodos para almacenar mensajes personales'],
   ans:0,exp:'El Forwarding es el mecanismo mediante el cual los BBS distribuyen mensajes hacia otros BBS, formando una red de correo electrónico de radioaficionados (similar al sistema store-and-forward).'},

  {id:'R23',cat:'Cap. I — Definiciones',
   q:'Defina "TARJETA QSL":',
   opts:['Confirmación (postal o virtual) que intercambian los Radioaficionados por sus comunicados realizados y los Radioescuchas por los comunicados recepcionados','Confirmación de todos los comunicados realizados y de los radioescuchas por comunicados recepcionados','Confirmación de todos los comunicados y de los radioescuchas por comunicados bilaterales','Confirmación de primeros comunicados y de radioescuchas por comunicados bilaterales'],
   ans:0,exp:'La tarjeta QSL es una confirmación (postal o virtual) que intercambian los radioaficionados por sus comunicados y los radioescuchas por los comunicados que recibieron. Puede enviarse por correo físico o por sistemas digitales como eQSL o LOTW.'},

  {id:'R24',cat:'Cap. I — Definiciones',
   q:'Defina "INSTRUCTORES":',
   opts:['Miembros del Radio Club que toman exámenes y no pueden intervenir en la evaluación','Radioaficionado nombrado por el Radio Club, Institución Autorizada o Reconocida, que por su capacidad y experiencia acredita competencia para dictar cursos y/o coordinar Prácticas Operativas, y que estará presente durante la toma y evaluación de los exámenes','Miembros de otro Radio Club que pueden intervenir en la evaluación de exámenes','Miembros de otro Radio Club que intervienen junto con los Veedores Voluntarios'],
   ans:1,exp:'El Instructor es designado por el Radio Club o Institución, acredita competencia para dictar cursos y coordinar prácticas operativas, y debe estar presente durante la toma y evaluación de los exámenes.'},

  {id:'R25',cat:'Cap. I — Definiciones',
   q:'Defina "CÓDIGO MORSE":',
   opts:['Comunicados entre estaciones con gran distancia, limitados a intercambios mínimos','Sistema de escritura estandarizado (Recomendación UIT-R M.1677-1) que representa letras, números y signos mediante sonidos cortos ("puntos"), sonidos largos ("rayas") y silencios ("espacios")','Condición de operación en que la estación transmite con potencia máxima de 5W (CW) o 10W (SSB)'],
   ans:1,exp:'El Código Morse es el sistema de escritura estandarizado por la UIT (Recomendación UIT-R M.1677-1) que representa el alfabeto, números y signos mediante puntos (sonidos cortos), rayas (sonidos largos) y espacios (silencios).'},

  {id:'R26',cat:'Cap. I — Definiciones',
   q:'Defina "ESTACIÓN DEL SERVICIO DE RADIOAFICIONADO":',
   opts:['Estación radioeléctrica compuesta por transmisores, receptores o transceptores, incluyendo sistemas irradiantes e instalaciones accesorias para operar en el Servicio de Radioaficionados. Puede ser Fija, Móvil o Móvil de mano','Estación fija destinada a retransmisión automática abierta al tráfico general','Estación para operar en el Servicio de Radioaficionados por Satélite; puede ser Terrena o Espacial'],
   ans:0,exp:'La estación del Servicio de Radioaficionado incluye transmisores, receptores o transceptores con sus sistemas irradiantes e instalaciones accesorias. Puede ser Fija (en domicilio), Móvil (en vehículo) o Móvil de mano (portable con fuente autónoma).'},

  {id:'R27',cat:'Cap. I — Definiciones',
   q:'Defina "RADIOBALIZA (RADIOFARO)":',
   opts:['Estación que recibe y retransmite información digital por paquetes','Estación transmisora del Servicio de Radioaficionados utilizada para determinar condiciones de propagación y/o ajuste de antenas, que emite a intervalos regulares en una única frecuencia fija su señal distintiva y datos de potencia, antena y altura','Estación fija destinada a retransmisión automática abierta al tráfico general'],
   ans:1,exp:'La radiobaliza (o radiofaro) es una estación transmisora usada para determinar condiciones de propagación y ajuste de antenas. Emite a intervalos regulares en una única frecuencia fija su señal distintiva y datos técnicos.'},

  {id:'R28',cat:'Cap. I — Definiciones',
   q:'Defina "ESTACIÓN DEL SERVICIO DE RADIOAFICIONADO POR SATÉLITE":',
   opts:['Estación fija destinada a retransmisión automática abierta al tráfico general','Estación que recibe y retransmite información digital por paquetes','Estación radioeléctrica con transmisores, receptores o transceptores para operar en el Servicio de Radioaficionados por Satélite. Puede ser Terrena (Fija o Móvil) o Espacial (a bordo de satélites artificiales)'],
   ans:2,exp:'La estación del Servicio de Radioaficionados por Satélite puede ser Terrena (situada en la superficie terrestre, con variantes Fija y Móvil) o Espacial (situada a bordo de satélites artificiales cuyo cuerpo de referencia es la Tierra).'},

  {id:'R29',cat:'Cap. I — Definiciones',
   q:'Defina "PROYECTO INTERNACIONAL DE BALIZAS (IBP)":',
   opts:['Autorización de la Autoridad de Aplicación según la Ley 24.730','Red mundial de radiofaros en HF organizado por IARU, compartiendo la misma frecuencia por banda entre las transmisoras (en 20, 17, 15, 12 y 10 metros)','Método de comunicación que utiliza la superficie lunar como elemento reflector'],
   ans:1,exp:'El IBP (International Beacon Project) es una red mundial de radiofaros en HF organizado por la IARU. Comparten una única frecuencia por banda (en 20, 17, 15, 12 y 10 metros), transmitiendo en secuencia para permitir la observación de condiciones de propagación globales.'},

  {id:'R30',cat:'Cap. I — Definiciones',
   q:'Defina "DESASTRE" (conforme Ley Nº 27.287, Art. 2º):',
   opts:['Interacción entre una amenaza y una población vulnerable que, por su magnitud, crea una interrupción en el funcionamiento de una sociedad con desproporción entre los medios necesarios para superarla y los disponibles','Situación o daño por evento adverso que puede ser atendida por los medios disponibles localmente'],
   ans:0,exp:'El Desastre (Ley 27.287) es una interacción entre amenaza y población vulnerable que, por su magnitud, interrumpe el funcionamiento social y crea una desproporción entre los medios necesarios y los disponibles. Difiere de la Emergencia, que SÍ puede atenderse localmente.'},

  {id:'R31',cat:'Cap. I — Definiciones',
   q:'Defina "EMERGENCIA" (conforme Ley Nº 27.287, Art. 2º):',
   opts:['Interacción entre una amenaza y una población vulnerable que interrumpe el funcionamiento de una sociedad con desproporción de medios','Situación o daño provocado por un evento adverso de origen natural o humano que, por su magnitud, puede ser atendida por los medios disponibles localmente'],
   ans:1,exp:'La Emergencia (Ley 27.287) es una situación o daño adverso que, a diferencia del Desastre, PUEDE ser atendida con los medios disponibles localmente. El Desastre supera la capacidad local de respuesta.'},

  {id:'R32',cat:'Cap. I — Definiciones',
   q:'Defina "CONCURSO":',
   opts:['Evento nacional y/o internacional donde se ponen a prueba las habilidades de los Radioaficionados. Sus bases y condiciones se informan mediante boletines y revistas de los Radio Clubes e Instituciones','Comunicados entre estaciones de gran distancia limitados a intercambios mínimos','Sistema de escritura que representa el alfabeto mediante puntos, rayas y silencios'],
   ans:0,exp:'El Concurso es un evento nacional y/o internacional donde se ponen a prueba las habilidades de los radioaficionados (velocidad de contactos, trabajo en bandas, etc.). Las bases se comunican por los Radio Clubes e Instituciones.'},

  {id:'R33',cat:'Cap. I — Definiciones',
   q:'Defina "ÉTICA OPERATIVA":',
   opts:['El conjunto de deberes, obligaciones, conductas y principios establecidos en el Reglamento y las disposiciones de la IARU, que rigen el normal desenvolvimiento de la actividad de los Radioaficionados','El conjunto de símbolos, alfabetos y códigos establecidos en el Reglamento y las disposiciones de la IARU'],
   ans:0,exp:'La Ética Operativa es el conjunto de deberes, obligaciones, conductas y principios del Reglamento y las disposiciones de la IARU, que rigen la actividad de los radioaficionados. No se trata de códigos y símbolos, sino de conducta.'},

  {id:'R34',cat:'Cap. I — Definiciones',
   q:'Defina "VEEDOR":',
   opts:['Radioaficionado nombrado por el Radio Club que acredita competencia para dictar cursos y coordinar prácticas operativas','Radioaficionado de categoría GENERAL o SUPERIOR, designado por un Radio Club o Institución Autorizada, para estar presente en la sesión de exámenes, firmar las actas y certificados e informar anormalidades','Responsable de evaluar a los aspirantes al ingreso y ascenso de categorías'],
   ans:1,exp:'El Veedor es un radioaficionado de categoría GENERAL o SUPERIOR designado para estar presente en la sesión de exámenes, firmar las actas y certificados correspondientes e informar anormalidades si las hubiere.'},

  {id:'R35',cat:'Cap. I — Reglamento',
   q:'La licencia habilita a su titular a instalar y/u operar estaciones de:',
   opts:['Servicio de Radioaficionados','Servicio de Radioaficionados por Satélite','Servicio de Radioaficionados y Radioaficionados por Satélite','Ninguna de las anteriores'],
   ans:2,exp:'Una sola licencia habilita al titular a instalar y operar en AMBOS servicios: Servicio de Radioaficionados y Servicio de Radioaficionados por Satélite, dentro de sus bandas y condiciones autorizadas.'},

  {id:'R36',cat:'Cap. I — Reglamento',
   q:'Las estaciones del Servicio de Radioaficionados que operen actualmente o en el futuro estarán sujetas a lo dispuesto por:',
   opts:['Resolución SC 329/2000','LEY N° 27078','Resolución SC 50/1998 o aquellas que la reemplacen o modifiquen'],
   ans:0,exp:'Las estaciones están sujetas a la Resolución SC 329/2000 (o las que la reemplacen o modifiquen), que regula las condiciones de las estaciones dentro o fuera de zonas de protección de Estaciones de Comprobación Técnica.'},

  {id:'R37',cat:'Cap. I — Reglamento',
   q:'¿En qué circunstancias las estaciones del Servicio de Radioaficionados están autorizadas a conectar sus equipos radioeléctricos a las líneas telefónicas?',
   opts:['Exclusivamente ante emergencias','En situaciones de interés comunitario','En eventos propios de la actividad','En ninguna circunstancia'],
   ans:0,exp:'Las estaciones de radioaficionados solo pueden conectarse inductiva o acústicamente a las líneas telefónicas EXCLUSIVAMENTE ante emergencias. En cualquier otra circunstancia está prohibido.'},

  {id:'R38',cat:'Cap. I — Reglamento',
   q:'¿Cuál es la vigencia de la licencia de radioaficionados?',
   opts:['1 año','5 años','10 años','Depende de la categoría'],
   ans:1,exp:'La licencia de radioaficionados tiene una vigencia de 5 años, independientemente de la categoría. Luego puede renovarse por períodos iguales.'},

  {id:'R39',cat:'Cap. I — Reglamento',
   q:'¿Por qué período y bajo qué condiciones se puede renovar la licencia de radioaficionados?',
   opts:['5 años, con renovación automática','Indefinido','5 años, al realizar el trámite de renovación, rehabilitación o examen de ascenso de categoría'],
   ans:2,exp:'La licencia se renueva por 5 años más, pero NO es automática. El radioaficionado debe realizar el trámite de renovación, rehabilitación o examen de ascenso de categoría ante el ENACOM.'},

  {id:'R40',cat:'Cap. I — Reglamento',
   q:'¿Cuál es la vigencia de la autorización de una Estación Repetidora?',
   opts:['1 año','5 años','5 años o hasta la cancelación o caducidad de la licencia del titular','Depende de la categoría'],
   ans:2,exp:'La autorización de una Estación Repetidora tiene vigencia de 5 años, pero cesa automáticamente si se cancela o caduca la licencia del titular, independientemente del tiempo restante.'},

  {id:'R41',cat:'Cap. I — Reglamento',
   q:'¿Con qué intervalo de tiempo un Radioaficionado debe transmitir su señal distintiva?',
   opts:['5 minutos','10 minutos','30 minutos','Cuando lo desee'],
   ans:1,exp:'El radioaficionado debe transmitir su señal distintiva (indicativo) cada 10 minutos como máximo durante una comunicación, y al inicio y al final de cada transmisión.'},

  {id:'R42',cat:'Cap. I — Reglamento',
   q:'¿En qué frecuencias y condiciones se permite el funcionamiento de redes de Emergencia y/o Desastre?',
   opts:['En todas las bandas, en los casos y plazos que determine la Autoridad competente en protección pública, defensa civil y operaciones de socorro','En las frecuencias designadas a tal fin, en los casos y plazos que determine la Autoridad competente','En las frecuencias designadas, cuando el Radioaficionado lo considere necesario'],
   ans:1,exp:'Las redes de Emergencia/Desastre pueden funcionar en las frecuencias designadas a tal fin y solo en los casos y plazos que determine la Autoridad competente en materia de protección pública, defensa civil y socorro. No es decisión unilateral del radioaficionado.'},

  {id:'R43',cat:'Cap. I — Reglamento',
   q:'¿Cuál es el plazo para desinstalar las estaciones radioeléctricas, ante la CADUCIDAD de la licencia?',
   opts:['30 días','60 días','90 días','1 año','Sin plazo, ante requerimiento de la Autoridad de Aplicación'],
   ans:2,exp:'Ante la caducidad de la licencia, el radioaficionado tiene 90 días para desinstalar en su totalidad las estaciones radioeléctricas y/o repetidoras que posea.'},

  {id:'R44',cat:'Cap. I — Reglamento',
   q:'¿Cuál es el plazo para desinstalar las estaciones radioeléctricas, ante la CANCELACIÓN de la licencia?',
   opts:['10 días','30 días','90 días','1 año','Sin plazo, ante requerimiento de la Autoridad de Aplicación'],
   ans:0,exp:'Ante la cancelación de la licencia (que es una sanción), el plazo es mucho más corto: 10 días. Difiere de la caducidad (90 días) ya que la cancelación implica una infracción.'},

  {id:'R45',cat:'Cap. I — Ética',
   q:'Según el documento "Ética y Procedimientos Operativos para el Radioaficionado" de IARU, los principios básicos del Código de Conducta son (seleccione el grupo correcto):',
   opts:['Sentido social, Lealtad, No discriminación, Buenos modales, Tolerancia','Sentido social, Comprensión, No discriminación, Buenos modales, Tolerancia (opciones a, c, e y g)','Lealtad, Objetividad, Buenos modales','Comprensión, No discriminación, Lealtad, Objetividad'],
   ans:1,exp:'Los principios del Código de Conducta del Radioaficionado (IARU) son: a) Sentido social y espíritu fraternal, c) Comprensión, e) Buenos modales y g) Tolerancia. Las opciones b (Lealtad), d (No discriminación) y f (Objetividad) no están listadas como principios.'},

  {id:'R46',cat:'Cap. I — Ética',
   q:'¿Cuál es la organización de Radioaficionados que representa sus intereses ante los foros internacionales?',
   opts:['American Radio Relay League (A.R.R.L.)','International Telecommunication Union (I.T.U.)','International Amateur Radio Union (I.A.R.U.)','Comisión Interamericana de Telecomunicaciones (C.I.T.E.L.)'],
   ans:2,exp:'La IARU (International Amateur Radio Union) es la organización mundial que representa los intereses de los radioaficionados ante la UIT y otros foros internacionales. En Argentina, la sociedad miembro es la LIGA ARGENTINA DE RADIOAFICIONADOS (LAR).'},

  {id:'R47',cat:'Cap. I — Reglamento',
   q:'¿Qué orden de observancia tiene la reglamentación para los Radioaficionados argentinos?',
   opts:['Reglamento General de Radioaficionados — Disposiciones IARU — Reglamentación UIT','Disposiciones IARU — Reglamento General de Radioaficionados — Reglamentación UIT','Reglamentación UIT — Disposiciones IARU — Reglamento General de Radioaficionados'],
   ans:0,exp:'El orden jerárquico es: 1° Reglamento General de Radioaficionados (norma local), 2° Disposiciones/recomendaciones de la IARU, 3° Reglamentación de la UIT.'},

  // ── CAPÍTULO II — FACULTADES DE LA AUTORIDAD DE APLICACIÓN ──
  {id:'R48',cat:'Cap. II — ENACOM',
   q:'Son facultades de la Autoridad de Aplicación (ENACOM):',
   opts:['Limitar, denegar, suspender o cancelar la licencia de Radioaficionado','Asignar o modificar las señales distintivas','Dictar cursos y fomentar la actividad a través de Prácticas Operativas','Las opciones a) y b) son facultades del ENACOM'],
   ans:3,exp:'Las facultades del ENACOM incluyen: a) limitar/denegar/suspender/cancelar licencias y b) asignar/modificar señales distintivas. Tomar exámenes (c) es facultad de Radio Clubes e Instituciones Autorizadas, no del ENACOM.'},

  // ── CAPÍTULO III — RADIO CLUBES E INSTITUCIONES ──────────
  {id:'R49',cat:'Cap. III — Instituciones',
   q:'¿Qué categoría se le otorga a los Radio Clubes, Instituciones Autorizadas e Instituciones Reconocidas?',
   opts:['Novicio','General','Superior'],
   ans:1,exp:'Los Radio Clubes, Instituciones Autorizadas e Instituciones Reconocidas tienen categoría GENERAL, independientemente de las categorías de sus miembros.'},

  {id:'R50',cat:'Cap. III — Instituciones',
   q:'¿Cómo debe identificarse el Radioaficionado cuando opere en forma personal la estación del Radio Club?',
   opts:['Señal distintiva del Radio Club y señal distintiva propia','Señal distintiva propia y señal distintiva del Radio Club','Solo señal distintiva propia','Solo señal distintiva del Radio Club'],
   ans:0,exp:'Al operar la estación del Radio Club, se identifica primero con la señal distintiva del Radio Club y luego con la señal distintiva propia (en ese orden).'},

  {id:'R51',cat:'Cap. III — Instituciones',
   q:'Cuando opera la estación del Radio Club en forma personal, ¿en qué bandas puede hacerlo?',
   opts:['En las bandas autorizadas a su categoría','En las bandas correspondientes a la categoría Superior'],
   ans:0,exp:'Aunque el Radio Club tiene categoría General, el radioaficionado que opera su estación en forma personal solo puede usar las bandas autorizadas a SU PROPIA categoría (que puede ser inferior a General).'},

  {id:'R52',cat:'Cap. III — Instituciones',
   q:'En condiciones de Práctica Operativa por parte de aspirantes, ¿cómo se deben identificar?',
   opts:['Con señal distintiva del Radio Club, aclarando "en Práctica Operativa"','Con señal distintiva del Instructor'],
   ans:0,exp:'Los aspirantes en Práctica Operativa deben identificarse con la señal distintiva del Radio Club (o Institución), aclarando expresamente que están operando "en Práctica Operativa".'},

  {id:'R53',cat:'Cap. III — Instituciones',
   q:'¿Quiénes podrán otorgar Certificados de Radioescuchas?',
   opts:['Radio Clubes','Instituciones Autorizadas','Instituciones Reconocidas','Solo los Radio Clubes'],
   ans:0,exp:'Solo los Radio Clubes pueden otorgar Certificados de Radioescuchas. Las Instituciones Autorizadas y Reconocidas no tienen esta facultad.'},

  {id:'R54',cat:'Cap. III — Instituciones',
   q:'¿El Radioaficionado puede realizar trámites en forma personal ante la Autoridad de Aplicación?',
   opts:['Sí','No'],
   ans:1,exp:'No. Los radioaficionados realizan sus trámites ante el ENACOM a través de los Radio Clubes o Instituciones Autorizadas, no en forma directa. El Radio Club actúa como intermediario.'},

  {id:'R55',cat:'Cap. III — Instituciones',
   q:'¿El Radio Club podrá poseer filiales?',
   opts:['Sí','No'],
   ans:0,exp:'Sí, los Radio Clubes pueden tener filiales, pero bajo condiciones específicas establecidas por el ENACOM.'},

  {id:'R56',cat:'Cap. III — Instituciones',
   q:'¿Bajo qué condiciones la Autoridad de Aplicación podrá autorizar filiales a un Radio Club?',
   opts:['En localidades dentro de la misma provincia en las que no hubiera Radio Club','En localidades de otra provincia en las que no hubiera Radio Club'],
   ans:0,exp:'Las filiales solo se autorizan en localidades dentro de la MISMA PROVINCIA del Radio Club principal donde no exista Radio Club. No se autorizan filiales interprovinciales.'},

  {id:'R57',cat:'Cap. III — Instituciones',
   q:'¿Qué categoría mínima debe tener el Radioaficionado a cargo de la filial?',
   opts:['Novicio','General','Superior'],
   ans:1,exp:'El radioaficionado a cargo de la filial debe tener categoría GENERAL o superior (la respuesta oficial incluye b y c). La categoría Novicio no es suficiente para dirigir una filial.'},

  {id:'R58',cat:'Cap. III — Instituciones',
   q:'¿El Radioaficionado a cargo de la filial debe estar habilitado en el Libro de Actas del Radio Club?',
   opts:['Sí','No'],
   ans:0,exp:'Sí. El radioaficionado a cargo de la filial debe estar correctamente registrado y habilitado en el Libro de Actas del Radio Club principal.'},

  {id:'R59',cat:'Cap. III — Instituciones',
   q:'¿Cómo debe operarse la estación en una filial de un Radio Club?',
   opts:['Señal distintiva del Radio Club, agregando una barra, la palabra "filial" y el nombre de la localidad','Señal distintiva del Radioaficionado, agregando una barra, la palabra "filial" y el nombre de la localidad'],
   ans:0,exp:'La estación de la filial opera con la señal distintiva del Radio Club seguida de una barra (/), la palabra "filial" y el nombre de la localidad donde se encuentra la filial.'},

  {id:'R60',cat:'Cap. III — Instituciones',
   q:'¿Podrán las filiales de los Radio Clubes efectuar algún tipo de trámite ante la Autoridad de Aplicación?',
   opts:['Sí','No'],
   ans:1,exp:'No. Las filiales NO pueden efectuar trámites directos ante el ENACOM. Todos los trámites se gestionan a través del Radio Club principal al que pertenecen.'},

  {id:'R61',cat:'Cap. III — Instituciones',
   q:'¿Las Instituciones Autorizadas pueden dictar cursos y tomar exámenes para ingreso y ascenso de categorías?',
   opts:['Sí','No'],
   ans:0,exp:'Sí. Las Instituciones Autorizadas están expresamente habilitadas por el ENACOM para dictar cursos sobre técnica, reglamentación y ética operativa, telegrafía y afines, y también para tomar exámenes de ingreso y ascenso.'},

  {id:'R62',cat:'Cap. III — Instituciones',
   q:'¿Las Instituciones Reconocidas están autorizadas para dictar cursos sobre técnica, reglamentación y ética?',
   opts:['Sí','No'],
   ans:0,exp:'Sí. Las Instituciones Reconocidas SÍ pueden dictar cursos (técnica, reglamentación, ética, telegrafía), pero NO pueden tomar exámenes de ingreso o ascenso de categorías.'},

  {id:'R63',cat:'Cap. III — Instituciones',
   q:'¿Las Instituciones Reconocidas están autorizadas para tomar exámenes para ingreso y ascenso de categorías?',
   opts:['Sí','No'],
   ans:1,exp:'No. Las Instituciones Reconocidas NO pueden tomar exámenes de ingreso ni de ascenso de categorías. Solo los Radio Clubes y las Instituciones Autorizadas tienen esa facultad.'},

  {id:'R64',cat:'Cap. III — Instituciones',
   q:'¿Las Instituciones Autorizadas pueden gestionar ante el ENACOM la documentación para ingreso y ascenso de categorías?',
   opts:['Sí','No'],
   ans:0,exp:'Sí. Las Instituciones Autorizadas pueden gestionar directamente ante el ENACOM la documentación necesaria para el ingreso y el ascenso de categorías de los radioaficionados.'},

  // ── CAPÍTULO IV — CATEGORÍAS Y REQUISITOS ───────────────
  {id:'R65',cat:'Cap. IV — Categorías',
   q:'Identifique las categorías de radioaficionados según la nueva reglamentación:',
   opts:['Inicial, Novicio, Intermedia, General, Superior, Especial','Novicio, General, Superior, Especial (opciones b, d, e y f)','Principiante, Básico, Avanzado, Experto','Clase 1, Clase 2, Clase 3'],
   ans:1,exp:'Las cuatro categorías del Reglamento vigente son: NOVICIO, GENERAL, SUPERIOR y ESPECIAL. Las opciones "Inicial" e "Intermedia" no son categorías válidas.'},

  {id:'R66',cat:'Cap. IV — Categorías',
   q:'¿Quién tramita ante el ENACOM los trámites de radioaficionados?',
   opts:['Radio Clubes','Radioaficionados directamente','Instituciones Reconocidas','Radio Clubes e Instituciones Autorizadas (opciones a y d)'],
   ans:3,exp:'Los trámites ante el ENACOM son gestionados por los Radio Clubes y/o las Instituciones Autorizadas. Los radioaficionados no pueden tramitar directamente (salvo excepciones específicas).'},

  {id:'R67',cat:'Cap. IV — Categorías',
   q:'¿Cuál es la edad mínima para la categoría Novicio?',
   opts:['12 años','9 años','18 años'],
   ans:1,exp:'La edad mínima para obtener la categoría Novicio es 9 años. Siendo la categoría de ingreso, es la más accesible en cuanto a edad mínima.'},

  {id:'R68',cat:'Cap. IV — Categorías',
   q:'¿Cuál es la edad mínima para la categoría General?',
   opts:['13 años','16 años','18 años'],
   ans:0,exp:'La edad mínima para la categoría General es 13 años.'},

  {id:'R69',cat:'Cap. IV — Categorías',
   q:'¿Cuál es la potencia de RF máxima permitida para la categoría Novicio?',
   opts:['50 vatios','100 vatios','150 vatios','200 vatios'],
   ans:3,exp:'La potencia máxima de RF para la categoría Novicio es 200 vatios (200W). Esta es la limitación principal que distingue al Novicio del General y Superior que pueden usar mayor potencia.'},

  {id:'R70',cat:'Cap. IV — Categorías',
   q:'¿Cuántos años de actividad ininterrumpida en categoría NOVICIO hay que acreditar para ascender a GENERAL?',
   opts:['2 años','1 año','5 años','3 años'],
   ans:3,exp:'Para ascender de Novicio a General se deben acreditar 3 años de actividad ininterrumpida en categoría Novicio, además de aprobar el examen correspondiente.'},

  {id:'R71',cat:'Cap. IV — Categorías',
   q:'¿Cada cuántos años debe renovarse la licencia de Radioaficionado?',
   opts:['2 años','4 años','5 años','10 años'],
   ans:2,exp:'La licencia de radioaficionado debe renovarse cada 5 años.'},

  {id:'R72',cat:'Cap. IV — Categorías',
   q:'¿Cuáles son los requerimientos para obtener la categoría ESPECIAL?',
   opts:['Categoría Superior con 60 años de actividad ininterrumpida','Categoría Superior con 20 años de actividad ininterrumpida','Categoría Superior con 50 años de actividad ininterrumpida','Categoría Superior con 50 años de antigüedad'],
   ans:1,exp:'La categoría Especial se otorga a radioaficionados de categoría Superior que acrediten 20 años de actividad ininterrumpida. Es el máximo reconocimiento dentro del sistema de categorías.'},

  {id:'R73',cat:'Cap. IV — Categorías',
   q:'Transcurridos 5 años desde el otorgamiento de la licencia, ¿de cuánto plazo dispone el Radioaficionado para solicitar la renovación?',
   opts:['3 meses','12 meses','6 meses'],
   ans:1,exp:'Transcurridos los 5 años de vigencia, el radioaficionado dispone de 12 meses adicionales para solicitar la renovación de la licencia por un nuevo período de 5 años.'},

  // ── CAPÍTULO V — RADIOESCUCHAS ───────────────────────────
  {id:'R74',cat:'Cap. V — Radioescuchas',
   q:'Defina RADIOESCUCHA:',
   opts:['Persona autorizada que se interesa en la radiotecnia con carácter individual sin fines de lucro, realizando instrucción, intercomunicación y estudios técnicos','Persona física autorizada exclusivamente a la recepción de emisiones en las bandas del Servicio de Radioaficionados. Para esta autorización no se requiere Licencia de Radioaficionado'],
   ans:1,exp:'El Radioescucha es una persona física autorizada EXCLUSIVAMENTE para RECIBIR (no transmitir) emisiones en las bandas del Servicio de Radioaficionados. No necesita una licencia de radioaficionado, solo el Certificado de Radioescucha.'},

  {id:'R75',cat:'Cap. V — Radioescuchas',
   q:'Cuando un Radioescucha tramita y obtiene su licencia de radioaficionado, ¿qué ocurre con su Certificado de Radioescucha?',
   opts:['Continúa teniendo vigencia','Automáticamente queda dado de baja','Le será requerido para el ascenso de categoría','Ninguna es correcta'],
   ans:0,exp:'El Certificado de Radioescucha continúa teniendo vigencia incluso después de obtener la licencia de radioaficionado. Ambas coexisten.'},

  // ── CAPÍTULO VI — RADIOAFICIONADOS EXTRANJEROS ───────────
  {id:'R76',cat:'Cap. VI — Extranjeros',
   q:'Los Radioaficionados extranjeros "en tránsito" o con "residencia temporaria" en Argentina, ¿ante quién deben gestionar la autorización para operar?',
   opts:['Ante los Radio Clubes','Directamente ante la Autoridad de Aplicación (ENACOM)','La Sociedad Nacional miembro de IARU','El Comité Federal de Radiodifusión'],
   ans:0,exp:'Los radioaficionados extranjeros en tránsito o con residencia temporaria deben gestionar la autorización ante los Radio Clubes (la sociedad miembro de IARU en Argentina), no directamente ante el ENACOM.'},

  {id:'R77',cat:'Cap. VI — Extranjeros',
   q:'¿Qué radioaficionado extranjero está exceptuado de gestionar la autorización para operar en Argentina?',
   opts:['Los que pertenecen a algún país signatario del IARP','Cualquier radioaficionado extranjero'],
   ans:0,exp:'Los radioaficionados de países signatarios del Convenio Interamericano IARP (International Amateur Radio Permit) están exceptuados de gestionar autorización especial para operar en Argentina, ya que su IARP les permite operar directamente.'},

  // ── CAPÍTULO VII — PERMISOS INTERNACIONALES (IARP-CEPT) ──
  {id:'R78',cat:'Cap. VII — IARP/CEPT',
   q:'¿Qué es el Permiso Internacional de Aficionado (IARP)?',
   opts:['Un documento que permite operar sin restricciones en todos los países del mundo','Un documento que faculta a su tenedor operar en los países de América signatarios del Convenio Interamericano sobre el IARP'],
   ans:1,exp:'El IARP faculta a su tenedor a operar en los países de América que han suscrito el Convenio Interamericano (no en todo el mundo). Es diferente del permiso CEPT que aplica en Europa.'},

  {id:'R79',cat:'Cap. VII — IARP/CEPT',
   q:'¿En cuántas Clases se emite el IARP según la Resolución SC 3745/1997?',
   opts:['Una Clase','Dos Clases','Tres Clases','Cuatro Clases'],
   ans:1,exp:'El IARP se emite en DOS Clases: Clase 1 (para radioaficionados con acceso completo a todas las bandas) y Clase 2 (con restricciones en bandas por sobre 30 MHz).'},

  {id:'R80',cat:'Cap. VII — IARP/CEPT',
   q:'¿Qué categoría de Radioaficionado se debe tener para obtener el IARP?',
   opts:['Solo Superior','General y Superior','Intermedia, General y Superior','No hay restricciones de categoría'],
   ans:3,exp:'No hay restricciones de categoría para obtener el IARP. Cualquier radioaficionado con licencia vigente puede solicitarlo, independientemente de su categoría.'},

  {id:'R81',cat:'Cap. VII — IARP/CEPT',
   q:'El IARP de Clase 1 faculta a operar:',
   opts:['Solo en bandas por sobre 30 MHz','Solo en bandas de 10, 15 y 20 metros','En todas las bandas','Solo en bandas por debajo de 30 MHz'],
   ans:2,exp:'El IARP Clase 1 permite operar EN TODAS LAS BANDAS autorizadas en los países signatarios. El Clase 2 tiene restricciones (solo por sobre 30 MHz).'},

  {id:'R82',cat:'Cap. VII — IARP/CEPT',
   q:'El IARP de Clase 2 faculta a operar:',
   opts:['En todas las bandas','Solo en bandas por sobre 30 MHz','En todas las bandas (igual que Clase 1)','Solo en bandas de 80, 40 y 20 metros'],
   ans:1,exp:'El IARP Clase 2 solo permite operar en bandas por sobre 30 MHz (VHF y superiores), a diferencia del Clase 1 que permite todas las bandas.'},

  // ── CAPÍTULO VIII — SEÑALES DISTINTIVAS E IDENTIFICACIÓN ─
  {id:'R83',cat:'Cap. VIII — Señales',
   q:'¿En la señal distintiva a qué corresponde el prefijo?',
   opts:['Al país','A la provincia','A la categoría del radioaficionado'],
   ans:0,exp:'El prefijo de la señal distintiva (indicativo) identifica al PAÍS. Para Argentina son LU y LW. Luego sigue el sufijo que identifica la provincia y el operador.'},

  {id:'R84',cat:'Cap. VIII — Señales',
   q:'¿Cuál es el prefijo correspondiente a la República Argentina?',
   opts:['LU/LW','CX','PY'],
   ans:0,exp:'Argentina tiene los prefijos LU y LW asignados por la UIT. CX corresponde a Uruguay y PY a Brasil.'},

  {id:'R85',cat:'Cap. VIII — Señales',
   q:'La/s primera/s letra/s del sufijo de la señal distintiva corresponde/n a:',
   opts:['País','Provincia','Categoría'],
   ans:1,exp:'Las primeras letras del sufijo identifican la PROVINCIA donde está radicada la estación. Por ejemplo, en "LU5XYZ": LU=prefijo (Argentina), 5=zona/provincia, XYZ=identificador personal.'},

  {id:'R86',cat:'Cap. VIII — Señales',
   q:'¿Cuál es el criterio para asignar el sufijo cuando el radioaficionado posee SOLO estaciones móviles?',
   opts:['Domicilio de emplazamiento de la estación fija','Domicilio indicado en el DNI del Radioaficionado'],
   ans:1,exp:'Si solo posee estaciones móviles (sin estación fija), el sufijo se asigna según el domicilio indicado en el DNI del radioaficionado.'},

  {id:'R87',cat:'Cap. VIII — Señales',
   q:'¿Cuál es el criterio para asignar el sufijo cuando el radioaficionado posee estación fija y móviles?',
   opts:['Domicilio de emplazamiento de la estación fija','Domicilio del DNI del Radioaficionado'],
   ans:0,exp:'Si posee estación fija (además de móviles), el sufijo se asigna según el domicilio de emplazamiento de la ESTACIÓN FIJA, no del DNI.'},

  {id:'R88',cat:'Cap. VIII — Señales',
   q:'¿A qué categoría se le puede asignar una señal distintiva con un sufijo de 2 letras?',
   opts:['Categoría General','Categoría Superior y Especial','Cualquier categoría'],
   ans:1,exp:'Los sufijos de 2 letras (más cortos y fáciles de recordar en CW) se asignan a las categorías Superior y Especial, como reconocimiento a la trayectoria del operador.'},

  {id:'R89',cat:'Cap. VIII — Señales',
   q:'¿En qué otro caso se puede asignar una señal distintiva con un sufijo de 2 letras?',
   opts:['Por fallecimiento del titular, a un familiar que la reclame','Por pedido del titular hacia un tercero'],
   ans:0,exp:'Cuando el titular de una señal de 2 letras fallece, un familiar puede reclamar esa señal. Es la única excepción a la regla de que los sufijos de 2 letras son para categorías Superior y Especial.'},

  {id:'R90',cat:'Cap. VIII — Señales',
   q:'¿Por cuánto tiempo queda reservada la señal distintiva por fallecimiento del titular?',
   opts:['2 años','1 año','5 años'],
   ans:0,exp:'La señal distintiva queda reservada durante 2 años por fallecimiento del titular, período durante el cual un familiar puede reclamarla.'},

  {id:'R91',cat:'Cap. VIII — Señales',
   q:'¿Por cuánto tiempo se otorga la Señal Distintiva Especial?',
   opts:['2 años','1 año','5 años'],
   ans:1,exp:'La Señal Distintiva Especial (asignada para eventos particulares) se otorga por 1 año.'},

  {id:'R92',cat:'Cap. VIII — Señales',
   q:'¿Quiénes podrán solicitar Señales Distintivas Especiales?',
   opts:['Radioaficionados categoría General o Superior, y Radio Clubes, Instituciones Autorizadas e Instituciones Reconocidas','Solo Radioaficionados categoría Novicio','Solo los Radio Clubes'],
   ans:0,exp:'Pueden solicitar Señales Distintivas Especiales: a) Radioaficionados de categoría General o Superior, y b) Radio Clubes, Instituciones Autorizadas e Instituciones Reconocidas. Los Novicio no pueden solicitarlas individualmente.'},

  {id:'R93',cat:'Cap. VIII — Señales',
   q:'¿En eventos con Señal Distintiva Especial, puede un radioaficionado de cualquier categoría operar en todas las bandas del titular del equipo?',
   opts:['Sí','No'],
   ans:0,exp:'Sí. Durante eventos con Señal Distintiva Especial, cualquier radioaficionado que forme parte del equipo de operación puede operar en todas las bandas autorizadas al titular del equipo de operación, sin importar su propia categoría.'},

  {id:'R94',cat:'Cap. VIII — Señales',
   q:'¿Se pueden tener dos o más Señales Distintivas Especiales vigentes al mismo tiempo?',
   opts:['Sí','No'],
   ans:1,exp:'No. No se pueden tener dos o más Señales Distintivas Especiales vigentes simultáneamente. Solo puede estar vigente una a la vez.'},

  // ── CAPÍTULO IX — ESTACIONES ─────────────────────────────
  {id:'R95',cat:'Cap. IX — Estaciones',
   q:'¿En qué casos los titulares de licencia están autorizados a instalar y operar estaciones móviles?',
   opts:['Solo en caso de emergencias','Solo en período de vacaciones','Cuando posea licencia de conductor','No hay restricciones'],
   ans:3,exp:'No hay restricciones específicas para instalar y operar estaciones móviles. El radioaficionado con licencia vigente puede tener estaciones móviles sin condicionamientos adicionales.'},

  {id:'R96',cat:'Cap. IX — Estaciones',
   q:'¿Quién puede operar una estación radioeléctrica del Servicio de Radioaficionado?',
   opts:['Su titular u otro Radioaficionado que él mismo autorice','Cualquier Radioaficionado','Ningún Radioaficionado distinto a su titular'],
   ans:0,exp:'La estación puede ser operada por su titular o por otro radioaficionado que el titular autorice expresamente. No puede operarla cualquier radioaficionado sin autorización del titular.'},

  {id:'R97',cat:'Cap. IX — Estaciones',
   q:'Cuando un Radioaficionado opera una estación de la cual no es titular, ¿cómo se debe identificar?',
   opts:['Señal distintiva del titular y la propia (en ese orden), seguido de barra y la letra de la división política','Señal distintiva propia y la del titular (en ese orden), seguido de barra y la letra de la división política','Solo la señal distintiva propia'],
   ans:0,exp:'Primero va la señal del titular, luego la propia (del operador), separadas por una barra, y la letra de la división política. Ejemplo: "LU1XYZ/LU5ABC/B" (titular/operador/provincia).'},

  {id:'R98',cat:'Cap. IX — Estaciones',
   q:'Cuando un Radioaficionado opera una estación de la cual no es titular, ¿en qué bandas lo hace?',
   opts:['En las permitidas según la categoría del Titular','En las permitidas según la categoría del Operador'],
   ans:1,exp:'Opera en las bandas permitidas según la categoría del OPERADOR (no del titular). Aunque la estación del titular permita más bandas, el operador solo puede usar las de su propia categoría.'},

  {id:'R99',cat:'Cap. IX — Estaciones',
   q:'En caso de poseer más de una estación fija, ¿es necesario declararlas a todas?',
   opts:['Sí','No'],
   ans:0,exp:'Sí. Todas las estaciones fijas que posea el radioaficionado deben ser declaradas ante el ENACOM. No se puede tener estaciones fijas no declaradas.'},

  {id:'R100',cat:'Cap. IX — Estaciones',
   q:'Si se traslada una estación fija por un período mayor a 120 días corridos, ¿se debe solicitar cambio de domicilio?',
   opts:['Sí','No'],
   ans:0,exp:'Sí. Si una estación fija se traslada por más de 120 días corridos, se debe solicitar el cambio de domicilio de emplazamiento ante el ENACOM. Traslados de 120 días o menos no requieren este trámite.'},

  {id:'R101',cat:'Cap. IX — Estaciones',
   q:'¿Ante qué Organismo debe el Radioaficionado realizar el trámite de autorización por la altura de la estructura soporte de antenas?',
   opts:['ENACOM','ANAC'],
   ans:1,exp:'La autorización para estructuras soporte de antenas (mástiles, torres) que superen ciertas alturas debe tramitarse ante la ANAC (Administración Nacional de Aviación Civil), ya que afectan el espacio aéreo.'},

  {id:'R102',cat:'Cap. IX — Estaciones',
   q:'¿Cómo se debe operar una estación móvil?',
   opts:['Mencionar su señal distintiva, su ubicación geográfica y su condición de móvil','Mencionar solo su señal distintiva y su ubicación geográfica'],
   ans:0,exp:'La estación móvil debe mencionar: señal distintiva + ubicación geográfica actual + condición de "móvil". Esto permite a otras estaciones conocer tanto el identificativo como la ubicación y el tipo de operación.'},

  {id:'R103',cat:'Cap. IX — Estaciones',
   q:'¿Qué categoría debe poseer el titular que desee diseñar, construir, lanzar y/o ser responsable primario de una estación espacial (satélite)?',
   opts:['GENERAL o SUPERIOR','ESPECIAL','NOVICIO'],
   ans:0,exp:'Para ser responsable primario de una estación espacial del Servicio de Radioaficionados por Satélite se requiere categoría GENERAL o SUPERIOR. La categoría Novicio no es suficiente.'},

  {id:'R104',cat:'Cap. IX — Estaciones',
   q:'¿Es necesario registrar las Estaciones Terrenas del Servicio de Radioaficionados por Satélite ante el ENACOM?',
   opts:['Sí','No'],
   ans:1,exp:'No. Las estaciones terrenas del Servicio de Radioaficionados por Satélite no requieren registro previo ante el ENACOM para operar.'},

  // ── CAPÍTULO X — ESTACIONES REPETIDORAS ─────────────────
  {id:'R105',cat:'Cap. X — Repetidoras',
   q:'¿La Estación Repetidora debe estar autorizada ante la Autoridad de Aplicación?',
   opts:['Sí','No'],
   ans:0,exp:'Sí. Toda Estación Repetidora DEBE estar previamente autorizada por el ENACOM. No se puede operar una repetidora sin autorización, incluso si ya existe otra en la misma zona.'},

  {id:'R106',cat:'Cap. X — Repetidoras',
   q:'¿Se podrá solicitar autorización para una Estación Repetidora que opere en bandas cruzadas VHF/UHF?',
   opts:['Sí','No'],
   ans:0,exp:'Sí, se puede solicitar autorización para repetidoras en bandas cruzadas VHF/UHF (por ejemplo, entrada en UHF y salida en VHF), pero solo bajo circunstancias específicas autorizadas por el ENACOM.'},

  {id:'R107',cat:'Cap. X — Repetidoras',
   q:'¿Cuál es el plazo máximo para poner en funcionamiento una Estación Repetidora ya autorizada?',
   opts:['72 horas','30 días','60 días','90 días'],
   ans:3,exp:'Una vez obtenida la autorización, la Estación Repetidora debe ponerse en funcionamiento dentro de los 90 días. Si supera este plazo sin operar, la autorización puede caducar.'},

  {id:'R108',cat:'Cap. X — Repetidoras',
   q:'Si una Estación Repetidora está totalmente fuera de servicio, ¿cuál es el plazo máximo de inactividad antes de la caducidad automática?',
   opts:['72 horas','30 días','60 días','90 días'],
   ans:2,exp:'Si la repetidora está completamente fuera de servicio, dispone de un plazo máximo de 60 días de inactividad. Superado ese plazo sin operar, la autorización caduca automáticamente.'},

  {id:'R109',cat:'Cap. X — Repetidoras',
   q:'¿Puede haber Estaciones Repetidoras con acceso codificado mediante subtonos (CTCSS)?',
   opts:['No, la Reglamentación lo prohíbe','No, los equipos de radioaficionados no disponen de subtonos','Sí, siempre que el código sea aprobado previamente por la Autoridad de Aplicación y sea de conocimiento público','Sí, si el código es únicamente de conocimiento de la Autoridad de Aplicación'],
   ans:2,exp:'Se permiten repetidoras con acceso codificado por subtonos CTCSS, pero el código debe ser aprobado previamente por el ENACOM y ser de CONOCIMIENTO PÚBLICO. No puede ser un código secreto.'},

  {id:'R110',cat:'Cap. X — Repetidoras',
   q:'¿Cómo se identifican las Estaciones Repetidoras?',
   opts:['Con la señal distintiva del titular y la localidad del emplazamiento de la Estación Repetidora','Con solo la señal distintiva del titular','Con la señal distintiva del titular, la localidad de la estación fija y la localidad de la Estación Repetidora'],
   ans:0,exp:'Las repetidoras se identifican con la señal distintiva del titular más la localidad del emplazamiento de la Estación Repetidora. No se incluye la localidad de la estación fija del titular.'},

  {id:'R111',cat:'Cap. X — Repetidoras',
   q:'¿De cuánto tiempo dispone el titular de la Estación Repetidora para comunicar al ENACOM el inicio de su operación?',
   opts:['15 días corridos','30 días corridos','60 días corridos'],
   ans:0,exp:'El titular tiene 15 días corridos desde el inicio de las operaciones para comunicar al ENACOM que la repetidora comenzó a funcionar. Si no lo hace en ese plazo, puede incurrir en infracción y caducidad.'},

  {id:'R112',cat:'Cap. X — Repetidoras',
   q:'¿Qué se requiere para la autorización del enlace de 2 o más Estaciones Repetidoras?',
   opts:['La conformidad por escrito de los titulares de las Estaciones Repetidoras','Solo el estudio técnico del cálculo de enlace','El estudio técnico del cálculo de enlace Y la conformidad por escrito de los titulares de las Estaciones Repetidoras'],
   ans:2,exp:'Para enlazar dos o más repetidoras se requiere AMBAS cosas: el estudio técnico del cálculo de enlace (para verificar la viabilidad técnica) y la conformidad por escrito de todos los titulares involucrados.'},

  {id:'R113',cat:'Cap. X — Repetidoras',
   q:'¿Es obligatorio contar con un sistema de apagado de la Estación Repetidora?',
   opts:['Sí','No'],
   ans:0,exp:'Sí. Es obligatorio contar con un sistema de apagado (shutdown) de la repetidora. Esto permite al ENACOM o al titular apagarla remotamente en caso de emergencia o uso indebido.'},

  {id:'R114',cat:'Cap. X — Repetidoras',
   q:'El control remoto de una repetidora mediante vínculo radioeléctrico, ¿debe contar con autorización del ENACOM?',
   opts:['Sí','No'],
   ans:0,exp:'Sí. Si se opta por el control remoto de la repetidora mediante un vínculo radioeléctrico, ese vínculo debe contar con la autorización previa del ENACOM.'},

  {id:'R115',cat:'Cap. X — Repetidoras',
   q:'La frecuencia del control remoto de una Estación Repetidora mediante vínculo radioeléctrico, ¿puede estar dentro de una banda de radioaficionados?',
   opts:['Sí','No'],
   ans:1,exp:'No. La frecuencia del vínculo radioeléctrico para el control remoto de una repetidora NO puede estar dentro de las bandas de radioaficionados. Debe usar frecuencias de otros servicios habilitados.'},

  // ── CAPÍTULO XI — RADIOBALIZAS ───────────────────────────
  {id:'R116',cat:'Cap. XI — Radiobalizas',
   q:'¿Qué categoría se requiere para instalar y poner en funcionamiento una Radiobaliza?',
   opts:['Novicio','General','Superior','No se requiere una categoría determinada'],
   ans:3,exp:'No se requiere una categoría específica para instalar una radiobaliza. Cualquier radioaficionado con licencia vigente puede hacerlo, cumpliendo con los requisitos de notificación al ENACOM.'},

  {id:'R117',cat:'Cap. XI — Radiobalizas',
   q:'¿Cuántas señales de Radiobalizas pueden emitirse desde el mismo lugar de emplazamiento?',
   opts:['Solo una','Dos','Tres','No hay limitaciones'],
   ans:0,exp:'Solo puede emitirse UNA señal de radiobaliza desde el mismo lugar de emplazamiento. No se pueden instalar múltiples radiobalizas en el mismo sitio.'},

  {id:'R118',cat:'Cap. XI — Radiobalizas',
   q:'¿Con cuántos días de anticipación debe notificarse al ENACOM la puesta en funcionamiento de una Radiobaliza?',
   opts:['10 días','15 días','30 días','No se necesita notificar'],
   ans:1,exp:'El radioaficionado debe notificar al ENACOM con 15 días de anticipación a la instalación de la radiobaliza, indicando la frecuencia de operación, domicilio de emplazamiento y potencia de transmisión.'},

  // ── CAPÍTULO XII — CURSOS, PRÁCTICAS Y EXÁMENES ──────────
  {id:'R119',cat:'Cap. XII — Exámenes',
   q:'¿Quiénes podrán dictar cursos y/o tomar examen para ingreso y ascenso de categoría?',
   opts:['Radio Clubes','Instituciones Autorizadas','Instituciones Reconocidas','Radio Clubes e Instituciones Autorizadas (opciones a y b)'],
   ans:3,exp:'Solo los Radio Clubes y las Instituciones Autorizadas pueden dictar cursos y tomar exámenes. Las Instituciones Reconocidas pueden dar prácticas operativas pero NO pueden tomar exámenes.'},

  {id:'R120',cat:'Cap. XII — Exámenes',
   q:'¿Se podrá rendir examen en condición de libre, sin realizar cursos en Radio Clubes o Instituciones Autorizadas?',
   opts:['Sí','No'],
   ans:0,exp:'Sí. Se permite rendir el examen en condición de libre, sin haber cursado en un Radio Club o Institución Autorizada. El aspirante puede prepararse de forma independiente.'},

  {id:'R121',cat:'Cap. XII — Exámenes',
   q:'¿Cómo deberán tomarse los exámenes para ingreso o ascenso de categoría?',
   opts:['En forma escrita únicamente','En forma oral únicamente','En forma escrita, y para aspirantes no videntes o imposibilitados para escribir, en forma oral'],
   ans:2,exp:'Los exámenes son EN FORMA ESCRITA como regla general. La excepción es para aspirantes no videntes o físicamente imposibilitados para escribir, quienes pueden rendirlos en forma oral.'},

  {id:'R122',cat:'Cap. XII — Exámenes',
   q:'¿Quiénes están autorizados a dar prácticas operativas?',
   opts:['Radio Clubes','Instituciones Autorizadas','Instituciones Reconocidas','Todos los anteriores (a, b y c)'],
   ans:3,exp:'Las prácticas operativas pueden ser coordinadas por Radio Clubes, Instituciones Autorizadas e Instituciones Reconocidas. Esta es la actividad que distingue a las Instituciones Reconocidas (que no pueden tomar exámenes pero sí pueden hacer prácticas).'},

  {id:'R123',cat:'Cap. XII — Exámenes',
   q:'¿Quién supervisa las prácticas operativas?',
   opts:['Veedor','Instructor','Autoridades del Radio Club, Institución Autorizada y/o Reconocida'],
   ans:1,exp:'Las prácticas operativas son supervisadas por el INSTRUCTOR designado por el Radio Club o Institución. El Veedor cumple funciones en los exámenes, no en las prácticas.'},

  {id:'R124',cat:'Cap. XII — Exámenes',
   q:'¿Las prácticas operativas destinadas a recepción deben cumplirse por cuántas horas?',
   opts:['6 horas','12 horas'],
   ans:0,exp:'Las prácticas operativas de recepción deben cumplirse por un mínimo de 6 horas.'},

  {id:'R125',cat:'Cap. XII — Exámenes',
   q:'¿Las prácticas operativas deben asentarse en el Libro de Guardia?',
   opts:['Sí','No'],
   ans:0,exp:'Sí. Todas las prácticas operativas realizadas deben quedar asentadas en el Libro de Guardia del Radio Club o Institución, con fecha, hora y firma del instructor.'},

  {id:'R126',cat:'Cap. XII — Exámenes',
   q:'¿Cuántas funciones tiene el Instructor según el Reglamento?',
   opts:['Solo dictar cursos y tomar exámenes','Dictar cursos, tomar exámenes, coordinar prácticas operativas y firmar Certificados de Aprobación (opciones a, b y c)','Organizar concursos y dictar cursos','Solo firmar certificados'],
   ans:1,exp:'Las funciones del Instructor son: a) dictar cursos, b) tomar exámenes, c) coordinar las prácticas operativas, y también e) firmar los Certificados de Aprobación de Examen. No incluye organizar concursos.'},

  {id:'R127',cat:'Cap. XII — Exámenes',
   q:'¿Qué categoría mínima debe tener el Instructor?',
   opts:['Novicio','General','Superior','Especial'],
   ans:1,exp:'El Instructor debe tener categoría mínima GENERAL. La categoría Novicio no es suficiente para ejercer como instructor.'},

  {id:'R128',cat:'Cap. XII — Exámenes',
   q:'¿Puede ser instructor un Radioaficionado que ha sido sancionado por la Autoridad de Aplicación?',
   opts:['Sí','No'],
   ans:1,exp:'No. Un radioaficionado que ha sido sancionado por el ENACOM queda inhabilitado para ejercer como instructor.'},

  {id:'R129',cat:'Cap. XII — Exámenes',
   q:'¿Puede un instructor tomar examen a familiares directos?',
   opts:['Sí','No'],
   ans:1,exp:'No. El instructor no puede tomar examen a familiares directos, para evitar conflictos de interés. Debe abstenerse de participar en exámenes de parientes de primer grado.'},

  {id:'R130',cat:'Cap. XII — Exámenes',
   q:'¿Cuántos meses de validez tiene el Certificado de Aprobación de examen para ser presentado ante el ENACOM?',
   opts:['3 meses','6 meses','12 meses'],
   ans:1,exp:'El Certificado de Aprobación firmado por las autoridades del Radio Club o Institución Autorizada tiene una validez de 6 meses para ser presentado ante el ENACOM.'},

  {id:'R131',cat:'Cap. XII — Exámenes',
   q:'¿La certificación de aprobación de examen autoriza a instalar y poner en funcionamiento equipos hasta que el ENACOM otorgue la licencia?',
   opts:['Sí','No'],
   ans:1,exp:'No. La sola certificación de aprobación del examen NO autoriza a instalar ni operar equipos radioeléctricos. El aspirante debe esperar a que el ENACOM otorgue la licencia correspondiente.'},

  {id:'R132',cat:'Cap. XII — Exámenes',
   q:'Para la categoría Novicio, el examen de telegrafía será:',
   opts:['Teórico','Práctico'],
   ans:0,exp:'Para la categoría Novicio, el examen de telegrafía es TEÓRICO (reconocimiento de signos del Código Morse en papel). Para categorías superiores se requiere demostración práctica de velocidad de envío/recepción.'},

  {id:'R133',cat:'Cap. XII — Exámenes',
   q:'En el examen de Telegrafía, ¿cuántos caracteres se consideran una palabra?',
   opts:['5','10','Más de 10'],
   ans:0,exp:'En el examen de telegrafía, una "palabra" se considera de 5 caracteres. Esta es la unidad estándar para medir la velocidad de transmisión en palabras por minuto (PPM).'},

  {id:'R134',cat:'Cap. XII — Exámenes',
   q:'En el Libro de Guardia se deberá consignar:',
   opts:['Solo fecha y señal del corresponsal','Fecha, hora de comienzo y finalización del comunicado; clase de emisión empleada; y señal distintiva de la estación corresponsal','Fecha, hora, clase de emisión, potencia y señal del corresponsal','Solo potencia transmitida y clase de emisión'],
   ans:1,exp:'El Libro de Guardia debe consignar: a) fecha, hora de inicio y finalización del comunicado, b) clase de emisión empleada, y d) señal distintiva de la estación corresponsal. La potencia transmitida (c) también debe consignarse según el Reglamento.'},

  {id:'R135',cat:'Cap. XII — Exámenes',
   q:'¿Cuál es la función de un veedor?',
   opts:['Participar en la confección del examen','Firmar el acta de examen y el certificado de aprobación','Atender consultas de los examinados durante el examen','Evaluar a los aspirantes'],
   ans:1,exp:'Las funciones del veedor son: firmar el acta de examen y firmar el certificado de aprobación de examen. El veedor NO confecciona el examen, NO atiende consultas, NO evalúa. Es un testigo imparcial que certifica la regularidad del proceso.'},

  // ── CAPÍTULO XIII — INFRACCIONES Y SANCIONES ─────────────
  {id:'R136',cat:'Cap. XIII — Infracciones',
   q:'Se consideran infracciones de carácter general:',
   opts:['Operar sin licencia vigente; comunicar con estaciones no autorizadas; referirse a temas de índole política, religiosa o racial; transmitir música (opciones a, c, e y f)','Ceder el micrófono a otro Radioaficionado','Grabar emisiones de terceros únicamente','Referirse a temas técnicos de la actividad'],
   ans:0,exp:'Las infracciones generales incluyen: a) operar sin licencia vigente, c) comunicar con estaciones no autorizadas, e) referirse a temas políticos/religiosos/raciales, f) transmitir música. Ceder el micrófono a otro radioaficionado (b) NO es infracción.'},

  {id:'R137',cat:'Cap. XIII — Infracciones',
   q:'Se consideran infracciones de identificación:',
   opts:['Identificarse con señal de otro; omitir la ubicación en estación móvil; usar Señal Distintiva Especial vencida; omitir "en Práctica Operativa" cuando corresponda (opciones a, b, d y f)','Mencionar la señal del titular y la propia al usar su estación','Mencionar la señal del Radio Club y la propia al usar su estación','Solo identificarse con señal de otro radioaficionado'],
   ans:0,exp:'Son infracciones de identificación: a) usar señal ajena, b) omitir ubicación en móvil, d) usar Señal Especial vencida, f) omitir "en Práctica Operativa". Las opciones c y e son procedimientos CORRECTOS, no infracciones.'},

  {id:'R138',cat:'Cap. XIII — Infracciones',
   q:'Se consideran infracciones operativas:',
   opts:['Transmitir en frecuencia y/o potencia no autorizada; transmitir textos encriptados; participar en concursos sobre frecuencias no autorizadas (opciones a, b y c)','Trasladar la estación fija por 90 días sin notificar (esto sería una infracción solo si supera 120 días)','Solo transmitir textos encriptados','Participar en concursos en cualquier frecuencia'],
   ans:0,exp:'Las infracciones operativas incluyen: a) transmitir en frecuencia/potencia no autorizada para la categoría, b) transmitir textos encriptados, c) participar en concursos en frecuencias no autorizadas. El traslado sin notificar es infracción si supera los 120 días (d sería incorrecto porque dice 90 días).'},

  {id:'R139',cat:'Cap. XIII — Infracciones',
   q:'El orden de las sanciones al cometer y reiterar infracciones es:',
   opts:['Llamado de atención – Apercibimiento – Sanción económica – Suspensión – Cancelación de la licencia','Llamado de atención – Sanción económica – Suspensión – Cancelación de la licencia','Llamado de atención – Sanción económica – Cancelación de la licencia'],
   ans:0,exp:'El orden progresivo de sanciones es: 1° Llamado de atención, 2° Apercibimiento, 3° Sanción económica, 4° Suspensión de la licencia, 5° Cancelación de la licencia. Cada reincidencia puede avanzar al siguiente nivel.'},

  // ── ANEXO A — PREGUNTAS GENERALES (PB) ───────────────────
  {id:'R140',cat:'Anexo A — Plan de Bandas General',
   q:'¿Puede un Radioaficionado transmitir en los extremos de las bandas asignadas, y por qué?',
   opts:['Sí, porque está en una frecuencia autorizada según la clase de emisión','No, porque debido a la anchura de banda de la transmisión, saldría fuera del sector o banda autorizada','Sí, porque está en la banda autorizada para su categoría','Ninguna es correcta'],
   ans:1,exp:'No se puede transmitir en los extremos de la banda porque, dependiendo del modo (AM ocupa 6 kHz, FM aún más), parte de la señal quedaría fuera de los límites autorizados, interfiriendo con otros servicios. Se debe mantener la señal completa dentro de la banda.'},

  {id:'R141',cat:'Anexo A — Plan de Bandas General',
   q:'¿A qué tipo/modulación corresponde la clase de emisión A3E?',
   opts:['Telefonía. Amplitud Modulada. Doble Banda Lateral','Telefonía. Modulación de Frecuencia','Telefonía. Banda Lateral Única con Portadora Suprimida','Teletipo. Telegrafía por Desplazamiento de Frecuencia'],
   ans:0,exp:'A3E = Telefonía con Amplitud Modulada y Doble Banda Lateral (AM convencional). Es el sistema de radio AM estándar, con portadora completa y dos bandas laterales simétricas.'},

  {id:'R142',cat:'Anexo A — Plan de Bandas General',
   q:'¿A qué tipo/modulación corresponde la clase de emisión A1A?',
   opts:['Telefonía. Modulación de Frecuencia','Teletipo. Telegrafía por Desplazamiento de Frecuencia','Telegrafía. Código Morse','Telefonía. Banda Lateral Única con Portadora Suprimida'],
   ans:2,exp:'A1A = Telegrafía con Código Morse (CW). "A" = modulación de amplitud por manipulación de portadora, "1" = un canal sin subportadora, "A" = información en código Morse.'},

  {id:'R143',cat:'Anexo A — Plan de Bandas General',
   q:'¿A qué tipo/modulación corresponde la clase de emisión J3E?',
   opts:['Telegrafía. Código Morse','Telefonía. Banda Lateral Única con Portadora Suprimida','Televisión. Modulación de Frecuencia','Televisión. Doble Banda Lateral'],
   ans:1,exp:'J3E = Telefonía con Banda Lateral Única y Portadora Suprimida (SSB/BLU). "J" = portadora suprimida, "3" = telefonía analógica, "E" = emisión de una sola banda lateral.'},

  {id:'R144',cat:'Anexo A — Plan de Bandas General',
   q:'¿A qué tipo/modulación corresponde la clase de emisión F3E?',
   opts:['Facsímil','Telegrafía. Código Morse','Telefonía. Modulación de Frecuencia. Doble Banda Lateral','Teletipo. Telegrafía por Desplazamiento de Frecuencia'],
   ans:2,exp:'F3E = Telefonía con Modulación de Frecuencia (FM). Es el modo usado en VHF/UHF para comunicaciones locales, repetidoras y handies.'},

  {id:'R145',cat:'Anexo A — Plan de Bandas General',
   q:'¿A qué modo de emisión corresponde la clase J2D?',
   opts:['AM','PACKET','CW','APRS'],
   ans:1,exp:'J2D corresponde al modo PACKET (y también APRS). "J" = portadora suprimida, "2" = una subportadora de audio, "D" = datos. El modo APRS (Automatic Packet Reporting System) también usa J2D.'},

  {id:'R146',cat:'Anexo A — Plan de Bandas General',
   q:'¿A qué modo de emisión corresponde la clase F1B?',
   opts:['FAX','CW','RTTY','PACKET'],
   ans:2,exp:'F1B corresponde al modo RTTY (Radio Teletype). "F" = modulación de frecuencia, "1" = un canal sin subportadora, "B" = telegrafía a código de impresora directa. Se usa en teletipo de radioaficionados.'},

  {id:'R147',cat:'Anexo A — Plan de Bandas General',
   q:'¿En qué caso puede una estación de Radioaficionado reclamar protección por interferencias en una banda atribuida con carácter SECUNDARIO?',
   opts:['Solo si la interferencia proviene de una estación comercial','Solo si la interferencia proviene de una estación de un servicio oficial','Solo si la interferencia proviene de una estación del mismo servicio o de otros servicios con atribución también secundaria','Puede reclamar protección en cualquier caso'],
   ans:2,exp:'En una banda de carácter secundario, el radioaficionado solo puede reclamar protección ante interferencias de otras estaciones que también tengan atribución secundaria. Ante servicios primarios, el radioaficionado debe ceder y no puede reclamar protección.'},

  {id:'R148',cat:'Anexo A — Plan de Bandas General',
   q:'Un Radioaficionado puede efectuar transmisiones del Servicio de Radioaficionados por Satélite:',
   opts:['En todas las bandas atribuidas al Servicio de Radioaficionados','En cualquier frecuencia de las bandas atribuidas al Servicio de Radioaficionados por Satélite','En los segmentos autorizados para uso satelital dentro de las bandas atribuidas al Servicio de Radioaficionados por Satélite'],
   ans:2,exp:'Las transmisiones del Servicio por Satélite solo pueden realizarse en los segmentos ESPECÍFICAMENTE autorizados para uso satelital dentro de las bandas del servicio por satélite. No en todas las frecuencias de la banda.'},

  // ── ANEXO A — PREGUNTAS ESPECÍFICAS NOVICIO (PBN) ────────
  {id:'R149',cat:'Anexo A — Bandas Novicio',
   q:'¿En cuál de las siguientes bandas de frecuencias puede operar un Radioaficionado de categoría Novicio?',
   opts:['60 metros','30 metros','12 metros','70 centímetros'],
   ans:3,exp:'El Novicio puede operar en la banda de 70 cm (UHF). También puede operar en 60 metros (la respuesta oficial es a y d). Las bandas de 30m y 12m están restringidas para el Novicio.'},

  {id:'R150',cat:'Anexo A — Bandas Novicio',
   q:'¿En cuál de las siguientes frecuencias puede operar un Radioaficionado de categoría Novicio?',
   opts:['146000 kHz (146 MHz — banda de 2m)','10135 kHz (banda de 30m — restringida para Novicio)','3550 kHz (banda de 80m — acceso Novicio)','14235 kHz (banda de 20m — acceso limitado para Novicio)'],
   ans:0,exp:'146000 kHz = 146 MHz (banda de 2 metros, VHF) que está totalmente disponible para Novicio. 3550 kHz también es correcta según la tabla oficial (respuesta a y c). La banda de 30m (10135 kHz) tiene restricciones para Novicio.'},

  {id:'R151',cat:'Anexo A — Bandas Novicio',
   q:'En la banda de 15 metros, un Radioaficionado de categoría Novicio:',
   opts:['Puede emitir en todos los segmentos','Puede emitir solo en algunos segmentos','No puede emitir en esta banda','Posee restricciones adicionales de potencia'],
   ans:1,exp:'En la banda de 15 metros (21 MHz), el Novicio puede emitir SOLO EN ALGUNOS segmentos, no en toda la banda. Existen segmentos reservados para categorías superiores.'},

  {id:'R152',cat:'Anexo A — Bandas Novicio',
   q:'¿En qué porción de la banda de 20 metros NO pueden operar los titulares de licencia de categoría Novicio?',
   opts:['14000 – 14070 kHz','14070 – 14095 kHz','14095 – 14099 kHz'],
   ans:0,exp:'El segmento 14000–14070 kHz de la banda de 20 metros está reservado para CW y está vedado para la categoría Novicio. Esta porción incluye segmentos de uso exclusivo que requieren categoría superior.'},

  {id:'R153',cat:'Anexo A — Bandas Novicio',
   q:'¿Cuál es la potencia máxima autorizada para la categoría Novicio en la banda de 30 metros?',
   opts:['500 W','250 W','No puede emitir en esta banda','La autorizada para la categoría'],
   ans:2,exp:'El Novicio NO puede emitir en la banda de 30 metros (10 MHz). Esta banda tiene acceso restringido y requiere categoría superior para operar.'},

  {id:'R154',cat:'Anexo A — Bandas Novicio',
   q:'¿Cuál es la PIRE máxima autorizada para la categoría Novicio en la banda de 2200 metros?',
   opts:['1 W','25 W','La autorizada para la categoría','No puede emitir en esta banda'],
   ans:0,exp:'En la banda de 2200 metros (136 kHz, LF), la PIRE máxima para el Novicio es 1 W. Esta banda de baja frecuencia es la más nueva para radioaficionados y tiene severas restricciones de potencia.'},

  {id:'R155',cat:'Anexo A — Bandas Novicio',
   q:'¿Cuál es la PIRE máxima autorizada para la categoría Novicio en la banda de 630 metros?',
   opts:['1 W','5 W','La autorizada para la categoría','No puede emitir en esta banda'],
   ans:1,exp:'En la banda de 630 metros (475 kHz, MF), la PIRE máxima para el Novicio es 5 W. Es una banda relativamente nueva para radioaficionados.'},

  {id:'R156',cat:'Anexo A — Bandas Novicio',
   q:'¿Cuál es la PIRE máxima autorizada para la categoría Novicio en la banda de 60 metros?',
   opts:['25 W','100 W','La autorizada para la categoría','No puede emitir en esta banda'],
   ans:0,exp:'En la banda de 60 metros (5 MHz), la PIRE máxima para el Novicio es 25 W. Esta banda tiene uso compartido y la potencia está limitada para evitar interferencias a otros servicios.'},

  {id:'R157',cat:'Anexo A — Bandas Novicio',
   q:'La banda de frecuencias de 80 metros:',
   opts:['Está atribuida al Servicio de Radioaficionados con carácter primario','Está atribuida al Servicio de Radioaficionados con carácter secundario','Está atribuida al Servicio de Radioaficionados con carácter primario o secundario según el segmento de frecuencias'],
   ans:2,exp:'La banda de 80 metros (3,5–4 MHz) tiene una atribución MIXTA: algunos segmentos son de carácter primario y otros de carácter secundario para el Servicio de Radioaficionados, dependiendo del plan de bandas regional.'},

  {id:'R158',cat:'Anexo A — Bandas Novicio',
   q:'¿Cuál es la anchura de banda máxima para DIGIMODOS en la banda de 2 y 10 metros?',
   opts:['<= 3 kHz','<= 16 kHz','>= 16 kHz','>= 3 kHz'],
   ans:1,exp:'En las bandas de 2 metros (144 MHz) y 10 metros (28 MHz), la anchura de banda máxima para modos digitales (DIGIMODOS) es de 16 kHz como máximo.'},

  {id:'R159',cat:'Anexo A — Bandas Novicio',
   q:'¿Cuál es la anchura de banda máxima para DIGIMODOS en la banda de 40 y 80 metros?',
   opts:['<= 3 kHz','<= 50 kHz','<= 100 kHz','<= 200 kHz'],
   ans:0,exp:'En las bandas de 40 metros (7 MHz) y 80 metros (3,5 MHz), la anchura de banda máxima para modos digitales es de 3 kHz. Es un límite mucho más estrecho que en VHF por las características de propagación.'},

  {id:'R160',cat:'Anexo A — Bandas Novicio',
   q:'¿Cuál es la única actividad permitida a un Radioaficionado de categoría Novicio en la banda de 17 metros?',
   opts:['Emitir en RTTY','Emitir en SSB','Emitir una Radiobaliza'],
   ans:2,exp:'En la banda de 17 metros (18 MHz), el Novicio SOLO puede emitir una Radiobaliza. No puede hacer comunicaciones de voz (SSB) ni modos digitales en esa banda.'},

  {id:'R161',cat:'Anexo A — Bandas Novicio',
   q:'Una frecuencia indicada como de uso exclusivo para un modo de emisión puede utilizarse para:',
   opts:['Emitir en un modo diferente solo si está desocupada','Emitir únicamente en ese modo','Depende de la categoría del Radioaficionado'],
   ans:1,exp:'Las frecuencias de uso exclusivo para un modo solo pueden usarse para ESE modo específico. No es válido usar otro modo aunque la frecuencia esté libre. La exclusividad es absoluta.'},

  {id:'R162',cat:'Anexo A — Bandas Novicio',
   q:'¿Puede un Radioaficionado de categoría Novicio efectuar transmisiones en AM en la banda de 3 centímetros?',
   opts:['Siempre que se trate de emisiones con baja potencia','Siempre que se trate de emisiones de prueba','Siempre, sin restricciones','No están permitidas las emisiones en ese modo'],
   ans:3,exp:'No. Las emisiones en AM en la banda de 3 centímetros (10 GHz) no están permitidas para la categoría Novicio. Esta banda tiene restricciones específicas de modos autorizados.'},

  {id:'R163',cat:'Anexo A — Bandas Novicio',
   q:'¿Puede un Radioaficionado de categoría Novicio efectuar transmisiones del Servicio de Radioaficionados por Satélite en la banda de 23 centímetros?',
   opts:['Solo en sentido espacio–tierra, en el rango 1260–1270 MHz','Solo en sentido tierra–espacio, en el rango 1260–1270 MHz','Sí, en ambos sentidos, en el rango 1260–1270 MHz','No están permitidas'],
   ans:1,exp:'El Novicio puede transmitir por satélite en la banda de 23 cm SOLO en sentido tierra–espacio (uplink), en el rango 1260–1270 MHz. No puede recibir desde satélite (espacio–tierra) en esa banda.'},
]

export const REG_CATEGORIES = ['Todas', ...new Set(REG_QUESTIONS.map(q => q.cat))]