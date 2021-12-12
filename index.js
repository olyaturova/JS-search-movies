const searchInput = document.querySelector("#search");
const divs = document.querySelectorAll(".movie");

searchInput.addEventListener("keyup", function(event){
    const word = event.target.value.toLowerCase();
    
    divs.forEach(item => {
        item.querySelector("a").textContent.toLowerCase().includes(word)
        || item.querySelector("h3").textContent.toLowerCase().includes(word)
        ?(item.style.display = "block") : (item.style.display = "none");
    })
})