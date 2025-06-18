document.addEventListener("DOMContentLoaded", function () {
    gsap.set("nav", { y: -150 });

    const digit1 = document.querySelector(".digit-1");
    const digit2 = document.querySelector(".digit-2");
    const digit3 = document.querySelector(".digit-3");

    function splitTextIntoSpans(selector) {
        let element = document.querySelector(selector);
        if (element) {
            let text = element.innerText;
            let splitText = text
                .split("")
                .map((char) => `<span>${char}</span>`)
                .join("");
            element.innerHTML = splitText;
        }
    }

    splitTextIntoSpans(".header h1");

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 10; j++) {
            const div = document.createElement("div");
            div.className = "num";
            div.textContent = j;
            digit3.appendChild(div);
        }
    }

    const finalDigit = document.createElement("div");
    finalDigit.className = "num";
    finalDigit.textContent = "0";
    digit3.appendChild(finalDigit);

    // Función para obtener la altura actual de un número
    function getNumHeight(digitElement) {
        
        const numElement = digitElement.querySelector(".num");
        return numElement ? numElement.clientHeight : 0;
    }

    function animate(digit, duration, delay = 1) {
        // Recalcular numHeight justo antes de animar
        const numHeight = getNumHeight(digit);
        if (numHeight === 0) return; // Evitar divisiones por cero o animaciones erróneas si no se encuentra el elemento

        // Asegurarse de que el elemento esté en la posición inicial antes de animar
        gsap.set(digit, { y: 0 }); // Restablecer la posición inicial antes de animar

        const totalDistance =
            (digit.querySelectorAll(".num").length - 1) * numHeight;

        gsap.to(digit, {
            y: -totalDistance,
            duration: duration,
            delay: delay,
            ease: "power2.inOut",
        });
    }

    animate(digit3, 5);
    animate(digit2, 6);
    animate(digit1, 2, 5);

    gsap.to(".progress-bar", {
        width: "30%",
        duration: 2,
        ease: "power4.inOut",
        delay: 7,
    });

    gsap.to(".progress-bar", {
        width: "100%",
        opacity: 0,
        duration: 2,
        delay: 8.5,
        ease: "power3.inOut",
        onComplete: () => {
            gsap.set(".pre-loader", {
                display: "none"
            });
        },
    });

    gsap.to(".hero-imgs > img", {
        clipPath: "polygon(100%  0, 0 0, 0 100%, 100% 100%)",
        duration: 1,
        delay: 9,
        stagger: 0.25,
        ease: "power4.inOut",
    });

    gsap.to(".hero", {
        scale: 1.25,
        duration: 3,
        delay: 9,
        ease: "power3.inOut",
    });

    gsap.to("nav", {
        y: 0,
        duration: 1,
        delay: 11,
        ease: "power3.inOut",
    });

    gsap.to("h1 span", {
        top: "0px",
        stagger: 0.1,
        duration: 1,
        delay: 11,
        ease: "power3.inOut",
    });
});
