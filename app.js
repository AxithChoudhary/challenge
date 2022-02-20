let album
let searchButton=document.querySelector("#button")
let results
let musciCard=document.querySelector(".musicCard")



searchButton.addEventListener("click",async ()=>{

    album=await document.querySelector("#input-song").Value
    const data=await fetch(`https://itunes.apple.com/search?term=${album}&media=music&limit=25.`)
    const music=await data.json()
    const results=music.results
    if(results.length<=0){
        results.forEach(element => 
            {
                let img = document.createElement("img");
                img.src = results[i].artworkUrl100;
                musciCard.appendChild(img);
        });
    }else{
        for (let i = 0; i <= 5; i++)
            {
                console.log(results[i])
                let img = document.createElement("img");
                img.src = results[i].artworkUrl100;
                musciCard.appendChild(img);
    
            } 
    }

})
