<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentImage = ref(0)
const isVisible = ref(false)
const backgroundImages = [
  'https://www.cloudfest.com/wp-content/uploads/2023/04/hackathon_winner.jpg',
  'https://www.studentfarm.psu.edu/wp-content/uploads/sites/12602/2015/09/First-Student-Farm-Club-Meeting-2015-1024x527.jpg',
  'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202211/Michael%20Roytek%20ICPC%20hall%20packed%20with%20teams.jpg?itok=A-33v-xC',
  'https://icpc.global/community/world-finals-champions/2018.jpg',
]

const achievements = [
  {
    icon: '👥',
    title: 'Innovation Hub',
    desc: '500+ members driving tech innovation',
  },
  {
    icon: '🚀',
    title: 'Tech Workshops',
    desc: 'Weekly hands-on learning sessions',
  },
  {
    icon: '🌐',
    title: 'Global Network',
    desc: 'Connect with industry leaders',
  },
]

// Add transition state
const pageLoaded = ref(false)

onMounted(() => {
  isVisible.value = true
  // Add small delay for page load transition
  setTimeout(() => {
    pageLoaded.value = true
  }, 100)

  const interval = window.setInterval(() => {
    currentImage.value = (currentImage.value + 1) % backgroundImages.length
  }, 5000)

  return () => clearInterval(interval)
})
</script>

<template>
  <section
    class="relative min-h-screen py-32 bg-gradient-to-b from-gray-900 via-[#0f172a] to-black overflow-hidden transition-opacity duration-1000"
    :class="pageLoaded ? 'opacity-100' : 'opacity-0'"
  >
    <!-- Background Images with enhanced transition -->
    <div
      v-for="(image, index) in backgroundImages"
      :key="image"
      class="absolute inset-0 transition-all duration-1000 ease-in-out transform"
      :class="currentImage === index ? 'opacity-60 scale-105' : 'opacity-0 scale-100'"
      :style="{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(2px) brightness(0.8)',
      }"
    />

    <!-- Gradient Overlay with animation -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 animate-gradient"
    />

    <!-- SVG Pattern Overlay with floating animation -->
    <div class="absolute inset-0 opacity-20 animate-float">
      <svg
        class="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="currentColor"
              stroke-width="0.5"
              class="text-cyan-500/20"
            />
            <circle cx="50" cy="50" r="1" class="fill-cyan-500/40" />
            <circle cx="0" cy="0" r="1" class="fill-cyan-500/40" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div
      class="container flex relative flex-col justify-center items-center px-4 mx-auto min-h-screen sm:px-6"
    >
      <div
        class="z-10 py-20 mx-auto w-full max-w-5xl transition-all duration-1000 md:py-28 lg:py-32"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <!-- Title Section with staggered animation -->
        <div class="mb-12 text-center md:mb-16 lg:mb-20">
          <h1
            class="mb-6 text-4xl font-bold leading-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 sm:text-5xl md:text-6xl lg:text-7xl animate-title"
          >
            Southeast Computer Club
          </h1>
          <p
            class="px-4 text-lg text-gray-300 sm:text-xl md:text-2xl lg:text-3xl sm:px-6 md:px-0 animate-fade-in-up"
          >
            Join our community of tech enthusiasts dedicated to learning, innovation, and excellence
          </p>
        </div>

        <!-- Achievement Cards with staggered animation -->
        <div
          class="grid grid-cols-1 gap-6 px-4 mb-12 sm:grid-cols-3 md:gap-8 lg:gap-10 md:mb-16 lg:mb-20 sm:px-6 md:px-0"
        >
          <div
            v-for="(item, index) in achievements"
            :key="item.title"
            class="p-6 rounded-2xl border backdrop-blur-md md:p-8 bg-white/5 border-white/10"
            :style="{ animationDelay: `${index * 200}ms` }"
          >
            <div class="mb-4 text-4xl md:text-5xl">
              {{ item.icon }}
            </div>
            <h3 class="mb-2 text-lg font-semibold text-white md:text-xl">
              {{ item.title }}
            </h3>
            <p class="text-sm leading-relaxed text-gray-400 md:text-base">
              {{ item.desc }}
            </p>
          </div>
        </div>

        <!-- CTA Buttons with hover animations -->
        <div
          class="flex flex-col gap-4 justify-center items-center px-4 sm:flex-row sm:gap-6 md:gap-8 sm:px-0 animate-fade-in-up"
          style="animation-delay: 600ms"
        >
          <router-link
            to="/membership"
            class="px-8 py-3.5 w-full text-base font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl md:text-lg sm:w-auto"
          >
            Join Our Community
          </router-link>
          <router-link
            to="/events"
            class="px-8 py-3.5 w-full text-base font-medium text-white rounded-xl border md:text-lg sm:w-auto border-white/10"
          >
            <span class="flex gap-2 justify-center items-center">
              Explore Events
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Essential Professional Animations */

@keyframes float {
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  25% {
    transform: translate3d(5px, -5px, 0) rotate(0.5deg);
  }
  50% {
    transform: translate3d(0, -10px, 0) rotate(0deg);
  }
  75% {
    transform: translate3d(-5px, -5px, 0) rotate(-0.5deg);
  }
  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
}

@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  60% {
    transform: scale(1.02) translateY(-5px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.animate-float {
  animation: float 12s ease-in-out infinite;
  will-change: transform;
}

.animate-shimmer {
  background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.1), transparent);
  background-size: 1000px 100%;
  animation: shimmer 8s linear infinite;
}

.animate-gradient-flow {
  background-size: 200% 200%;
  animation: gradientFlow 8s ease infinite;
}

.animate-fade-in-scale {
  animation: fadeInScale 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

/* Apply animations to elements */
.achievement-card {
  @apply animate-fade-in-scale;
}

.hero-title {
  @apply animate-gradient-flow;
  background: linear-gradient(120deg, #06b6d4, #3b82f6, #06b6d4);
  -webkit-background-clip: text;
}

.pattern-overlay {
  @apply animate-float animate-shimmer;
}

/* Stagger children animations */
.stagger-children > * {
  opacity: 0;
  animation: fadeInScale 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.stagger-children > *:nth-child(1) {
  animation-delay: 0.1s;
}
.stagger-children > *:nth-child(2) {
  animation-delay: 0.2s;
}
.stagger-children > *:nth-child(3) {
  animation-delay: 0.3s;
}

/* Smooth transitions */
.smooth-transition {
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

/* Previous responsive styles remain the same */

/* Add to existing styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
