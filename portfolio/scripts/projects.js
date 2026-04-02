// ── Project Data ──────────────────────────────────────────────
const projects = [
  {
    title: "LLM Research Agent",
    description:
      "An autonomous AI agent that searches academic papers, summarizes findings, and generates structured reports using LangChain and OpenAI APIs.",
    tags: ["Python", "AIAgent", "MachineLearning"],
    date: "2025 Feb",
  },
  {
    title: "React Flow Diagram Editor",
    description:
      "An interactive node-based diagram editor built with React Flow, supporting drag-and-drop nodes, custom edges, and JSON export.",
    tags: ["ReactFlow", "JavaScript"],
    date: "2024 Nov",
  },
  {
    title: "Personal Finance Tracker",
    description:
      "A full-stack web app to track income, expenses, and portfolios, with visual dashboards built using Plotly and a FastAPI backend.",
    tags: ["Python", "DataScience", "Backend"],
    date: "2024 Sep",
  },
  {
    title: "Stock Price Predictor",
    description:
      "An LSTM-based model trained on 10 years of S&P 500 data to forecast 7-day price movements using technical indicator features.",
    tags: ["Python", "MachineLearning", "DataScience"],
    date: "2024 Jul",
  },
  {
    title: "Java REST API Server",
    description:
      "A Spring Boot REST API with JWT authentication, PostgreSQL integration, and Docker support. Handles 500+ requests/sec under load.",
    tags: ["Java", "Backend"],
    date: "2024 May",
  },
  {
    title: "C# Puzzle Platformer",
    description:
      "A 2D puzzle-platformer built in Unity with procedurally generated levels, save-state management, and a custom physics component.",
    tags: ["C#"],
    date: "2024 Mar",
  },
  {
    title: "ETL Data Pipeline",
    description:
      "An Apache Airflow pipeline ingesting, cleaning, and transforming 1M+ daily records from multiple APIs into a PostgreSQL data warehouse.",
    tags: ["Python", "DataScience", "Backend"],
    date: "2023 Dec",
  },
  {
    title: "Neural Net From Scratch",
    description:
      "A fully-connected neural network implemented in NumPy with backpropagation, dropout, and batch normalization — no ML frameworks used.",
    tags: ["Python", "MachineLearning", "AIAgent"],
    date: "2023 Oct",
  },
];

// for each Project Card HTML ───────────────────────────────────────
function buildCardHTML(project) {
  const tagsHTML = project.tags
    .map((t) => `<span class="card-tag">#${t}</span>`)
    .join("");
  return `
    <div class="project-card" data-tags="${project.tags.join(",")}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="card-tags">${tagsHTML}</div>
    </div>`;
}

// ── Render: Search Grid ───────────────────────────────────────
function renderGrid() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = projects.map(buildCardHTML).join("");
}

// ── Render: Timeline ─────────────────────────────────────────
function renderTimeline() {
  const timeline = document.getElementById("projectTimeline");
  timeline.innerHTML = projects
    .map(
      (p) => `
    <div class="timeline-item">
      ${buildCardHTML(p)}
      <div class="item-date">${p.date}</div>
    </div>`
    )
    .join("");
}

// ── Tag Filtering ─────────────────────────────────────────────
function applyFilters() {
  const activeTags = [
    ...document.querySelectorAll(".tag-btn.active"), // The 3 dots expand ".tag-btn.active" elements to a normal array
  ].map((b) => b.dataset.tag);

  const searchText = document
    .getElementById("heroSearch")
    .value.trim()
    .toLowerCase();

  const cards = document.querySelectorAll("#projectsGrid .project-card");
  let visibleCount = 0;

  cards.forEach((card) => {
    const cardTags = card.dataset.tags.split(",");
    const title = card.querySelector("h3").textContent.toLowerCase();
    const desc = card.querySelector("p").textContent.toLowerCase();

    const tagMatch =
      activeTags.length === 0 ||
      activeTags.every((tag) => cardTags.includes(tag));

    const textMatch =
      searchText === "" ||
      title.includes(searchText) ||
      desc.includes(searchText);

    const visible = tagMatch && textMatch;
    card.style.display = visible ? "" : "none";
    if (visible) visibleCount++;
  });

  document.getElementById("noResults").hidden = visibleCount > 0;
}

// ── Mode Switch ───────────────────────────────────────────────
function initModeSwitch() {
  const btn = document.getElementById("modeSwitch");
  const searchSection = document.getElementById("searchMode");
  const timelineSection = document.getElementById("timelineMode");
  const searchLabel = document.getElementById("searchLabel");
  const timelineLabel = document.getElementById("timelineLabel");

  btn.addEventListener("click", () => {
    const isSearch = btn.getAttribute("aria-pressed") === "false";

    if (isSearch) {
      // Switch to Timeline
      btn.setAttribute("aria-pressed", "true");
      searchSection.classList.remove("active");
      timelineSection.classList.add("active");
      searchLabel.classList.remove("active");
      timelineLabel.classList.add("active");
    } else {
      // Switch to Search
      btn.setAttribute("aria-pressed", "false");
      timelineSection.classList.remove("active");
      searchSection.classList.add("active");
      timelineLabel.classList.remove("active");
      searchLabel.classList.add("active");
    }
  });
}

// ── Tag Button Clicks ─────────────────────────────────────────
function initTagButtons() {
  document.querySelectorAll(".tag-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      applyFilters();
    });
  });

  document.getElementById("clearFilters").addEventListener("click", () => {
    document.querySelectorAll(".tag-btn.active").forEach((b) =>
      b.classList.remove("active")
    );
    document.getElementById("heroSearch").value = "";
    applyFilters();
  });
}

// ── Live Search ───────────────────────────────────────────────
function initSearch() {
  document
    .getElementById("heroSearch")
    .addEventListener("input", applyFilters);
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderGrid();
  renderTimeline();
  initModeSwitch();
  initTagButtons();
  initSearch();
});
