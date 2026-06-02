<template>
  <section class="section-hero" id="start">
    <div class="container-large">
      <div class="hero-grid">
        <div class="hero-content" v-reveal>
          <span class="eyebrow"><span class="eyebrow-dot"></span> Your map for what to learn next</span>
          <h1 class="hero-title">
            Find the right learning path for your <span class="text-grad">next step</span>
          </h1>
          <p class="hero-subtitle">
            Learniverse helps students, job seekers, and career switchers build practical
            skills through guided learning paths that make it easier to know what to learn next.
          </p>
          <div class="hero-button-row">
            <a href="#start" class="btn btn-primary">Find your learning path</a>
            <a href="#paths" class="btn btn-secondary">Browse learning paths</a>
          </div>
          <p class="hero-microcopy">
            <span>Beginner-friendly</span><span class="dot">•</span>
            <span>Self-paced</span><span class="dot">•</span>
            <span>Built for real progress</span>
          </p>
        </div>

        <!-- Product preview mockup -->
        <div class="hero-visual" v-reveal="120">
          <div class="path-preview" ref="previewEl">
            <div class="pp-header">
              <div class="pp-titleblock">
                <span class="pp-category">Digital Skills</span>
                <h3 class="pp-title">Digital Skills Foundations</h3>
              </div>
              <span class="pp-badge">In progress</span>
            </div>

            <div class="pp-meta">
              <span class="chip">
                <svg viewBox="0 0 24 24" width="14" height="14"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2" /><path d="M12 7v5l3.5 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>
                4 weeks
              </span>
              <span class="chip">
                <svg viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M3 13h4v8H3zM10 8h4v13h-4zM17 3h4v18h-4z" /></svg>
                Beginner
              </span>
            </div>

            <div class="pp-progress">
              <div class="pp-progress-top">
                <span>Your progress</span>
                <span class="pp-pct">{{ pct }}%</span>
              </div>
              <div class="pp-bar"><div class="pp-bar-fill" :style="{ width: pct + '%' }"></div></div>
            </div>

            <ul class="pp-lessons">
              <li class="done"><span class="tick"></span> Getting started with core digital tools</li>
              <li class="done"><span class="tick"></span> Online collaboration basics</li>
              <li class="active"><span class="tick"></span> Task and file organization</li>
              <li><span class="tick"></span> Staying safe &amp; confident online</li>
            </ul>
          </div>

          <div class="float-chip float-a">+ Next lesson unlocked</div>
          <div class="float-chip float-b"><span class="streak-dot"></span> 5-day streak</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const pct = ref(0)
const previewEl = ref<HTMLElement | null>(null)
let animated = false

const animateBar = () => {
  if (animated) return
  animated = true
  const target = 65
  const start = performance.now()
  const dur = 1400
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / dur)
    const eased = 1 - Math.pow(1 - t, 3)
    pct.value = Math.round(eased * target)
    if (t < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  if (!previewEl.value) return
  const io = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateBar()
        io.disconnect()
      }
    },
    { threshold: 0.4 }
  )
  io.observe(previewEl.value)
})
</script>

<style scoped>
.section-hero {
  padding-top: clamp(56px, 7vw, 96px);
  padding-bottom: var(--section-gap);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 56px;
}

/* ---- Content ---- */
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-weight: 700;
  font-size: 0.82rem;
  letter-spacing: 0.04em;
  color: var(--blue-strong);
  background: var(--surface);
  border: 1px solid var(--line-strong);
  padding: 8px 16px;
  border-radius: var(--radius-pill);
  box-shadow: var(--shadow-sm);
}
.eyebrow-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--sky);
  box-shadow: 0 0 0 4px rgba(56, 189, 248, 0.25);
}

.hero-title {
  margin-top: 22px;
  font-size: clamp(2.5rem, 1.4rem + 4.4vw, 4.3rem);
  font-weight: 600;
}
.hero-subtitle {
  margin-top: 24px;
  font-size: 1.18rem;
  color: var(--text-soft);
  max-width: 540px;
}
.hero-button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}
.hero-microcopy {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
  color: var(--text-mute);
  font-weight: 600;
  font-size: 0.95rem;
}
.hero-microcopy .dot { color: var(--blue); }

/* ---- Product preview ---- */
.hero-visual {
  position: relative;
  justify-self: center;
  width: 100%;
  max-width: 440px;
}
.path-preview {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: 26px;
  box-shadow: var(--shadow-lg);
  z-index: 2;
}
.path-preview::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(160deg, rgba(47,107,255,0.5), transparent 40%);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.pp-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}
.pp-category {
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--blue);
}
.pp-title {
  font-size: 1.35rem;
  margin-top: 6px;
}
.pp-badge {
  flex-shrink: 0;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--blue-strong);
  background: var(--surface-tint);
  padding: 6px 11px;
  border-radius: var(--radius-pill);
}

.pp-meta {
  display: flex;
  gap: 10px;
  margin-top: 16px;
}
.chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-soft);
  background: var(--bg);
  border: 1px solid var(--line);
  padding: 6px 11px;
  border-radius: var(--radius-pill);
}
.chip svg { color: var(--blue); }

.pp-progress { margin-top: 22px; }
.pp-progress-top {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-soft);
  margin-bottom: 9px;
}
.pp-pct { color: var(--blue-strong); }
.pp-bar {
  height: 9px;
  border-radius: var(--radius-pill);
  background: var(--surface-2);
  overflow: hidden;
}
.pp-bar-fill {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--blue), var(--sky));
  transition: width 0.1s linear;
}

.pp-lessons {
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.pp-lessons li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-soft);
}
.tick {
  flex-shrink: 0;
  width: 22px; height: 22px;
  border-radius: 50%;
  border: 2px solid var(--line-strong);
  position: relative;
}
.pp-lessons li.done { color: var(--text); }
.pp-lessons li.done .tick {
  background: var(--blue);
  border-color: var(--blue);
}
.pp-lessons li.done .tick::after {
  content: '';
  position: absolute;
  left: 6px; top: 3px;
  width: 5px; height: 9px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
.pp-lessons li.active { color: var(--text); font-weight: 600; }
.pp-lessons li.active .tick {
  border-color: var(--blue);
  box-shadow: 0 0 0 4px rgba(47, 107, 255, 0.16);
}
.pp-lessons li.active .tick::after {
  content: '';
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  background: var(--blue);
}

/* ---- Floating chips ---- */
.float-chip {
  position: absolute;
  z-index: 3;
  background: var(--surface);
  border: 1px solid var(--line);
  box-shadow: var(--shadow-md);
  border-radius: var(--radius-pill);
  padding: 10px 16px;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.float-a {
  top: -18px; right: -16px;
  color: var(--blue-strong);
  animation: floaty 5s ease-in-out infinite;
}
.float-b {
  bottom: -16px; left: -22px;
  animation: floaty 6s ease-in-out infinite 0.6s;
}
.streak-dot {
  width: 9px; height: 9px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 4px rgba(255, 176, 32, 0.22);
}

@keyframes floaty {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-9px); }
}

@media (max-width: 920px) {
  .hero-grid { grid-template-columns: 1fr; gap: 52px; text-align: center; }
  .hero-content { display: flex; flex-direction: column; align-items: center; }
  .hero-subtitle { max-width: 600px; }
  .hero-visual { order: 2; }
}
@media (max-width: 720px) {
  .hero-button-row { width: 100%; flex-direction: column; }
  .hero-button-row .btn { width: 100%; }
  .float-a { right: 4px; }
  .float-b { left: 4px; }
}
@media (prefers-reduced-motion: reduce) {
  .float-a, .float-b { animation: none; }
}
</style>
