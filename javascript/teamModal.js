const overlay = document.querySelectorAll("div.modal-overlay");

const modals = document.querySelectorAll('.modal');

const spans = document.getElementsByClassName("close");

for (let i = 0; i < overlay.length; i++) {
  overlay[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
  }
}

for (let i = 0; i < spans.length; i++) {
  spans[i].onclick = function() {
    for (let index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
  }
}

window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    for (let index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
  }
}
