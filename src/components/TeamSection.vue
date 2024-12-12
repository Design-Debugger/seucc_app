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

const teamMembers = [
  {
    name: 'Md. Shaneaous Emon',
    role: 'President',
    image:
      'https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/459365924_2007020006418022_4222862074231134206_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=fH3RGzmdoAIQ7kNvgFMhaVG&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=AkR71Sign-LXI9ht5FdbiCW&oh=00_AYAWrT2O9cpTvl8PfTLI95Z7-eQetFmuuZw9gpQpfRNUdg&oe=67609A52',
    socials: {
      facebook: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Jane Smith',
    role: 'Vice President',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    socials: {
      facebook: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Mike Johnson',
    role: 'General Secretary',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    socials: {
      facebook: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Sarah Wilson',
    role: 'Treasurer',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    socials: {
      facebook: '#',
      linkedin: '#',
      github: '#',
    },
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
          Meet Our Team
        </h2>
        <p class="text-lg text-gray-400">
          Dedicated leaders driving innovation and excellence at SEUCC
        </p>
      </div>

      <!-- Team Grid -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(member, index) in teamMembers"
          :key="index"
          :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
          :data-aos-delay="index * 100"
          class="relative group"
        >
          <!-- Card -->
          <div
            class="overflow-hidden relative rounded-xl border backdrop-blur-xl transition-all duration-300 bg-gray-800/30 border-gray-700/50 hover:border-cyan-500/50"
          >
            <!-- Image Container -->
            <div class="overflow-hidden relative h-72">
              <img
                :src="member.image"
                :alt="member.name"
                class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <!-- Overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent via-gray-900/40"
              ></div>
            </div>

            <!-- Content -->
            <div class="absolute right-0 bottom-0 left-0 p-6">
              <h3 class="mb-1 text-xl font-semibold text-white">{{ member.name }}</h3>
              <p class="mb-4 text-cyan-400">{{ member.role }}</p>

              <!-- Social Links -->
              <div class="flex gap-3">
                <a
                  v-for="(link, platform) in member.socials"
                  :key="platform"
                  :href="link"
                  class="flex justify-center items-center w-8 h-8 text-gray-400 rounded-full border transition-all duration-300 bg-gray-800/50 border-gray-700/50 hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-500/50"
                >
                  <svg
                    v-if="platform === 'facebook'"
                    class="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                    />
                  </svg>
                  <svg
                    v-if="platform === 'linkedin'"
                    class="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                    />
                  </svg>
                  <svg
                    v-if="platform === 'github'"
                    class="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Join the Team Button -->
      <div class="mt-16 text-center" data-aos="fade-up">
        <a
          href="#"
          class="inline-flex gap-2 items-center px-6 py-3 text-white rounded-lg border border-gray-700 transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500/10"
        >
          Join Our Team
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
