<template>
    <div class="bloc_total" >
        <div class="bloc" >
            <LazyHeaderInfo />
        </div>
        
        <NewPost v-if="newPost == true" @closePost="addPost"/>
       <button @click="addPost" v-if="auth">Add Post</button>
        <div class="modal">
            <Transition name="fade">
            <modal-succes v-if="modal == true" @click="modal = false" />
        </Transition>
        </div>

        <main>
            <section class="section_post">
                <div class="bloc_blog" v-for="p in post" :key="p" >
                    <div class="bloc_total" v-if="postComponent == false || p._id != PostIdSelected">
                    <div class="img_blog">
                        <img :src="p.imageUrl" alt="description en p.p_5">
                        <!-- <img src="../assets/images/img_watt.jpeg" alt=""> -->
                    </div>
                    <div class="text_blog">
                        <h2>
                            {{ p.title_1 }}
                        </h2>
                        <p>
                            {{ p.p_1 }}
                        </p>
                        <!-- <p v-if="timeToRead(p._id)"> {{ timeToRead(p._id) }} de lectura
                        </p> -->
                        <!-- <h3>
                            {{ p.title_2 }}
                        </h3>
                        <p>
                            {{ p.p_2 }}
                        </p>
                        <h3>
                            {{ p.title_3 }}
                        </h3>
                        <p>
                            {{ p.p_3 }}
                        </p>
                        <h3>
                            {{ p.title_4 }}
                        </h3>
                        <p>
                            {{ p.p_4 }}
                        </p>
                        <h3>
                            {{ p.title_5 }}
                        </h3>
                        <p>
                            {{ p.p_5 }}
                        </p> -->
                        <span @click="open_post(p._id)" v-if="p.p_1.length > 200"><em>lire la suite</em> <br> 
                            <em class="time_to_read" v-if="timeToRead(p._id)"> {{ timeToRead(p._id) }} de lectura
                            </em></span>
                    </div>
                </div>

            <sec v-if="postComponent == true && p._id == PostIdSelected" @close="close" :data="postEdit"/>

            </div>

            </section>

            <aside>
                <section>
                    <h2>
                        les plus importants
                    </h2>
                    <div class="aside_bloc">
                        <h3>
                            chouette l'aside
                        </h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Quia vitae adipisci ipsum voluptatem a doloribus possimus? Voluptatum cumque tempore sint.
                        </p>
                        <span><em>lire la suite</em></span>
                    </div>
                </section>
                <section>
                    <h2>
                        les plus lus

                    </h2>
                    <div class="aside_bloc">
                        <h3>
                            chouette l'aside
                        </h3>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Quia aq vitae adipisci ipsum voluptatem a doloribus possimus? Voluptatum cumque tempore sint.
                        </p>
                        <span> <em>lire la suite</em> </span>
                    </div>
                </section>
            </aside>

        </main>
    </div>
</template>

<script setup lang="ts">

import { ref, watch } from "vue";
import { storeToRefs} from "pinia"
import { usePostStore } from "@/store/usePost";
import { useImgStore } from "@/store/useImg";
import { useLogUserStore } from "@/store/login"
import filter from "@/composable/filterId"
import { useCookies } from "vue3-cookies";

let dark = ref(true)
const { cookies } = useCookies();

const modal = ref(true);
let newPost = ref(false);

const loginStore = useLogUserStore();
//  let auth = ref(loginStore.auth)
 let auth = true


const addPost =()=>{
    if(newPost.value != true){
        newPost.value = true
    }else {
    newPost.value = false}
}

// const UserCookie = ()=>{
//     if(cookies.get("theme")){
//         // const theme = cookies.get("theme")
//         console.log("THEME COOKIES ");
//     }
// }
// UserCookie()

const postData = usePostStore();
const { getLoc } = postData
const { getPageData } = postData

const post = ref();
const pst = async () => {
    await getLoc()
    await getPageData()
    return post.value = postData.post_Data
}
pst()

// -----------  IMG  --------------
const imgStore = useImgStore();
const { getImgData } = imgStore;
getImgData("blog");

// -----------  POST EDIT  --------------
let postComponent =  ref(false);
let postEdit:string = ("")
let PostIdSelected:string = ("");

const open_post = ((id: string) => {
    //console.log("POST SELECTED",id);
    PostIdSelected = id
     postEdit = filter(id, post);
    // console.log(" POST SELCTED ------>", postEdit);
    if(postComponent.value = true){
        postComponent.value = false
    }
    postComponent.value = true;
})

const close =()=>{
    postComponent.value = false
    // console.log("CLOSE COMPONENT");
    
}
const props = defineProps({
    postEdit: { type: String},
})

const timeToRead = (id:string)=>{
    // console.log("POST READ FUNCTION",post.value);
    
const postLength  = filter(id, post);
if(postLength[0].p_1.length > 0){
    var p1 = postLength[0].p_1
}

if(postLength[0].p_2 == null){
    // console.log("POST P3 IF",postLength[0].p_2);
    var p2 = ""
} else if (postLength[0].p_2 != null) {
    // console.log("POST P3 ELSE IF NOT NULL",postLength[0].p_2);
      p2 = postLength[0].p_2
}
if(postLength[0].p_3 == null){
    // console.log("POST P3 IF",postLength[0].p_3);
    var p3 = ""
} else if (postLength[0].p_3 != null) {
    // console.log("POST P3 ELSE IF NOT NULL",postLength[0].p_3);
      p3 = postLength[0].p_3
}
if(postLength[0].p_4 == null){
    // console.log("POST P3 IF",postLength[0].p_4);
    var p4 = ""
} else if (postLength[0].p_4 != null) {
    // console.log("POST P3 ELSE IF NOT NULL",postLength[0].p_4);
      p4 = postLength[0].p_4
}
if(postLength[0].p_5 == null){
    // console.log("POST P3 IF",postLength[0].p_5);
    var p5 = ""
} else if (postLength[0].p_5 != null) {
    // console.log("POST P3 ELSE IF NOT NULL",postLength[0].p_5);
      p5 = postLength[0].p_5
}
const totalParagraf = p1.concat(', ',p2,', ',p3,', ',p4,', ',p5 )
 const words = totalParagraf.trim().split(/\s+/).length;
//  return Math.floor((words )/150 )
let time="" as string | number


if (words /150 > 0.5){
    time = ""
}
if (words /150 > 0.5 && words /150 < 1){
    time = "menys de 1 minut"
}
if (words /150 > 1.4 && words /150 < 1.6){
    time = "+/- 1,5 minuts"
}
if (words /150 > 1.6 && words /150 < 2.4){
    time = "+/-2 minuts"
}
if (words /150 > 2.4 ){
    time =  Math.floor((words )/150 )
}


return time
}
// -----------  END POST EDIT  --------------


// TEST WATCH ^*^**^^^^^^*^*^*^*^*^*^*^*^*^*^
// const question = ref('')
// const answer = ref('Questions usually contain a question mark. ;-)')
// // watch works directly on a ref
// watch(question, async (newQuestion, oldQuestion) => {
//   if (newQuestion.indexOf('?') > -1) {
//     answer.value = 'Thinking...'
//     try {
//       const res = await fetch('https://yesno.wtf/api')
//       answer.value = (await res.json()).answer
//     } catch (error) {
//       answer.value = 'Error! Could not reach the API. ' + error
//     }
//   }
// })
// TEST WATCH ^*^**^^^^^^*^*^*^*^*^*^*^*^*^*^


</script>

<style scoped>
@import url("../style/reset.css");
@import url("../style/theme.css");

.bloc {
    display: flex;
    flex-direction: column;
    background: transparent;
}

span {
    text-transform: lowercase;
    text-decoration-line: underline;
}
.time_to_read{
font-size:12px
}
.section_post {
    display: flex;
    flex-direction: column;
}

@media screen and (min-width: 768px) and (max-height:500px) {
    span {
        margin-top: 5px
    }
}

@media screen and (min-width: 768px) and (max-height:500px) {
    .bloc_text {
        width: 50%;
        top: 15%;
        transform: translate(-50%, -0%);
    }
}

/* *********  MOPDAL********** */

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
}

/* *********  MAIN********** */

main {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: auto;
}

/* *********  BLOC BLOG ********** */

.bloc_blog {
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 15px auto;
    background: white;
    justify-content: space-between;
    align-items: center;
    box-shadow: -3px 3px 3px rgba(203, 116, 1, .5);
}

.bloc_blog::after {
    content: "10/02/24";
    position: absolute;
    top: -10px;
    right: 0;
    width: auto;
    padding: 3px 5px;
    line-height: 20px;
    height: 20px;
    border-radius: 5px;
    background-color: brown;
    color: wheat
}

.img_blog {
    width: 100%;
    height: auto;
    max-height: 250px;
}

.img_blog img {
    width: 100%;
    height: auto;
    max-height: 250px;
    object-fit: cover;
}

.text_blog {
    width: 90%;
    margin: 20px auto;
    padding: 5px 10px;
}

.text_blog p {
    margin: 20px auto 10px;
    position: relative;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
}

@media screen and (min-width: 768px) and (max-height:500px) {

    .bloc_blog {
        flex-direction: row;
        justify-content: center;
        width: 95%;


    }

    .bloc_blog h2 {
        font-size: 30px;
    }

    .img_blog {
        width: 50%;

    }

    .text_blog {
        width: 50%;
        margin: 0 20px;
    }
}

/* *********  ASIDE ********** */

aside {
    width: 100%;
    height: auto;
    border: 2px solid goldenrod;
    padding: 10px;
    display: flex;
    flex-direction: row;
    margin: 20px auto;
}

section h2 {
    margin-bottom: 10px;
}

.aside_bloc p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}


@media screen and (min-width: 768px) and (max-height:500px) {
    aside {
        gap: 20px;
        padding: 20px;
    }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from{
    transform: translateX(200px);
    opacity: 0;
}
.fade-leave-to {
    transform: translateX(-200px);
    opacity: 0;
}
</style>