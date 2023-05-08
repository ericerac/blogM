<template>
    <div class="footer">
        
        <div class="linksParts bloc-link">
            <span>Partenaires</span>
           <ul>
            <li class="liPart"><a href="#">Accp</a></li>
            <li class="liPart"><a href="#">bgca</a></li>
            <li class="liPart"><a href="#">Fbi</a></li>
            <li class="liPart"><a href="#">Cia</a></li>
           </ul>

        </div>
        <div class="linksResSoc bloc-link">
           <span>Me suivre</span>
            <ul>
            <li class="liPart"><a href="#">face</a></li>
            <li class="liPart"><a href="#">link</a></li>
            <li class="liPart"><a href="#">twit</a></li>
            <li class="liPart"><a href="#">insta</a></li>
           </ul>
        </div>
    </div>
</template>
<style scoped>
@import url(../style/reset.css);
a, li {
    text-decoration: none;
    list-style-type: none;
}
ul{
   text-align: left;
  
}
.footer{
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    width:100vw;
    height:160px;
    background:rgba(20,20,200,.5);
    position:relative;
    bottom:0;

}
.bloc-link{
    width:20%;
    height:70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin: auto;
    
}
</style>