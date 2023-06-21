<script setup lang="ts">

import { useLoginStore } from "../store/loginPost"
const data = defineProps(['data'])
// console.log("DATA", data);

let postEdit = useState("postEdit");

</script>



<template>
   
    <div class="bloc" @click="$emit('close')" v-for="(d, key) in data" :key="key">
<div class="bloc_left">
<img :src="d[0].imageUrl" alt="">
</div>
<div class="bloc_right">

        <h1>
           
            {{ d[0].title_1 }}
        </h1>
        <div class="dat">
           <p>{{ d[0].p_1 }}</p> 
        </div>
    </div>
</div>

</template>

<style scoped>
/* TRANSITION */
/* TRANSITION */
/* we will explain what these classes do next! */



.bloc {
    position:sticky;
    top: 0;
    bottom: 0;
    left: 0;
    /* bottom: 0;
    right: 0; */
    /* transform: translate(-50%, -50%); */
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: auto;
    border: 2px solid red;
    background-color: rgba(138, 43, 226, .8);
    z-index: 10;
    color: rgb(251, 248, 248);
    overflow: hidden;
}
.bloc_left{
    margin:auto 30px
}
.bloc_right {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.bloc_right h1 {
    padding:20px
}
.bloc_right, .dat{
    
    padding:10px;
    text-align: justify;
}
@media screen and (min-width: 768px) and (max-height:500px) {
    .bloc_right, .dat {
padding:20px;
    }
}
    



</style>