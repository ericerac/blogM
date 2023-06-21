<template>
    <div class="bloc">
        <form>
            <h2>Accés administration</h2>
            <div class="bloc-form">
                <label for="user">Email
                </label>
                <div class="input">
                    <input type="email" name="user" v-model="email">
                    <img class="validIcon" src="@/assets/icon/green-check-mark-validation-tick-16230.svg" alt=""
                        v-if="validName">
                    <img class="validIcon" src="@/assets/icon/red-check-mark-circular-tick-16217.svg" alt="" v-else>
                </div>
                <label for="password">Entrer le mot de passe
                </label>
                <div class="input">
                    <input type="password" name="password" v-model="passW">
                    <img class="validIcon" src="@/assets/icon/green-check-mark-validation-tick-16230.svg" alt=""
                        v-if="validPassword">
                    <img class="validIcon" src="@/assets/icon/red-check-mark-circular-tick-16217.svg" alt="" v-else>
                </div>
                <p class="errorMessage" v-if="ErrorMessage.length > 0"> {{ ErrorMessage }}</p>
            </div>
            <button class="btn" @click="sendLogin">Se connecter</button>
        </form>
    </div>
    <ModalError v-if="modalError == true" />
</template>

<script setup >

import { ref, toRef,  } from 'vue';
import { storeToRefs } from 'pinia';
import { useLogUserStore } from "../store/login"

// const user = useCookie<{ name: string }>('user')
// let user = useCookie('user')

const token = useCookie('token')
const userId = useCookie('userId')

// (property) ref<{ name: string; }>.value: {
//     name: string;
// }
let auth = ref() 
let passW = "";
let email = "";
let ErrorMessage = ref("");
let validPassword = false;

const UserStore = useLogUserStore();
const { loginUser } = UserStore;
const {user, loading,modalError} = storeToRefs(UserStore)

// let modalError = useState('modalError')
let errorMessage = useState('errorMessage')


const sendLogin = ((e) => {
    e.preventDefault();

    if (!passW && !email) {
        errorMessage.value = "Les champs doivent être remplis";
        modalError.value = true;
        return
    } else if (!passW && email) {
        errorMessage.value = "Le mot de passe doit être renseigné";
        modalError.value = true;
        return
    } else if (passW && !email) {
        errorMessage.value = "L'utilisateur doit être renseigné";
        modalError.value = true;
        return
    }
    
    const userData = {
        email: email,
        password: passW,
    }
   
   auth = loginUser(userData)

    console.log("SENDING MESSAGE", passW, email);
    // ErrorMessage.value= "mot de passe non valide"

})

</script>

<style scoped >
/* @import url("../style/reset.css"); */
.bloc {
    position: relative;
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 300px;
    height: 300px;
    border-radius: 10px;
    box-shadow: 3px 3px 13px rgba(0, 94, 83, 0.7);
    justify-content: space-evenly;
    border: 1px solid red;
    background-color: rgba(1, 155, 137, 0.6)
}

.bloc-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: space-around;
}

input {
    width: 100%;
    margin-bottom: 20px
}

.input {
    width: 80%;
    display: flex;
    align-items: center;
}

.validIcon {
    width: 25px;
    margin-left: 20px;
    margin-bottom: 20px
}

.btn {
    border: none;
    width: 80px;
    height: 40px;
    border-radius: 10px;
    box-shadow: 3px 3px 13px rgba(0, 94, 83, 0.7);
    background-color: rgba(0, 52, 37, 0.6);
    color: white;
    padding: 3px 10px;
}

.btn:active {
    background-color: rgba(0, 52, 37, 0.2);
    box-shadow: inset 3px 3px 13px;

}

.errorMessage {
    color: red;
    font-size: 20px;
}
</style>