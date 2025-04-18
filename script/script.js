var billInputBalise = document.getElementById("bill");
var tipInputsBalises = document.querySelectorAll(".tip-container input")
var nbPeopleInputBalise = document.getElementById("nb_people");

var tipAmountBalise = document.getElementsByName("tip-amount");
var totalValueBalise = document.getElementsByName("total-value");


// Gestion des tips

const customInput = tipInputsBalises[5];

// Fonction utilitaire pour désactiver tous les boutons
function removeActiveClasses() {
    for (let i = 0; i < tipInputsBalises.length - 1; i++) {
        tipInputsBalises[i].classList.remove("active");
    }
}

for (let i = 0; i < tipInputsBalises.length - 1; i++) {
    const element = tipInputsBalises[i];
    element.addEventListener("click", () => {
        customInput.value = "";
        removeActiveClasses();
        element.classList.add("active");
    });
}

customInput.addEventListener("input", () => {
    removeActiveClasses();
});



billInputBalise.addEventListener("input", (e) => {
    const value = e.target.value;
    const nbPeople = nbPeopleInputBalise.value
})

nbPeopleInputBalise.addEventListener("input", () => {
    
})