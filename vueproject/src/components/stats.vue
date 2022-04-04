<template>
  <div class="stats show" id="stats">
    <div class="statItem">
      <p>
        Click multiplyer: <span id="clm">{{ clickMultiplyer }}</span
        >x
      </p>
    </div>
    <div class="statItem">
      <p>
        Resistance: <span id="resist">{{ Resistance }}</span>
      </p>
    </div>
    <div class="statItem">
      <p>
        <span id="curentXp">{{ xp }}</span
        >/<span id="nextLevel">{{ nextXp }}</span>
      </p>
      <div class="progressBar">
        <div class="progressBarFiller"></div>
      </div>
    </div>
    <div class="statItem">
      <p>
        AutoClick: <span id="AutoClick">{{ AutoClick }}</span
        >CPS
      </p>
    </div>
    <div class="statItem">
      <p>
        AFK-Click: <span id="AFKCLick">{{ AFKClick }}</span
        >CPS
      </p>
    </div>
    <div class="statItem">
      <p>isekai bonus: <span id="isekaiBonus">1</span>x</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "stats",
  computed: {
    clickMultiplyer() {
      return this.$store.state.shopitems[0].level;
    },
    Resistance() {
      return this.$store.state.shopitems[1].level;
    },
    AutoClick() {
      return this.$store.state.shopitems[3].level;
    },
    AFKClick() {
      return this.$store.state.shopitems[4].level;
    },
    xp() {
      return this.$store.state.xp;
    },
    nextXp() {
      return this.$store.state.nextXp;
    },
  },
};
</script>
