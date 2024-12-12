<script setup lang="ts">
import { onMounted } from 'vue'
import AOS from 'aos'

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 50,
  })
})

const achievements = [
  {
    year: '2023',
    title: 'National Hackathon Champions',
    description: 'First place in Bangladesh National Collegiate Programming Contest',
    image:
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=400',
    category: 'Competition',
    badge: '1st Place',
  },
  {
    year: '2023',
    title: 'Best Tech Club Award',
    description: 'Recognized as the top university tech club by Bangladesh ICT Division',
    image:
      'https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?auto=format&fit=crop&q=80&w=400',
    category: 'Recognition',
    badge: 'National Award',
  },
  {
    year: '2022',
    title: 'Innovation Challenge Winners',
    description: 'Won the BASIS Student Innovation Challenge with AI-powered solution',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400',
    category: 'Innovation',
    badge: 'Winner',
  },
  {
    year: '2022',
    title: 'International Collaboration',
    description: 'Partnership with Google Developer Students Club for tech workshops',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400',
    category: 'Partnership',
    badge: 'Global',
  },
]
</script>

<template>
  <section class="overflow-hidden py-20 bg-gradient-to-b from-black to-gray-900">
    <div class="container px-4 mx-auto">
      <!-- Section Header -->
      <div class="mx-auto mb-16 max-w-3xl text-center" data-aos="fade-up">
        <h2
          class="mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
        >
          Club Achievements
        </h2>
        <p class="text-lg text-gray-400">Celebrating our milestones and successes</p>
      </div>

      <!-- Achievement Timeline -->
      <div class="relative">
        <!-- Timeline Line -->
        <div
          class="absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600 transform -translate-x-1/2"
        ></div>

        <!-- Achievement Cards -->
        <div class="space-y-16">
          <div
            v-for="(achievement, index) in achievements"
            :key="index"
            class="relative"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
          >
            <!-- Timeline Dot -->
            <div
              class="absolute left-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-900 transform -translate-x-1/2 -translate-y-1/2"
            ></div>

            <!-- Card -->
            <div
              class="relative w-full md:w-[calc(50%-2rem)] ml-auto md:ml-[unset]"
              :class="index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'"
            >
              <div
                class="p-6 rounded-xl border backdrop-blur-xl transition-all duration-300 bg-gray-800/30 border-gray-700/50 hover:border-cyan-500/50 group"
              >
                <!-- Image -->
                <div class="overflow-hidden relative mb-6 h-48 rounded-lg">
                  <img
                    :src="achievement.image"
                    :alt="achievement.title"
                    class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent via-gray-900/40"
                  ></div>

                  <!-- Badge -->
                  <span
                    class="absolute top-4 right-4 px-3 py-1 text-sm font-medium text-cyan-400 rounded-full border backdrop-blur-sm bg-cyan-500/20 border-cyan-500/20"
                  >
                    {{ achievement.badge }}
                  </span>
                </div>

                <!-- Content -->
                <div class="space-y-3">
                  <div class="flex gap-3 items-center text-sm">
                    <span
                      class="px-2.5 py-0.5 text-purple-400 rounded-full border bg-purple-500/10 border-purple-500/20"
                    >
                      {{ achievement.year }}
                    </span>
                    <span
                      class="px-2.5 py-0.5 text-blue-400 rounded-full border bg-blue-500/10 border-blue-500/20"
                    >
                      {{ achievement.category }}
                    </span>
                  </div>

                  <h3
                    class="text-xl font-semibold text-white transition-colors group-hover:text-cyan-400"
                  >
                    {{ achievement.title }}
                  </h3>

                  <p class="text-gray-400">
                    {{ achievement.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="mt-16 text-center" data-aos="fade-up">
        <a
          href="#"
          class="inline-flex gap-2 items-center px-6 py-3 text-white rounded-lg border border-gray-700 transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500/10"
        >
          View All Achievements
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
