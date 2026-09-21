const boton = document.getElementById("boton");
const sorpresa = document.getElementById("sorpresa");

let activado = false;

boton.addEventListener("click", () => {

    sorpresa.textContent =
        "Que nunca te falten motivos para sonreír 💛🌻";

    boton.innerHTML =
        "💛 Estas flores son para ti 🌻";

    boton.disabled = true;

    boton.style.opacity = "0.9";

    crearPetalos();
    crearCorazones();

    if (!activado) {

        escribirMensaje(
            "Porque te mereces cosas bonitas y muchos motivos para sonreír ✨"
        );

        activado = true;
    }
});


/* =================================
        PÉTALOS / FLORES
================================= */

function crearPetalos() {

    for (let i = 0; i < 35; i++) {

        const petalo = document.createElement("div");

        const flores = [
            "🌼",
            "🌻",
            "💛"
        ];

        petalo.textContent =
            flores[Math.floor(Math.random() * flores.length)];

        petalo.style.position = "fixed";

        petalo.style.left =
            Math.random() * 100 + "vw";

        petalo.style.top = "-60px";

        petalo.style.fontSize =
            (18 + Math.random() * 28) + "px";

        petalo.style.zIndex = "100";

        petalo.style.pointerEvents = "none";

        petalo.style.animation =
            `caer ${3 + Math.random() * 4}s linear forwards`;

        petalo.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(petalo);

        setTimeout(() => {
            petalo.remove();
        }, 8000);
    }
}


/* =================================
        CORAZONES
================================= */

function crearCorazones() {

    for (let i = 0; i < 15; i++) {

        const corazon = document.createElement("div");

        corazon.textContent = "💛";

        corazon.style.position = "fixed";

        corazon.style.left =
            Math.random() * 100 + "vw";

        corazon.style.bottom = "-30px";

        corazon.style.fontSize =
            (18 + Math.random() * 20) + "px";

        corazon.style.zIndex = "101";

        corazon.style.pointerEvents = "none";

        corazon.style.animation =
            `corazon ${4 + Math.random() * 3}s ease-out forwards`;

        corazon.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 8000);
    }
}


/* =================================
        TEXTO ANIMADO
================================= */

function escribirMensaje(texto) {

    const firma = document.querySelector(".firma");

    let indice = 0;

    const mensajeAnimado = document.createElement("div");

    mensajeAnimado.style.marginTop = "12px";
    mensajeAnimado.style.color = "#a66a00";
    mensajeAnimado.style.fontSize = "17px";
    mensajeAnimado.style.fontStyle = "italic";

    sorpresa.insertAdjacentElement(
        "afterend",
        mensajeAnimado
    );

    const intervalo = setInterval(() => {

        mensajeAnimado.textContent =
            texto.substring(0, indice);

        indice++;

        if (indice > texto.length) {

            clearInterval(intervalo);
        }

    }, 35);
}


/* =================================
        ANIMACIÓN DINÁMICA
================================= */

const estilo = document.createElement("style");

estilo.textContent = `
    
@keyframes caer {

    0% {
        transform:
            translateY(-10vh)
            rotate(0deg);

        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    100% {
        transform:
            translateY(115vh)
            rotate(720deg);

        opacity: 0;
    }
}

`;

document.head.appendChild(estilo);