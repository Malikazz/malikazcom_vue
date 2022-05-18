<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
<div>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>
  <body class="content">
    <RouterView />
  </body>
</div>
</template>

<style>
@import '@/assets/base.css';

.content {
  padding: 2rem;
  margin-top: 10rem;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav{
  width:100%;
  display: flex; 
  padding: 1rem 1rem;
  background-color: grey;
}
nav a{
  margin-right: 1rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

</style>
