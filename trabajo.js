// Datos de las personas con imágenes
const peopleData = [
    { name: "Emiliano Montes", rating: 3, review: "Está buena pero no le di 5 estrellas porque no me dejó abrir el link para ver los productos.", src: "emiliano.jpg" },
    { name: "Miguel Del Toro", rating: 5, review: "Muy bueno, lo recomiendo 100%.",  src: "miguel.jpg" },
    { name: "Josué Castillo", rating: 5, review: "Excelente, le doy 5 estrellas, porque 10 no puedo.", src: "adann.jpg" },
    { name: "José Delgado", rating: 4, review: "Me encanta el diseño y la funcionalidad de este sitio.", src: "images.jpg" },
    { name: "David Rodríguez", rating: 5, review: "Totalmente recomendado, siempre brindan un servicio de calidad.", src: "mujer.jpg" },
    { name: "Laura Gómez", rating: 4, review: "Un excelente servicio al cliente, siempre atentos a mis necesidades.", src: "muj.jpg" },
    { name: "Carlos Pérez", rating: 3, review: "Me encantó todo, aunque la entrega fue un poco lenta.", src: "ma.jpg" },
    { name: "Ana Sánchez", rating: 5, review: "Todo estuvo perfecto, no tengo quejas.", src: "cas.jpg" },
];

// Generar las estrellas en función de la calificación
function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<span class="star">&#9733;</span>'; // Estrella llena
        } else {
            stars += '<span class="star star-empty">&#9733;</span>'; // Estrella vacía
        }
    }
    return stars;
}

// Rellenar los datos de las personas en el carrusel
const carousel = document.getElementById('carousel');
peopleData.forEach(person => {
    const personElement = document.createElement('div');
    personElement.classList.add('person');

    const stars = generateStars(person.rating);

    // Agregar imagen, nombre, reseña y estrellas
    personElement.innerHTML = `
        <img src="${person.src}" alt="${person.name}" class="person-img">
        <h3>${person.name}</h3>
        <p>${person.review}</p>
        <div class="stars">${stars}</div>
    `;

    carousel.appendChild(personElement);
});

// Variables para controlar el carrusel
let currentIndex = 0;
const peoplePerPage = 5; // Número de personas que se mostrarán por cada salto

// Función para mover el carrusel hacia la izquierda
function moveLeft() {
    if (currentIndex > 0) {
        currentIndex -= peoplePerPage;
    } else {
        currentIndex = peopleData.length - peoplePerPage;
    }
    updateCarouselPosition();
}

// Función para mover el carrusel hacia la derecha
function moveRight() {
    if (currentIndex < peopleData.length - peoplePerPage) {
        currentIndex += peoplePerPage;
    } else {
        currentIndex = 0;
    }
    updateCarouselPosition();
}

// Función para actualizar la posición del carrusel
function updateCarouselPosition() {
    const offset = -currentIndex * 280; // 280px es el ancho aproximado de cada persona (250px + márgenes)
    carousel.style.transform = `translateX(${offset}px)`;
}
