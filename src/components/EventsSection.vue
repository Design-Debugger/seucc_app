<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const upcomingEvents = [
  {
    id: 1,
    title: 'Hackathon 2024',
    date: 'March 15-17, 2024',
    image: 'https://nubcc.club/assets/img/BD-APPS.png',
    category: 'Competition',
    description: '48-hour coding challenge with amazing prizes',
    status: 'Registration Open',
    location: 'SEUCC Lab, Level 5',
    duration: '2 hours',
    capacity: '50 participants',
    tags: ['tech', 'coding', 'workshop'],
  },
  {
    id: 2,
    title: 'Web Dev Workshop',
    date: 'Weekly - Every Thursday',
    image:
      'data:image/png;base64,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',
    category: 'Workshop',
    description: 'Learn modern web development frameworks',
    status: 'Ongoing',
    location: 'SEUCC Lab, Level 5',
    duration: '2 hours',
    capacity: '50 participants',
    tags: ['tech', 'coding', 'workshop'],
  },
  {
    id: 3,
    title: 'Tech Talk Series',
    date: 'Monthly',
    image:
      'https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/441172295_955202523278348_6197834585640945852_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=XTdQTpfe_58Q7kNvgHTFx1j&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=AviI0CB611BDAApSL1ptHm7&oh=00_AYDKrqfMYD5S8Cs3HU0zYlK8pVF7AE3Y5EmFbZm4ShS81g&oe=676094B3',
    category: 'Seminar',
    description: 'Industry experts share their experiences',
    status: 'Upcoming',
    location: 'SEUCC Lab, Level 5',
    duration: '2 hours',
    capacity: '50 participants',
    tags: ['tech', 'seminar'],
  },
]

const activeTab = ref('upcoming')

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 50,
  })
})
</script>

<template>
  <section class="overflow-hidden py-20 bg-gradient-to-b from-black to-gray-900">
    <div class="container px-4 mx-auto">
      <!-- Section Header with animation -->
      <div class="mb-16 text-center" data-aos="fade-up">
        <h2
          class="mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 md:text-6xl"
        >
          Events & Activities
        </h2>
        <p class="mx-auto max-w-2xl text-lg text-gray-400 md:text-xl">
          Join our exciting events and boost your tech journey with hands-on experience
        </p>
      </div>

      <!-- Event Cards Grid with stagger animation -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(event, index) in upcomingEvents"
          :key="event.id"
          :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
          :data-aos-delay="index * 100"
          class="overflow-hidden rounded-xl border backdrop-blur-lg transition-all duration-500 group bg-gray-800/30 border-gray-700/50 hover:border-cyan-500/50 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
        >
          <div class="overflow-hidden relative h-48">
            <div
              class="absolute inset-0 z-10 bg-gradient-to-t from-gray-900 to-transparent via-gray-900/70"
            ></div>
            <img
              :src="event.image"
              :alt="event.title"
              class="object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-110"
            />
            <span
              class="absolute top-4 right-4 z-20 px-3 py-1 text-sm font-medium rounded-full backdrop-blur-md transition-all duration-300"
              :class="{
                'bg-green-900/70 text-green-400 group-hover:bg-green-900':
                  event.status === 'Registration Open',
                'bg-blue-900/70 text-blue-400 group-hover:bg-blue-900': event.status === 'Ongoing',
                'bg-yellow-900/70 text-yellow-400 group-hover:bg-yellow-900':
                  event.status === 'Upcoming',
              }"
            >
              {{ event.status }}
            </span>
            <!-- Category Badge -->
            <span
              class="absolute bottom-4 left-4 z-20 px-3 py-1 text-sm font-medium text-cyan-400 rounded-full backdrop-blur-md bg-gray-900/70"
            >
              {{ event.category }}
            </span>
          </div>

          <div class="p-6">
            <!-- Title and Date -->
            <div class="mb-4">
              <h3
                class="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-cyan-400"
              >
                {{ event.title }}
              </h3>
              <div class="flex gap-2 items-center text-gray-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span class="text-sm">{{ event.date }}</span>
              </div>
            </div>

            <!-- Description -->
            <p class="mb-4 text-gray-400">{{ event.description }}</p>

            <!-- Event Details -->
            <div class="mb-6 space-y-3 text-sm text-gray-400">
              <div class="flex gap-2 items-center">
                <svg
                  class="w-4 h-4 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>SEUCC Lab, Level 5</span>
              </div>
              <div class="flex gap-2 items-center">
                <svg
                  class="w-4 h-4 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Duration: 2 hours</span>
              </div>
              <div class="flex gap-2 items-center">
                <svg
                  class="w-4 h-4 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span>Capacity: 50 participants</span>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="grid grid-cols-2 gap-3">
              <button
                class="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-lg transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                Register Now
              </button>
              <button
                class="px-4 py-2 text-sm font-medium text-cyan-400 rounded-lg border transition-all duration-300 border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-500/50"
              >
                Learn More
              </button>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mt-4">
              <span
                class="px-2 py-1 text-xs font-medium text-cyan-400 rounded-full border bg-cyan-500/10 border-cyan-500/20"
              >
                #tech
              </span>
              <span
                class="px-2 py-1 text-xs font-medium text-purple-400 rounded-full border bg-purple-500/10 border-purple-500/20"
              >
                #coding
              </span>
              <span
                class="px-2 py-1 text-xs font-medium text-blue-400 rounded-full border bg-blue-500/10 border-blue-500/20"
              >
                #workshop
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Events Button with animation -->
      <div class="mt-12 text-center" data-aos="fade-up">
        <router-link
          to="/events"
          class="inline-flex gap-2 items-center px-6 py-3 text-white rounded-lg border border-gray-700 transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500/10 hover:scale-105"
        >
          View All Events
          <svg
            class="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add smooth scrolling to the entire page */
html {
  scroll-behavior: smooth;
}

/* Optional: Add custom animation for card hover */
@keyframes glow {
  0% {
    box-shadow: 0 0 5px rgba(6, 182, 212, 0.2);
  }
  100% {
    box-shadow: 0 0 20px rgba(6, 182, 212, 0.4);
  }
}
</style>
