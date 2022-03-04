<template>
  <div class="bottom">
    <button class="bottomNav" @click="openMenu('Shop')">shop</button>
    <button class="bottomNav" @click="openMenu('Quests')">quests</button>
    <button class="bottomNav" @click="openMenu('Actions')">actions</button>
  </div>
</template>

<script>
export default {
  name: "bottom",
    methods:{
        openMenu(data){
            this.$emit("openMenu", data)
        }
    }
};
</script>