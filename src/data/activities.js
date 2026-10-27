// Base de datos de actividades de desconexión digital para "Desconecta"

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
  {
    id: 1,
    title: "Paseo consciente sin celular",
    category: "naturaleza",
    duration: 20, // en minutos
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
    id: 13,
    title: "Resolver pasatiempo en papel",
    category: "lectura",
    duration: 20,
    difficulty: "Fácil",
    xp: 50,
    icon: "Puzzle",
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
    id: 14,
    title: "Observar el cielo o atardecer",
    category: "naturaleza",
    duration: 15,
    difficulty: "Fácil",
    xp: 50,
    icon: "Sunset",
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
    id: 15,
    title: "Escribir una carta a mano",
    category: "social",
    duration: 25,
    difficulty: "Medio",
    xp: 85,
    icon: "Mail",
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
    id: 16,
    title: "Cocinar una receta con atención plena",
    category: "creatividad",
    duration: 45,
    difficulty: "Difícil",
    xp: 120,
    icon: "Utensils",
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
    id: 17,
    title: "Siesta revitalizante o escaneo corporal",
    category: "calma",
    duration: 20,
    difficulty: "Fácil",
    xp: 50,
    icon: "Moon",
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
    id: 18,
    title: "Bailar o moverte con tu ritmo interno",
    category: "movimiento",
    duration: 15,
    difficulty: "Fácil",
    xp: 60,
    icon: "Music",
    summary: "Mueve el cuerpo libremente para soltar tensiones sin seguir ninguna coreografía de video.",
    instructions: [
      "Ponte ropa cómoda y despeja un espacio en tu sala o cuarto.",
      "Mueve las articulaciones, salta suavemente o sacude las extremidades.",
      "Deja que el cuerpo libere la rigidez acumulada por estar sentado.",
      "Termina con 3 respiraciones profundas con una mano en el pecho."
    ],
    benefit: "Despeja la energía estancada y dispara neurotransmisores de bienestar."
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
