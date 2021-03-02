<template>
  <div class="flex flex-row">
    <side-bar />
    <Content />

  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'
import SideBar from './SideBar.vue'
import Content from './Content.vue'
defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style scoped>
</style>