function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var card = document.getElementById(data);
    ev.target.appendChild(card);
    updateCardStyle(card, ev.target.id);
  }
  
  function updateCardStyle(card, sectionId) {
    card.classList.remove("to-do", "in-progress", "resolved");
    if (sectionId === "resolved") {
      card.classList.add("resolved");
    } else if (sectionId === "inprogress") {
      card.classList.add("in-progress");
    } else {
      card.classList.add("to-do");
    }
  }
  