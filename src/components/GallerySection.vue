<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AOS from 'aos'

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 50
  })
})

const galleries = [
  {
    category: 'Workshops',
    images: [
      {
        url: 'https://ecdn.dhakatribune.net/contents/cache/images/800x450x1/uploads/media/2024/05/13/Southeast-University-9bbbfa3b61882d0067afb11bcc76352f.jpg?jadewits_media_id=20320',
        title: 'Web Development Workshop 2023',
        description: 'Hands-on learning session'
      },
      {
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1470',
        title: 'AI/ML Workshop',
        description: 'Advanced technology training'
      },
      {
        url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1470',
        title: 'Coding Bootcamp',
        description: 'Intensive programming session'
      }
    ]
  },
  {
    category: 'Competitions',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=1470',
        title: 'Hackathon 2023',
        description: '24-hour coding challenge'
      },
      {
        url: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=1470',
        title: 'Programming Contest',
        description: 'National level competition'
      },
      {
        url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1470',
        title: 'Tech Quiz',
        description: 'Knowledge testing event'
      }
    ]
  },
  {
    category: 'Events',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1470',
        title: 'Tech Fest 2023',
        description: 'Annual technology festival'
      },
      {
        url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1470',
        title: 'Seminar Series',
        description: 'Industry expert talks'
      },
      {
        url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1470',
        title: 'Alumni Meetup',
        description: 'Networking event'
      }
    ]
  }
]

const selectedImage = ref(null)

const openLightbox = (image) => {
  selectedImage.value = image
}

const closeLightbox = () => {
  selectedImage.value = null
}
</script>

<template>
  <section class="overflow-hidden py-20 bg-gradient-to-b from-black to-gray-900">
    <div class="container px-4 mx-auto">
      <!-- Section Header -->
      <div class="mx-auto mb-16 max-w-3xl text-center" data-aos="fade-up">
        <h2 class="mb-4 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
          Our Gallery
        </h2>
        <p class="text-lg text-gray-400">
          Capturing moments of innovation, learning, and success
        </p>
      </div>

      <!-- Gallery Grid -->
      <div class="space-y-16">
        <div
          v-for="(category, index) in galleries"
          :key="index"
          class="space-y-6"
        >
          <!-- Category Title -->
          <h3
            class="ml-4 text-2xl font-semibold text-white"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
          >
            {{ category.category }}
          </h3>

          <!-- Images Grid -->
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="(image, imageIndex) in category.images"
              :key="imageIndex"
              :data-aos="imageIndex % 2 === 0 ? 'fade-up-right' : 'fade-up-left'"
              :data-aos-delay="imageIndex * 100"
              class="overflow-hidden relative rounded-xl cursor-pointer group"
              @click="openLightbox(image)"
            >
              <!-- Image -->
              <div class="overflow-hidden aspect-video">
                <img
                  :src="image.url"
                  :alt="image.title"
                  class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  @error="(e) => e.target.src = '/src/assets/images/default-gallery.jpg'"
                />
              </div>

              <!-- Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 transition-opacity duration-300 via-gray-900/60 group-hover:opacity-100">
                <div class="absolute right-0 bottom-0 left-0 p-4">
                  <h4 class="mb-1 font-semibold text-white">{{ image.title }}</h4>
                  <p class="text-sm text-gray-300">{{ image.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Lightbox -->
      <div
        v-if="selectedImage"
        class="flex fixed inset-0 z-50 justify-center items-center p-4 bg-black/90"
        @click="closeLightbox"
      >
        <div
          class="relative w-full max-w-4xl"
          @click.stop
        >
          <img
            :src="selectedImage.url"
            :alt="selectedImage.title"
            class="w-full h-auto rounded-lg"
          />
          <div class="absolute right-0 bottom-0 left-0 p-6 bg-gradient-to-t to-transparent from-black/80">
            <h4 class="mb-2 text-xl font-semibold text-white">{{ selectedImage.title }}</h4>
            <p class="text-gray-300">{{ selectedImage.description }}</p>
          </div>
          <button
            class="flex absolute top-4 right-4 justify-center items-center w-10 h-10 rounded-full bg-black/50"
            @click="closeLightbox"
          >
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
