const url_api = "https://image.pollinations.ai/prompt"+"/post-it"///document.getElementById("text")

async function call_api() {
    const response = await fetch(url_api);
    const data = await response.blob();
    console.log(data);
    document.getElementById("img").src = URL.createObjectURL(data)
    
}

call_api()
// location.replace(url_api)

