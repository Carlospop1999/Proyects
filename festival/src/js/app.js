document.addEventListener('DOMContentLoaded', function () {
    navegacionFija()
    crearGaleria()
    verEnlace()
    scrolNav()
})

function scrolNav() {
    const navLinks = document.querySelectorAll('.navegacion-principal a')

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)

            section.scrollIntoView({ behavior: 'smooth' })
        })
    })
}

function verEnlace() {
    document.addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.navegacion-principal a')

        let actual = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                actual = section.id
            }
        })

        navLinks.forEach(link => {
            link.classList.remove('active')
            if (link.getAttribute('href') === '#' + actual) {
                link.classList.add('active')
            }
        })
    })
}

function navegacionFija() {
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    document.addEventListener('scroll', function () {
        if (sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed')
        } else {
            header.classList.remove('fixed')
        }

    })
}

function crearGaleria() {
    const cantidadImagenes = 16;
    const galeria = document.querySelector('.galeria-imagenes')

    for (let i = 1; i <= cantidadImagenes; i++) {
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = 'GaleriaImagenes'

        //Event Handler
        imagen.onclick = function () {
            mostrarImagen(i)
            console.log('Se muestra', i)
        }

        galeria.appendChild(imagen)

    }
}

function mostrarImagen(i) {
    imagenActual = i; // Establecer la imagen actual

    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarModal;

    // Contenedor principal
    const modalContent = document.createElement('DIV');
    modalContent.classList.add('modal-content');
    modal.appendChild(modalContent);

    // Imagen
    const imagen = document.createElement('IMG');
    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = 'GaleriaImagenes';
    imagen.classList.add('imagenActual'); 
    modalContent.appendChild(imagen);

     // Botón izquierda
    const izquierdaModalbtn = document.createElement('BUTTON');
    izquierdaModalbtn.textContent = '⬅️';
    izquierdaModalbtn.classList.add('btn', 'btnIzquierda');
    izquierdaModalbtn.onclick = (e) => {
        e.stopPropagation();
        izquierdaModal(); // Llamar a la función de navegación a la izquierda
    };
    modalContent.appendChild(izquierdaModalbtn);

    // Botón derecha
    const derechaModalbtn = document.createElement('BUTTON');
    derechaModalbtn.textContent = '➡️';
    derechaModalbtn.classList.add('btn', 'btnDerecha');
    derechaModalbtn.onclick = (e) => {
        e.stopPropagation();
        derechaModal(); // Llamar a la función de navegación a la derecha
    };
    modalContent.appendChild(derechaModalbtn);

    // Botón cerrar
    const cerrarModalBtn = document.createElement('BUTTON');
    cerrarModalBtn.textContent = '❌';
    cerrarModalBtn.classList.add('btn', 'btnCerrar');
    cerrarModalBtn.onclick = (e) => {
        e.stopPropagation();
        cerrarModal();
    };
    modalContent.appendChild(cerrarModalBtn);

    // Agregar modal al DOM
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');
    body.appendChild(modal);

    // Remover la clase fixed del header
    const header = document.querySelector('.header');
    header.classList.remove('fixed');
}


function cerrarModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('fade-out');

    setTimeout(() => {
        modal?.remove();
        const body = document.querySelector('body');
        body.classList.remove('overflow-hidden');

        // Restaurar la clase 'fixed' al header
        const header = document.querySelector('.header');
        header.classList.add('fixed');
    }, 500); // Duración de la animación
}

function derechaModal() {
    imagenActual = (imagenActual % 16) + 1; // Incrementar y ciclar entre 1 y 16
    actualizarImagenModal();
}

function izquierdaModal() {
    imagenActual = (imagenActual - 2 + 16) % 16 + 1; // Decrementar y ciclar entre 1 y 16
    actualizarImagenModal();
}

function actualizarImagenModal() {
    const imagen = document.querySelector('.imagenActual');
    if (imagen) {
        imagen.src = `src/img/gallery/full/${imagenActual}.jpg`;
        imagen.alt = `GaleriaImagenes ${imagenActual}`;
    }
}

$(document).ready(function(){
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop:'0px'
		}, 350);
	});

	$(window).scroll(function(){
		if ($(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(350);

		} else {
			$('.ir-arriba').slideUp(350);

		}
	});
});