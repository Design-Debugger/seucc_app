<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AOS from 'aos'

const stats = [
  {
    count: 20,
    label: 'Faculty Advisors',
    icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
    gradient: 'from-blue-500 to-cyan-400'
  },
  {
    count: 1000,
    label: 'Active Members',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    gradient: 'from-purple-500 to-pink-400'
  },
  {
    count: 500,
    label: 'Alumni Network',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    gradient: 'from-green-500 to-emerald-400'
  },
  {
    count: 50,
    label: 'Successful Projects',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
    gradient: 'from-orange-500 to-yellow-400'
  }
]

const counters = ref(stats.map(stat => ({ ...stat, current: 0 })))

const animateCounter = (index: number) => {
  const target = stats[index].count
  const duration = 2000 // 2 seconds
  const steps = 60
  const increment = target / steps
  let current = 0
  
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    counters.value[index].current = Math.round(current)
  }, duration / steps)
}

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 50
  })

  // Start counter animations when section is in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stats.forEach((_, index) => animateCounter(index))
        observer.disconnect()
      }
    })
  })

  const section = document.querySelector('#counter-section')
  if (section) observer.observe(section)
})
</script>

<template>
  <section id="counter-section" class="overflow-hidden py-20 bg-gradient-to-b from-gray-900 to-black">
    <div class="container px-4 mx-auto">
      <!-- Section Header -->
      <div class="mx-auto mb-16 max-w-3xl text-center" data-aos="fade-up">
        <h2 class="mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
          Our Impact
        </h2>
        <p class="text-lg text-gray-400">
          Growing stronger with every achievement
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div 
          v-for="(stat, index) in counters" 
          :key="index"
          :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
          :data-aos-delay="index * 100"
          class="relative p-6 rounded-xl border backdrop-blur-xl transition-all duration-300 bg-gray-800/30 border-gray-700/50 hover:border-cyan-500/50 group"
        >
          <!-- Icon -->
          <div class="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-gray-700/30">
            <svg 
              class="w-6 h-6" 
              :class="`text-gradient-${stat.gradient}`"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                :d="stat.icon"
              />
            </svg>
          </div>

          <!-- Counter -->
          <div class="mb-2">
            <span class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r" 
                  :class="`${stat.gradient}`">
              {{ stat.current }}+
            </span>
          </div>

          <!-- Label -->
          <p class="text-lg text-gray-400">{{ stat.label }}</p>

          <!-- Decorative gradient -->
          <div 
            class="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-10"
            :class="`bg-gradient-to-br ${stat.gradient}`"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-gradient-from-blue-500 { @apply text-blue-500; }
.text-gradient-from-purple-500 { @apply text-purple-500; }
.text-gradient-from-green-500 { @apply text-green-500; }
.text-gradient-from-orange-500 { @apply text-orange-500; }
</style> 