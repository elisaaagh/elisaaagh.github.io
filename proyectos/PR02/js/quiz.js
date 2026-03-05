
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
<div class="gmail-wrapper">
  <div class="gmail-header">
    <div class="gmail-subject">
      ⚠ Movimiento no reconocido detectado
    </div>
    <div class="gmail-meta">
      <strong>Banco Nacional</strong> &lt;alertas@banco-seguridad.com&gt;<br>
      para usuario@gmail.com
    </div>
  </div>

  <div class="gmail-body">
    Estimado cliente,<br><br>

    Detectamos un cargo por <strong>$4,850 MXN</strong> en su cuenta.<br><br>

    Si usted no reconoce esta operación, debe verificarla inmediatamente:<br><br>

    <span class="gmail-link"
      data-url="https://banco-seguridad.com/verificar-transaccion">
      https://banco-nacional.com/verificar
    </span><br><br>

    <a class="gmail-button"
      data-url="https://banco-seguridad.com/verificar-transaccion">
      Verificar transacción
    </a><br><br>

    Departamento de Prevención de Fraudes
  </div>
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
<div class="gmail-wrapper">
  <div class="gmail-header">
    <div class="gmail-subject">
      Oferta laboral remota – Respuesta inmediata
    </div>
    <div class="gmail-meta">
      <strong>Global Tech Recruiting</strong> &lt;hr@globaltech-careers.net&gt;<br>
      para usuario@gmail.com
    </div>
  </div>

  <div class="gmail-body">
    Buen día,<br><br>

    Su perfil fue seleccionado para una vacante remota con salario competitivo.<br><br>

    Para continuar el proceso necesitamos:<br>
    • Identificación oficial<br>
    • Comprobante de domicilio<br>
    • Foto sosteniendo su identificación<br><br>

    Envíe la documentación respondiendo este correo.<br><br>

    Saludos,<br>
    Departamento de Recursos Humanos
  </div>
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
<div class="gmail-wrapper">
  <div class="gmail-header">
    <div class="gmail-subject">
      🎉 50% de descuento exclusivo para estudiantes
    </div>
    <div class="gmail-meta">
      <strong>Café Campus Promo</strong> &lt;promo@cafecampus-deals.com&gt;<br>
      para usuario@upslp.edu.mx
    </div>
  </div>

  <div class="gmail-body">
    Estudiante seleccionado,<br><br>

    Obtén <strong>50% de descuento</strong> registrando tu correo institucional.<br><br>

    Escanea el código QR o accede aquí:<br><br>

    <span class="gmail-link"
      data-url="https://cafecampus-deals.com/registro">
      https://cafecampus.com/registro
    </span><br><br>

    <a class="gmail-button"
      data-url="https://cafecampus-deals.com/registro">
      Registrarme ahora
    </a>
  </div>
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
<div class="gmail-wrapper">
  <div class="gmail-header">
    <div class="gmail-subject">
      Soporte urgente – Equipo comprometido
    </div>
    <div class="gmail-meta">
      <strong>IT Helpdesk</strong> &lt;support@it-securitydesk.com&gt;<br>
      para usuario@empresa.com
    </div>
  </div>

  <div class="gmail-body">
    Detectamos malware activo en su equipo.<br><br>

    Para evitar pérdida de información, instale la herramienta segura desde el siguiente enlace:<br><br>

    <span class="gmail-link"
      data-url="https://it-securitydesk.com/anydesk-install">
      Descargar herramienta de soporte
    </span><br><br>

    Soporte Técnico
  </div>
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
<div class="gmail-wrapper">
  <div class="gmail-header">
    <div class="gmail-subject">
      Entrega urgente de credenciales
    </div>
    <div class="gmail-meta">
      <strong>Dr. Martínez</strong> &lt;dr.martinez@upslp-edu.com&gt;<br>
      para estudiante@upslp.edu.mx
    </div>
  </div>

  <div class="gmail-body">
    Estimado alumno,<br><br>

    El sistema de calificaciones presenta fallas.<br>
    Necesito que me envíes tu usuario y contraseña para validar tu acceso.<br><br>

    Es urgente antes de las 6 PM.<br><br>

    Saludos,<br>
    Dr. Martínez
  </div>
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
<div class="gmail-wrapper">
  <div class="gmail-header">
    <div class="gmail-subject">
      ¿Eres tú en este video?
    </div>
    <div class="gmail-meta">
      <strong>Contacto conocido</strong> &lt;amigo@gmail-security.co&gt;<br>
      para usuario@gmail.com
    </div>
  </div>

  <div class="gmail-body">
    Oye,<br><br>

    Mira este video, creo que eres tú 😳<br><br>

    <span class="gmail-link"
      data-url="https://video-viral-security.co/play">
      Ver video ahora
    </span>
  </div>
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
<div class="gmail-wrapper">
  <div class="gmail-header">
    <div class="gmail-subject">
      Material de examen final disponible
    </div>
    <div class="gmail-meta">
      <strong>Coordinación Académica</strong> &lt;coord.academica@upslp-material.com&gt;<br>
      para estudiante@upslp.edu.mx
    </div>
  </div>

  <div class="gmail-body">
    El examen final ya está disponible en el dispositivo USB entregado hoy en campus.<br><br>

    Inserta el dispositivo en tu equipo para acceder al contenido.
  </div>
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
<div class="gmail-wrapper">
  <div class="gmail-header">
    <div class="gmail-subject">
      🎁 Ganaste 1 año gratis de Netflix
    </div>
    <div class="gmail-meta">
      <strong>Netflix Rewards</strong> &lt;promo@netflix-student.net&gt;<br>
      para usuario@gmail.com
    </div>
  </div>

  <div class="gmail-body">
    Felicidades,<br><br>

    Has sido seleccionado para recibir 1 año gratuito.<br><br>

    Para validar tu identidad, ingresa los datos de tu tarjeta aquí:<br><br>

    <span class="gmail-link"
      data-url="https://netflix-student.net/validar">
      https://netflix.com/validar-promocion
    </span><br><br>

    <a class="gmail-button"
      data-url="https://netflix-student.net/validar">
      Reclamar premio
    </a>
  </div>
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
<div class="gmail-wrapper">
  <div class="gmail-header">
    <div class="gmail-subject">
      Security Alert: Unauthorized login attempt
    </div>
    <div class="gmail-meta">
      <strong>GitHub Security</strong> &lt;security@github-alerts.io&gt;<br>
      para usuario@gmail.com
    </div>
  </div>

  <div class="gmail-body">
    We detected a login attempt from an unknown device.<br><br>

    If this was not you, secure your account immediately:<br><br>

    <span class="gmail-link"
      data-url="https://github-alerts.io/security-check">
      https://github.com/security-check
    </span><br><br>

    <a class="gmail-button"
      data-url="https://github-alerts.io/security-check">
      Secure account
    </a>
  </div>
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
results: []
};

if(!attemptsData.results){
  attemptsData.results = [];
}

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
const playerInput = document.getElementById("playerName");
const warningText = document.getElementById("start-warning");

function validateStart(){

const nameFilled = playerInput.value.trim() !== "";
const consentChecked = consentCheckbox.checked;

if(nameFilled && consentChecked){
  startBtn.disabled = false;
  warningText.textContent = "";
}else{
  startBtn.disabled = true;
  if(!nameFilled && !consentChecked){
    warningText.textContent = "Ingresa un nombre y acepta el consentimiento.";
  }else if(!nameFilled){
      warningText.textContent = "Debes ingresar un nombre o alias.";
    }else{
      warningText.textContent = "Debes aceptar el consentimiento informado.";
    }
  }
}

consentCheckbox.addEventListener("change", validateStart);
playerInput.addEventListener("input", validateStart);

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

attemptsData.results.push({
name: playerInput.value.trim(),
score: score,
date: new Date().toLocaleString()
});

localStorage.setItem("phishingData", JSON.stringify(attemptsData));

const scores = (attemptsData.results || []).map(r => r.score);

const best = Math.max(...scores);

const avg = (
scores.reduce((a,b)=>a+b,0) /
scores.length
).toFixed(2);

const ranking = [...attemptsData.results]
.sort((a,b)=>b.score-a.score)
.slice(0,5);

let level = "";
if(score <=4) level="Alto riesgo";
else if(score<=7) level="Riesgo medio";
else level="Buen nivel de detección";

let rankingHTML = "<h4>Ranking global</h4><ol>";

ranking.forEach(r => {
rankingHTML += `<li>${r.name} — ${r.score}/10</li>`;
});

rankingHTML += "</ol>";

resultsContent.innerHTML = `
<p><strong>Jugador:</strong> ${playerInput.value}</p>
<p>Puntaje actual: ${score}/10</p>
<p>Nivel: ${level}</p>
<p>Intentos realizados: ${attemptsData.attempts}</p>
<p>Mejor puntaje histórico: ${best}</p>
<p>Promedio global: ${avg}</p>

${rankingHTML}
`;

document.getElementById("retry-btn").addEventListener("click", () => {
  current = 0;
  score = 0;
  resultScreen.style.display = "none";
  quizContainer.style.display = "block";
  loadQuestion();
});

} // ← AQUÍ se cierra showResults()

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
}
