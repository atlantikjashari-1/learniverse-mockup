<template>
  <section class="section-steps" id="how">
    <div class="container-large">
      <div class="section-header" v-reveal>
        <span class="kicker">How it works</span>
        <h2 class="section-title">A simpler way to keep learning</h2>
        <p class="section-subtitle">No more jumping between random courses. Learniverse gives you a clearer way to build skills step by step.</p>
      </div>

      <div class="steps-grid">
        <div class="step-line" aria-hidden="true"></div>
        <article
          v-for="(step, i) in steps"
          :key="step.title"
          class="step-card"
          v-reveal="i * 120"
        >
          <span class="step-num">{{ i + 1 }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.body }}</p>
        </article>
      </div>

      <div class="section-cta" v-reveal>
        <a href="#start" class="btn btn-primary">Find your learning path</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  { title: 'Choose your goal', body: 'Start with what you want to achieve.' },
  { title: 'Follow a guided path', body: 'Get a structured sequence of lessons and courses.' },
  { title: 'Track your progress', body: "See what you've completed and what comes next." }
]
</script>

<style scoped>
.section-steps { padding-bottom: var(--section-gap); }

.steps-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* dotted connector behind the cards */
.step-line {
  position: absolute;
  top: 44px;
  left: 16%;
  right: 16%;
  height: 2px;
  background-image: linear-gradient(90deg, var(--line-strong) 50%, transparent 50%);
  background-size: 12px 2px;
  background-repeat: repeat-x;
  z-index: 0;
}

.step-card {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 36px 26px 30px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.step-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }

.step-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px; height: 56px;
  margin-bottom: 18px;
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, var(--blue), var(--blue-strong));
  border-radius: 50%;
  box-shadow: var(--shadow-blue);
}
.step-card h3 { font-size: 1.28rem; margin-bottom: 8px; }
.step-card p { color: var(--text-soft); font-size: 1rem; }

@media (max-width: 820px) {
  .steps-grid { grid-template-columns: 1fr; gap: 20px; }
  .step-line { display: none; }
}
</style>
