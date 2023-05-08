<template>
    <div class="bloc">
<form >
    <h2>Accés administration</h2>
<div class="bloc-form">
    <label for="user">Username
    </label>
    <input type="text" name="user" v-model="userName">
    <label for="password">Entrer le mot de passe
    </label>
    <input type="password" name="password" v-model="passW">
    <p class="errorMessage" v-if="ErrorMessage.length > 0"> {{ ErrorMessage }}</p>
</div>
<button class="btn" @click.stop="sendLogin">Se connecter</button>
</form>
    </div>
    <ModalError v-if="modalError == true" />
</template>

<script setup lang="ts">

import { ref, toRef } from 'vue';

import {useLoginStore} from "../store/loginPost"

let passW = "";
let userName =""; 
 let ErrorMessage= ref("");



// let modalError = ref(false)
 let modalError = useState<boolean>('modalError')
 let errorMessage = useState<string>('errorMessage')
// let storeLogin = useLoginStore();
// let modalError = ref(storeLogin.modalError)

const sendLogin = (()=>{
  
    if(!passW && !userName){
        errorMessage.value = "Les champs doivent être remplis";
          modalError.value = true;
        return
    }else if(!passW && userName){
        errorMessage.value = "Le mot de passe doit être renseigné";
          modalError.value = true;
        return
    }else if(passW && !userName){
        errorMessage.value = "L'utilisateur doit être renseigné";
          modalError.value = true;
        return
    }

    console.log("SENDING MESSAGE",passW,userName);
    // ErrorMessage.value= "mot de passe non valide"
    
})

</script>

<style scoped >
/* @import url("../style/reset.css"); */
.bloc{
position:relative;
display:flex;
align-items: center;
width:100vw;
height:100vh;
}
form{
    display:flex;
    flex-direction: column;
    align-items: center;
    margin:auto;
    width:300px;
        height:300px;
        border-radius: 10px;
        box-shadow: 3px 3px 13px rgba(0, 94, 83, 0.7);
        justify-content: space-evenly;
        border:1px solid red;
            background-color: rgba(1, 155, 137, 0.6)
            }
.bloc-form{
    display:flex;
    flex-direction: column;
    width:100%;
    height:100px;
    align-items: center;
    justify-content: space-around;
}
input{
    width:60%;
    margin-bottom:20px
}
.btn{
    border:none;
width:80px;
height:40px;
border-radius: 10px;
box-shadow: 3px 3px 13px rgba(0, 94, 83, 0.7);
background-color:  rgba(0, 52, 37, 0.6) ;
color:white;
padding:3px 10px;
}
.btn:active{
    background-color:  rgba(0, 52, 37, 0.2) ;
    box-shadow: inset 3px 3px 13px;

}
.errorMessage{
    color:red;
    font-size: 20px;
}
</style>