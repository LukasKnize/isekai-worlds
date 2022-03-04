<template>
     <div class="menu show" id="mainMenu">
            <button class="menuButton" @click="openMenu('Stats')">Stats</button>
            <button class="menuButton" onclick="lore()">Lore</button>
            <button class="menuButton" onclick="credits()">Credits</button>
            <button class="menuButton" onclick="about()">About</button>
        </div>
</template>

<script>
export default {
    name: "mainMenu",

    methods:{
        openMenu(data){
            this.$emit("openMenu", data)
        }
    }
}
</script>