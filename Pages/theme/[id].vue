
<script setup lang="ts">

// const route = useRoute();
// console.log(route);
const nuxt = useNuxtApp()
console.log(nuxt);



</script>




<template>
    <!-- to access path: 3000/theme/id -->
    <div>
        Event: {{ $route.params.id }}
    </div>
</template>
