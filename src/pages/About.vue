<template>
    <div class="about">
        <h1><b>
                <center>ABOUT ME</center>
            </b></h1>
        <p>
            <center>Welcome to my portfolio. I'm a passionate developer with experience in web technologies.</center>
        </p>

        <section>
            <h2><b>Skills</b></h2>
            <ul>
                <li>Vue.js</li>
                <li>JavaScript</li>
                <li>HTML & CSS</li>
                <li>Web Development</li>
            </ul>
        </section>

        <section>
            <h2><b>Experience</b></h2>
            <p>I have worked on various projects ranging from small websites to complex applications.</p>
        </section>
    </div>
</template>

<style>
.about {
    max-width: 800px;
    margin: 105px auto 50px auto;
    /* spacing from top & bottom */
    padding: 40px;

    /* Glassmorphism */
    background: rgba(78, 51, 51, 0.212);
    /* semi-transparent white */
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);

    color: white;
    /* text color for contrast */
}

h1,
h2 {
    color: white;
}

ul li {
    color: white;
}
</style>
