<template>
  <section class="section-final-cta" id="get-started">
    <div class="container-medium">
      <div class="cta-box" v-reveal>
        <div class="cta-glow" aria-hidden="true"></div>
        <div class="cta-stars" aria-hidden="true"></div>
        <h2>Ready to stop guessing what to learn next?</h2>
        <p>Find a path that fits your goals and start building useful skills with more clarity and less overwhelm.</p>
        <div class="cta-buttons">
          <a href="#start" class="btn btn-light">Find your learning path</a>
          <a href="#paths" class="btn btn-ghost">Browse learning paths</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-final-cta { padding-bottom: var(--section-gap); }

.cta-box {
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: clamp(48px, 6vw, 80px) clamp(28px, 5vw, 72px);
  border-radius: var(--radius-lg);
  background:
    linear-gradient(135deg, var(--lv-brand-500) 0%, var(--lv-brand-600) 60%, var(--lv-brand-700) 100%);
  box-shadow: 0 24px 60px rgba(14, 159, 166, 0.35);
}
.cta-glow {
  position: absolute;
  top: -45%; left: 50%;
  width: 75%; height: 120%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(255, 255, 255, 0.35), transparent 60%);
  filter: blur(40px);
  pointer-events: none;
}
.cta-stars {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(1.5px 1.5px at 20% 30%, rgba(255,255,255,0.7), transparent),
    radial-gradient(1.5px 1.5px at 75% 25%, rgba(255,255,255,0.5), transparent),
    radial-gradient(1px 1px at 45% 65%, rgba(255,255,255,0.6), transparent),
    radial-gradient(1.5px 1.5px at 85% 70%, rgba(255,255,255,0.5), transparent),
    radial-gradient(1px 1px at 12% 75%, rgba(255,255,255,0.5), transparent);
  pointer-events: none;
}

.cta-box h2 {
  position: relative;
  color: #fff;
  font-size: clamp(1.9rem, 1.2rem + 2.6vw, 3rem);
  max-width: 640px;
  margin-inline: auto;
}
.cta-box p {
  position: relative;
  margin: 18px auto 0;
  max-width: 540px;
  color: var(--on-dark-soft);
  font-size: 1.12rem;
}
.cta-buttons {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  margin-top: 34px;
}

@media (max-width: 560px) {
  .cta-buttons { flex-direction: column; }
  .cta-buttons .btn { width: 100%; }
}
</style>
