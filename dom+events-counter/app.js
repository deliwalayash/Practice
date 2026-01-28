const countEl = document.getElementById("count");
const incBtn = document.getElementById("incBtn");
const decBtn = document.getElementById("decBtn");
const resetBtn = document.getElementById("resetBtn");


let count = 0;
function updateUI() {
  countEl.innerHTML = count;
}


incBtn.addEventListener("click", () => {
  count++;
  updateUI();
});

decBtn.addEventListener("click", () => {
    if(count ==0){
        return
    }
  count--;
  updateUI();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateUI();
});
