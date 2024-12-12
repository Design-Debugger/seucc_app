<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-[#181733] py-8 w-full max-w-full border-t border-[#242442]">
    <div class="container px-4 mx-auto">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
        <!-- About Section -->
        <div>
          <h3 class="mb-4 text-lg font-bold text-white">Computer Club</h3>
          <p class="text-gray-300">
            Your premier destination for computer science and technology enthusiasts
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="mb-4 text-lg font-bold text-white">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/events" class="text-gray-300 transition-colors hover:text-white">
                Events
              </router-link>
            </li>
            <li>
              <router-link to="/projects" class="text-gray-300 transition-colors hover:text-white">
                Projects
              </router-link>
            </li>
            <li>
              <router-link to="/resources" class="text-gray-300 transition-colors hover:text-white">
                Resources
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Connect -->
        <div>
          <h3 class="mb-4 text-lg font-bold text-white">Connect</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/contact" class="text-gray-300 transition-colors hover:text-white">
                Contact Us
              </router-link>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-300 transition-colors hover:text-white"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-300 transition-colors hover:text-white"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="mb-4 text-lg font-bold text-white">Newsletter</h3>
          <p class="mb-4 text-gray-300">Stay updated with our latest events and news</p>
          <div class="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              class="w-full px-4 py-2.5 bg-[#242442] text-gray-300 rounded-lg border border-[#242442] focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all placeholder-gray-500"
            />
            <button
              class="px-4 py-2.5 w-full text-white bg-cyan-600 rounded-lg transition-colors hover:bg-cyan-700"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-[#242442] mt-8 pt-8 text-center text-gray-400">
        <p>© {{ currentYear }} Computer Club Organization. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
