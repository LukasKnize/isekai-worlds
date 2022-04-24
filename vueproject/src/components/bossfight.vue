<template>
  <div class="bossFight show" id="bossFight" @click="clicking()">
    <h2>Click as fast as you can</h2>
    <div class="character">
      <img src="@/assets/attackGif.gif" alt="" />
      <div class="characterStats">
        <p>You</p>
        <div class="HPBar">
          <div class="HPBarFiller" v-bind:style="{ width: myHPBar + '%' }"></div>
        </div>
      </div>
    </div>
    <div class="character">
      <img :src="require(`@/assets/${this.img}`)" alt="" />
      <div class="characterStats">
        <p>{{enemyName}}</p>
        <div class="HPBar">
          <div class="HPBarFiller" v-bind:style="{ width: enemyHPBar + '%' }"></div>
        </div>
      </div>
    </div>
    <h3>{{textOut}}</h3>
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
      myHP: 0,
      enemyHP: 0,
      enemyCPS: 0,
      curentHP: 0,
      enemyCurentHP: 0,
      textOut: "CLICK!!!",
      started: false,
      img: "",
      enemyName: "",
      fightWasEnded: false
    };
  },
  props: {
    parameter: Number,
  },
  methods: {
    clicking() {
      this.enemyCurentHP--;
      if (this.interval == "" && this.started == false) {
        this.startFight();
      }

      if (this.enemyCurentHP <= 0) {
        this.results("w");
      }
    },

    enemy() {
      this.curentHP--;
      if (this.curentHP <= 0) {
        this.results("l");
      }
    },

    startFight() {
      this.started == true;
      this.interval = setInterval(() => {
        this.enemy();
      }, this.enemyCPS);
    },

    results(par) {
      this.fightWasEnded = true;
      clearInterval(this.interval);
      if (par == "w") {
        this.$emit("moneyChange", this.prize * this.$store.state.isekaiBonus);
        this.$store.dispatch("updateXP", this.prize)
        this.textOut = "you won: " + (this.prize * this.$store.state.isekaiBonus) + "coins and " + this.prize +  "xp!!!"
        this.$store.dispatch("dropEnemy", this.parameter)
      } else {
        let rand1 = Math.floor(Math.random() * (21 - 1) + 1);
        let rand2 = Math.floor(Math.random() * (21 - 1) + 1);
        this.textOut = "you lost"
        if (rand1 == rand2 && this.$store.state.level > 1) {
          this.$store.dispatch("levelLost");
          this.textOut = "you lost and one level was stolen from you"
        }
      }
    },
  },
  created() {
    if (this.parameter == 1) {
      this.enemyHP = this.$store.state.enemy1[0];
      this.enemyCPS = 333;
      this.enemyName = "Goblin"
      this.img = "helmet_02b.png"
    } else {
      this.enemyHP = this.$store.state.enemy2[0];
      this.enemyCPS = 166;
      this.enemyName = "Dark lord"
      this.img = "hat_01f.png"
    }
    this.myHP = this.$store.state.shopitems[1].level;
    this.curentHP = this.$store.state.shopitems[1].level;
    this.enemyCurentHP = this.enemyHP;
    this.prize = this.enemyHP * 10;
    this.$emit("textBoxControler", "bossFightText")
  },
  computed:{
    enemyHPBar(){
      let q1percentage = (this.enemyCurentHP / this.enemyHP) * 100;
      if (q1percentage <= 0 ) {
        q1percentage = 0;
      }
      return q1percentage
    },
    myHPBar(){
      let q1percentage = (this.curentHP / this.myHP) * 100;
      if (q1percentage <= 0 ) {
        q1percentage = 0;
      }
      return q1percentage
    }
  },
  beforeDestroy(){
    if (this.fightWasEnded == false && this.started == true) {
      this.results("l");
    }
  }
};
</script>