<template>
  <header class="navbar" :class="{ scrolled, 'menu-open': menuOpen }">
    <div class="navbar-container container-large">
      <a href="#top" class="nav-brand" aria-label="Learniverse home" @click="closeMenu">
        <BrandMark />
        <span class="brand-name">Learniverse</span>
      </a>

      <nav class="nav-menu" :class="{ open: menuOpen }" aria-label="Primary">
        <a v-for="link in links" :key="link.href" :href="link.href" class="nav-link" @click="closeMenu">
          {{ link.label }}
        </a>
        <div class="nav-actions-mobile">
          <a href="#" class="login-link" @click="closeMenu">Log in</a>
          <a href="#start" class="btn btn-primary btn-block" @click="closeMenu">Find your learning path</a>
        </div>
      </nav>

      <div class="nav-actions">
        <a href="#" class="login-link">Log in</a>
        <a href="#start" class="btn btn-primary btn-sm">Find your learning path</a>
      </div>

      <button
        class="nav-toggle"
        :class="{ open: menuOpen }"
        aria-label="Toggle navigation"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const links = [
  { href: '#paths', label: 'Learning Paths' },
  { href: '#how', label: 'How It Works' },
  { href: '#testimonials', label: 'Success Stories' },
  { href: '#faq', label: 'FAQ' }
]

const scrolled = ref(false)
const menuOpen = ref(false)
const closeMenu = () => (menuOpen.value = false)

const onScroll = () => (scrolled.value = window.scrollY > 12)

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  transition: background 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  border-bottom: 1px solid transparent;
}
.navbar.scrolled {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: saturate(160%) blur(14px);
  -webkit-backdrop-filter: saturate(160%) blur(14px);
  border-bottom-color: var(--line);
  box-shadow: var(--shadow-sm);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  height: 76px;
}

.nav-brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--blue-strong);
  font-weight: 800;
}
.brand-name {
  font-family: var(--font-display);
  font-size: 1.3rem;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-inline: auto;
}
.nav-link {
  font-weight: 600;
  font-size: 0.98rem;
  color: var(--text-soft);
  padding: 8px 14px;
  border-radius: var(--radius-pill);
  transition: color 0.2s ease, background 0.2s ease;
}
.nav-link:hover { color: var(--blue-strong); background: var(--surface-tint); }

.nav-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}
.login-link {
  font-weight: 600;
  color: var(--text);
  transition: color 0.2s ease;
}
.login-link:hover { color: var(--blue-strong); }

.nav-actions-mobile { display: none; }

/* Hamburger */
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 44px; height: 44px;
  align-items: center;
  justify-content: center;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 12px;
}
.nav-toggle span {
  display: block;
  width: 20px; height: 2px;
  background: var(--ink);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.2s ease;
}
.nav-toggle.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-toggle.open span:nth-child(2) { opacity: 0; }
.nav-toggle.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 900px) {
  .nav-menu, .nav-actions { display: none; }
  .nav-toggle { display: flex; }

  .nav-menu.open {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    position: absolute;
    top: 76px;
    left: 0; right: 0;
    margin: 0;
    padding: 18px var(--pad-x) 26px;
    background: rgba(255, 255, 255, 0.97);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--line);
    box-shadow: var(--shadow-md);
    animation: dropdown 0.28s ease;
  }
  .nav-menu.open .nav-link {
    padding: 12px 14px;
    font-size: 1.05rem;
  }
  .nav-actions-mobile {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 14px;
    padding-top: 16px;
    border-top: 1px solid var(--line);
  }
  .nav-actions-mobile .login-link { text-align: center; padding: 6px; }
}

@keyframes dropdown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: none; }
}
</style>
