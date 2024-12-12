<script setup lang="ts">
import { ref } from 'vue'
import { menuItems } from '@/constants/menuItems'
import type { MenuItem } from '@/types/menu'
import {
  XMarkIcon,
  Bars3Icon,
  EnvelopeIcon,
  CalendarIcon,
  UserGroupIcon,
} from '@heroicons/vue/24/outline'

import {
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
  faGithub,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const isMenuOpen = ref(false)
const activeDropdown = ref<string | null>(null)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const setActiveDropdown = (title: string | null) => {
  activeDropdown.value = title
}

// Add current date for events
const currentDate = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

// Add new ref for tracking expanded menu items
const expandedMenus = ref<string[]>([])

// Function to toggle menu expansion
const toggleExpand = (title: string) => {
  if (expandedMenus.value.includes(title)) {
    expandedMenus.value = expandedMenus.value.filter((item) => item !== title)
  } else {
    expandedMenus.value = [title]
  }
}
</script>

<template>
  <!-- Top Bar -->
  <div class="fixed top-0 left-0 z-50 bg-[#181733] text-white w-full border-b border-[#242442]">
    <div class="container px-4 mx-auto">
      <div class="hidden justify-between items-center py-2.5 text-sm lg:flex">
        <!-- Left side -->
        <div class="flex gap-6 items-center">
          <div class="flex gap-2 items-center pr-4 border-r border-white/20">
            <span class="text-cyan-400">&lt;</span>
            <span class="font-medium tracking-wide">Connect with SEUCC</span>
            <span class="text-cyan-400">/&gt;</span>
          </div>
          <div class="flex gap-4 items-center">
            <a
              href="#"
              target="_blank"
              title="Twitter"
              class="transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              <FontAwesomeIcon
                :icon="faTwitter"
                class="w-4 h-4 transition-colors duration-300 hover:text-cyan-400"
              />
            </a>
            <a
              href="#"
              target="_blank"
              title="Facebook"
              class="transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              <FontAwesomeIcon
                :icon="faFacebook"
                class="w-4 h-4 transition-colors duration-300 hover:text-cyan-400"
              />
            </a>
            <a href="#" target="_blank" title="YouTube">
              <FontAwesomeIcon
                :icon="faYoutube"
                class="w-4 h-4 transition-all cursor-pointer hover:text-cyan-400 hover:scale-110"
              />
            </a>
            <a href="#" target="_blank" title="LinkedIn">
              <FontAwesomeIcon
                :icon="faLinkedin"
                class="w-4 h-4 transition-all cursor-pointer hover:text-cyan-400 hover:scale-110"
              />
            </a>
            <a href="#" target="_blank" title="GitHub">
              <FontAwesomeIcon
                :icon="faGithub"
                class="w-4 h-4 transition-all cursor-pointer hover:text-cyan-400 hover:scale-110"
              />
            </a>
            <a href="#" target="_blank" title="Discord">
              <FontAwesomeIcon
                :icon="faDiscord"
                class="w-4 h-4 transition-all cursor-pointer hover:text-cyan-400 hover:scale-110"
              />
            </a>
          </div>
        </div>

        <!-- Right side -->
        <div class="flex gap-6 items-center">
          <div class="flex gap-4 items-center pr-4 border-r border-white/20">
            <div class="flex gap-2 items-center">
              <CalendarIcon class="w-5 h-5 text-cyan-400" />
              <span class="text-gray-300">{{ currentDate }}</span>
            </div>
            <div
              class="flex gap-2 items-center transition-colors cursor-pointer hover:text-cyan-400"
            >
              <EnvelopeIcon class="w-5 h-5 text-cyan-400" />
              <span class="tracking-wide">computerclub@seu.edu.bd</span>
            </div>
          </div>
          <div class="flex gap-6 items-center">
            <router-link
              to="/membership"
              class="flex gap-2 items-center transition-all duration-300 ease-in-out transform hover:text-cyan-400 hover:scale-105"
            >
              <UserGroupIcon class="w-5 h-5 transition-colors duration-300" />
              <span>Join Club</span>
            </router-link>
            <router-link to="/events" class="flex gap-1.5 items-center group">
              <span class="transition-colors duration-300 hover:text-cyan-400">
                Upcoming Events
              </span>
              <span
                class="text-cyan-400 transition-transform duration-300 group-hover:translate-x-1.5"
              >
                →
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Navigation -->
  <nav
    class="fixed top-0 lg:top-[41px] left-0 z-40 bg-[#181733] shadow-md w-full border-b border-[#242442]"
  >
    <div class="container px-4 mx-auto">
      <div class="flex justify-between items-center py-2">
        <!-- Logo -->
        <router-link to="/" class="flex gap-3 items-center text-2xl font-bold shrink-0">
          <img src="@/assets/logo/logo.png" alt="SEUCC" class="w-[50px] h-[50px] object-contain" />
          <div class="flex flex-col">
            <span class="text-white">SEUCC</span>
            <span class="text-xs font-normal text-gray-400">Computer Club (since-2014)</span>
          </div>
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden gap-8 items-center lg:flex">
          <div class="flex gap-8 items-center">
            <div
              v-for="(item, index) in menuItems"
              :key="item.title"
              class="relative group"
              @mouseenter="setActiveDropdown(item.title)"
              @mouseleave="setActiveDropdown(null)"
            >
              <router-link
                :to="item.path"
                class="flex gap-1.5 items-center py-6 text-gray-300 transition-all duration-300 group-hover:text-white"
              >
                <span>{{ item.title }}</span>
                <svg
                  v-if="item.children"
                  class="w-4 h-4 text-gray-400 transition-transform duration-300 group-hover:text-white"
                  :class="activeDropdown === item.title ? 'rotate-180' : ''"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </router-link>

              <!-- Enhanced Modern Dropdown Menu -->
              <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-2"
              >
                <div
                  v-if="item.children && activeDropdown === item.title"
                  class="absolute top-full left-0 w-72 z-[999] bg-[#181733]/95 backdrop-blur-sm border border-[#242442] rounded-xl shadow-2xl py-2 overflow-hidden"
                >
                  <router-link
                    v-for="child in item.children"
                    :key="child.title"
                    :to="child.path"
                    class="block px-4 py-3 hover:bg-[#393966] transition-all duration-300 group"
                  >
                    <div class="flex gap-3 items-center">
                      <div class="flex-1">
                        <div
                          class="text-sm font-medium text-white transition-colors group-hover:text-cyan-400"
                        >
                          {{ child.title }}
                        </div>
                        <div
                          class="mt-0.5 text-xs text-gray-400 transition-colors group-hover:text-gray-300"
                        >
                          {{ child.description }}
                        </div>
                      </div>
                      <svg
                        class="w-4 h-4 text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyan-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </router-link>
                </div>
              </Transition>
            </div>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button class="p-2 rounded-md lg:hidden hover:bg-gray-900" @click="toggleMenu">
          <Bars3Icon v-if="!isMenuOpen" class="w-6 h-6 text-white" />
          <XMarkIcon v-else class="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Menu Drawer -->
  <Transition
    enter-active-class="transition-all duration-500 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-all duration-300 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isMenuOpen" class="fixed inset-0 z-50 bg-black bg-opacity-50" @click="toggleMenu">
      <Transition
        enter-active-class="transition-all duration-500 ease-out delay-100"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <div
          v-if="isMenuOpen"
          class="fixed right-0 top-0 h-full w-[280px] bg-[#181733] shadow-xl overflow-y-auto"
          @click.stop
        >
          <div class="p-4">
            <div class="flex justify-end">
              <button @click="toggleMenu" class="p-2 rounded-md hover:bg-gray-900">
                <XMarkIcon class="w-6 h-6 text-white" />
              </button>
            </div>

            <!-- Mobile Menu Items with Enhanced Collapse -->
            <div class="mt-4">
              <div
                v-for="(item, index) in menuItems"
                :key="item.title"
                class="mb-2"
                :class="{ 'border-b border-[#242442]': index !== menuItems.length - 1 }"
              >
                <!-- Menu Item Header -->
                <div
                  class="flex justify-between items-center py-3 cursor-pointer"
                  @click="item.children ? toggleExpand(item.title) : null"
                >
                  <router-link
                    v-if="!item.children"
                    :to="item.path"
                    class="font-medium text-gray-300 transition-colors hover:text-white"
                    @click="toggleMenu"
                  >
                    {{ item.title }}
                  </router-link>
                  <span v-else class="font-medium text-gray-300 transition-colors hover:text-white">
                    {{ item.title }}
                  </span>

                  <!-- Dropdown Arrow with Smooth Rotation -->
                  <div
                    v-if="item.children"
                    class="transition-transform duration-300 ease-in-out transform"
                    :class="expandedMenus.includes(item.title) ? 'rotate-180' : ''"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 h-4 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <!-- Enhanced Collapsible Submenu -->
                <Transition
                  enter-active-class="transition-all duration-300 ease-out"
                  enter-from-class="h-0 opacity-0"
                  enter-to-class="h-auto opacity-100"
                  leave-active-class="transition-all duration-200 ease-in"
                  leave-from-class="h-auto opacity-100"
                  leave-to-class="h-0 opacity-0"
                >
                  <div
                    v-if="item.children && expandedMenus.includes(item.title)"
                    class="pl-4 pb-3 border-l border-[#242442] ml-2 overflow-hidden"
                  >
                    <router-link
                      v-for="child in item.children"
                      :key="child.title"
                      :to="child.path"
                      class="block py-2.5 px-3 rounded-lg hover:bg-[#242442] group"
                      @click="toggleMenu"
                    >
                      <div class="text-sm text-gray-300 group-hover:text-white">
                        {{ child.title }}
                      </div>
                      <div class="text-xs text-gray-500 group-hover:text-cyan-400">
                        {{ child.description }}
                      </div>
                    </router-link>
                  </div>
                </Transition>
              </div>

              <!-- Mobile Social Links -->
              <div class="mt-6 pt-6 border-t border-[#242442]">
                <div class="mb-3 text-sm text-gray-400">Connect with Us</div>
                <div class="flex gap-4">
                  <a
                    href="#"
                    class="text-gray-400 transition-colors duration-200 hover:text-cyan-400"
                  >
                    <FontAwesomeIcon :icon="faGithub" class="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    class="text-gray-400 transition-colors duration-200 hover:text-cyan-400"
                  >
                    <FontAwesomeIcon :icon="faDiscord" class="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    class="text-gray-400 transition-colors duration-200 hover:text-cyan-400"
                  >
                    <FontAwesomeIcon :icon="faFacebook" class="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    class="text-gray-400 transition-colors duration-200 hover:text-cyan-400"
                  >
                    <FontAwesomeIcon :icon="faLinkedin" class="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>
