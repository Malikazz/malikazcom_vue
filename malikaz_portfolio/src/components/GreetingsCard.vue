<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <p>Hi, my name is</p>
    <h1 class="green">Paul Malcolm.</h1>
    <h3>
      I am a forever learner who enjoys solving problems with computers.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 5.6rem;
  top: -10px;
}

p{
  font-size: 1.5rem;
  margin-left:20%;
}

h3 {
  font-size: 2.2rem;
  padding-left: 50%;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

</style>
