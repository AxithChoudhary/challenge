let album
let searchButton=document.querySelector("#button")
let results
let musciCard=document.querySelector(".musicCard")


searchButton.addEventListener("click",async ()=>{
    album=await document.getElementById('input-song').value
    // console.log(album)
    const data=await fetch(`https://itunes.apple.com/search?term=${album}&media=music&limit=10.`)
    const music=await data.json()
    const results=music.results
    results.forEach(element => 
        {
            // console.log(element)
            let img = document.createElement("img");
            img.src = element.artworkUrl100;
            musciCard.appendChild(img);
    });

})
