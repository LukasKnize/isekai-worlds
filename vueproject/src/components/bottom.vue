<template>
  <div class="bottom">
    <button class="bottomNav"  @click="openMenu('Shop')" >shop</button>
    <button class="bottomNav" onclick="quests()">quests</button>
    <button class="bottomNav" onclick="actions()">actions</button>
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