<template>
  <section class="section-paths" id="paths">
    <div class="container-large">
      <div class="section-header" v-reveal>
        <span class="kicker">Featured paths</span>
        <h2 class="section-title">Start with a path, not a pile of content</h2>
        <p class="section-subtitle">
          Explore structured learning paths designed to help you make useful
          progress with less overwhelm.
        </p>
      </div>

      <div class="paths-grid">
        <article
          v-for="(path, i) in paths"
          :key="path.title"
          class="path-card"
          v-reveal="i * 100"
        >
          <div class="path-card-top">
            <span class="path-tag">{{ path.category }}</span>
            <span class="path-meta">{{ path.meta }}</span>
          </div>
          <h3>{{ path.title }}</h3>
          <p>{{ path.body }}</p>
          <div class="path-learn">
            <span class="path-learn-label">What you'll learn</span>
            <ul>
              <li v-for="item in path.learn" :key="item">{{ item }}</li>
            </ul>
          </div>
          <a href="#start" class="btn btn-soft btn-block">Preview path</a>
        </article>
      </div>

      <div class="section-cta" v-reveal>
        <a href="#paths" class="btn btn-secondary">Browse all learning paths</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const paths = [
  {
    category: "Digital Skills",
    meta: "Beginner • 4 weeks",
    title: "Digital Skills Foundations",
    body: "Build essential digital skills you can use in study, work, and everyday life.",
    learn: [
      "Core digital tools",
      "Online collaboration basics",
      "Task and file organization",
    ],
  },
  {
    category: "Professional Skills",
    meta: "Beginner • 3 weeks",
    title: "Communication for Work",
    body: "Improve how you write, speak, and communicate in professional settings.",
    learn: [
      "Clear email writing",
      "Presentation basics",
      "Workplace communication",
    ],
  },
  {
    category: "Career Growth",
    meta: "Beginner • 5 weeks",
    title: "Career Switch Starter",
    body: "Build a clear starting point for moving into a new field.",
    learn: [
      "Identifying transferable skills",
      "Building a learning plan",
      "Gaining confidence for your next step",
    ],
  },
];
</script>

<style scoped>
.section-paths {
  padding-bottom: var(--section-gap);
}

.paths-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.path-card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 28px 26px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}
.path-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: var(--line-strong);
}

.path-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.path-tag {
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--blue-strong);
  background: var(--surface-tint);
  padding: 5px 11px;
  border-radius: var(--radius-pill);
}
.path-meta {
  font-size: 0.85rem;
  color: var(--text-mute);
  font-weight: 600;
}

.path-card h3 {
  font-size: 1.4rem;
}
.path-card > p {
  color: var(--text-soft);
  font-size: 0.98rem;
}

.path-learn {
  padding-top: 16px;
  margin-top: 2px;
  border-top: 1px solid var(--line);
  flex-grow: 1;
}
.path-learn-label {
  display: block;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-mute);
  margin-bottom: 12px;
}
.path-learn ul {
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.path-learn li {
  position: relative;
  padding-left: 26px;
  font-size: 0.95rem;
  color: var(--text-soft);
  font-weight: 500;
}
.path-learn li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 7px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--surface-tint);
}
.path-learn li::after {
  content: "";
  position: absolute;
  left: 5px;
  top: 10px;
  width: 4px;
  height: 7px;
  border: solid var(--blue);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.path-card .btn {
  margin-top: 6px;
}

@media (max-width: 920px) {
  .paths-grid {
    grid-template-columns: 1fr;
    max-width: 480px;
    margin-inline: auto;
  }
}
</style>
