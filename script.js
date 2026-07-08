Aqui tens o ficheiro `script.js` completo!

Coloquei a opção que adiciona exatamente 2 dias (48 horas) a partir do momento em que a página é aberta, assim é perfeito para testares e veres logo o "02" nos dias. Também deixei a opção da data fixa comentada caso prefiras usar essa mais tarde.

É só copiar e colar tudo para o teu ficheiro:

```javascript
// =====================================
// DATA DO LANÇAMENTO
// =====================================

// Opção A: 2 dias exatos a partir do momento em que abres o site (Dinâmico)
const launchDate = new Date().getTime() + (2 * 24 * 60 * 60 * 1000);

// Opção B: Data fixa (ex: 10 de Julho de 2026 às 22:00)
// Se quiseres usar esta, apaga as duas barras "//" da linha abaixo e mete na de cima
// const launchDate = new Date(2026, 6, 10, 22, 0, 0).getTime();

// =====================================
// ELEMENTOS
// =====================================

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// =====================================
// COUNTDOWN
// =====================================

const timer = setInterval(() => {

    const now = new Date().getTime();
    const distance = launchDate - now;

    if(distance <= 0){
        clearInterval(timer);

        document.querySelector(".hero h1").innerHTML = "🚀 Já Estamos Online!";
        document.querySelector(".hero p").innerHTML = "Obrigado por esperares. O projeto já foi lançado.";
        document.querySelector(".countdown").style.display = "none";

        // DICA: Para redirecionar para o site principal automaticamente, 
        // tira as barras "//" da linha de baixo e muda o nome do ficheiro html:
        // window.location.href = "principal.html"; 

        return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    const m = Math.floor((distance % (1000*60*60)) / (1000*60));
    const s = Math.floor((distance % (1000*60)) / 1000);

    days.textContent = String(d).padStart(2,"0");
    hours.textContent = String(h).padStart(2,"0");
    minutes.textContent = String(m).padStart(2,"0");
    seconds.textContent = String(s).padStart(2,"0");

},1000);

// =====================================
// LUZ QUE SEGUE O RATO
// =====================================

document.addEventListener("mousemove",(e)=>{
    document.body.style.setProperty("--x",e.clientX+"px");
    document.body.style.setProperty("--y",e.clientY+"px");
});

// =====================================
// ANIMAÇÃO AO FAZER SCROLL
// =====================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";
        }
    });
},{
    threshold:.2
});

sections.forEach(section=>{
    section.style.opacity="0";
    section.style.transform="translateY(60px)";
    section.style.transition=".8s";
    observer.observe(section);
});

// =====================================
// EFEITO NOS CARDS
// =====================================

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{
    card.addEventListener("mousemove",(e)=>{
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = 
        `radial-gradient(circle at ${x}px ${y}px, 
        rgba(255,255,255,.18), 
        rgba(255,255,255,.05))`;
    });

    card.addEventListener("mouseleave",()=>{
        card.style.background="rgba(255,255,255,.05)";
    });
});

// =====================================
// NAVBAR SCROLL
// =====================================

window.addEventListener("scroll",()=>{
    const header=document.querySelector("header");

    if(window.scrollY>60){
        header.style.background="rgba(5,8,22,.8)";
        header.style.backdropFilter="blur(30px)";
    }else{
        header.style.background="rgba(0,0,0,.18)";
    }
});

// =====================================
// PEQUENO EFEITO NO TÍTULO
// =====================================

const title=document.querySelector(".hero h1");

setInterval(()=>{
    title.style.transform="translateY(-3px)";
    setTimeout(()=>{
        title.style.transform="translateY(0px)";
    },600);
},4000);

```
