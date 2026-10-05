// Going to make an event listener that will trigger with the DOM when loaded (aka upon visiting webpage)
addEventListener("DOMContentLoaded", async function(){
    const response = await fetch("https://intro-backend-dev-1.onrender.com/api/songs")
    const songs = await response.json()

    let html = ""
    for (let song of songs){
        html+=`<li>${song.title} - ${song.artist}</li>`
    }

    document.querySelector("#addedsong").innerHTML = html
})