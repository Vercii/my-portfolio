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

                <button class="glass-btn mt-4" @click="scrollToEducation">
                    Learn More
                </button>

            </div>
        </section>

        <!-- ===== EDUCATION SECTION ===== -->
        <section class="hero-section2" id="education">
            <div class="glass">

                <h1 class="display-4 fw-bold glow-text">
                    Education
                </h1>

                <p class="lead mt-3">
                    Graduated in University of the East with a degree in Computer Science.
                </p>

            </div>
        </section>
    </div>
</template>


<script setup>
import { ref } from 'vue'

const name = ref("Hi, I'm Renzo!")
const tagline = ref("Web & Mobile Developer | Passionate About Technology")

function scrollToEducation() {
    const el = document.getElementById('education')
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>


<style>
body {
    margin: 0;
    font-family: system-ui, -apple-system, Arial, sans-serif;
}
</style>
