
let souqmind

function initAI(products){
souqmind=new SouqMindAI(products)
}

function askAssistant(){

const q=document.getElementById("assistant-input").value
const container=document.getElementById("assistant-messages")

const results=souqmind.handleQuery(q)

container.innerHTML=""

results.forEach(p=>{

const div=document.createElement("div")

div.innerHTML=`<strong>${p.title}</strong><br>${p.price}`

container.appendChild(div)

})

}
