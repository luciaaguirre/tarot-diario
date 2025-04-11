
document.getElementById("drawMantraBtn").addEventListener("click", function() {
    fetch("mantras.json")
        .then(response => response.json())
        .then(data => {
            const randomMantra = data[Math.floor(Math.random() * data.length)];

            document.getElementById("mantraText").textContent = randomMantra.mantra;
            document.getElementById("mantraDisplay").classList.remove("hidden");
        })
        .catch(error => console.error("Error loading mantra:", error));
});
