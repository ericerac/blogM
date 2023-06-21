<template>
    <header>
    <!-- <img src="../../../assets/images/furgoAutopista.jpg" alt=""> -->
    <div class="bloc_text">
        <p class="header_text">
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, inventore. 
Possimus velit voluptatum labore nobis non suscipit. Aperiam delectus perspiciatis 

        </p>
    </div>
</header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
/* *********  HEADER ********** */
header {
    position: relative;
    width: 100%;
    height: 300px;
    border: 1px solid red;
    background: rgb(2,10,36);
background: radial-gradient(circle, rgba(2,10,36,1) 0%, rgba(1,1,102,1) 50%, rgba(2,10,36,1) 100%);
}

header img {
    width: 100%;
    height: auto;
}

.bloc_text {
    position: absolute;
    width: 70%;
    padding: 20px;
    height: auto;
    top:50%;
    left: 50%;
    color: white;
    transform: translate(-50%, -20%);
    background: rgba(203, 116, 1, 1);
    border-radius: 20px;
    box-shadow: 3px 3px 12px rgb(106, 60, 1);
}
@media screen and (min-width: 768px) and (max-height:500px) {
    header {
        height:200px;
    }
}
</style>