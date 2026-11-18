// Base de datos de actividades de desconexión digital para "Desconecta"
// Clasificadas por categoría (10 retos por cada una de las 6 categorías = 60 retos en total)

export const CATEGORIES = {
  NATURALEZA: {
    id: "naturaleza",
    name: "Naturaleza & Aire Libre",
    color: "#2d6a4f",
    accent: "#52b788",
    icon: "Sprout",
    bg: "rgba(45, 106, 79, 0.12)"
  },
  CREATIVIDAD: {
    id: "creatividad",
    name: "Creatividad & Arte",
    color: "#e76f51",
    accent: "#f4a261",
    icon: "Palette",
    bg: "rgba(231, 111, 81, 0.12)"
  },
  CALMA: {
    id: "calma",
    name: "Mente & Bienestar",
    color: "#2a9d8f",
    accent: "#48cae4",
    icon: "Heart",
    bg: "rgba(42, 157, 143, 0.12)"
  },
  SOCIAL: {
    id: "social",
    name: "Social & Familia",
    color: "#9d4edd",
    accent: "#c77dff",
    icon: "Users",
    bg: "rgba(157, 78, 221, 0.12)"
  },
  MOVIMIENTO: {
    id: "movimiento",
    name: "Movimiento & Cuerpo",
    color: "#e63946",
    accent: "#ff758f",
    icon: "Activity",
    bg: "rgba(230, 57, 70, 0.12)"
  },
  LECTURA: {
    id: "lectura",
    name: "Lectura & Enfoque",
    color: "#1d3557",
    accent: "#457b9d",
    icon: "BookOpen",
    bg: "rgba(29, 53, 87, 0.12)"
  }
};

export const ACTIVITIES = [
  // =========================================================
  // 1. NATURALEZA & AIRE LIBRE (10 RETOS)
  // =========================================================
  {
    id: 1,
    title: "Paseo consciente sin celular",
    category: "naturaleza",
    duration: 20,
    difficulty: "Fácil",
    xp: 60,
    icon: "Trees",
    summary: "Sal a caminar por tu vecindario o parque dejando el teléfono en casa o en modo avión dentro del bolsillo.",
    instructions: [
      "Guarda el teléfono en un cajón o ponlo en modo silencio/avión en un bolsillo cerrado.",
      "Sal a caminar sin audífonos. Presta atención a los sonidos ambientales: pájaros, viento, pasos.",
      "Identifica al menos 3 árboles, flores o detalles arquitectónicos que nunca habías notado.",
      "Camina a un ritmo relajado y respira hondo por la nariz."
    ],
    benefit: "Disminuye el cortisol (estrés), oxigena el cerebro y restablece la atención involuntaria."
  },
  {
    id: 8,
    title: "Cuidar tus plantas o jardín",
    category: "naturaleza",
    duration: 20,
    difficulty: "Fácil",
    xp: 60,
    icon: "Sprout",
    summary: "Riega tus plantas, limpia sus hojas secas o trasplanta un brote tocando la tierra.",
    instructions: [
      "Revisa la humedad de la tierra con tus dedos.",
      "Riega con cuidado la cantidad adecuada para cada planta.",
      "Retira con suavidad las hojas marchitas.",
      "Observa el crecimiento de nuevos brotes y conecta con el ritmo pausado de la naturaleza."
    ],
    benefit: "El contacto con la tierra reduce la inflamación y reconecta con ciclos naturales."
  },
  {
    id: 14,
    title: "Observar el cielo o atardecer",
    category: "naturaleza",
    duration: 15,
    difficulty: "Fácil",
    xp: 50,
    icon: "🌅",
    summary: "Contempla el cambio de luz natural, las formas de las nubes o las estrellas al anochecer.",
    instructions: [
      "Asómate a una ventana, balcón o patio.",
      "No tomes fotografías ni intentes capturar el momento para redes sociales.",
      "Simplemente observa cómo cambian los matices dorados, rosas y violetas.",
      "Deja que tu mirada descanse en la lejanía para relajar los músculos ciliares de los ojos."
    ],
    benefit: "Regula el ritmo circadiano y reduce la fatiga visual por acomodación de corta distancia."
  },
  {
    id: 19,
    title: "Observar aves y sus sonidos",
    category: "naturaleza",
    duration: 20,
    difficulty: "Fácil",
    xp: 60,
    icon: "🐦",
    summary: "Observa las aves de tu entorno y escucha sus diferentes sonidos.",
    instructions: [
      "Busca un lugar tranquilo al aire libre.",
      "Observa las aves que se encuentren cerca.",
      "Identifica sus colores y movimientos.",
      "Escucha sus sonidos sin utilizar el celular."
    ],
    benefit: "Fomenta la observación y la conexión con la naturaleza."
  },
  {
    id: 20,
    title: "Recolectar hojas y crear arte",
    category: "naturaleza",
    duration: 25,
    difficulty: "Fácil",
    xp: 70,
    icon: "🍂",
    summary: "Crea una composición artística utilizando hojas caídas.",
    instructions: [
      "Recoge algunas hojas que estén en el suelo.",
      "Colócalas sobre una hoja de papel.",
      "Forma una figura o paisaje.",
      "Pega las hojas y observa tu creación."
    ],
    benefit: "Estimula la creatividad y la observación del entorno."
  },
  {
    id: 21,
    title: "Explorar un nuevo rincón",
    category: "naturaleza",
    duration: 30,
    difficulty: "Fácil",
    xp: 75,
    icon: "🌼",
    summary: "Descubre un espacio natural cercano que normalmente no visitas.",
    instructions: [
      "Elige un parque o jardín seguro.",
      "Recorre el lugar con tranquilidad.",
      "Observa sus colores, plantas y sonidos.",
      "Identifica tres detalles que te hayan gustado."
    ],
    benefit: "Promueve la curiosidad y el disfrute del aire libre."
  },
  {
    id: 37,
    title: "Caminar descalzo sobre césped o tierra",
    category: "naturaleza",
    duration: 15,
    difficulty: "Fácil",
    xp: 50,
    icon: "🌱",
    summary: "Conecta físicamente con la superficie natural del jardín o parque sintiendo su temperatura y textura.",
    instructions: [
      "Busca una zona limpia y segura con pasto, arena o tierra.",
      "Quítate los zapatos y calcetines durante unos minutos.",
      "Da pasos lentos notando el frescor y el relieve bajo tus pies.",
      "Respira profundo mientras descargas la tensión acumulada."
    ],
    benefit: "Favorece la propiocepción plantar y reduce la sensación de fatiga mental."
  },
  {
    id: 38,
    title: "Baño de luz natural matutina",
    category: "naturaleza",
    duration: 15,
    difficulty: "Fácil",
    xp: 45,
    icon: "🌻",
    summary: "Recibe la luz suave de la mañana al aire libre antes de mirar cualquier pantalla.",
    instructions: [
      "Sal al patio, balcón o ventana abierta durante la mañana.",
      "Permite que la luz natural ilumine tu rostro sin mirar directamente al sol.",
      "Realiza 10 respiraciones profundas sintiendo el aire fresco.",
      "Agradece el inicio de un nuevo día fuera del entorno digital."
    ],
    benefit: "Sincroniza el reloj biológico y estimula la producción natural de serotonina."
  },
  {
    id: 39,
    title: "Explorar texturas de la naturaleza",
    category: "naturaleza",
    duration: 20,
    difficulty: "Fácil",
    xp: 55,
    icon: "🌲",
    summary: "Observa de cerca cortezas de árboles, piedras, semillas o flores utilizando el tacto y la vista.",
    instructions: [
      "Acércate a diferentes plantas, troncos o piedras en un parque o jardín.",
      "Toca suavemente sus superficies para notar si son rugosas, lisas o frías.",
      "Observa las nervaduras de las hojas y los patrones naturales.",
      "Compara al menos cuatro elementos distintos de tu entorno."
    ],
    benefit: "Despierta los sentidos táctiles y entrena la atención al detalle en el mundo físico."
  },
  {
    id: 40,
    title: "Mapa sonoro de la naturaleza",
    category: "naturaleza",
    duration: 20,
    difficulty: "Fácil",
    xp: 60,
    icon: "🌿",
    summary: "Siéntate al aire libre con una hoja de papel y registra de dónde provienen los sonidos naturales.",
    instructions: [
      "Siéntate en una banca o sobre el pasto con papel y lápiz.",
      "Dibuja una pequeña cruz en el centro que te represente a ti.",
      "Cierra los ojos un minuto y escucha el viento, insectos, hojas o aves.",
      "Marca con símbolos en la hoja la dirección de cada sonido que percibas."
    ],
    benefit: "Agudiza la percepción auditiva espacial y aquieta los pensamientos acelerados."
  },

  // =========================================================
  // 2. CREATIVIDAD & ARTE (10 RETOS)
  // =========================================================
  {
    id: 4,
    title: "Dibujo o boceto libre",
    category: "creatividad",
    duration: 25,
    difficulty: "Medio",
    xp: 75,
    icon: "PenTool",
    summary: "Toma papel y lápiz para dibujar lo que tengas frente a ti sin juzgar el resultado.",
    instructions: [
      "Consigue una hoja en blanco y cualquier lápiz, pluma o colores.",
      "Elige un objeto a tu alrededor (una taza, tu planta, tus zapatos o tu mano).",
      "Dibuja sin preocuparte por la perfección técnica; enfócate en trazar líneas y sombras.",
      "Si prefieres, dibuja patrones geométricos, mandalas o garabatos libres."
    ],
    benefit: "Estimula el hemisferio derecho, fomenta el estado de 'flow' y libera dopamina natural."
  },
  {
    id: 7,
    title: "Journaling o diario de gratitud",
    category: "creatividad",
    duration: 15,
    difficulty: "Fácil",
    xp: 55,
    icon: "BookOpen",
    summary: "Escribe a mano en un cuaderno 3 cosas por las que te sientes agradecido hoy y cómo te sientes.",
    instructions: [
      "Abre tu cuaderno o libreta favorita.",
      "Escribe la fecha y 3 cosas específicas por las que agradeces hoy.",
      "Describe en 5 líneas cómo ha estado tu mente y qué emociones has experimentado.",
      "Escribe una intención positiva para el resto del día."
    ],
    benefit: "Despeja el ruido mental, entrena el optimismo y ayuda a procesar pensamientos pendientes."
  },
  {
    id: 12,
    title: "Ordenar un espacio físico / Cajón zen",
    category: "creatividad",
    duration: 25,
    difficulty: "Medio",
    xp: 70,
    icon: "Sparkles",
    summary: "Elige un cajón, estante o rincón desordenado y organízalo con calma y atención.",
    instructions: [
      "Vacía por completo el cajón o repisa que elijas.",
      "Limpia la superficie interior.",
      "Separa lo que realmente usas de lo que puedes donar o reciclar.",
      "Acomoda todo de forma armónica y visualmente limpia."
    ],
    benefit: "El orden externo genera calma y claridad mental interna inmediata."
  },
  {
    id: 16,
    title: "Cocinar una receta con atención plena",
    category: "creatividad",
    duration: 45,
    difficulty: "Difícil",
    xp: 120,
    icon: "🍳",
    summary: "Prepara un platillo o postre casero desde cero, picando y mezclando ingredientes a mano.",
    instructions: [
      "Lee la receta en papel antes de empezar.",
      "Prepara los ingredientes (mise en place) en recipientes limpios.",
      "Disfruta los aromas de las especias, el sonido del salteado y las texturas.",
      "Emplata con dedicación y siéntate a degustarlo sin pantallas enfrente."
    ],
    benefit: "Experiencia sensorial completa que transforma una necesidad en un acto meditativo."
  },
  {
    id: 22,
    title: "Crear una historia ilustrada",
    category: "creatividad",
    duration: 30,
    difficulty: "Medio",
    xp: 85,
    icon: "📝",
    summary: "Inventa una historia corta y acompáñala con dibujos.",
    instructions: [
      "Elige tres personajes imaginarios.",
      "Inventa una pequeña aventura.",
      "Escribe la historia en papel.",
      "Agrega dibujos para ilustrarla."
    ],
    benefit: "Desarrolla la imaginación y la expresión artística."
  },
  {
    id: 23,
    title: "Diseñar una tarjeta personalizada",
    category: "creatividad",
    duration: 20,
    difficulty: "Fácil",
    xp: 60,
    icon: "💌",
    summary: "Elabora una tarjeta decorativa para alguien especial.",
    instructions: [
      "Consigue papel, colores y lápices.",
      "Dobla una hoja para formar una tarjeta.",
      "Decórala con dibujos y mensajes.",
      "Guárdala para regalarla."
    ],
    benefit: "Estimula la creatividad y la expresión personal."
  },
  {
    id: 41,
    title: "Origami o figuras de papel",
    category: "creatividad",
    duration: 20,
    difficulty: "Fácil",
    xp: 60,
    icon: "🎨",
    summary: "Dobla hojas de papel paso a paso para construir barcos, aviones, flores o figuras geométricas.",
    instructions: [
      "Toma una hoja cuadrada de papel o recorta una a medida.",
      "Realiza cada doblez marcando bien los bordes con la yema de los dedos.",
      "Prueba crear una figura clásica o inventa tu propia forma tridimensional.",
      "Decora tu figura con colores o plumones al terminar."
    ],
    benefit: "Desarrolla la motricidad fina, la paciencia y la geometría espacial."
  },
  {
    id: 42,
    title: "Collage con recortes de papel",
    category: "creatividad",
    duration: 30,
    difficulty: "Medio",
    xp: 80,
    icon: "✏️",
    summary: "Combina recortes de revistas viejas, empaques y papel de colores para crear un cartel artístico.",
    instructions: [
      "Reúne revistas pasadas, folletos, tijeras y pegamento.",
      "Recorta colores, palabras o imágenes que llamen tu atención.",
      "Ordénalos libremente sobre una cartulina o cuaderno.",
      "Pégalos formando un mural que represente tus sueños o gustos."
    ],
    benefit: "Despierta la asociación libre de ideas y relaja la mente mediante el trabajo manual."
  },
  {
    id: 43,
    title: "Escribir un poema o canción a mano",
    category: "creatividad",
    duration: 20,
    difficulty: "Fácil",
    xp: 65,
    icon: "📓",
    summary: "Juega con el ritmo de las palabras y las rimas para expresar una emoción o describir un paisaje.",
    instructions: [
      "Elige un tema sencillo: la lluvia, la amistad, el silencio o tu lugar favorito.",
      "Anota palabras sueltas que se relacionen con ese tema.",
      "Construye de 4 a 8 versos sin preocuparte por reglas estrictas.",
      "Léelo en voz baja sintiendo la musicalidad de tus palabras."
    ],
    benefit: "Estimula la fluidez verbal y canaliza las emociones de forma constructiva."
  },
  {
    id: 44,
    title: "Pintar un mandala o patrón geométrico",
    category: "creatividad",
    duration: 25,
    difficulty: "Fácil",
    xp: 70,
    icon: "✨",
    summary: "Traza círculos y formas repetitivas en papel y llénalos de color con lápices o acuarelas.",
    instructions: [
      "Dibuja un punto central en tu hoja y rodéalo con pétalos, triángulos o círculos.",
      "Expande el diseño desde el centro hacia afuera de manera simétrica.",
      "Elige una paleta de 3 o 4 colores que te transmitan serenidad.",
      "Colorea cada sección sin prisa, manteniendo la atención en el trazo."
    ],
    benefit: "Induce un estado meditativo profundo similar al mindfulness activo."
  },

  // =========================================================
  // 3. MENTE & BIENESTAR (10 RETOS)
  // =========================================================
  {
    id: 3,
    title: "Respiración consciente 4-7-8",
    category: "calma",
    duration: 10,
    difficulty: "Fácil",
    xp: 40,
    icon: "Wind",
    summary: "Dedica 10 minutos a la técnica de respiración calmante para relajar tu sistema nervioso.",
    instructions: [
      "Siéntate en una postura cómoda con la espalda recta.",
      "Inhala silenciosamente por la nariz contando mentalmente hasta 4.",
      "Mantén el aire en tus pulmones durante 7 segundos.",
      "Exhala completamente por la boca haciendo un suave sonido contando hasta 8.",
      "Repite este ciclo 6 a 8 veces y quédate 2 minutos en silencio sintiendo tu cuerpo."
    ],
    benefit: "Activa el sistema nervioso parasimpático y calma la ansiedad inducida por notificaciones."
  },
  {
    id: 9,
    title: "Té o infusión con atención plena",
    category: "calma",
    duration: 15,
    difficulty: "Fácil",
    xp: 45,
    icon: "Coffee",
    summary: "Prepara una infusión caliente y bébela involucrando los cinco sentidos sin ninguna distracción.",
    instructions: [
      "Hierve agua y observa el vapor emergiendo.",
      "Huele las hierbas o té antes de sumergirlo.",
      "Siente la calidez de la taza entre tus manos.",
      "Toma sorbos lentos saboreando cada matiz y sintiendo el recorrido del calor en tu cuerpo."
    ],
    benefit: "Práctica de mindfulness accesible que ancla la mente al presente inmediato."
  },
  {
    id: 17,
    title: "Siesta revitalizante o escaneo corporal",
    category: "calma",
    duration: 20,
    difficulty: "Fácil",
    xp: 50,
    icon: "💤",
    summary: "Acuéstate en un lugar fresco y silencioso para una micro-siesta o descanso sensorial.",
    instructions: [
      "Oscurece ligeramente la habitación o usa un antifaz.",
      "Afloja la ropa apretada y quítate los zapatos.",
      "Recorre mentalmente tu cuerpo desde los dedos de los pies hasta la cabeza, relajando cada músculo.",
      "Si te duermes 15-20 minutos, despertarás renovado sin aturdimiento."
    ],
    benefit: "Restaura la lucidez cognitiva y disminuye la sobrecarga sensorial del día."
  },
  {
    id: 24,
    title: "Escuchar sonidos relajantes",
    category: "calma",
    duration: 15,
    difficulty: "Fácil",
    xp: 45,
    icon: "🎐",
    summary: "Dedica unos minutos a escuchar los sonidos tranquilos de tu entorno.",
    instructions: [
      "Busca un lugar cómodo.",
      "Cierra los ojos si te resulta agradable.",
      "Identifica los sonidos que puedes escuchar.",
      "Permanece unos minutos disfrutando el momento."
    ],
    benefit: "Favorece la atención plena y la relajación."
  },
  {
    id: 25,
    title: "Pausa de pensamientos positivos",
    category: "calma",
    duration: 15,
    difficulty: "Fácil",
    xp: 50,
    icon: "🌈",
    summary: "Dedica un momento a reconocer las cosas positivas de tu día.",
    instructions: [
      "Busca un cuaderno.",
      "Escribe tres momentos agradables de tu día.",
      "Recuerda cómo te hicieron sentir.",
      "Escribe un pensamiento positivo para mañana."
    ],
    benefit: "Promueve la reflexión y el bienestar emocional."
  },
  {
    id: 26,
    title: "Descanso consciente",
    category: "calma",
    duration: 20,
    difficulty: "Fácil",
    xp: 55,
    icon: "☁️",
    summary: "Disfruta un descanso tranquilo sin distracciones digitales.",
    instructions: [
      "Busca un lugar cómodo.",
      "Deja las pantallas a un lado.",
      "Respira tranquilamente.",
      "Disfruta unos minutos de descanso."
    ],
    benefit: "Ayuda a recuperar la atención y reducir las distracciones."
  },
  {
    id: 45,
    title: "Ejercicio de anclaje 5-4-3-2-1",
    category: "calma",
    duration: 10,
    difficulty: "Fácil",
    xp: 45,
    icon: "🧘",
    summary: "Despierta tus cinco sentidos para regresar al momento presente y calmar la mente dispersa.",
    instructions: [
      "Observa 5 objetos reales a tu alrededor y nota sus colores.",
      "Toca 4 texturas diferentes que estén a tu alcance.",
      "Identifica 3 sonidos ambientales lejanos o cercanos.",
      "Reconoce 2 aromas del ambiente y haz 1 respiración profunda de gratitud."
    ],
    benefit: "Corta el ciclo de rumiación mental y estabiliza la atención en segundos."
  },
  {
    id: 46,
    title: "Automasaje relajante de manos y cuello",
    category: "calma",
    duration: 15,
    difficulty: "Fácil",
    xp: 50,
    icon: "🍵",
    summary: "Libera la fatiga acumulada en dedos, palmas, muñecas y nuca tras usar dispositivos.",
    instructions: [
      "Aplica un poco de crema o frota tus manos hasta que entren en calor.",
      "Presiona suavemente el centro de la palma y cada dedo desde la base hasta la punta.",
      "Realiza círculos suaves en las muñecas y en la base del cuello.",
      "Acompaña cada movimiento con exhalaciones largas y lentas."
    ],
    benefit: "Disminuye la tensión muscular periférica y envía señales de calma al cerebro."
  },
  {
    id: 47,
    title: "Visualización de tu refugio sereno",
    category: "calma",
    duration: 15,
    difficulty: "Fácil",
    xp: 50,
    icon: "🕯️",
    summary: "Cierra los ojos e imagina con todo detalle un paisaje tranquilo que te brinde paz.",
    instructions: [
      "Recuéstate o siéntate cómodamente y cierra los ojos.",
      "Imagina un bosque, una playa tranquila o una cabaña en la montaña.",
      "Recrea mentalmente la temperatura, la brisa, los colores y el sonido del lugar.",
      "Quédate en esa imagen durante varios minutos respirando con suavidad."
    ],
    benefit: "Reduce la frecuencia cardíaca y fortalece la capacidad de autorregulación emocional."
  },
  {
    id: 48,
    title: "Diez minutos de silencio total",
    category: "calma",
    duration: 10,
    difficulty: "Medio",
    xp: 55,
    icon: "🫁",
    summary: "Regálate una pausa sin música, sin pantallas y sin hablar para descansar el sistema auditivo.",
    instructions: [
      "Avisa en casa que tomarás 10 minutos de silencio tranquilo.",
      "Siéntate frente a una ventana o en un sillón cómodo.",
      "Observa cómo van y vienen tus pensamientos sin engancharte en ninguno.",
      "Disfruta la paz de no tener que responder a ningún estímulo externo."
    ],
    benefit: "Regenera la atención ejecutiva y reduce el agotamiento por ruido constante."
  },

  // =========================================================
  // 4. SOCIAL & FAMILIA (10 RETOS)
  // =========================================================
  {
    id: 5,
    title: "Charla sin pantallas cara a cara",
    category: "social",
    duration: 30,
    difficulty: "Fácil",
    xp: 90,
    icon: "Coffee",
    summary: "Comparte un café, té o caminata con un familiar o amigo con los teléfonos guardados.",
    instructions: [
      "Invita a alguien cercano a compartir unos minutos contigo.",
      "Propón la regla 'teléfonos en la mesa boca abajo o en el bolso'.",
      "Haz preguntas abiertas: '¿Qué es lo mejor que te ha pasado esta semana?' o '¿En qué estás soñando últimamente?'.",
      "Escucha con atención plena sin mirar el reloj."
    ],
    benefit: "Fortalece vínculos emocionales reales, genera oxitocina y combate la sensación de soledad digital."
  },
  {
    id: 10,
    title: "Juego de mesa o cartas",
    category: "social",
    duration: 40,
    difficulty: "Medio",
    xp: 100,
    icon: "Dices",
    summary: "Disfruta de una partida de ajedrez, dominó, cartas, Scrabble o cualquier juego físico.",
    instructions: [
      "Saca un juego de mesa clásico que tengas guardado.",
      "Invita a alguien de tu hogar o juega un solitario de cartas físico.",
      "Concéntrate en la estrategia táctil de las fichas o cartas.",
      "Disfruta las risas y la interacción física espontánea."
    ],
    benefit: "Agilidad mental lúdica sin pantallas y fortalecimiento del compañerismo."
  },
  {
    id: 15,
    title: "Escribir una carta a mano",
    category: "social",
    duration: 25,
    difficulty: "Medio",
    xp: 85,
    icon: "✉️",
    summary: "Escribe una carta sincera a alguien especial (amigo, abuelo, pareja) expresando aprecio.",
    instructions: [
      "Escoge una hoja de papel bonita y tu pluma favorita.",
      "Tómate un minuto para pensar en recuerdos compartidos con esa persona.",
      "Escribe sin prisas contándole por qué valoras su presencia en tu vida.",
      "Dóblala y guárdala en un sobre para entregarla o enviarla por correo."
    ],
    benefit: "Fomenta la introspección emocional profunda y crea un recuerdo tangible invaluable."
  },
  {
    id: 27,
    title: "Crear una historia entre todos",
    category: "social",
    duration: 20,
    difficulty: "Fácil",
    xp: 65,
    icon: "📖",
    summary: "Inventen una historia por turnos.",
    instructions: [
      "Reúne a tu familia o amigos.",
      "Una persona comienza con una frase.",
      "Cada participante agrega una parte.",
      "Continúen hasta crear un final."
    ],
    benefit: "Fomenta la imaginación y la convivencia."
  },
  {
    id: 28,
    title: "Tarde de juegos de preguntas",
    category: "social",
    duration: 25,
    difficulty: "Fácil",
    xp: 70,
    icon: "❓",
    summary: "Organiza una ronda de preguntas divertidas con tus seres queridos.",
    instructions: [
      "Reúne a dos o más participantes.",
      "Escriban preguntas en papelitos.",
      "Colóquenlos en un recipiente.",
      "Tomen turnos para responder."
    ],
    benefit: "Mejora la comunicación y permite conocerse mejor."
  },
  {
    id: 29,
    title: "Preparar una sorpresa familiar",
    category: "social",
    duration: 30,
    difficulty: "Fácil",
    xp: 80,
    icon: "🎁",
    summary: "Prepara un pequeño detalle para alegrarle el día a alguien.",
    instructions: [
      "Piensa en alguien de tu familia.",
      "Elige un detalle sencillo.",
      "Prepara una nota o dibujo.",
      "Entrégalo con cariño."
    ],
    benefit: "Fortalece los vínculos y fomenta la convivencia."
  },
  {
    id: 49,
    title: "Preparar una merienda en equipo",
    category: "social",
    duration: 30,
    difficulty: "Fácil",
    xp: 80,
    icon: "🍲",
    summary: "Cocinen o preparen juntos una botana saludable, fruta picada o sándwiches conversando.",
    instructions: [
      "Elijan una receta sencilla que puedan preparar entre dos o más personas.",
      "Repartan las tareas: lavar, cortar, mezclar o servir la mesa.",
      "Platiquen sobre su día mientras preparan los alimentos.",
      "Disfruten la merienda en la mesa sin televisión ni celulares."
    ],
    benefit: "Promueve el trabajo en equipo, la cooperación familiar y el disfrute compartido."
  },
  {
    id: 50,
    title: "Ver álbumes de fotos impresas o recuerdos",
    category: "social",
    duration: 25,
    difficulty: "Fácil",
    xp: 75,
    icon: "🤝",
    summary: "Saca fotografías impresas o recuerdos familiares y compartan las historias detrás de cada momento.",
    instructions: [
      "Busca un álbum familiar o una caja de fotografías físicas.",
      "Siéntate con tus padres, abuelos, hermanos o amigos a mirarlas.",
      "Pregunta quiénes aparecen y qué ocurrió aquel día.",
      "Escucha las anécdotas de otras épocas y compártelas."
    ],
    benefit: "Refuerza la identidad familiar, la memoria afectiva y el diálogo intergeneracional."
  },
  {
    id: 51,
    title: "Juego de mímica y adivinanzas",
    category: "social",
    duration: 25,
    difficulty: "Fácil",
    xp: 70,
    icon: "🎭",
    summary: "Actúa películas, animales o profesiones sin hablar para que los demás adivinen.",
    instructions: [
      "Corten pequeños papelitos y escriban animales, objetos o acciones.",
      "Dóblenlos y métanlos en un tazón.",
      "Por turnos, cada jugador toma un papel y lo representa solo con gestos.",
      "Cuenten cuántas adivinanzas logran resolver en equipo."
    ],
    benefit: "Despierta la expresión corporal, el sentido del humor y la complicidad grupal."
  },
  {
    id: 52,
    title: "Ronda de agradecimientos en familia",
    category: "social",
    duration: 15,
    difficulty: "Fácil",
    xp: 60,
    icon: "🗣️",
    summary: "Reúnanse unos minutos para reconocer algo positivo de cada integrante del hogar.",
    instructions: [
      "Siéntense en círculo en la sala o alrededor de la mesa.",
      "Por turnos, cada persona dice algo que agradece o admira de quien tiene a su derecha.",
      "Escuchen con respeto y reciban las palabras con una sonrisa.",
      "Cierren la dinámica con un abrazo grupal o choque de manos."
    ],
    benefit: "Eleva la autoestima, la empatía y crea un ambiente cálido y seguro en casa."
  },

  // =========================================================
  // 5. MOVIMIENTO & CUERPO (10 RETOS)
  // =========================================================
  {
    id: 6,
    title: "Estiramientos y movilidad corporal",
    category: "movimiento",
    duration: 15,
    difficulty: "Fácil",
    xp: 50,
    icon: "Activity",
    summary: "Alivia la tensión muscular provocada por encorvarse frente al celular o la computadora.",
    instructions: [
      "Estira el cuello suavemente llevando la oreja hacia el hombro durante 20 segundos cada lado.",
      "Gira los hombros hacia atrás 15 veces abriendo bien el pecho.",
      "Entrelaza los dedos detrás de la espalda e inclínate ligeramente hacia adelante.",
      "Estira las muñecas y los dedos, que sufren por el uso constante del teclado y pantalla."
    ],
    benefit: "Corrige la postura de 'cuello de texto' (text neck) y mejora la circulación sanguínea."
  },
  {
    id: 11,
    title: "Paseo en bicicleta sin rumbo fijo",
    category: "movimiento",
    duration: 35,
    difficulty: "Medio",
    xp: 95,
    icon: "Bike",
    summary: "Pedalea sintiendo el viento en la cara por calles tranquilas o ciclovías.",
    instructions: [
      "Revisa frenos y llantas de tu bicicleta.",
      "No utilices GPS ni aplicaciones de seguimiento deportivo.",
      "Elige un camino tranquilo y déjate guiar por la curiosidad.",
      "Disfruta la sensación de velocidad y libertad del pedaleo."
    ],
    benefit: "Salud cardiovascular, liberación de endorfinas y estímulo de la orientación espacial."
  },
  {
    id: 18,
    title: "Bailar o moverte con tu ritmo interno",
    category: "movimiento",
    duration: 15,
    difficulty: "Fácil",
    xp: 60,
    icon: "💃",
    summary: "Mueve el cuerpo libremente para soltar tensiones sin seguir ninguna coreografía de video.",
    instructions: [
      "Ponte ropa cómoda y despeja un espacio en tu sala o cuarto.",
      "Mueve las articulaciones, salta suavemente o sacude las extremidades.",
      "Deja que el cuerpo libere la rigidez acumulada por estar sentado.",
      "Termina con 3 respiraciones profundas con una mano en el pecho."
    ],
    benefit: "Despeja la energía estancada y dispara neurotransmisores de bienestar."
  },
  {
    id: 30,
    title: "Circuito de movimientos suaves",
    category: "movimiento",
    duration: 15,
    difficulty: "Fácil",
    xp: 55,
    icon: "🤸",
    summary: "Realiza movimientos sencillos en un espacio seguro.",
    instructions: [
      "Busca un espacio libre de obstáculos.",
      "Camina suavemente en el mismo lugar.",
      "Mueve los brazos y hombros.",
      "Termina con estiramientos cómodos."
    ],
    benefit: "Ayuda a mantener el cuerpo activo."
  },
  {
    id: 31,
    title: "Juego de equilibrio",
    category: "movimiento",
    duration: 10,
    difficulty: "Fácil",
    xp: 45,
    icon: "⚖️",
    summary: "Practica movimientos sencillos para trabajar tu equilibrio.",
    instructions: [
      "Colócate cerca de una pared para apoyarte.",
      "Mantén una postura cómoda.",
      "Levanta suavemente un pie.",
      "Cambia de lado cuando lo desees."
    ],
    benefit: "Favorece la coordinación y el control corporal."
  },
  {
    id: 32,
    title: "Baile de pasos inventados",
    category: "movimiento",
    duration: 20,
    difficulty: "Fácil",
    xp: 65,
    icon: "💃",
    summary: "Inventa pasos de baile al ritmo de tu música favorita.",
    instructions: [
      "Elige una canción que te guste.",
      "Deja espacio para moverte.",
      "Inventa movimientos sencillos.",
      "Combina tus pasos y diviértete."
    ],
    benefit: "Promueve el movimiento y la expresión corporal."
  },
  {
    id: 53,
    title: "Secuencia de yoga o saludo al sol",
    category: "movimiento",
    duration: 20,
    difficulty: "Medio",
    xp: 70,
    icon: "🧘‍♂️",
    summary: "Conecta respiración y postura mediante estiramientos fluidos sobre un tapete o alfombra.",
    instructions: [
      "Coloca un tapete o toalla en el suelo y descalza tus pies.",
      "Inhala elevando los brazos al techo y exhala doblándote suavemente hacia adelante.",
      "Alterna posturas suaves de estiramiento de espalda y piernas.",
      "Mantén cada postura durante 5 respiraciones lentas."
    ],
    benefit: "Aumenta la flexibilidad, fortalece el centro del cuerpo y aquieta la mente."
  },
  {
    id: 54,
    title: "Caminata energética con cambios de ritmo",
    category: "movimiento",
    duration: 25,
    difficulty: "Medio",
    xp: 75,
    icon: "🏃",
    summary: "Activa tu circulación alternando minutos de paso ligero con minutos de caminata pausada.",
    instructions: [
      "Sal al parque, patio o calle segura con calzado cómodo.",
      "Camina 3 minutos a paso suave para calentar tus articulaciones.",
      "Alterna 2 minutos de paso rápido con 2 minutos de paso tranquilo.",
      "Coordina el braceo natural con tu respiración nasal."
    ],
    benefit: "Oxigena los tejidos, mejora la resistencia aeróbica y despeja la fatiga mental."
  },
  {
    id: 55,
    title: "Reto de coordinación con pelota o globo",
    category: "movimiento",
    duration: 15,
    difficulty: "Fácil",
    xp: 55,
    icon: "🎯",
    summary: "Mantén un globo en el aire o lanza una pelota pequeña trabajando tus reflejos.",
    instructions: [
      "Infla un globo o consigue una pelota suave.",
      "Intenta mantenerlo en el aire usando manos, codos o rodillas sin que toque el suelo.",
      "Cuenta cuántos toques seguidos logras hacer.",
      "Prueba lanzar y atrapar con una sola mano alternando izquierda y derecha."
    ],
    benefit: "Entrena la coordinación óculo-manual, la agilidad y los reflejos físicos."
  },
  {
    id: 56,
    title: "Despertar articular de pies a cabeza",
    category: "movimiento",
    duration: 12,
    difficulty: "Fácil",
    xp: 50,
    icon: "🏃‍♂️",
    summary: "Realiza rotaciones suaves en cada articulación para lubricar el cuerpo tras estar sentado.",
    instructions: [
      "Comienza girando el tobillo derecho 10 veces hacia cada lado y luego el izquierdo.",
      "Flexiona suavemente las rodillas y realiza círculos amplios con la cadera.",
      "Rota el torso de lado a lado dejando los brazos sueltos.",
      "Termina con giros suaves de muñecas, hombros y cuello."
    ],
    benefit: "Libera la rigidez articular y devuelve ligereza al cuerpo en pocos minutos."
  },

  // =========================================================
  // 6. LECTURA & ENFOQUE (10 RETOS)
  // =========================================================
  {
    id: 2,
    title: "Sesión de lectura en papel",
    category: "lectura",
    duration: 30,
    difficulty: "Fácil",
    xp: 80,
    icon: "BookOpen",
    summary: "Lee un libro, revista o cómic físico durante media hora ininterrumpida.",
    instructions: [
      "Elige un libro físico que te llame la atención.",
      "Encuentra un rincón cómodo y con buena iluminación natural.",
      "Aleja cualquier pantalla o dispositivo de tu campo visual.",
      "Lee a tu propio ritmo sin afán de terminar rápido, disfrutando la textura del papel."
    ],
    benefit: "Mejora la concentración sostenida, la retención de memoria y descansa los ojos de la luz azul."
  },
  {
    id: 13,
    title: "Resolver pasatiempo en papel",
    category: "lectura",
    duration: 20,
    difficulty: "Fácil",
    xp: 50,
    icon: "🧩",
    summary: "Resuelve un crucigrama, sopa de letras, sudoku o acertijo en una revista o periódico.",
    instructions: [
      "Busca un crucigrama o sudoku impreso.",
      "Usa lápiz y borrador para pensar cada casilla.",
      "Si te trabas, no busques la respuesta en internet; deja que tu mente incube la solución.",
      "Siente la satisfacción analógica de completar los recuadros a mano."
    ],
    benefit: "Fortalece la neuroplasticidad y la memoria de trabajo sin hiperestímulo digital."
  },
  {
    id: 33,
    title: "Club de lectura personal",
    category: "lectura",
    duration: 25,
    difficulty: "Fácil",
    xp: 65,
    icon: "📕",
    summary: "Lee un capítulo de tu libro favorito.",
    instructions: [
      "Elige un libro que te interese.",
      "Busca un lugar tranquilo.",
      "Lee un capítulo con atención.",
      "Escribe qué fue lo que más te gustó."
    ],
    benefit: "Estimula la comprensión lectora y la concentración."
  },
  {
    id: 34,
    title: "Crear tu propio separador",
    category: "lectura",
    duration: 20,
    difficulty: "Fácil",
    xp: 50,
    icon: "🔖",
    summary: "Diseña un separador personalizado para tus libros.",
    instructions: [
      "Consigue papel o cartulina.",
      "Recorta una tira de papel.",
      "Decórala con colores y dibujos.",
      "Utilízala en tu próxima lectura."
    ],
    benefit: "Combina creatividad y lectura."
  },
  {
    id: 35,
    title: "Leer un cuento y cambiar su final",
    category: "lectura",
    duration: 30,
    difficulty: "Medio",
    xp: 75,
    icon: "📚",
    summary: "Lee un cuento y utiliza tu imaginación para inventar otro final.",
    instructions: [
      "Escoge un cuento corto.",
      "Lee su historia completa.",
      "Piensa cómo cambiarías el desenlace.",
      "Escribe tu propia versión."
    ],
    benefit: "Desarrolla la comprensión y la imaginación."
  },
  {
    id: 36,
    title: "Reto de palabras nuevas",
    category: "lectura",
    duration: 20,
    difficulty: "Fácil",
    xp: 60,
    icon: "🔤",
    summary: "Descubre palabras nuevas mediante una lectura en papel.",
    instructions: [
      "Elige una revista o libro.",
      "Busca cinco palabras que no conozcas.",
      "Escribe sus significados.",
      "Inventa una oración con cada palabra."
    ],
    benefit: "Enriquece el vocabulario y fortalece la comprensión lectora."
  },
  {
    id: 57,
    title: "Lectura en voz alta con entonación",
    category: "lectura",
    duration: 15,
    difficulty: "Fácil",
    xp: 55,
    icon: "📖",
    summary: "Lee un poema, fábula o fragmento literario en voz alta cuidando las pausas y la dicción.",
    instructions: [
      "Selecciona un poema o un texto breve que te inspire.",
      "Léelo primero en silencio para comprender su sentido.",
      "Léelo en voz alta pausadamente, dando emoción a cada frase.",
      "Escucha tu propia voz y disfruta el ritmo del lenguaje."
    ],
    benefit: "Mejora la expresión oral, la memoria auditiva y la atención plena en la lectura."
  },
  {
    id: 58,
    title: "Explorar una revista o periódico impreso",
    category: "lectura",
    duration: 20,
    difficulty: "Fácil",
    xp: 55,
    icon: "📰",
    summary: "Hojea un artículo cultural, científico o curioso en formato impreso sin enlaces ni anuncios.",
    instructions: [
      "Busca una revista cultural, científica o periódico en casa.",
      "Elige un reportaje sobre un tema que desconozcas.",
      "Léelo de principio a fin sin interrupciones.",
      "Comenta después con alguien el dato más interesante que aprendiste."
    ],
    benefit: "Fomenta la lectura lineal profunda libre de ventanas emergentes."
  },
  {
    id: 59,
    title: "Cuaderno de frases y citas favoritas",
    category: "lectura",
    duration: 20,
    difficulty: "Fácil",
    xp: 60,
    icon: "✏️",
    summary: "Busca en tus libros tres frases que te inspiren y transcríbelas a mano con buena caligrafía.",
    instructions: [
      "Toma uno o dos libros que te hayan gustado.",
      "Encuentra tres párrafos o frases memorables.",
      "Escríbelas con calma en una libreta anotando el autor y el título.",
      "Agrega debajo una breve reflexión personal sobre por qué te gustan."
    ],
    benefit: "Refuerza la memoria a largo plazo y ejercita la escritura caligráfica."
  },
  {
    id: 60,
    title: "Explorar un atlas, enciclopedia o libro ilustrado",
    category: "lectura",
    duration: 25,
    difficulty: "Fácil",
    xp: 65,
    icon: "🗺️",
    summary: "Viaja con la mente revisando mapas físicos, láminas de naturaleza o libros de historia.",
    instructions: [
      "Abre un atlas, enciclopedia o libro ilustrado en una página al azar.",
      "Observa con detenimiento las ilustraciones, mapas o fotografías.",
      "Lee las descripciones y ubica lugares o épocas distintas.",
      "Imagina cómo sería visitar ese lugar en la vida real."
    ],
    benefit: "Estimula la curiosidad intelectual y el aprendizaje visual sosegado."
  }
];

export const ACHIEVEMENTS = [
  {
    id: "first_spin",
    title: "Primer Giro Desconectado",
    description: "Gira la ruleta por primera vez y descubre tu primera actividad offline.",
    icon: "Dices",
    xpReward: 50,
    condition: (stats) => (stats.totalSpins || 0) >= 1
  },
  {
    id: "first_completed",
    title: "Primer Reto Cumplido",
    description: "Completa tu primera actividad asignada por la ruleta.",
    icon: "Sprout",
    xpReward: 100,
    condition: (stats) => (stats.completedActivities || 0) >= 1
  },
  {
    id: "time_master_1h",
    title: "Una Hora de Libertad",
    description: "Acumula 60 minutos de desconexión consciente.",
    icon: "Clock",
    xpReward: 150,
    condition: (stats) => (stats.totalMinutesOffline || 0) >= 60
  },
  {
    id: "streak_3",
    title: "Racha Triunfal (3 Días)",
    description: "Mantén una racha de desconexión durante 3 días consecutivos.",
    icon: "Flame",
    xpReward: 200,
    condition: (stats) => (stats.streak || 0) >= 3
  },
  {
    id: "variety_explorer",
    title: "Explorador Holístico",
    description: "Completa al menos una actividad en 4 categorías distintas.",
    icon: "Compass",
    xpReward: 250,
    condition: (stats) => (stats.uniqueCategoriesCount || 0) >= 4
  },
  {
    id: "detox_veteran",
    title: "Maestro del Tiempo Presente",
    description: "Completa 10 retos y acumula más de 300 minutos desconectado.",
    icon: "Crown",
    xpReward: 500,
    condition: (stats) => (stats.completedActivities || 0) >= 10 && (stats.totalMinutesOffline || 0) >= 300
  }
];
