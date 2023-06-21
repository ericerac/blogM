<template>
    <div class="wrapper" @click=" modalError = false ">
    <div class="bloc_modal">
        <div class="logo"></div>
        <div class="textMessage">
            <p>{{ errorMessage }}</p>

        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import { ref } from "vue";



  let MessageError = ref("Tout les champs doivent être remplis")
  let modalError = useState<boolean>('modalError')
    let errorMessage = useState<string>('errorMessage')

</script>


<style scoped>
@import url("../style/reset.css");


.wrapper{
    position:fixed;
    width:100vw;
    height:100vh;
    top:0;
    left:0;
    background-color: rgba(0, 0, 0,.3);
}
.bloc_modal {
    display:flex;
    position:absolute;
        top:50%;
            left:50%;
            width:200px;
            height:100px;
            border:2px solid rgb(128, 0, 0);
            border-radius: 10px;
            transform:translate(-50%,-50%);
            background: rgba(159, 2, 7, 0.8);
            color:white;
            text-align: center;
            align-items: center;
            
    }
    .bloc_modal p{
padding-left:10px;
padding-right:10px;
    }
</style>