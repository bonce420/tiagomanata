// Define a data final para daqui a 10 dias (calculado automaticamente a partir de hoje)
const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 10);
countdownDate.setHours(0, 0, 0, 0); // Define para a meia-noite

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate.getTime() - now;

    // Cálculos de tempo para dias, horas, minutos e segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Coloca os valores nos elementos HTML correspondentes
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    // Se a contagem terminar
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
    }
};

// Atualiza o contador a cada 1 segundo
const interval = setInterval(updateCountdown, 1000);

// Executa logo a primeira vez para não aparecer "00" ao carregar a página
updateCountdown();


/* ==========================================
   EFEITO DO RATO (MOUSE LIGHT)
========================================== */
document.addEventListener("mousemove", (e) => {
    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
});
