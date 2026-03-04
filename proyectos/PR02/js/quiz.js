const questions = [
{
scenario: `
<div class="gmail-wrapper">
  <div class="gmail-header">
    <div class="gmail-subject">
      ⚠ Suspensión inmediata de cuenta institucional
    </div>
    <div class="gmail-meta">
      <strong>Soporte Técnico</strong> &lt;soporte-tecnico@upslp-security.com&gt;<br>
      para usuario@upslp.edu.mx
    </div>
  </div>

  <div class="gmail-body">
    Estimado estudiante,<br><br>

    Hemos detectado <span class="gmail-warning">actividad sospechosa</span>
    en su cuenta institucional.<br><br>

    Si no verifica su identidad en las próximas <strong>2 horas</strong>,
    su acceso será suspendido permanentemente.<br><br>

    Puede validar su cuenta aquí:<br><br>

    <span class="gmail-link"
      data-url="https://upslp-security.com/verificar">
      https://upslp-security.com/verificar
    </span><br><br>

    <a class="gmail-button"
      data-url="https://upslp-security.com/verificar">
      Verificar cuenta
    </a><br><br>

    Atentamente,<br>
    Departamento de Soporte Técnico
  </div>
</div>
`,
options: [
"Hacer clic y verificar inmediatamente",
"Revisar cuidadosamente el dominio del remitente",
"Ignorar porque parece spam obvio"
],
correct: 1,
explanation: "Este caso usa autoridad y urgencia. El dominio no es oficial de la universidad."
},
{
scenario: `
<div class="sms-box">
Movimiento no reconocido por $4,850 MXN.  
Verifica aquí: bit.ly/seguridad-banco
</div>
`,
options: [
"Abrir enlace inmediatamente",
"Llamar al banco usando número oficial",
"Responder STOP"
],
correct: 1,
explanation: "Smishing clásico. Los enlaces acortados ocultan dominios maliciosos."
},
{
scenario: `
<div class="social-box">
Reclutador ofrece trabajo remoto.  
Solicita INE, comprobante y foto sosteniendo identificación.
</div>
`,
options: [
"Enviar documentos",
"Pedir entrevista inmediata",
"Investigar empresa antes de enviar datos"
],
correct: 2,
explanation: "Ingeniería social por recompensa. Solicitan datos sensibles prematuramente."
},
{
scenario: `
<div class="qr-box">
QR en cafetería: “50% descuento si te registras”  
Solicita correo institucional y contraseña.
</div>
`,
options: [
"Registrarte rápido",
"Revisar URL antes de ingresar datos",
"Tomar foto para después"
],
correct: 1,
explanation: "Ataque por QR malicioso. Nunca ingresar contraseñas en enlaces desconocidos."
},
{
scenario: `
<div class="call-box">
Llamada de “Soporte TI”.  
Piden instalar AnyDesk para solucionar virus.
</div>
`,
options: [
"Instalarlo",
"Colgar y contactar soporte oficial",
"Seguir escuchando"
],
correct: 1,
explanation: "Vishing + acceso remoto. Soporte legítimo no solicita acceso sin ticket previo."
},
{
scenario: `
<div class="email-box">
Profesor solicita usuario y contraseña por falla del sistema.
</div>
`,
options: [
"Enviarlos",
"Confirmar directamente con el profesor",
"Responder pidiendo detalles"
],
correct: 1,
explanation: "Suplantación. Ninguna institución solicita contraseñas."
},
{
scenario: `
<div class="social-box">
“Eres tú en este video?” + enlace extraño.
</div>
`,
options: [
"Abrir enlace",
"Confirmar por otro medio",
"Descargar archivo"
],
correct: 1,
explanation: "Ataque por curiosidad. Confirmar siempre por canal alternativo."
},
{
scenario: `
<div class="usb-box">
Encuentras USB etiquetado “Examen Final Seguridad”.
</div>
`,
options: [
"Conectarlo",
"Entregar a coordinación",
"Escanearlo en tu laptop"
],
correct: 1,
explanation: "Baiting físico. Dispositivos desconocidos pueden contener malware."
},
{
scenario: `
<div class="email-box">
Ganaste 1 año gratis de Netflix.  
Solicitan tarjeta para validar identidad.
</div>
`,
options: [
"Ingresar tarjeta",
"Verificar en sitio oficial",
"Ignorarlo"
],
correct: 1,
explanation: "Premio falso. Servicios legítimos no piden tarjeta para premios."
},
{
scenario: `
<div class="email-box">
Security Alert: Unauthorized login  
Enlace: github-security-check.io
</div>
`,
options: [
"Iniciar sesión ahí",
"Acceder manualmente a github.com",
"Cambiar contraseña en ese enlace"
],
correct: 1,
explanation: "Dominio falso. Siempre ingresar manualmente al sitio oficial."
}
];

let current = 0;
let score = 0;
let attemptsData = JSON.parse(localStorage.getItem("phishingData")) || {
attempts: 0,
scores: []
};

const consentCheckbox = document.getElementById("consent-checkbox");
const startBtn = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const consentScreen = document.getElementById("consent-screen");
const scenarioBox = document.getElementById("scenario-box");
const optionsBox = document.getElementById("options");
const feedbackBox = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const resultScreen = document.getElementById("result-screen");
const resultsContent = document.getElementById("results-content");

consentCheckbox.addEventListener("change", () => {
startBtn.disabled = !consentCheckbox.checked;
});

startBtn.addEventListener("click", () => {
consentScreen.style.display = "none";
quizContainer.style.display = "block";
loadQuestion();
});

function loadQuestion() {
  const q = questions[current];
  scenarioBox.innerHTML = q.scenario;
  optionsBox.innerHTML = "";
  feedbackBox.innerHTML = "";
  nextBtn.style.display = "none";

  const progressPercent = ((current) / questions.length) * 100;

  document.getElementById("progress").innerHTML = `
    Pregunta ${current + 1} de ${questions.length}
    <div class="progress-bar">
      <div class="progress-fill" style="width:${progressPercent}%"></div>
    </div>
  `;

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(index);
    optionsBox.appendChild(btn);
  });
}

function checkAnswer(index) {
  const q = questions[current];
  const buttons = optionsBox.querySelectorAll("button");

  // Desactivar todos los botones
  buttons.forEach(btn => {
    btn.disabled = true;
    btn.classList.add("disabled");
  });

  if (index === q.correct) {
    score++;
    buttons[index].classList.add("correct");
    feedbackBox.innerHTML = `
      <strong>Respuesta correcta.</strong><br><br>
      ${q.explanation}<br><br>
      <strong>Análisis técnico:</strong>
      Este mensaje utiliza técnicas de urgencia y suplantación de identidad.
      El dominio no pertenece a la universidad oficial (upslp.edu.mx),
      lo que indica posible phishing.
    `;
  } else {
    buttons[index].classList.add("incorrect");
    buttons[q.correct].classList.add("correct");

    feedbackBox.innerHTML = `
      <strong>Respuesta incorrecta.</strong><br><br>
      ${q.explanation}<br><br>
      <strong>Análisis técnico:</strong>
      El dominio del remitente es diferente al institucional legítimo.
      Los atacantes usan variaciones similares para engañar visualmente.
    `;
  }

  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
current++;
if (current < questions.length) {
loadQuestion();
} else {
showResults();
}
});

function showResults() {
quizContainer.style.display = "none";
resultScreen.style.display = "block";

attemptsData.attempts++;
attemptsData.scores.push(score);

localStorage.setItem("phishingData", JSON.stringify(attemptsData));

const best = Math.max(...attemptsData.scores);
const avg = (
attemptsData.scores.reduce((a,b)=>a+b,0) /
attemptsData.scores.length
).toFixed(2);

let level = "";
if(score <=4) level="Alto riesgo";
else if(score<=7) level="Riesgo medio";
else level="Buen nivel de detección";

resultsContent.innerHTML = `
<p>Puntaje actual: ${score}/10</p>
<p>Nivel: ${level}</p>
<p>Intentos realizados: ${attemptsData.attempts}</p>
<p>Mejor puntaje: ${best}</p>
<p>Promedio histórico: ${avg}</p>
`;
}

document.getElementById("retry-btn").addEventListener("click", () => {
current = 0;
score = 0;
resultScreen.style.display = "none";
quizContainer.style.display = "block";
loadQuestion();
});

const urlPreview = document.getElementById("urlPreview");

document.addEventListener("mouseover", function(e) {
  if (e.target.dataset.url) {
    urlPreview.textContent = e.target.dataset.url;
    urlPreview.style.opacity = "1";
  }
});

document.addEventListener("mouseout", function(e) {
  if (e.target.dataset.url) {
    urlPreview.style.opacity = "0";
  }
});
