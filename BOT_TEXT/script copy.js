async function call_api() {
    const search_term = document.getElementById("search_term").value
    const url_api = "https://text.pollinations.ai/"+search_term//document.getElementById("text")
    if (!search_term) {
        alert("O campo de texto não pode ser vazio. Escreva algo.")
        return
    }
    
    try {
        const response = await fetch(url_api);
        const data = await response.text();
        console.log(data);
        document.getElementById("bot").innerText = data;
    }
    catch (error) {
        console.log("Something is wrong!")
        console.error(error);
    }
}












// Assim que apertar o botão... (onclick="function" para executar uma function document.getElementById???)
//... Refresh a página com a nova URL para gerar a imagem solicitada... (location.replace(url_api))
//Observação: a URL precisa ter um parâmtetro/variável para concatenar o input com o restante e atualizar a página com a imagem correta.


