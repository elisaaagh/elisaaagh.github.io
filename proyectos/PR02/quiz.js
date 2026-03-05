// CONFIG SUPABASE
const SUPABASE_URL = "TU_PROJECT_URL"
const SUPABASE_KEY = "TU_PUBLIC_ANON_KEY"

const questions = [

{
email: `
<div class="email-header">
<b>Netflix Support</b><br>
security@netfIix-support.com
</div>

<p>Detectamos actividad inusual en tu cuenta.</p>

<p>Verifica tu cuenta aquí:</p>

<p class="email-link">https://netflix-verify-account.com</p>
`,
options:[
"Es phishing",
"Es legítimo"
],
correct:0,
explanation:"El dominio del remitente es falso."
},

{
email:`
<div class="email-header">
<b>Universidad</b><br>
it-support@universidad.edu
</div>

<p>Tu cuenta será suspendida hoy.</p>

<p class="email-link">https://university-reset-password.net</p>
`,
options:[
"Es phishing",
"Es legítimo"
],
correct:0,
explanation:"Dominio externo no pertenece a la universidad."
}

]

let current=0
let score=0
let startTime

const quiz=document.getElementById("quiz")
const emailBox=document.getElementById("emailBox")
const optionsBox=document.getElementById("options")
const feedback=document.getElementById("feedback")

document.getElementById("startBtn").onclick=()=>{

const alias=document.getElementById("alias").value
const consent=document.getElementById("consent").checked

if(!alias || !consent){
alert("Debes ingresar alias y aceptar consentimiento")
return
}

startTime=Date.now()

document.getElementById("start-screen").style.display="none"
quiz.style.display="block"

loadQuestion()

}

function loadQuestion(){

const q=questions[current]

emailBox.innerHTML=q.email

optionsBox.innerHTML=""

q.options.forEach((opt,i)=>{

const div=document.createElement("div")

div.className="option"

div.innerText=opt

div.onclick=()=>answer(i)

optionsBox.appendChild(div)

})

}

function answer(i){

const q=questions[current]

const opts=document.querySelectorAll(".option")

opts.forEach(o=>o.onclick=null)

if(i===q.correct){

score++

opts[i].classList.add("correct")

}else{

opts[i].classList.add("wrong")

opts[q.correct].classList.add("correct")

}

feedback.innerText=q.explanation

}

document.getElementById("nextBtn").onclick=()=>{

current++

feedback.innerText=""

if(current<questions.length){

loadQuestion()

}else{

finish()

}

}

async function finish(){

quiz.style.display="none"

const totalTime=Math.floor((Date.now()-startTime)/1000)

document.getElementById("results").style.display="block"

document.getElementById("score").innerText=`Puntaje: ${score}/${questions.length}`

await fetch(`${SUPABASE_URL}/rest/v1/quiz_results`,{

method:"POST",

headers:{
apikey:SUPABASE_KEY,
Authorization:`Bearer ${SUPABASE_KEY}`,
"Content-Type":"application/json"
},

body:JSON.stringify({

alias:document.getElementById("alias").value,
score:score,
total_time:totalTime

})

})

loadRanking()

}

async function loadRanking(){

const res=await fetch(`${SUPABASE_URL}/rest/v1/quiz_results?select=alias,score,total_time&order=score.desc,total_time.asc&limit=10`,{

headers:{
apikey:SUPABASE_KEY,
Authorization:`Bearer ${SUPABASE_KEY}`
}

})

const data=await res.json()

let html="<table><tr><th>#</th><th>Alias</th><th>Puntaje</th><th>Tiempo</th></tr>"

data.forEach((r,i)=>{

html+=`<tr>
<td>${i+1}</td>
<td>${r.alias}</td>
<td>${r.score}</td>
<td>${r.total_time}s</td>
</tr>`

})

html+="</table>"

document.getElementById("ranking").innerHTML=html

}
