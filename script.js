const url_api = "https://image.pollinations.ai/prompt"+"/post-it"///document.getElementById("text")

async function call_api() {
    const response = await fetch(url_api);
    const data = await response.blob();
    console.log(data);
    document.getElementById("img").src = URL.createObjectURL(data)
    
}

call_api()
// Assim que apertar o botão... (onclick="function" para executar uma function document.getElementById???)
//... Refresh a página com a nova URL para gerar a imagem solicitada... (location.replace(url_api))
//Observação: a URL precisa ter um parâmtetro/variável para concatenar o input com o restante e atualizar a página com a imagem correta.


const text1 = document.getElementById("teste");
const button1 = document.getElementById("button");
const output1 = document.getElementById("title");


function uptade_img() {
    output1.innerHTML = text1.value;
}

button1.addEventListener("click",uptade_img);



