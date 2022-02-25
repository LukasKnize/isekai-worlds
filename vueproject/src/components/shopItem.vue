<template>
    <div class="shopItem">
                <img :src="require(`@/assets/${image}`)" alt="">
                <div class="shopItemTex">
                    <p class="shopItemName">{{name}}</p>
                    <p class="shopItemDesc">{{desc}}</p>
                </div>
            </div>
</template>

<script>
export default {
    name: "shopItem",
    props:{
        image: String,
        name: String,
        desc: String
    },
}
</script>