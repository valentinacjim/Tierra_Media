let ainur = {
    nombre: 'Ainur',
    nombre_objeto: 'ainur',
    introducción: "<p>Los Sagrados, (singular Ainu); fueron los primeros seres creados por Ilúvatar, vastagos de su pensamiento, hechos antes de Eä, no se conoce el número exacto de cuantos Ainur existieron. Luego de la creación de Arda, hubo algunos que se quedaron junto a Iluvatar, y otros que se fueron a Arda que estaban divididos en dos categorías: los Valar (de los que se sabe que fueron 15) que eran los más poderosos entre los Ainur y los Maiar que eran sirvientes y ayudantes (no se sabe cuantos hay).</p>"+
    "<p>Son espiritus inmortales, aparentemente con la capacidad de cambiar de forma, se sabe que son los seres más poderosos en todo Eä después de Ilúvatar.</p>"+
    "<p>Entre los Valar los 8 más poderosos son conocidos como Aratar.</p>" +
    "<p>Uno de los más poderosos, Morgoth, se convirtió en el enemigo corrompiendo a otros Ainur como Sauron y los Balrogs, destruyendo parte de la Tierra Media y provocando grandes batallas.</p>",
    cards: [
        {
            nombre_objeto: 'maiar',
            titulo: 'Maiar',
            image: 'images/maiar_card.jpg',
            tipo: 7
        },
        {
            nombre_objeto: 'valar',
            titulo: 'Valar',
            image: 'images/valar_card.jpg',
            tipo: 7
        }
    ],

}   

let maiar = {
    nombre: 'Maiar',
    nombre_objeto: 'maiar',
    introducción: "Los Maiar son seres espirituales, creados por Ilúvatar a partir de su pensamiento, que forman parte de la cosmogonía que creó Tolkien en la Ainulindalë. Los Maiar y los Valar son conocidos conjuntamente como Ainur, pero los Maiar son de menor rango que los Valar. Los Maiar, sirven a los poderosos Valar (que son catorce) y les asisten en su tarea de dar forma al mundo."+
    "<br> Los Maiar que descendieron a la Tierra Media eran muchos y muy numerosos, muchos más en numero que los Valar. El grupo de los Maiar está constituido por tanto, por aquellos Ainur de menor rango que descendieron a Arda junto a los Valar, para servirles y ayudarles a acabar de dar forma al mundo."+
    "<br> Como los Valar, los Maiar tenían el poder de adoptar una forma corpórea."+
    "<br> Algunos, como Gandalf y Saruman, viajaron a la Tierra Media para ayudar a enfrentar la amenaza de Sauron y fueron tomados por Magos durante la Tercera Edad del Sol (en este caso, estaban imposibilitados para cambiar de forma física hasta acabar su misión). Melkor corrompió a muchos Maiar, entre ellos al propio Sauron y a los seres conocidos como Balrogs o Valaraukar."+
    "<br> Dentro de los Maiar existían jerarquías de poder. Se dice en el Silmarilion que Sauron era el más poderoso de ellos, junto a Eönwe, el heraldo de Manwë. Otros Maiar de igual jerarquía fueron Melian, a la que Sauron temía y consideraba como una igual, Ossë, su esposa Uinen y Arien entre otros. Gandalf, Saruman, Radagast, los Magos Azules, los Balrogs y los Dragones eran tambien Maiar pero de menor jerarquía y poder, y estaban por debajo de Sauron y los otros maiar poderosos.",
    cards: [
        {
            nombre_objeto: 'istari',
            titulo: 'Istari',
            image: 'images/istari_card.jpg',
            tipo: 7
        },
        {
            nombre_objeto: 'balrogs',
            titulo: 'Balrogs',
            image: 'images/balrogs_card.jpg',
            tipo: 7
        },
        {
            nombre_objeto: 'arien',
            titulo: 'Arien',
            image: 'images/arien_card.jpg',
            tipo: 8
        },
        {
            nombre_objeto: 'eonwe',
            titulo: 'Eönwë',
            image: 'images/eonwe_card.jpg',
            tipo: 8
        },
        {
            nombre_objeto: 'halbrand',
            titulo: 'Halbrand',
            image: 'images/halbrand_card.jpg',
            tipo: 8
        },
        {
            nombre_objeto: 'ilmarë',
            titulo: 'Ilmarë',
            image: 'images/ilmare_card.jpg',
            tipo: 8
        },
        {
            nombre_objeto: 'licantropos',
            titulo: 'Licántropos',
            image: 'images/licantropos_card.jpg',
            tipo: 8
        },
        {
            nombre_objeto: 'luthien',
            titulo: 'Lúthien',
            image: 'images/luthien_card.jpg',
            tipo: 8
        },
        {
            nombre_objeto: 'melian',
            titulo: 'Melian',
            image: 'images/melian_card.jpg',
            tipo: 8
        },
        {
            nombre_objeto: 'osse',
            titulo: 'Ossë',
            image: 'images/osse_card.jpg',
            tipo: 8
        },
        {
            nombre_objeto: 'salmar',
            titulo: 'Salmar',
            image: 'images/salmar_card.jpg',
            tipo: 8
        },
        {
            nombre_objeto: 'sauron',
            titulo: 'Sauron',
            image: 'images/sauron_card.jpg',
            tipo: 8
        },
        {
            nombre_objeto: 'tilion',
            titulo: 'Tilion',
            image: 'images/tilion_card.jpg',
            tipo: 8
        },
        {
            nombre_objeto: 'uinen',
            titulo: 'Uinen',
            image: 'images/uinen_card.jpg',
            tipo: 8
        }
    ]
}

let istari = {
    nombre: 'Istari',
    nombre_objeto: 'istari',
    introducción: "Los Istari o Magos son un grupo de Maiar que fueron enviados a la Tierra Media con la misión de liberar a los Pueblos Libres de la sombra de Sauron. Tomaron forma humana, la de hombres de avanzada edad, con largas barbas, capas, botas y largos bastones."+
    "<br><br>" +
    '<p style = "font-size: 20px; font-weight: bold;" onclick="mostrarPagina(8, saruman, actual = istari)"> Saruman el Blanco </p>' +
    'El líder de la orden y del Concilio Blanco. Saruman era el más sabio y docto, por lo que se dedicó en cuerpo y alma a estudiar los poderes y métodos del enemigo, para así derrotarle. Hasta tal punto se obsesionó que finalmente se dejó seducir por el poder del Mal y quiso tomar el Anillo Único para sí. Muere en La Comarca a manos de su sirviente Grima Lengua de Serpiente.'+
    '<br><br>' +
    '<p style = "font-size: 20px; font-weight: bold;" onclick="mostrarPagina(8, gandalf, actual = istari)"> Gandalf el Gris </p>' +
    'Maia de Irmo, llamado de muchas maneras: Mithrandir por los elfos, Peregrino Gris (por andar siempre de un sitio a otro, sin un lugar fijo) por los hombres y Tharkûn por los enanos, es el más conocido de los Istari. Participante del Concilio Blanco, guio a los enanos hasta la gruta de Smaug para que recuperasen su tesoro y ayudó a expulsar al Nigromante del Bosque Negro. Además, formó parte de la Compañía del Anillo, siendo su líder hasta llegar a Moria, donde se enfrentó al Balrog, acabando con este en Zirak-zigil, pero muriendo y volviendo a la vida como Gandalf el Blanco. Tras esto participó en las batallas del Abismo de Helm y Minas Tirith, ayudando a los Hombres a derrotar a las fuerzas de Saruman y Sauron, quien fue totalmente derrotado. Al acabar la guerra y haber sido destruido el Anillo Único, parte hacia las Tierras Imperecederas junto a Elrond, Galadriel, Bilbo, y Frodo Bolsón.'+
    '<br><br>'+
    '<p style = "font-size: 20px; font-weight: bold;" onclick="mostrarPagina(8, radagast, actual = istari)"> Radagast el Pardo </p>'+
    'Mago que se sintió fascinado por la naturaleza y formas de vida de la Tierra Media. Aunque formó parte del Concilio Blanco, no acompañó a sus colegas a combatir al Nigromante en Dol Guldur, ni tuvo una participación activa en la Guerra del Anillo. Se asume que su obsesión por la naturaleza y la vida le hizo olvidar su misión. Su destino es desconocido.'+
    '<br><br>'+
    '<p style = "font-size: 20px; font-weight: bold;" onclick="mostrarPagina(8, magos_azules, actual = istari)"> Los Magos Azules</p> '+
    'Los Magos Azules, Alatar y Pallando, fueron enviados a la Tierra Media con la misma misión que el resto de los Istari, pero se desconoce su destino. Se sabe que viajaron al Este, y que no participaron en la Guerra del Anillo. Se cree que fueron seducidos por el poder de Sauron y que se convirtieron en sus aliados, pero no hay nada confirmado.',
    cards: [],

}

let balrogs = {
    nombre: 'Balrogs',
    nombre_objeto: 'balrogs',
    introducción: "Los Balrogs forma Sindarin que corresponde al Quenya Valaraukar «Demonios del Poder», fueron Maiar corrompidos por Melkor, siendo sus más poderosos seguidores después de Sauron."+
    "<br><br>" +
    "<h2> Descripción </h2>" +
    "Eran espíritus con corazones de fuego, pero un manto de tinieblas los cubrían y el terror iba delante de ellos. Usaban látigos de llama y solo respondían ante su señor, Melkor"+
    "<br>" +
    "Inducían terror a sus enemigos y aliados por igual, y la sola mención de ellos provocaba miedo a los más valientes guerreros. Eran colosalmente poderosos y solo los dragones podían hacerles frente."+
    "<br><br>" +
    "<h2> Historia </h2>" +
    "Originalmente Maiar de fuego, fueron seducidos por Melkor, quien los corrompió tras la Creación de Arda. En las edades de las Estrellas los Valar capturaron a Melkor destruyendo Utumno y Angband, haciendo huir a los Balrogs. Cuando su amo volvió con el nombre de Morgoth, fue atacado por Ungoliat, un ser arácnido gigante, y fue rescatado por los Balrogs."+
    "<br>" +
    "Los Balrogs lucharon con frecuencia en las Guerras de Beleriand, pero la mayoría fueron destruidos en la Gran Batalla. Los pocos que sobrevivieron se escondieron en profundos lugares subterráneos, pero en el año 1980 de la Tercera Edad los Enanos descubrieron uno en el nacimiento de una veta de mithril en Khazad-dûm. Este fue conocido con los sobrenombres de el Daño de Durin y el Terror, el cual mató a dos reyes del Pueblo de Durin en dos años, haciendo que los Enanos abandonaran Moria. Este fue destruido por Gandalf el Gris en 3019 de la Tercera Edad en la cima de Zirak-zigil.",


    cards: [
        {
            nombre_objeto: 'gothmog',
            nombre: 'Gothmog',
            image: "images/gothmog_card.jpg",
            tipo: 8,
        },
        {
            nombre_objeto: 'daño_durin',
            nombre: 'Daño de Durin',
            image: "images/daño_durin_card.jpg",
            tipo: 8,
        },
        {
            nombre_objeto: 'lungorthin',
            nombre: 'Lungorthin',
            image: "images/lungorthin_card.jpg",
            tipo: 8,
        },
        {
            nombre_objeto: 'regonorth', 
            nombre: 'Regonorth',
            image: "images/regonorth_card.jpg",
            tipo: 8,
        }

    ]
}

