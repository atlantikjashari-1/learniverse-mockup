<template>
  <section class="section-testimonials" id="testimonials">
    <div class="container-large">
      <div class="section-header" v-reveal>
        <span class="kicker">Success stories</span>
        <h2 class="section-title">Learning feels easier when you can see what's possible</h2>
        <p class="section-subtitle">Hear from learners who used Learniverse to stay focused, build confidence, and keep moving forward.</p>
      </div>

      <div class="testimonials-grid">
        <figure
          v-for="(t, i) in testimonials"
          :key="t.name"
          class="testimonial-card"
          v-reveal="i * 120"
        >
          <span class="quote-mark">&ldquo;</span>
          <blockquote>{{ t.quote }}</blockquote>
          <figcaption>
            <span class="avatar" :style="{ '--a': t.a, '--b': t.b }">{{ t.name.charAt(0) }}</span>
            <span class="t-meta">
              <strong>{{ t.name }}</strong>
              <span>{{ t.role }}</span>
            </span>
          </figcaption>
        </figure>
      </div>

      <div class="section-cta" v-reveal>
        <a href="#start" class="btn btn-primary">Find your learning path</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    quote: 'Learniverse helped me stop jumping between random courses. I finally had a clear path and could actually see my progress.',
    name: 'Amara K.',
    role: 'Student',
    a: '#2f6bff',
    b: '#38bdf8'
  },
  {
    quote: 'I wanted to build new skills without feeling lost. The structure made it much easier to stay motivated.',
    name: 'Daniel R.',
    role: 'Career Switcher',
    a: '#1d4ed8',
    b: '#7c9bff'
  },
  {
    quote: 'What I liked most was knowing exactly what to do next. It made learning feel achievable again.',
    name: 'Mei L.',
    role: 'Job Seeker',
    a: '#0ea5e9',
    b: '#60a5fa'
  }
]
</script>

<style scoped>
.section-testimonials { padding-bottom: var(--section-gap); }

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.testimonial-card {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 30px 28px 26px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.testimonial-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }

.quote-mark {
  font-family: var(--font-display);
  font-size: 4rem;
  line-height: 0.6;
  color: var(--azure);
  opacity: 0.5;
  height: 30px;
}
blockquote {
  margin: 0;
  font-size: 1.05rem;
  color: var(--text);
  flex-grow: 1;
}

figcaption {
  display: flex;
  align-items: center;
  gap: 13px;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--line);
}
.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px; height: 46px;
  border-radius: 50%;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.15rem;
  color: #fff;
  background: linear-gradient(135deg, var(--a), var(--b));
}
.t-meta { display: flex; flex-direction: column; }
.t-meta strong { font-weight: 700; color: var(--text); }
.t-meta span { font-size: 0.88rem; color: var(--text-mute); }

@media (max-width: 920px) {
  .testimonials-grid { grid-template-columns: 1fr; max-width: 540px; margin-inline: auto; }
}
</style>
