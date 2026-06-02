<template>
  <section class="section-trust" ref="rootEl" v-reveal>
    <div class="container-large">
      <div class="trust-grid">
        <div class="trust-stats">
          <div class="trust-item">
            <span class="trust-num">{{ formatted(learners) }}+</span>
            <span class="trust-label">learners building skills</span>
          </div>
          <div class="trust-divider"></div>
          <div class="trust-item">
            <span class="trust-num">{{ paths }}+</span>
            <span class="trust-label">guided learning paths</span>
          </div>
        </div>

        <div class="trust-logos">
          <span class="trust-caption">Trusted by learners from</span>
          <div class="logo-row">
            <span v-for="name in logos" :key="name" class="logo-mark">{{ name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const logos = ['Northgate', 'Civora', 'BrightLab', 'Meridian', 'OpenSkills']

const learners = ref(0)
const paths = ref(0)
const rootEl = ref<HTMLElement | null>(null)
let started = false

const formatted = (n: number) => n.toLocaleString('en-US')

const countTo = (target: number, set: (v: number) => void, dur = 1600) => {
  const start = performance.now()
  const step = (now: number) => {
    const t = Math.min(1, (now - start) / dur)
    const eased = 1 - Math.pow(1 - t, 3)
    set(Math.round(eased * target))
    if (t < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  if (!rootEl.value) return
  const io = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !started) {
        started = true
        countTo(48000, (v) => (learners.value = v))
        countTo(120, (v) => (paths.value = v))
        io.disconnect()
      }
    },
    { threshold: 0.4 }
  )
  io.observe(rootEl.value)
})
</script>

<style scoped>
.section-trust {
  padding-bottom: var(--section-gap);
}
.trust-grid {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;
  padding: 30px 38px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.trust-stats {
  display: flex;
  align-items: center;
  gap: 34px;
}
.trust-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.trust-num {
  font-family: var(--font-display);
  font-size: clamp(1.7rem, 1.2rem + 1.4vw, 2.3rem);
  font-weight: 600;
  color: var(--blue-strong);
  line-height: 1;
  font-variant-numeric: tabular-nums;
}
.trust-label {
  font-size: 0.92rem;
  color: var(--text-mute);
  font-weight: 600;
}
.trust-divider {
  width: 1px;
  height: 46px;
  background: var(--line-strong);
}

.trust-logos {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.trust-caption {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-mute);
}
.logo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
}
.logo-mark {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.12rem;
  color: var(--text-soft);
  opacity: 0.72;
  transition: opacity 0.2s ease, color 0.2s ease;
}
.logo-mark:hover { opacity: 1; color: var(--blue-strong); }

@media (max-width: 860px) {
  .trust-grid { flex-direction: column; align-items: flex-start; }
}
@media (max-width: 560px) {
  .trust-stats { gap: 20px; }
  .trust-divider { height: 38px; }
  .trust-grid { padding: 26px 24px; }
}
</style>
