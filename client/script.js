const API_URL = "http://localhost:3000/api/events";

function loadEvents() {
  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      const list = document.getElementById("event-list");
      list.innerHTML = "";

      data.forEach(event => {
        const li = document.createElement("li");
        li.textContent = `${event.title} - ${event.date}`;
        list.appendChild(li);
      });
    })
    .catch(error => {
      console.error("Error loading events:", error);
    });
}
