const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke")

const apikey = "gJH6WP5IU3prooBso7hvcA==eFGDVYz05ZTVo7vC";


const options = {
    method: "Get",
    headers: {
        "X-Api-key": apikey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getjoke(){
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading..."
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke"

   jokeEl.innerText = data[0].joke;

}

btnEl.addEventListener("click",getjoke);