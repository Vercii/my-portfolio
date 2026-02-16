<template>
  <div>

    <!-- ===== NAVBAR ===== -->
    <nav class="navbar navbar-expand-lg navbar-dark glass-navbar fixed-top">
      <div class="container">

        <!-- Your Name on the Left -->
        <a class="navbar-brand fw-bold" href="#">
          RENZO
        </a>

        <!-- Mobile Toggle -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Links -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/home">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/projects">Projects</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>

        </div>

      </div>
    </nav>



    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref("Hi, I'm Renzo!")
const tagline = ref("Aspiring Developer • Problem Solver • Tech Enthusiast")
</script>

<style>
body {
  margin: 0;
  font-family: system-ui, -apple-system, Arial, sans-serif;
}
</style>
