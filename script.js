const boton = document.getElementById("boton");
const sorpresa = document.getElementById("sorpresa");

boton.addEventListener("click", () => {

    sorpresa.textContent =
        "Que nunca te falten motivos para sonreír 💛🌻";

    crearPetalos();

    boton.textContent = "🌻 ¡Te regalo estas flores!  🌻";
});


function crearPetalos() {

    for (let i = 0; i < 25; i++) {

        const petalo = document.createElement("div");

        petalo.textContent = "🌼";

        petalo.style.position = "fixed";
        petalo.style.left = Math.random() * 100 + "vw";
        petalo.style.top = "-50px";
        petalo.style.fontSize =
            (20 + Math.random() * 25) + "px";

        petalo.style.zIndex = "10";

        petalo.style.animation =
            `caer ${3 + Math.random() * 3}s linear forwards`;

        document.body.appendChild(petalo);

        setTimeout(() => {
            petalo.remove();
        }, 6000);
    }
}


/* Crear animación de pétalos */

const estilo = document.createElement("style");

estilo.textContent = `

@keyframes caer {

    0% {
        transform:
            translateY(0)
            rotate(0deg);
        opacity: 1;
    }

    100% {
        transform:
            translateY(110vh)
            rotate(360deg);
        opacity: 0;
    }

}

`;

document.head.appendChild(estilo);