<template>
  <div class="quests show" id="quests">
    <div class="questItem">
      <p>Click 69.000 times</p>
      <div class="progressBar">
        <div class="progressBarFiller" v-bind:style="{ width: quest1 + '%' }"></div>
      </div>
    </div>
    <div class="questItem">
      <p>Make 69.000.000 coins</p>
      <div class="progressBar">
        <div class="progressBarFiller" v-bind:style="{ width: quest2 + '%' }"></div>
      </div>
    </div>
    <div class="questItem">
      <p>Get to level 34</p>
      <div class="progressBar">
        <div class="progressBarFiller" v-bind:style="{ width: quest3 + '%' }"></div>
      </div>
    </div>
    <p class="hide">{{quest1 + quest2 + quest3}}</p>
  </div>
</template>

<style scoped>
.hide{
    font-size: 1px;
}
</style>

<script>
export default {
  computed: {
    quest1() {
      let q1 = this.$store.state.totalMoney;

      let q1percentage = (q1 / 69000000) * 100;
    return q1percentage;
    },
     quest2() {
      let q2 = this.$store.state.totalClick;

      let q2percentage = (q2 / 69000) * 100;
    return q2percentage
    },
     quest3() {
      let q3 = this.$store.state.level;

      let q3percentage = (q3 / 34) * 100;
    return q3percentage
    },
  },
};
</script>