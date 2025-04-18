const billInput = document.getElementById("bill");
const tipButtons = document.querySelectorAll(".tip-container input");
const peopleInput = document.getElementById("nb_people");

const tipAmountDisplay = document.getElementById("tip-amount");
const totalDisplay = document.getElementById("total-value");

const resetButton = document.getElementById("reset");

const customTipInput = tipButtons[5];

// Supprime la classe "active" de tous les boutons
function clearActiveTips() {
  tipButtons.forEach(btn => btn.classList.remove("active"));
}

// Calcule et affiche le résultat
function computeResult() {
  const bill = parseFloat(billInput.value);
  const people = parseInt(peopleInput.value);

  if (isNaN(bill) || isNaN(people) || people === 0) {
    tipAmountDisplay.textContent = "$0.00";
    totalDisplay.textContent = "$0.00";
    return;
  }

  let tipPercentage = 0;

  tipButtons.forEach(btn => {
    if (btn.classList.contains("active")) {
      tipPercentage = parseFloat(btn.value.replace("%", "")) / 100 || 0;
    }
  });

  const tipPerPerson = (bill * tipPercentage) / people;
  const totalPerPerson = (bill * (1 + tipPercentage)) / people;

  tipAmountDisplay.textContent = `$${tipPerPerson.toFixed(2)}`;
  totalDisplay.textContent = `$${totalPerPerson.toFixed(2)}`;
}

// Événements pour les boutons prédéfinis
tipButtons.forEach((btn, index) => {
  if (index < tipButtons.length - 1) {
    btn.addEventListener("click", () => {
      customTipInput.value = "";
      clearActiveTips();
      btn.classList.add("active");
      computeResult();
    });
  }
});

// Événement pour le champ custom
customTipInput.addEventListener("input", () => {
  clearActiveTips();
  customTipInput.classList.add("active");
  computeResult();
});

// Événements pour les inputs principaux
[billInput, peopleInput].forEach(input =>
  input.addEventListener("input", computeResult)
);

// Gestion du button reset
resetButton.addEventListener("click", () => {
    clearActiveTips();
});



