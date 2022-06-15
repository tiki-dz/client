<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navigation1 from "@/components/Navigation1.vue";
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

</script>


<template>

<Navigation1 />
  <!-- <div class="circale1"></div>
  <div class="circale2"></div> -->
  <RouterView />
  
</template>

<style>
@import "@/assets/base.css";
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css");
/* body{
background: linear-gradient(to right top, var(--el-color-primary-light-6), var(--el-color-primary-light-1));
} */
</style>
