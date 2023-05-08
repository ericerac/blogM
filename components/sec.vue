<script setup lang="ts">

import {useLoginStore} from "../store/loginPost"

const loginStore = useLoginStore();

const {getPageData} = loginStore;
getPageData();
 const dataPost = loginStore.userIp;
</script>



<template>
    <div class="bloc">
<h1>SECTION</h1>
    </div>
    <div class="dat">
        {{ dataPost }}
    </div>
</template>

<style scoped>
.bloc{
    width:100vw;
    height: 80vh;
    border:2px solid red;
}
</style>