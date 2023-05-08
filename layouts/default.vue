<script setup lang="ts">
import {ref}  from "vue"
const te = ref(false)

</script>


<template>
    <div>
        <navbar />
        <slot ></slot>
       
        <foot />

        
    </div>
</template>

<style scoped>
@import url("../style/reset.css");

header{
    width:100vw;
    height:100vh;
    border:1px solid blue;
    background-color: rgba(0,0,250,.2);

}

</style>