<template>
  <footer class="footer">
    <div class="footer-container container-large">
      <div class="footer-brand">
        <a href="#top" class="nav-brand">
          <BrandMark :size="26" />
          <span class="brand-name">Learniverse</span>
        </a>
        <p class="footer-tag">A clearer way to build skills, one guided path at a time.</p>
      </div>

      <div class="footer-cols">
        <div v-for="col in columns" :key="col.title" class="footer-col">
          <h4>{{ col.title }}</h4>
          <a v-for="link in col.links" :key="link.label" :href="link.href">{{ link.label }}</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom container-large">
      <span>© {{ year }} Learniverse. All rights reserved.</span>
      <div class="footer-legal">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()

const columns = [
  {
    title: 'Learn',
    links: [
      { label: 'Learning Paths', href: '#paths' },
      { label: 'How It Works', href: '#how' },
      { label: 'Goal Selector', href: '#goals' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'Why Learniverse', href: '#why' },
      { label: 'Success Stories', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' }
    ]
  },
  {
    title: 'Get started',
    links: [
      { label: 'Find your path', href: '#start' },
      { label: 'Log in', href: '#' },
      { label: 'Create account', href: '#' }
    ]
  }
]
</script>

<style scoped>
.footer {
  position: relative;
  background: linear-gradient(135deg, var(--lv-brand-900) 0%, var(--lv-brand-800) 55%, #013b40 100%);
  color: var(--on-dark-soft);
  padding-top: 64px;
}

.footer-container {
  display: grid;
  grid-template-columns: 1.3fr 2fr;
  gap: 48px;
  padding-bottom: 48px;
}

.footer-brand .nav-brand { color: var(--sky); }
.footer-brand .brand-name {
  font-family: var(--font-display);
  font-size: 1.3rem;
  color: #fff;
}
.footer-tag {
  margin-top: 16px;
  max-width: 300px;
  font-size: 0.98rem;
  color: var(--on-dark-soft);
}

.footer-cols {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.footer-col { display: flex; flex-direction: column; gap: 12px; }
.footer-col h4 {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 4px;
}
.footer-col a {
  color: var(--on-dark-soft);
  font-size: 0.96rem;
  transition: color 0.2s ease;
  width: fit-content;
}
.footer-col a:hover { color: var(--sky); }

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 14px;
  padding-top: 26px;
  padding-bottom: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
}
.footer-legal { display: flex; gap: 22px; }
.footer-legal a { color: var(--on-dark-soft); transition: color 0.2s ease; }
.footer-legal a:hover { color: var(--sky); }

@media (max-width: 820px) {
  .footer-container { grid-template-columns: 1fr; gap: 36px; }
}
@media (max-width: 560px) {
  .footer-cols { grid-template-columns: 1fr 1fr; }
  .footer-bottom { flex-direction: column; align-items: flex-start; }
}
</style>
