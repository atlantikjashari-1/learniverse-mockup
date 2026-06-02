// Registers a global `v-reveal` directive that fades elements in on scroll.
// Universal plugin: the directive is registered on both server and client so
// SSR can resolve it, while the IntersectionObserver runs on the client only.
// Usage: <div v-reveal>  or  <div v-reveal="120"> (delay in ms)
export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null

  if (import.meta.client) {
    observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = el.dataset.revealDelay
            if (delay) el.style.transitionDelay = `${delay}ms`
            el.classList.add('is-visible')
            obs.unobserve(el)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
  }

  nuxtApp.vueApp.directive('reveal', {
    // Allows the directive to be used in server-rendered markup.
    getSSRProps() {
      return {}
    },
    mounted(el: HTMLElement, binding) {
      el.classList.add('reveal')
      if (binding.value != null) el.dataset.revealDelay = String(binding.value)
      observer?.observe(el)
    },
    unmounted(el: HTMLElement) {
      observer?.unobserve(el)
    }
  })
})
