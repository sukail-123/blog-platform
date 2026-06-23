const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const searchValue =
    searchInput.value.toLowerCase();

    const cards =
    document.querySelectorAll(".blog-card");

    cards.forEach(card => {

        const title =
        card.querySelector("h2")
        .innerText
        .toLowerCase();

        if(title.includes(searchValue)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }
    });

});
