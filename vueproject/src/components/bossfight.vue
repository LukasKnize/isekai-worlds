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
    };
  },
  props: {
    enemyCPS: 0,
    enemyDef: 0,
  },
  methods: {
    clicking() {
      this.yourClicks++;
    },

    enemy() {},
  },
};
</script>