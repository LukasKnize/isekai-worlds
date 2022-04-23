<template>
  <div class="bossFight show" id="bossFight" @click="clicking()">
    <h2>Click as fast as you can</h2>
    <div class="character">
      <img src="@/assets/attackGif.gif" alt="" />
      <div class="characterStats">
        <p>You</p>
        <div class="HPBar">
          <div class="HPBarFiller"></div>
        </div>
      </div>
    </div>
    <div class="character">
      <img src="@/assets/helmet_02b.png" alt="" />
      <div class="characterStats">
        <p>goblin</p>
        <div class="HPBar">
          <div class="HPBarFiller"></div>
        </div>
      </div>
    </div>
    <h3>CLICK!!!</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yourClicks: 0,
      enemyClick: 0,
      interval: "",
      prize: 0,
      enemyHP: 0,
    };
  },
  props: {
    parameter: Number,
  },
  methods: {
    clicking() {
      this.yourClicks++;
    },

    enemy() {},

    startFight() {},

    results(par) {
      if (par == w) {
        this.$emit("moneyChange", prize * this.$store.state.isekaiBonus);
      } else {
        let rand1 = Math.floor(Math.random() * (21 - 1) + 1);
        let rand2 = Math.floor(Math.random() * (21 - 1) + 1);
        if (rand1 == rand2 && this.$store.state.level > 1) {
          this.$store.dispatch("levelLost");
        }
      }
    },
  },
  mounted() {
    if (this.parameter == 1) {
      this.enemyHP = this.$store.state.enemy1[0];
    } else {
      this.enemyHP = this.$store.state.enemy2[0];
    }
    console.log(this.parameter);
  },
};
</script>