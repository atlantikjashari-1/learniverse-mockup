<template>
  <section class="section-goals" id="goals">
    <div class="container-large">
      <div class="section-header" v-reveal>
        <span class="kicker">Goal selector</span>
        <h2 class="section-title">Start with what you want to achieve</h2>
        <p class="section-subtitle">Choose a path based on your goal, your level, and where you want to go next.</p>
      </div>

      <div class="goals-grid">
        <article
          v-for="(goal, i) in goals"
          :key="goal.title"
          class="goal-card"
          v-reveal="i * 80"
        >
          <span class="goal-icon">{{ goal.icon }}</span>
          <h3>{{ goal.title }}</h3>
          <p>{{ goal.body }}</p>
          <a href="#paths" class="card-link">{{ goal.cta }} <span class="arrow">→</span></a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const goals = [
  {
    icon: '🎓',
    title: "I'm a student",
    body: 'Build useful skills that support your studies and prepare you for projects, internships, and future opportunities.',
    cta: 'Explore student paths'
  },
  {
    icon: '💼',
    title: "I'm looking for a job",
    body: 'Focus on practical skills that help you feel more confident in applications, interviews, and real work situations.',
    cta: 'See job-ready paths'
  },
  {
    icon: '🧭',
    title: "I'm switching careers",
    body: 'Follow a structured path into a new field without feeling overwhelmed by too many choices.',
    cta: 'View career-change paths'
  },
  {
    icon: '🌱',
    title: 'I want to keep learning',
    body: 'Grow your skills with flexible, guided learning that fits your pace and interests.',
    cta: 'Browse growth paths'
  }
]
</script>

<style scoped>
.section-goals { padding-bottom: var(--section-gap); }

.goals-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}

.goal-card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px 24px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  transition: transform 0.25s cubic-bezier(.2,.8,.2,1), box-shadow 0.25s ease, border-color 0.25s ease;
}
.goal-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: var(--line-strong);
}

.goal-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px; height: 52px;
  font-size: 1.5rem;
  border-radius: 14px;
  background: var(--surface-tint);
  margin-bottom: 4px;
}
.goal-card h3 { font-size: 1.2rem; }
.goal-card p {
  font-size: 0.96rem;
  color: var(--text-soft);
  flex-grow: 1;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
  font-size: 0.94rem;
  color: var(--blue-strong);
  margin-top: 6px;
}
.card-link .arrow { transition: transform 0.25s ease; }
.goal-card:hover .card-link .arrow { transform: translateX(5px); }

@media (max-width: 980px) {
  .goals-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .goals-grid { grid-template-columns: 1fr; }
}
</style>
