// =====================================================================
//  AQUÍ EDITAS TODO. No necesitas tocar index.html.
// =====================================================================

const CONFIG = {
  nombre: "mi corazón de yuyu",   // Arriba aparece: "Para mi corazón de yuyu"
  de: "con amor, Mishe",          // Debajo: "Un regalo cada día, con amor, Mishe"

  // Su cumpleaños (AÑO-MES-DÍA). Es el día 1.
  fechaInicio: "2026-12-07",

  // 25 = del 7 al 31 de diciembre, los dos incluidos.
  totalDias: 25,

  // Para ver todo desbloqueado: abre la página con ?preview=yuyu
  // o simula un día con ?preview=yuyu&dia=10
  clavePreview: "yuyu",

  // Contraseña para entrar al calendario (no importan mayúsculas, tildes ni espacios).
  // Déjala en "" para quitarla. Solo se pide una vez en cada celular.
  contrasena: "coqueta",
  pistaContrasena: "La contraseña es la canción que siempre me recuerda a usted",

  // Tus dibujos (carpeta "img"). Déjalo en "" para no mostrar alguno.
  imagenPersonaje: "img/personaje.png",  // aparece junto al regalo del día
  imagenMoto: "img/moto.png",            // avanza por la barra conforme pasan los días

  mensajeFinal: "Fueron 25 días de regalitos, pero lo sigo pensando todos los días. Feliz año nuevo, mi corazón. 💖",

  // Si un día no tiene regalo, sale una de estas frases.
  frasesDeRespaldo: [
    "Hoy también estoy pensando en usted. ❤️",
    "La distancia es solo un número cuando alguien importa tanto.",
    "Contando los días para abrazarlo.",
  ],
};

// =====================================================================
//  LOS REGALOS
//  Usa "dia" (1 = 7 de diciembre ... 25 = 31 de diciembre).
//  Tipos: carta, frase, recuerdo, cancion, cupon, video, sorpresa
//  Campos opcionales: titulo, texto, foto, enlace, youtube, textoBoton
// =====================================================================

// Texto que llevan todos los cupones
const VALIDEZ = "Válido para cuando lo necesite.\nTiempo de caducidad: nunca ❤️";

const REGALOS = [
  // Día 1 · 7 dic
  {
    dia: 1,
    tipo: "carta",
    juego: "sobre",
    titulo: "¡Feliz cumpleaños, Yuyu! 🎂",
    texto: "Feliz cumpleaños Yuyu de mi vidaaaaa, espero que la pase muy bonito, que tenga un día increíble y un lindo cumpleaños 🫶🏻 espero que sea muy feliz, que disfrute cada momento, siga creando recuerdos bonitos. Usted es una persona extraordinaria y jamás, de verdad jamasssss me cansaré de decirle que lo admiro demasiadoooo, no solo por su fortaleza, su madurez o su inteligencia, lo admiro por el gran corazón que tiene, por la linda persona que es, por siempre preocuparse por lo demás (pero porfa también póngase como prioridad a usted mismo, piense y preocupese también por usted, no se olvide que es valioso y hay que cuidar eso), tiene un corazón lleno de bondad y amor, que a dónde quiera que vaya va a irradiar luz, tiene un aura muy bonita, y todo lo que hace, lo hace con el corazón, amo su personalidad, su manera de ser, su alma, su corazón, su mentalidad, su compañía, su risa, amo ver cuando rie, amo ver sus ojitos, y me pone muy feliz que usted esté feliz, gracias por crear bonitos recuerdos conmigo, por estar pendiente de mi y por hacerme sentir amada, porfa porfa porfa nunca olvide lo valioso que es, no deje que nadie le dañe su corazoncito. Siga brillando, siga cuidandose y sea muy feliz, que cumpla con todos los sueños que tiene y todas las metas que se proponga, no se deje vencer por las cosas malas que le puedan ocurrir, más bien tomelas como motivación para seguir haciendo las cosas bien, siga aprendiendo y siga creciendo, espero que cuando cosas bonitas lleguen a su vida, que sepa que cada una de esas cosas se las merece, le mando muchos besitos, un abrazo fuerte y otro más de pingüino, feliz cumpleaños mi corazón de yuyu, que Diosito me lo bendiga y me lo cuide, hoy, mañana y siempre 🥺❤️\n\nSu Mishe lo admira, se siente orgullosa y lo ama como no tiene ni la menor idea, siempre será el hombre al que más amé y con el que más disfruto pasar mi vida ❤️ pase lo que pase mis sentimientos hacia usted siempre serán positivos, y en mi mente y en mi corazón siempre lo recordaré con amor.",
  },

  // Día 2 · 8 dic
  {
    dia: 2,
    tipo: "cancion",
    titulo: "Un mixtape para usted 🎶",
    texto: "Unas canciones para que las escuche pensando en mí.",
    enlace: "https://mewtru.com/mixtape/playback?v=nNUiVCKu_9Y%2CrYwXfmgNSVI%2CmskcCXoMFtQ%2C_YKWaS3HUAc%2CW-Nwn8wgb0o&to=Yuyu",
    textoBoton: "Escuchar el mixtape 🎧",
  },

  { dia: 3,  tipo: "cupon", titulo: "¡Atrape al pingüino! 🐧", juego: "pinguino", atrapar: 10,
    cupon: "Cupón para: besitos y abracitos de pingüino 🐧", texto: VALIDEZ },   // 9 dic
  { dia: 4,  tipo: "frase", titulo: "La moto de Yuyu 🏍️", juego: "moto", corazones: 12, texto: "Le quedo bien lindo el detalle de aparecer en mi vida" },   // 10 dic
  { dia: 5,  tipo: "cupon", titulo: "Cupón para: cocinarle lo que quiera 🍳", texto: VALIDEZ },   // 11 dic
  { dia: 6,  tipo: "frase", texto: "Amarlo por toda la vida me sigue pareciendo poco", foto: "fotos/besito.jpg" },   // 12 dic
  { dia: 7,  tipo: "cupon", titulo: "Cupón para: comer un helado 🍦", texto: VALIDEZ },   // 13 dic
  { dia: 8,  tipo: "frase", titulo: "Juego de memoria 🃏", juego: "memoria",
    cartas: ["fotos/besito.jpg", "fotos/cielo.jpg", "img/personaje.png", "img/moto.png", "⚽", "🐧"],
    texto: "Que bonito que llegó a mi vida, que bonito quererlo, que bonita su forma de ser, que bonita su forma de hablar, en fin que bonito usted", foto: "fotos/carro.jpg" },   // 14 dic
  { dia: 9,  tipo: "cupon", titulo: "Cupón para: ir al cine 🍿", texto: VALIDEZ },   // 15 dic
  {
    dia: 10,
    tipo: "juego",
    titulo: "¡Hora del partido! ⚽",
    juego: "penales",
    goles: 3,
    pregunta: "A quien cree que prefiero… ¿Messi o Cristiano?",
    opciones: ["Messi 🐐", "Cristiano 🐐"],
    respuesta: "Nones camarones, lo prefiero a usted ❤️",
    video: "videos/usted.mp4",
    textoFinal: "No hay nada más bonito que verlo ser feliz, disfrutando de aquello que tanto le gusta",
  },   // 16 dic
  { dia: 11, tipo: "cupon", titulo: "Cupón para: ver el atardecer juntos 🌅", texto: VALIDEZ },   // 17 dic
  { dia: 12, tipo: "frase", titulo: "Arme el rompecabezas 🧩", juego: "rompecabezas", piezas: 3, texto: "Es el hombre más importante en mi vida, lo amo y probablemente lo ameré siempre", foto: "fotos/espejo.jpg" },   // 18 dic
  { dia: 13, tipo: "cupon", titulo: "Cupón para: masajitos 💆‍♂️", texto: VALIDEZ },   // 19 dic
  { dia: 14, tipo: "frase", titulo: "El laberinto 🌀", juego: "laberinto", tamano: 7, texto: "Que nunca se apague su brillo y su bondad", foto: "fotos/mirador.jpg" },   // 20 dic
  { dia: 15, tipo: "cupon", titulo: "Cupón para: un día en el que le digo que sí a todo lo que me diga 😌", texto: VALIDEZ },   // 21 dic
  { dia: 16, tipo: "frase", titulo: "¿Dónde está Yuyu? 🔎", juego: "encuentra",
    buscar: { x: 26.8, y: 58, rx: 9, ry: 12 },   // dónde está él en la foto (en % de ancho y alto)
    texto: "Lo amo tanto, amo nuestra amistad y cada parte de usted, amo su rostro, su forma de ser, amo cuando se emociona y amo verlo sonreír", foto: "fotos/reunion.jpg" },   // 22 dic
  { dia: 17, tipo: "cupon", titulo: "Cupón para: salir a comer donde quiera 🍽️", texto: VALIDEZ },   // 23 dic
  { dia: 18, tipo: "frase", texto: "Gracias por todo lo bonito que me hizo sentir, por haber sido ese lugar donde durante tanto tiempo me sentí querida", foto: "fotos/avestruces.jpg" },   // 24 dic
  { dia: 19, tipo: "frase", titulo: "Feliz Navidad 🎄", juego: "arbolito", adornos: 8,
    texto: "Que Diosito y la Virgencita lo acompañe todos los días",
    textoExtra: "Mi querido Yuyu, deseo que esta navidad este lleno de momentos bonitos, que nunca le falten motivos para sonreir, sueños por cumplir y personas que hagan más especiales sus días\n\nQue Diosito lo bendiga siempre y le permita vivir muchas navidades más llenas de felicidad, recuerde que aquí hay alguien que lo piensa, que reza por usted, que lo acompaña de corazón y que lo quiere con toda el alma. Le mando un abrazo gigante\n\n¡Feliz Navidad, mi corazón de yuyu! 🎄❤️" },   // 25 dic
  { dia: 20, tipo: "cupon", titulo: "¡Ahora usted es el arquero! 🧤", juego: "arquero", atajadas: 5,
    cupon: "Cupón para: un abrazote en un mal día 🫂", texto: VALIDEZ },   // 26 dic
  { dia: 21, tipo: "frase", texto: "Lo amo más allá de su vida, de la mía y del tiempo, porque poca es la eternidad para adorarlo", foto: "fotos/luna.jpg" },   // 27 dic
  { dia: 22, tipo: "cupon", titulo: "Cupón para: escaparnos a donde usted quiera 🗺️", texto: VALIDEZ },   // 28 dic
  { dia: 23, tipo: "frase", titulo: "Ordene la frase 🔀", juego: "ordenar", texto: "¿Que hasta donde lo quiero? hasta donde sus ojos no ven" },   // 29 dic
  { dia: 24, tipo: "cupon", titulo: "Cupón para: vernos ❤️", texto: VALIDEZ },   // 30 dic
  { dia: 25, tipo: "frase", titulo: "¡Feliz fin de año, mi Shavi! 🎆", 
    cuentaRegresiva: "2027-01-01T00:00:00",
    texto: "Y así llega el final de un año más, espero que, al mirar atrás, pueda sentirse orgulloso de todo lo que ha logrado, de cada experiencia vivida y de todo lo que ha superado. Que el nuevo año le traiga nuevos retos, grandes satisfacciones y muchas razones para seguir disfrutando de la vida\n\nLe deseo que cada proyecto que tenga en mente se haga realidad y que nunca pierda esa pasión y entusiasmo que lo caracterizan. Gracias por todo lo que vivimos, para mí significan mucho y me llevo recuerdos muy bonitos, que se quedan marcados en mi mente y en mi corazón ❤️\n\nQuiero que sepa que le tengo un cariño muy especial y que, de alguna manera, ha sido bonito coincidir con usted. Hay personas que, sin imaginarlo, llegan a significar muchoooo más de lo que creen y usted es una de ellas. Me quedo con la alegría de haber podido verlo, admirarlo y crear tantos recuerdos especiales, logró hacer mis días más felices y bonitos 🫶🏻" },   // 31 dic
];

// =====================================================================
//  GUARDADOS: no caben en los 25 días y NO se muestran.
//  Si quieres usar alguno, cámbialo por otro de arriba (mismo "dia").
// =====================================================================
//  { tipo: "cupon", titulo: "Cupón para: comer papitas 🍟", texto: VALIDEZ },
//  { tipo: "cupon", titulo: "Cupón para: ir al río 🏞️", texto: VALIDEZ },
//  { tipo: "cupon", titulo: "Cupón para: hacer ejercicio juntos 💪", texto: VALIDEZ },
//  { tipo: "cupon", titulo: "Cupón para: dormir juntitos 😴", texto: VALIDEZ },
//  { tipo: "carta", titulo: "¡Feliz Día del Hombre! 💙", texto: "Hoy es su día, y quiero recordarle lo orgulloso que debería sentirse de quien es.\nUn hombre noble, trabajador, con un corazón enorme y una bondad que se nota en todo lo que hace.\nGracias por ser como es. Que hoy lo traten bonito, como se lo merece 🫶🏻\nLo admiro y lo quiero muchísimo." },
