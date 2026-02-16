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
              <a class="nav-link active" href="#">Home</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Projects</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>

          </ul>
        </div>

      </div>
    </nav>

    <!-- ===== HERO SECTION ===== -->
    <section class="hero-section">
      <div class="glass">

        <h1 class="display-4 fw-bold glow-text">
          {{ name }}
        </h1>

        <p class="lead mt-3">
          {{ tagline }}
        </p>

        <button class="glass-btn mt-4">
          View My Work
        </button>

      </div>

    </section>


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
