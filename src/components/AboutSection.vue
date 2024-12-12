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

const features = [
  {
    title: 'Technical Excellence',
    description:
      'Comprehensive training in programming, web development, AI, and cutting-edge technologies.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    title: 'Innovation Hub',
    description:
      'Platform for students to work on innovative projects and research in emerging technologies.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Industry Connect',
    description: 'Strong network with tech industry leaders, alumni, and professional mentors.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: 'Career Growth',
    description: 'Career development through workshops, hackathons, and industry-focused training.',
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
]
</script>

<template>
  <section class="overflow-hidden py-20 bg-gradient-to-b from-gray-900 to-black">
    <div class="container px-4 mx-auto">
      <!-- Section Header -->
      <div class="mx-auto mb-16 max-w-3xl text-center" data-aos="fade-up">
        <h2
          class="mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
        >
          About SEUCC
        </h2>
        <p class="text-lg text-gray-400">
          Fostering Innovation, Excellence, and Leadership in Technology
        </p>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2">
        <!-- Left Column: Mission -->
        <div class="relative" data-aos="fade-right">
          <div class="p-6 rounded-2xl border backdrop-blur-xl bg-gray-800/30 border-gray-700/50">
            <h3 class="mb-4 text-2xl font-semibold text-white">Our Mission</h3>
            <p class="mb-6 text-gray-400">
              SEUCC is committed to nurturing technological talent at Southeast University. We
              strive to create a dynamic learning environment where students can develop practical
              skills, innovate, and prepare for successful careers in the tech industry.
            </p>
            <div class="flex gap-4 items-center">
              <div class="px-4 py-2 text-sm text-cyan-400 rounded-full bg-cyan-500/10">
                Est. 2010
              </div>
              <div class="px-4 py-2 text-sm text-purple-400 rounded-full bg-purple-500/10">
                1000+ Members
              </div>
            </div>
          </div>
          <!-- Decorative Elements -->
          <div
            class="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl bg-cyan-500/20"
          ></div>
          <div
            class="absolute -bottom-8 -left-8 w-32 h-32 rounded-full blur-3xl bg-purple-500/20"
          ></div>
        </div>

        <!-- Right Column: Vision -->
        <div class="relative" data-aos="fade-left">
          <div class="p-6 rounded-2xl border backdrop-blur-xl bg-gray-800/30 border-gray-700/50">
            <h3 class="mb-4 text-2xl font-semibold text-white">Our Vision</h3>
            <p class="mb-6 text-gray-400">
              We aspire to be the leading university computer club in Bangladesh, recognized for
              excellence in technical education, innovation, and producing industry-ready tech
              professionals who contribute significantly to the digital transformation of our
              nation.
            </p>
            <div class="flex gap-4 items-center">
              <div class="px-4 py-2 text-sm text-blue-400 rounded-full bg-blue-500/10">
                100+ Projects
              </div>
              <div class="px-4 py-2 text-sm text-green-400 rounded-full bg-green-500/10">
                30+ Industry Partners
              </div>
            </div>
          </div>
          <!-- Decorative Elements -->
          <div class="absolute -top-8 -left-8 w-32 h-32 rounded-full blur-3xl bg-blue-500/20"></div>
          <div
            class="absolute -right-8 -bottom-8 w-32 h-32 rounded-full blur-3xl bg-green-500/20"
          ></div>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(feature, index) in features"
          :key="index"
          :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
          :data-aos-delay="index * 100"
          class="p-6 rounded-xl border backdrop-blur-xl transition-all duration-300 bg-gray-800/30 border-gray-700/50 hover:border-cyan-500/50 hover:transform hover:-translate-y-1"
        >
          <div class="flex justify-center items-center mb-4 w-12 h-12 rounded-full bg-cyan-500/10">
            <svg
              class="w-6 h-6 text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="feature.icon"
              />
            </svg>
          </div>
          <h4 class="mb-2 text-xl font-semibold text-white">{{ feature.title }}</h4>
          <p class="text-gray-400">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
