<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import EventSection from '@/components/EventsSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import TeamSection from '@/components/TeamSection.vue'
import CounterSection from '@/components/CounterSection.vue'
import AchievementSection from '@/components/AchievementSection.vue'
import LeadershipMessageSection from '@/components/LeadershipMessageSection.vue'
import GallerySection from '@/components/GallerySection.vue'
</script>

<template>
  <main class="overflow-hidden">
    <HeroSection />
    <EventSection />
    <AboutSection />
    <CounterSection />
    <LeadershipMessageSection />
    <AchievementSection />
    <TeamSection />
    <GallerySection />
  </main>
</template>
