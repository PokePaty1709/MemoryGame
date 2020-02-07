document.getElementById("rules").onclick = function () {
    const rulesModal = document.getElementById("rulesModal");
    rulesModal.style.display = "block";
  
    window.onclick = function (event) {
      if (event.target == rulesModal) {
        rulesModal.style.display = "none";
      }
    }
}