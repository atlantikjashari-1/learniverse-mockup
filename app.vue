<template>
  <div class="page-wrapper">
    <!-- Ambient background -->
    <div class="bg-atmosphere" aria-hidden="true">
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>
      <div class="glow glow-3"></div>
      <div class="grid-overlay"></div>
    </div>

    <AppHeader />

    <main id="top">
      <HeroSection />
      <TrustBar />
      <GoalSelector />
      <HowItWorks />
      <FeaturedPaths />
      <WhyLearniverse />
      <Testimonials />
      <FaqSection />
      <FinalCta />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Components are auto-imported by Nuxt from /components
</script>

<style>
.page-wrapper {
  position: relative;
  z-index: 1;
}

/* Background atmosphere */
.bg-atmosphere {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}
.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.55;
}
.glow-1 {
  width: 620px; height: 620px;
  top: -240px; left: -160px;
  background: radial-gradient(circle, rgba(28, 172, 180, 0.34), transparent 70%);
}
.glow-2 {
  width: 520px; height: 520px;
  top: 18%; right: -200px;
  background: radial-gradient(circle, rgba(22, 189, 202, 0.26), transparent 70%);
}
.glow-3 {
  width: 560px; height: 560px;
  bottom: -220px; left: 30%;
  background: radial-gradient(circle, rgba(126, 220, 226, 0.22), transparent 70%);
}
.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(28, 172, 180, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(28, 172, 180, 0.05) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 80% 50% at 50% 0%, #000 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 80% 50% at 50% 0%, #000 30%, transparent 75%);
}
</style>
