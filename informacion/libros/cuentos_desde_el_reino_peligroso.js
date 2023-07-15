let cuentos_desde_el_reino_peligroso = {
    nombre: 'Cuentos',
    nombre_objeto: 'cuentos_desde_el_reino_peligroso',
    introducción: "Cuentos desde el Reino Peligroso es un libro que recopila cinco relatos de fantasía y aventuras escritos por J.R.R. Tolkien. En él podemos encontrar historias como las de “Roverandom”, “Egidio, el granjero de Ham”, “Las aventuras de Tom Bombadil y otros poemas del Libro Rojo”, “El herrero de Wootton Mayor” y “Hoja de Niggle”."+
    "<br>Además de estos relatos también se nos presentan ilustraciones del reconocido artista Alan Lee, quien también aporta un epílogo."+
    "<br>Dentro de este libro también se incluye una introducción por parte de Tom Shippey, un experto en Tolkien y sus libros, y el ensayo “Sobre los cuentos de hadas”, escrito por el mismo Tolkien, que nos ofrece un vistazo a la increíble imaginación del famoso escritor.",
    cards: [
        {
            nombre_objeto: 'roverandom',
            titulo: 'Roverandom',
            image: 'images/cuentos_Roverandom_card.jpg',
            tipo: 8
        },
        {
            nombre_objeto: 'egidio_el_granjero_de_ham',
            titulo: 'Egidio, el granjero de Ham',
            image: 'images/cuentos_Egidio_el_granjero_de_Ham_card.jpg',
            tipo: 8
        },
        {
            nombre_objeto: 'el_herrero_de_wootton_mayor',
            titulo: 'El herrero de Wootton Mayor',
            image: 'images/cuentos_El_herrero_de_Wootton_Mayor_card.jpg',
            tipo: 8
        },
        {
            nombre_objeto: 'las_aventuras_de_tom_bombadil_y_otros_poemas_de_el_libro_rojo',
            titulo: 'Las aventuras de Tom Bombadil y otros poemas de El Libro Rojo',
            image: 'images/cuentos_Las_aventuras_de_Tom_Bombadil_card.jpg',
            tipo: 8
        },
        {
            nombre_objeto: 'hoja_de_niggle',
            titulo: 'Hoja de Niggle',
            image: 'images/cuentos_Hoja_Niggle_card.jpg',
            tipo: 8
        }
    ],

}

let roverandom = {
    nombre: 'Roverandom',
    ficha: {},
    image: 'images/libros/roverandom.jpg',
    indice: ['Argumento', 'Curiosidades'],
    introducción:[
        'Roverandom es uno de los cinco cuentos que se encuentran dentro del libro Cuentos desde el Reino Peligroso escrito por J.R.R. Tolkien. Este cuento fue pensado en un principio como una historia que Tolkien le contó a sus hijos durante unas vacaciones, pero que más tarde decidió publicar.'
    ],
    información:{
        'Argumento': [
            'Esta singular historia se centra en un pequeño perrito llamado Rover, que, luego de morder a un hechicero llamado Artajerjes, es convertido por éste en un juguete.',
            'Luego pasa a manos de un niño quien lo pierde en la playa, donde Rover se encuentra con un extraño hechicero de la arena llamado Psámatos. Este hechicero lo hará vivir emocionantes aventuras tanto en la Luna como en el fondo del mar, lugares a donde es llevado por una gaviota, a los ojos del pequeño Rover gigantesca, llamada Mew, y por una ballena llamada Uin.',
            'A lo largo de la historia se encontrará con otros dos perros también llamados Rover, uno de ellos en la Luna y otro en las profundidades marinas, con quienes correrá peligrosas aventuras como escapar del Gran Dragón Blanco de la Luna o de la Antigua Serpiente Marina.',
            'También se topará con curiosos personajes como por ejemplo el Hombre de la Luna o los habitantes del fondo del mar, entre ellos la sirena que resulta ser la esposa de Artajerjes. Tras todas estas aventuras, finalmete logrará convencer a Artajerjes de que lo convierta de nuevo en un perro normal y volverá con el niño que lo había perdido en la playa.'
        ],
        'Curiosidades': [
            'En una ocasión mientras Roverandom es llevado por la ballena Uin a través del océano logra divisar a lo lejos "la tierra de los elfos", lo que sin duda hace referencia a la Tierras Imperecederas.'
        ]
    },
}

let egidio_el_granjero_de_ham = {
    nombre: 'Egidio, el granjero de Ham',
    ficha: {},
    image: 'images/libros/egidio_el_granjero_de_ham.jpg',
    indice: ['Argumento'],
    introducción:['Egidio, el granjero de Ham es un cuento escrito por J.R.R. Tolkien que se encuentra dentro del libro "Cuentos desde el Reino Peligroso".'],
    información:{
        'Argumento': [
            'Aegidius Ahenobarbus Julius Agricola de Hammo, o Egidio de Ham como se lo conoce comúnmente, es un granjero que vive tranquilamente con su mujer Águeda y su perro Garm en el pequeño pero orgulloso pueblo de Ham, hasta que un día un gigante, algo sordo y corto de vista, entra en su granja y sin darse cuenta comienza a hacer destrozos e incluso aplasta a una de las vacas de Egidio. Este, advertido por su perro, decide enfrentarse al gigante armado con su trabuco. Cuando el gigante recibe el disparo de Egidio cree que se trata de un enorme insecto que lo ha picado y decide marcharse del lugar. Entonces Egidio se convierte en una persona importante para la gente del lugar y los rumores llegan a los oídos del rey, quien le entrega una antigua espada como recompensa, la cual resulta ser la espada Caudimordax, que perteneció a un antiguo exterminador de dragones.',
            'Un día se aparece por el pueblo un terrible dragón llamado Crisófilax, y el rey le encomienda a Egidio la misión de eliminarlo. Egidio se enfrenta al dragón y logra herirlo con su espada, entonces este le ofrece entregarle sus riquezas a cambio de que le perdone la vida y Egidio acepta el trato.',
            'El dragón se marcha para ir a buscar su tesoro pero no regresa. Al notar el engaño, Egidio, con un grupo de caballeros del rey, va en busca del dragón para que entregue su tesoro. Una vez allí el dragón logra matar a algunos caballeros y ahuyentar al resto, pero Egidio se queda y lo vence una vez más. Entonces el dragón cumple con su parte del trato y le da a Egidio la mayor parte de su tesoro, desde ese momento Egidio se convierte en el nuevo rey de Ham.'
        ]
    },
}

let el_herrero_de_wootton_mayor = {
    nombre: 'El herrero de Wootton Mayor',
    ficha: {},
    image: 'images/libros/el_herrero_de_wootton_mayor.jpg',
    indice: ['Argumento'],
    introducción:['El herrero de Wootton Mayor es el último libro escrito por J.R.R. Tolkien, y uno de los cinco cuentos que se encuentra dentro del libro Cuentos desde el Reino Peligroso.',
                'En este cuento podemos ver reflejados algunos sentimientos del autor, ya que uno de los temas principales en la historia es que nada dura para siempre y que cada uno debe dejar su legado a las generaciones venideras, tal como estaba ocurriendo con Tolkien en ese momento, en el que veía próxima la hora de su muerte y se daba cuenta de que sus hijos serían los que heredarían sus libros y cuentos. Uno de los sentimientos predominantes en la historia es la melancolía, la cual es más notable al final de la obra, cuando el protagonista debe afrontar que sus días de aventuras han llegado a su fin.'],
    información:{
        'Argumento': [
            'En el pueblo de Wootton Mayor se celebraba una gran fiesta cada veinticuatro años, en la cual solamente podían participar veinticuatro niños elegidos al azar, esta era la llamada Fiesta de los Veinticuatro, en la cual el Maestro Cocinero del pueblo preparaba una Gran Tarta.',
            'Sucedió que un día el Maestro Cocinero se marcho de vacaciones por un largo tiempo, y al volver trajo consigo a un muchacho llamado Alf a quien acogió como su aprendiz. Los años pasaron y el Maestro Cocinero volvió a irse de vacaciones, pero esta vez anunció que no regresaría. El Maestro Cocinero esperaba que Alf ocupara su lugar, pero como la gente del pueblo aún lo consideraba demasiado joven, fue Nokes, un hombre que había ayudado al Maestro Cocinero en un par de ocasiones y que sabía cocinar bastante bien, a quien eligieron.',
            'Siete años después la Fiesta de los Veinticuatro estaba por suceder, y Nokes debía preparar la Gran Tarta, pero como él no era tan buen cocinero como Alf fue este quien la preparó. Dentro de la Tarta se solía esconder veinticuatro sorpresas, una para cada niño (aunque a veces algunos tenían más de una y otros ninguna), pero en esta ocasión Alf escondió una sorpresa más, una pequeña estrella de plata que según dijo era mágica y venía del País de Fantasía. Claro que Nokes no lo creyó, de hecho se burló de Alf por lo que decía, pero aún así aceptó que Alf escondiera la estrella en la Tarta. Cuando se llevó a cabo la Fiesta de los Veinticuatro todos los niños comieron sus porciones y muchos encontraron sorpresas en ellas, pero ninguno encontró la pequeña estrella de plata. Nokes creyó que la estrella tal ves no fuese de plata y se hubiese derretido y volvió a burlarse de Alf diciendo sarcásticamente que la estrella se había esfumado y vuelto al País de Fantasía. No obstante, la estrella realmente era de plata y también era mágica, lo que había sucedido es que uno de los niños se la había tragado sin darse cuenta.',
            'Pasó algo de tiempo y un día el niño que se había tragado la estrella comenzó a cantar con extrañas palabras de otro idioma que parecía saber de memoria, entonces la estrella cayó de su boca y el niño la recogió con la mano, sin pensarlo se golpeó en la frente con ella y allí quedo la estrella brillando en el centro, y la llevó durante muchos años.',
            'Al crecer, el niño se fue haciendo hábil en la herrería y no tardó en convertirse en el herrero de Wootton Mayor. Pero la herrería no sería lo único a lo que se dedicara, ya que gracias a la estrella puede viajar al País de Fantasía, en donde vive increíbles aventuras con los elfos que allí moran. Al pasar muchos años, cuando ya es un hombre adulto, casado y con dos hijos, mientras regresa de uno de sus viajes a Fantasía, se encuentra con un hombre en su camino que resulta ser Alf, quien a su vez también resulta ser el rey de Fantasía. Entonces Alf le dice que ya es hora de que renuncie a la estrella, pues debe guardarla como sorpresa en una nueva Gran Tarta, que él va a preparar ahora que es Maestro Cocinero, para que otro niño la encuentre y también pueda viajar a Fantasía. El herrero se siente perturbado y triste por tener que dejar la estrella y renunciar a sus viajes a Fantasía, pero es un hombre generoso y finalmente le entrega la estrella a Alf.'
            ]
    },
}

let las_aventuras_de_tom_bombadil_y_otros_poemas_de_el_libro_rojo = {
    nombre: 'Las aventuras de Tom Bombadil y otros poemas de El Libro Rojo',
    ficha: {},
    image: 'images/libros/las_aventuras_de_tom_bombadil_y_otros_poemas_de_el_libro_rojo.jpg',
    indice: ['Las aventuras de Tom Bombadil', 'El paseo en bote de Tom Bombadil', 'Errabundo', 'La Princesa Mee', 'El hombre de la Luna se acostó tarde', 'El hombre de la Luna descendió con premura', 'El troll de piedra', 'Perry Guiños', 'Maulladores', 'Olifantes', 'Fastitocalón', 'Gato', 'La novia-sombra', 'El tesoro', 'La campana del mar', 'El último navío'],
    introducción:['Las aventuras de Tom Bombadil y otros poemas del Libro Rojo, es un conjunto de poemas sobre la Tierra Media, escrito por J.R.R. Tolkien, que se encuentran dentro del libro “Cuentos desde el Reino Peligroso”. Si bien se lo conoce simplemente como Las aventuras de Tom Bombadil, solamente dos de los poemas que se incluyen en este libro tratan sobre ese personaje, el resto de los versos son cuentos de hadas o parte del bestiario de la Tierra Media escrito a modo de poema.'] ,
    información:{
        'Las aventuras de Tom Bombadil': ['Este poema, que comienza con una descripción de Tom Bombadil al igual que se nos presenta al personaje en El Señor de los Anillos, cuenta cómo Tom Bombadil conoció a Baya de Oro, y de sus constantes encuentros con personajes como El Viejo Hombre Sauce o los Tumularios, a quienes siempre derrota con el poder de su voz.'] ,
        'El paseo en bote de Tom Bombadil': ['En este poema se relata uno de los tantos paseos de Tom Bombadil por del río Tornasauce mientras se va encontrando con animales del bosque que mantienen conversaciones con él a través de su viaje, que más tarde desemboca en el río Brandivino, por donde seguirá hasta llegar a la casa del granjero Maggot.'],
        'Errabundo': ['Trata sobre un viajero que tiene la misión de entregar un mensaje, pero que por las aventuras que corre en su viaje olvida su misión y se marcha errando por el mundo. El poema se centra en describir los elementos que utiliza para forjar sus armas y armadura y relata como el viajero enfrentó elfos, moscas-dragón, avispones, abejas y zumbacuernos y los venció a todos. Finalmente, cuando ya ha vencido a todos sus enemigos, recuerda su misión y se marcha a entregar el mensaje.'] ,
        'La Princesa Mee': ['El poema comienza describiendo la vestimenta de la princesa élfica, mientras ella danza en un lago. Al ver su propio reflejo en el lago, la princesa Mee cree que se trata de otra princesa que está invertida, la princesa Shee. Lo interesante de este poema es como los versos que describen a la princesa Mee y los que describen a la princesa Shee son los mismos solo que invertidos entre si.'] ,
        'El hombre de la Luna se acostó tarde': ['Este poema es el que canta Frodo mientras se está hospedando en El Poney Pisador, se trata sobre una posada, con un gato borracho que toca el violín, un alegre perro que se ríe de cualquier broma y una vaca que se enloquece con la música y baila en la hierba, a la que una noche bajó el Hombre de la Luna a tomar cerveza.'],
        'El hombre de la Luna descendió con premura': ['En este poema el hombre de la Luna, aburrido del color blanco de la Luna decide bajar a la Tierra para poder disfrutar de la comida, el fuego y de los cantos de los hombres, pero al llegar solo encuentra cenizas en lugar de fuego, los ronquidos de la gente durmiendo en lugar de cantos y una sopa glacial de hace dos días en vez de los manjares que se esperaba.'],
        'El troll de piedra': ['Este poema es el que recita Sam cuando los cuatro hobbits y Aragorn se encuentran con los tres trolls convertidos en piedra en el bosque de los trolls. Cuenta sobre un troll que estaba sentado comiendo un hueso cuando de pronto se apareció por allí un personaje llamado Tom. Este se percata de que el hueso que el troll está mascando es el de su tío ya muerto hace mucho y decide patear al troll, pero la piel de un troll es tan dura como la piedra y es más el daño que se hace Tom en su pierna, desde entonces Tom anda siempre cojeando mientras que el viejo troll sigue mascando su hueso.'],
        'Perry Guiños':['Se trata sobre un troll solitario pero bueno, que no come carne y que prepara deliciosos guisos, y que quiere hallar un amigo, pero que todos al verlo sale huyendo. Finalmente logra hacerse amigo de un hobbit llamado Perry Guiños con quien comparte su cena. Luego de eso el troll se hace famoso por la comida que prepara.'],
        'Maulladores':['Los maulladores son peligrosas criaturas muy similares a los tumularios, que viven en ciénagas y que se alimentan de los desafortunados aventureros que vagan por sus tierras.'],
        'Olifantes':['Es el poema que Sam recita al ver un Olifante en Ithilien, no es mucho más que la descripción de un olifante en primera persona.'],
        'Fastitocalón':['Se narra la trágica historia de unos marinos que, al ver a la criatura sobre el mar, creyeron que se trataba de una isla e inmediatamente atracaron sobre ella. Al desembarcar comenzaron a instalarse y a encender pequeñas hogueras, pero entonces la criatura, alarmada, se sumergió rápidamente en las profundidades, ahogando así a todos los marineros.'],
        'Gato': ['Este poema se centra en la comparación de un gato con los grandes depredadores de la selva y la sabana que también son felinos como el tigre, el león o el leopardo'],
        'La novia-sombra': ['Trata sobre un hombre que vivía inmóvil como una estatua sin proyectar sombra. Pero un día en el que una dama vestida de gris llegó, su hechizo se rompió y él se liberó. Al instante la abrazó y sus sombras se fundieron en una sola. Desde entonces una vez al año ellos regresan y danzan arrojando una sola sombra.'],
        'El tesoro': ['Este poema se centra en la obsesión por un tesoro que llevó a la ruina a reyes, élficos y enanos, dragones y a poderosos guerreros que sucumbieron por culpa de la codicia y la locura que el tesoro generaba en su mente.'],
        'La campana del mar': ['En este poema el protagonista, en primera persona, encuentra una ostra mientras camina por la playa. Al acercarse la ostra al oído escucha el sonido de puertos lejanos. De pronto descubre un bote en el que se embarca hacia tierras lejanas. Una vez allí oye el sonido de música y voces a lo lejos, pero al acercarse al lugar todos huyen de él. Entonces trepa una elevación y se autoproclama el señor de esas tierras. Luego de eso una oscura nube se acerca cegándolo al instante. El personaje huye tropezando por su ceguera hasta tumbarse bajo un árbol, en donde permanece un año y un día hasta que su ceguera se va. Entonces comienza de nuevo su huida hacia el mar, perseguido por la nube oscura. Finalmente llega a su bote y regresa a sus tierras, pero el paso del tiempo lo ha cambiado y al final del poema acaba caminando por las calles como un mendigo hablando consigo mismo.'],
        'El último navío': ['Trata sobre una mujer llamada Fíriel que, desde las costas, divisa cómo el último navío de los elfos se dirige hacia el mar. Ella les pregunta hacia donde van y ellos responden que van hacia el hogar de los elfos más allá de las tierras mortales, y la invitan a ir con ellos pues queda sitio en su barco. Pero cuando ella intenta acercarse sus pies se hunden en la arena y la nave se aleja. Desde el barco los elfos la escuchan lamentarse: “No puedo partir. Yo soy hija de la Tierra”. Finalmente Fíriel se queda en las tierras mortales y vuelve a su trabajo, a paso cansino.']
    },
}



