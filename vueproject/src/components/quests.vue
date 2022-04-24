<template>
  <div class="quests show" id="quests">
    <div class="questItem">
      <p>Make 6.900.000 coins</p>
      <div class="progressBar">
        <div class="progressBarFiller" v-bind:style="{ width: quest1 + '%' }"></div>
      </div>
    </div>
    <div class="questItem">
      <p>Click 6.900 times</p>
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
    font-size: 0px;
}
</style>

<script>
export default {
  data(){
return {
completed1: 0,
completed2: 0,
completed3: 0
}
  },
  computed: {
    quest1() {
      let q1 = this.$store.state.totalMoney;

      let q1percentage = (q1 / 6900000) * 100;
      if (q1percentage >= 100) {
        this.completed1 = 1;
        q1percentage = 100;
        if (this.completed1 == 1 && this.completed2 == 1 && this.completed3 == 1 && !this.$store.state.wasTold[0]) {
          this.$emit("textBoxControler", "youCanBeIsekaied");
          this.$store.dispatch("wasTold", 0);
          this.$store.dispatch("canBeIsekai", true);
        }
      }
    return q1percentage;
    },
     quest2() {
      let q2 = this.$store.state.totalClick;

      let q2percentage = (q2 / 6900) * 100;
      if (q2percentage >= 100) {
        this.completed2 = 1;
        q2percentage = 100;
        if (this.completed1 == 1 && this.completed2 == 1 && this.completed3 == 1 && !this.$store.state.wasTold[0]) {
          this.$emit("textBoxControler", "youCanBeIsekaied");
          this.$store.dispatch("wasTold", 0);
          this.$store.dispatch("canBeIsekai", true);
        }
      }
    return q2percentage
    },
     quest3() {
      let q3 = this.$store.state.level;

      let q3percentage = (q3 / 34) * 100;
      if (q3percentage >= 100) {
        this.completed3 = 1;
        q3percentage = 100;
        if (this.completed1 == 1 && this.completed2 == 1 && this.completed3 == 1 && !this.$store.state.wasTold[0]) {
          this.$emit("textBoxControler", "youCanBeIsekaied");
          this.$store.dispatch("wasTold", 0);
          this.$store.dispatch("canBeIsekai", true);
        }
      }
    return q3percentage
    },
  },
};
</script>