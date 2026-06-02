<template>
  <section class="section-faq" id="faq">
    <div class="container-medium">
      <div class="section-header" v-reveal>
        <span class="kicker">FAQ</span>
        <h2 class="section-title">Questions new learners usually ask</h2>
      </div>

      <div class="faq-list" v-reveal>
        <div
          v-for="(item, i) in faqs"
          :key="item.q"
          class="faq-item"
          :class="{ open: openIndex === i }"
        >
          <button
            class="faq-q"
            :aria-expanded="openIndex === i"
            @click="toggle(i)"
          >
            <span>{{ item.q }}</span>
            <span class="faq-icon" aria-hidden="true"></span>
          </button>
          <div class="faq-answer" :style="answerStyle(i)">
            <p>{{ item.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqs = [
  {
    q: 'Do I need experience to start?',
    a: 'Not at all. Most paths begin at a beginner level and assume no prior background. You start with the fundamentals and build up step by step.'
  },
  {
    q: 'Can I browse before creating an account?',
    a: 'Yes. You can explore learning paths and preview lessons freely. You only create an account when you are ready to save your progress.'
  },
  {
    q: 'How do I know which path is right for me?',
    a: 'Start with the goal selector or our short guided flow. A few quick questions about your goal and level point you to the paths that fit best.'
  },
  {
    q: 'How long does a learning path take?',
    a: 'Most paths take 3–6 weeks at a relaxed, self-paced rhythm. Because everything is self-paced, you can move faster or slower to fit your schedule.'
  },
  {
    q: 'What can I learn on Learniverse?',
    a: 'Practical, real-world skills across digital tools, professional communication, and career growth — with new paths added regularly.'
  },
  {
    q: 'What happens after I sign up?',
    a: 'Your recommended path is saved, your progress starts tracking, and you can pick up exactly where you left off across any device.'
  },
  {
    q: 'Is Learniverse free?',
    a: 'You can start for free and explore a range of paths. Some advanced paths and features are available on a paid plan.'
  },
  {
    q: 'Do I get a certificate?',
    a: 'Yes. When you complete a learning path you earn a shareable certificate you can add to your CV or professional profile.'
  }
]

const openIndex = ref<number | null>(0)
const toggle = (i: number) => (openIndex.value = openIndex.value === i ? null : i)
const answerStyle = (i: number) => ({
  gridTemplateRows: openIndex.value === i ? '1fr' : '0fr'
})
</script>

<style scoped>
.section-faq { padding-bottom: var(--section-gap); }

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.faq-item {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}
.faq-item.open {
  border-color: var(--line-strong);
  box-shadow: var(--shadow-md);
}

.faq-q {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  text-align: left;
  padding: 22px 24px;
  background: none;
  border: none;
  font-family: var(--font-display);
  font-size: 1.12rem;
  font-weight: 600;
  color: var(--text);
}
.faq-q:hover { color: var(--blue-strong); }

.faq-icon {
  position: relative;
  flex-shrink: 0;
  width: 24px; height: 24px;
}
.faq-icon::before,
.faq-icon::after {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  width: 13px; height: 2.4px;
  border-radius: 2px;
  background: var(--blue-strong);
  transform: translate(-50%, -50%);
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.faq-icon::after { transform: translate(-50%, -50%) rotate(90deg); }
.faq-item.open .faq-icon::after { transform: translate(-50%, -50%) rotate(0); opacity: 0; }

.faq-answer {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.32s cubic-bezier(.2,.7,.2,1);
}
.faq-answer > p {
  overflow: hidden;
  min-height: 0;
  margin: 0;
  padding: 0 24px;
  color: var(--text-soft);
  font-size: 1rem;
  transition: padding 0.32s ease;
}
.faq-item.open .faq-answer > p {
  padding-bottom: 24px;
}

@media (max-width: 560px) {
  .faq-q { padding: 18px 18px; font-size: 1.02rem; }
  .faq-answer > p { padding-inline: 18px; }
  .faq-item.open .faq-answer > p { padding-bottom: 20px; }
}
</style>
