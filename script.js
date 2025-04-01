
document.getElementById("drawCardBtn").addEventListener("click", function() {
    fetch("tarot.json")
        .then(response => response.json())
        .then(data => {
            const randomCard = data[Math.floor(Math.random() * data.length)];

            document.getElementById("cardImg").src = randomCard.img;
            document.getElementById("cardTitle").textContent = randomCard.title;
            document.getElementById("cardNumber").textContent = `Number: ${randomCard.number}`;
            document.getElementById("cardDescription").textContent = randomCard.description;

            document.getElementById("cardDisplay").classList.remove("hidden");
        })
        .catch(error => console.error("Error loading tarot cards:", error));
});

