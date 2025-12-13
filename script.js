
async function loadCategories() {
  const res = await fetch("data/categories.json");
  const data = await res.json();

  let html = "<h2>What I Work On</h2><div class='card-grid'>";

  data.forEach(c => {
    html += `
      <div class="card">
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
      </div>
    `;
  });

  html += "</div>";
  document.getElementById("categories").innerHTML = html;
}

async function loadAgents() {
  const res = await fetch("data/agents.json");
  const agents = await res.json();

  let html = "<h2>AI Agents for Business</h2><div class='card-grid'>";

  agents.forEach(a => {
    html += `
      <div class="card">
        <h3>${a.name}</h3>
        <p><b>Industry:</b> ${a.industry}</p>
        <p><b>Problem:</b> ${a.problem}</p>
        <p><b>Solution:</b> ${a.solution}</p>
        <p class="price">${a.pricing}</p>
      </div>
    `;
  });

  html += "</div>";
  document.getElementById("agents").innerHTML = html;
}

document.getElementById("contact").innerHTML = `
<h2>Work With Me</h2>
<p>If you want AI agents for your business:</p>
<p><b>Email:</b> yourmail@gmail.com</p>
`;

loadCategories();
loadAgents();
