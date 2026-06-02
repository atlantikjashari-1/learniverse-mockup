<template>
  <section class="section-benefits" id="why">
    <div class="container-large">
      <div class="section-header" v-reveal>
        <span class="kicker">Why Learniverse</span>
        <h2 class="section-title">Why learners choose Learniverse</h2>
        <p class="section-subtitle">Designed for people who need clarity, structure, and a clear next step.</p>
      </div>

      <div class="benefits-grid">
        <article
          v-for="(b, i) in benefits"
          :key="b.title"
          class="benefit-card"
          v-reveal="i * 80"
        >
          <span class="benefit-icon">{{ b.icon }}</span>
          <div>
            <h3>{{ b.title }}</h3>
            <p>{{ b.body }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const benefits = [
  { icon: '🧭', title: 'Clear direction', body: 'Know what to learn next with guided paths built around real goals.' },
  { icon: '📈', title: 'Visible progress', body: "Track what you've completed and what comes next." },
  { icon: '🛠️', title: 'Practical skills', body: 'Focus on skills that feel relevant and useful.' },
  { icon: '⏳', title: 'Flexible learning', body: 'Learn at your own pace while keeping structure.' }
]
</script>

<style scoped>
.section-benefits { padding-bottom: var(--section-gap); }

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
}

.benefit-card {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  padding: 28px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.benefit-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }

.benefit-icon {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px; height: 56px;
  font-size: 1.6rem;
  border-radius: 16px;
  background: linear-gradient(140deg, var(--surface-tint), var(--surface-2));
  border: 1px solid var(--line);
}
.benefit-card h3 { font-size: 1.22rem; margin-bottom: 6px; }
.benefit-card p { color: var(--text-soft); font-size: 0.98rem; }

@media (max-width: 720px) {
  .benefits-grid { grid-template-columns: 1fr; }
}
</style>
