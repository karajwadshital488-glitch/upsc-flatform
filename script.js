const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const modal = document.getElementById('goalModal');
const form = document.getElementById('goalForm');
const grid = document.getElementById('goalsGrid');

function openModal() {
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
  form.reset();
}

openModalBtn?.addEventListener('click', openModal);
closeModalBtn?.addEventListener('click', closeModal);
modal?.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('goalName').value.trim();
  const details = document.getElementById('goalDetails').value.trim();
  const progress = document.getElementById('goalProgress').value;

  if (!name || !details) return;

  const card = document.createElement('article');
  card.className = 'goal-card';
  card.innerHTML = `
    <div class="goal-header">
      <h2>${name}</h2>
      <span class="goal-tag">${details}</span>
    </div>
    <div class="progress-row">
      <div class="progress-bar"><span style="width: ${progress}%"></span></div>
      <strong>${progress}%</strong>
    </div>
    <p class="goal-note">A freshly added goal to keep you motivated.</p>
  `;

  grid.appendChild(card);
  closeModal();
});
