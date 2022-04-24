<template>
  <!-- Tuto část budu ještě dodělávat-->
  <div class="actions show" id="actions">
    <div class="actionItem" @click="openMenu('BossFight', 1)">
      <img src="@/assets/helmet_02b.png" alt="" />
      <div class="actionItemTex">
        <p class="actionItemName">Fight with goblin</p>
        <p class="actionItemDesc">{{ this.$store.state.enemy1[0] }}HP 3CPS</p>
      </div>
    </div>
    <div class="actionItem" @click="openMenu('BossFight', 2)">
      <img src="@/assets/hat_01f.png" alt="" />
      <div class="actionItemTex">
        <p class="actionItemName">Fight with dark lord</p>
        <p class="actionItemDesc">{{ this.$store.state.enemy2[0] }}HP 6CPS</p>
      </div>
    </div>
    <div class="actionItem" @click="jump()">
      <img src="@/assets/skull_01a.png" alt="" />
      <div class="actionItemTex">
        <p class="actionItemName">Jump off the cliff</p>
        <p class="actionItemDesc">2x bonus for your next life</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "actions",
  methods: {
    openMenu(data, parameter) {
      if (this.$store.state.level >= 5) {
        if (parameter == 1) {
        if (this.$store.state.enemy1.length == 0) {
          this.$emit("textBoxControler", "thereIsNoEnemyLeft");
        } else {
          this.$emit("openMenu", { typeOfMenu: data, parameter: parameter });
        }
      }else if (parameter == 2) {
        if (this.$store.state.enemy2.length == 0) {
          this.$emit("textBoxControler", "thereIsNoEnemyLeft");
        } else {
          this.$emit("openMenu", { typeOfMenu: data, parameter: parameter });
        }
      }
      }else{
        this.$emit("textBoxControler", "lowLevel")
      }
    },
    jump() {
      if (this.$store.state.canBeIsekai) {
        this.$store.dispatch("reset");
      } else {
        this.$emit("textBoxControler", "youCantJumpNow");
      }
    },
  },
};
</script>