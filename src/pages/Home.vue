<template>
    <div>
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
