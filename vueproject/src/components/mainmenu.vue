<template>
     <div class="menu show" id="mainMenu">
            <button class="menuButton" @click="openMenu('Stats')">Stats</button>
            <button class="menuButton" @click="openMenu('Lore')">Lore</button>
            <button class="menuButton" @click="openMenu('Credits')">Credits</button>
            <button class="menuButton" @click="openMenu('About')">About</button>
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