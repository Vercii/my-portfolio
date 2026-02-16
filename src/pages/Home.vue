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
                    Learn More
                </button>

            </div>

        </section>

        <router-view />
    </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref("Hi, I'm Renzo!")
const tagline = ref("Web & Mobile Developer | Passionate About Technology")
</script>

<style>
body {
    margin: 0;
    font-family: system-ui, -apple-system, Arial, sans-serif;
}
</style>
