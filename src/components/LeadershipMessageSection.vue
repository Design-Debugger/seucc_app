<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AOS from 'aos'

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 50,
  })
})

const messages = [
  {
    name: 'Prof. Yusuf Mahbubul Islam, PhD',
    role: 'Vice Chancellor & Professor',
    image: 'https://ums-local.seu.edu.bd/file-server/v/2.0.0/profile-picture/ymislam_0z1r4tn5.png',
    message: `As the Vice Chancellor of Southeast University, I am immensely proud of SEUCC's contributions to our university's technical excellence. This club has consistently demonstrated how student initiatives can foster innovation and leadership. The achievements of SEUCC members reflect our university's commitment to quality education and practical learning.`,
    signature: 'path/to/signature.png',
  },
  {
    name: 'Shahriar Manzoor',
    role: 'Chairman & Associate Professor,\n CSE Department',
    image:
      'https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/465576093_8836510223055231_6051016432616182316_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=oNZUxNcI604Q7kNvgFxxGx3&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=AykKq_VHp2pk6gaN7qc8NQ7&oh=00_AYAb9fbdICFJ7eQTlQzFIE2DE9Epnv1ZVmU__0O4oDLq8A&oe=67609B62',
    message: `The Computer Club has been instrumental in bridging the gap between academic learning and practical implementation. Through various workshops, competitions, and projects, SEUCC creates opportunities for students to excel in their technical pursuits. I commend their dedication to fostering a culture of innovation and continuous learning.`,
    signature: 'path/to/signature.png',
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
          Leadership Messages
        </h2>
        <p class="text-lg text-gray-400">Guidance and vision from our university leaders</p>
      </div>

      <!-- Messages Grid -->
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div
          v-for="(leader, index) in messages"
          :key="index"
          :data-aos="index === 0 ? 'fade-right' : 'fade-left'"
          class="relative group"
        >
          <!-- Message Card -->
          <div
            class="p-8 bg-gradient-to-b rounded-2xl border backdrop-blur-xl transition-all duration-300 from-gray-800/30 to-gray-900/30 border-gray-700/50 hover:border-cyan-500/50"
          >
            <!-- Quote Icon -->
            <div
              class="flex absolute -top-4 -left-4 justify-center items-center w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
            >
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
                />
              </svg>
            </div>

            <!-- Message Content -->
            <div class="mb-8">
              <p class="text-lg italic leading-relaxed text-gray-400">"{{ leader.message }}"</p>
            </div>

            <!-- Leader Info -->
            <div class="flex gap-6 items-center">
              <!-- Image -->
              <div class="overflow-hidden w-20 h-20 rounded-full border-2 border-cyan-500/30">
                <img :src="leader.image" :alt="leader.name" class="object-cover w-full h-full" />
              </div>

              <!-- Details -->
              <div>
                <h3 class="mb-1 text-xl font-semibold text-white">
                  {{ leader.name }}
                </h3>
                <p class="text-cyan-400">{{ leader.role }}</p>
              </div>

              <!-- Signature -->
              <div class="ml-auto">
                <!-- <img
                  :src="leader.signature"
                  :alt="leader.name + ' signature'"
                  class="h-12 opacity-80"
                /> -->
              </div>
            </div>

            <!-- Decorative Elements -->
            <div
              class="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl transition-all duration-300 bg-cyan-500/10 group-hover:bg-cyan-500/20"
            ></div>
            <div
              class="absolute -bottom-8 -left-8 w-32 h-32 rounded-full blur-3xl transition-all duration-300 bg-blue-500/10 group-hover:bg-blue-500/20"
            ></div>
          </div>
        </div>
      </div>

      <!-- Decorative Line -->
      <div class="mx-auto mt-16 max-w-3xl">
        <div class="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </div>

      <!-- Additional Note -->
      <div class="mt-16 text-center" data-aos="fade-up">
        <p class="mx-auto max-w-2xl text-gray-400">
          Under the guidance of our esteemed leadership, SEUCC continues to grow and innovate,
          creating opportunities for students to excel in the field of technology.
        </p>
      </div>
    </div>
  </section>
</template>
