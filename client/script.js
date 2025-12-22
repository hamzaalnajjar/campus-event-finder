// Base URL for backend API
const API_BASE = "http://localhost:3000/api/events";

// Fetch Call 1: Get all events
async function fetchAllEvents() {
  const response = await fetch(API_BASE);
  const data = await response.json();
  displayEvents(data);
}

// Fetch Call 2: Get events by category
async function fetchEventsByCategory(category) {
  const response = await fetch(`${API_BASE}?category=${category}`);
  const data = await response.json();
  displayEvents(data);
}

// Fetch Call 3: Get events happening today
async function fetchTodaysEvents() {
  const today = dayjs().format("YYYY-MM-DD");
  const response = await fetch(`${API_BASE}?date=${today}`);
  const data = await response.json();
  displayEvents(data);
}

// Display events on the page
function displayEvents(events) {
  const container = document.getElementById("events-container");
  if (!container) return;

  container.innerHTML = "";

  if (events.length === 0) {
    container.innerHTML = "<p>No events found.</p>";
    return;
  }

  events.forEach(event => {
    const div = document.createElement("div");
    div.className = "event-card";
    div.innerHTML = `
      <h3>${event.title}</h3>
      <p>${event.description}</p>
      <p><strong>Date:</strong> ${dayjs(event.date).format("MMMM D, YYYY")}</p>
      <p><strong>Category:</strong> ${event.category}</p>
    `;
    container.appendChild(div);
  });

  renderChart(events);
}

// JavaScript Library 1: Chart.js
function renderChart(events) {
  const ctx = document.getElementById("eventsChart");
  if (!ctx) return;

  const categories = {};
  events.forEach(event => {
    categories[event.category] = (categories[event.category] || 0) + 1;
  });

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: Object.keys(categories),
      datasets: [{
        label: "Events by Category",
        data: Object.values(categories),
        backgroundColor: "rgba(54, 162, 235, 0.6)"
      }]
    }
  });
}

// Page-specific logic
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("events-container")) {
    fetchAllEvents();

    const categorySelect = document.getElementById("category-filter");
    if (categorySelect) {
      categorySelect.addEventListener("change", e => {
        fetchEventsByCategory(e.target.value);
      });
    }

    const todayBtn = document.getElementById("today-btn");
    if (todayBtn) {
      todayBtn.addEventListener("click", fetchTodaysEvents);
    }
  }
});
