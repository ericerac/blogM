<script setup lang="ts">
import { ref, PropType, reactive } from "vue";
import { storeToRefs } from "pinia";
import { usePostStore } from "../store/usePost";
import parString from "../utils/jsonStringParse";

const loginStore = usePostStore();
const { getPageData } = loginStore;

let dataPost = ref();
let patate = ref("grosse patate");

// ********** PARAGRAPHE ***************

const dPost = (x:string) =>{

if (x.length > 50) {

    return true
} else {
    return false
}
};
let open_text = ref(false)

// function logArrayElements(element, index:number, array) {
//     console.log("a[" + index + "] = " + element);
// }
const state = reactive({
  indexPost: -1 as number
  
})


  let indPost : Ref<number> = ref(-1)


const itemIndex = (ind:number) => {
console.log("Index",ind);
state.indexPost = ind

indPost.value = ind
}

// **********  FIN PARAGRAPHE **************

// interface dataCenter{
//   color_subTitle_1: string,
// color_title_1:string,
// createdAt : string,
// imageUrl : string,
// lang:string,
// name:string,
// pN:boolean,
// p_1:string
// p_2:string,
// p_3:string,
// p_4:null,
// p_5:null,
// subTitle_1:string,
// title_1:string,
// updatedAt:string,
// __v:number,
// _id:string,
// }
// const props = defineProps({
//   dat:{
//     type : Array as PropType<State[]>
//   }
// })

const dat = async () => {
  let datPost = await getPageData();
  dataPost.value = datPost;
  console.log("RETURN DATA", dataPost.value);
  return await parString(dataPost.value);
};
dat();

const te = ref(false);

const text = ref("");
let maxPostLength: boolean = false;
// let texte = document.getElementsByClassName("textParaf");
// console.log(texte);

// const maxPostLength = false;
// const dpost = function(txt:string){
// if(txt.length > 100){
//   return true;
// }
// };

</script>

<template>
  <div class="container">
    <header>
      <div class="head"></div>
    </header>
    <section>
      <div class="container-section">
        <div class="bloc-post" v-for="(post, index) in dataPost" :key="post">
          <div class="img-post">
            <img :src="post.imageUrl" alt="" />
          </div>
          <div class="bloc-text">
            <h2>{{ post.title_1 }} {{ index }} {{ indPost }}</h2>
            <h3 v-if="index == indPost">Génial</h3>

           <p> {{ post.p_1 }}</p>
            <!-- <div v-if="dPost(post.p_1) == true" class="text_desc" :class="{ text_open: open_text }"
              @click="open_text = !open_text">
              
             
              <p class="txtDay" >
                {{ post.p_1 }} {{ post.p_1.length }}
              </p>
            </div>
            <p v-if="dPost(post.p_1) == true" class="suite text paragraf" @click="itemIndex(index)">
              <em><small>lire la suite</small></em>
            </p>

            <p v-else class="paragraf">
              {{ post.p_1 }}
            </p> -->
            
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style  scoped >

.text_open {
    display: block;
    width: 80%;
    margin: 0 auto;
    
}

.suite {
    margin: 0;
    margin-left: 20px;
    text-align: left;
    text-decoration: underline;
}
.text_desc {
    font-weight: 400;
}

.text_desc {
    position: relative;

    margin: 0 auto;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
/* _--------------------------- */
.head {
  width: 100vw;
  height: 200px;
  background-color: rgba(30, 30, 180, 0.6);
}

.container-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: auto;
  background-color: rgba(30, 30, 180, 0.1);
}

.bloc-post {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 95%;
  height: auto;
  background-color: rgba(17, 249, 222, 0.2);
  margin: 30px auto;
}

.bloc-post::after {
  content: "12/02/23";
  position: absolute;
  top: -10px;
  right: 0px;
  width: max-content;
  height: 20px;
  background-color: brown;
  padding: 3px 5px;
  border-radius: 5px;
  color: white;
}

.img-post img {
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
}

.bloc-text {
  display: flex;
  flex-direction: column;

  height: auto;
  min-height: 200px;
  padding: 20px;
}


.bloc-text p {
  text-align: justify;
}
</style>