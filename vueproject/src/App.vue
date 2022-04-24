<template>
  <div id="app">
    <h1>異世界 worlds</h1>
    <main
      v-bind:style="{
        backgroundImage: 'url(' + require(`@/assets/${backgr}`) + ')',
      }"
    >
      <Head @openMainMenu="openMenu" />
      <Middle @middleclicked="middleClick()" />
      <Bottom @openMenu="openMenu" />
      <component
        :is="menu"
        @moneyChange="moneyChange"
        @openMenu="openMenu"
        v-bind="{ parameter: parameter }"
        @textBoxControler="textBoxControler"
      >
      </component>
      <component :is="textBox" @closeTextBox="closeTextBox"></component>
    </main>
    <p class="status">autoClick: {{ runAutoClick }}</p>
  </div>
</template>

<script>
import Head from "./components/head.vue";
import Middle from "./components/middle.vue";
import Bottom from "./components/bottom.vue";
import MainMenu from "./components/mainmenu.vue";
import Shop from "./components/shop.vue";
import Stats from "./components/stats.vue";
import Quests from "./components/quests.vue";
import Actions from "./components/actions.vue";
import Lore from "./components/lore.vue";
import About from "./components/about.vue";
import Credits from "./components/credits.vue";
import BossFight from "./components/bossfight.vue";
import TextBoxDialog from "./components/textBoxDialog.vue";

//21600
export default {
  name: "App",
  components: {
    Head,
    Middle,
    Bottom,
    Shop: Shop,
    MainMenu: MainMenu,
    Stats: Stats,
    Quests: Quests,
    Actions: Actions,
    Lore: Lore,
    Credits: Credits,
    About: About,
    BossFight: BossFight,
    TextBoxDialog: TextBoxDialog,
  },
  data() {
    return {
      menu: "",
      autoInterval: "",
      autoRunning: false,
      timeInterval: "",
      textBox: "",
      afkMoney: 0,
      parameter: "",
      boostTimeOut: "",
      boost: 1,
      potionType: 0,
    };
  },
  methods: {
    openMenu(typeOfMenu) {
      if (this.menu != typeOfMenu && typeOfMenu.typeOfMenu == "BossFight") {
        this.parameter = typeOfMenu.parameter;
        this.menu = typeOfMenu.typeOfMenu;
      } else if (this.menu != typeOfMenu) {
        this.menu = typeOfMenu;
      } else {
        this.menu = "";
      }
    },

    middleClick() {
      if (this.$store.state.shopitems[5].owned == true) {
        this.boost = 10;
        this.potionType = 5;
        if (this.boostTimeOut == "") {
          this.startBoostTimeOut();
        }
      } else if (this.$store.state.shopitems[6].owned == true) {
        this.boost = 30;
        this.potionType = 6;
        if (this.boostTimeOut == "") {
          this.startBoostTimeOut();
        }
      } else if (this.$store.state.shopitems[7].owned == true) {
        this.boost = 69;
        this.potionType = 7;
        if (this.boostTimeOut == "") {
          this.startBoostTimeOut();
        }
      }
      this.moneyChange(1 * this.$store.state.shopitems[0].level * this.boost * this.$store.state.isekaiBonus);
      this.$store.dispatch("clickCounter");
    },

    moneyChange(data) {
      this.$store.dispatch("updateCoins", data);
    },

    updateTime() {
      this.timeInterval = setInterval(() => {
        this.$store.dispatch("updateTime", new Date());
      }, 1000);
    },

    startBoostTimeOut() {
      this.boostTimeOut = setTimeout(() => {
        this.$store.dispatch("usedPotion", this.potionType);
        this.boost = 1;
        this.potionType = 0;
      }, 60000);
    },

    autoClick() {
      this.autoRunning = true;
      this.autoInterval = setInterval(() => {
        this.moneyChange(1 * this.$store.state.shopitems[3].level * this.$store.state.isekaiBonus);
      }, 1000);
    },
    textBoxControler(param) {
      let firstText = [
        "Hi I'm Water, cheap Aqua knockoff.",
        "Yea that useless Aqua from KonoSuba.",
        "And to be honest, I'm bit useless too...",
        "So, I will take you through the whole game.",
        "Basically all you need is to click as fast as possible.",
      ];
      let afkBonusText = ["here is your afk bonus: " + this.afkMoney];
      let potionText = [
        "your potion will be activated after clicking to screen with your character",
      ];
      let bossFightText = [
        "you need to click as fast as posible to kill your enemy",
        "if you can beat him, you will get some money and xp!",
        "however if he wins, there is chance that you might lose one level",
        "you can still surrender by simply exiting back to menu",
        "fight starts when you click to that empty space under the stats",
        "you can't exit fight once it started",
        "so Good Luck!",
      ];
      let youCantJumpNow = ["you need to finish all quests first"];
      let youCanBeIsekaied = [
        "you can now jump of the cliff and get reincarnated back here",
        "you will lose all your progress, but you'll get small bonus to your next life",
        "you'll get: " + (this.$store.state.isekaiBonus + 1) + "x bonus",
      ];
      let thereIsNoEnemyLeft = ["there is no enemy left in this category"];
      let lowLevel = ["you need level 5 and higher to unlock boss fights"];
      if (param == "firstText") {
        this.$store.dispatch("changeText", firstText);
      } else if (param == "afkBonusText") {
        this.$store.dispatch("changeText", afkBonusText);
      } else if (param == "potionText") {
        this.$store.dispatch("changeText", potionText);
      }else if (param == "bossFightText") {
        this.$store.dispatch("changeText", bossFightText);
      }else if (param == "youCantJumpNow") {
        this.$store.dispatch("changeText", youCantJumpNow);
      }else if (param == "youCanBeIsekaied") {
        this.$store.dispatch("changeText", youCanBeIsekaied);
      }else if (param == "thereIsNoEnemyLeft") {
        this.$store.dispatch("changeText", thereIsNoEnemyLeft);
      }else if (param == "lowLevel") {
        this.$store.dispatch("changeText", lowLevel);
      }
      this.textBox = "TextBoxDialog"
    },
    closeTextBox(){
      this.textBox = "";
    }
  },
  computed: {
    runAutoClick() {
      if (
        this.$store.state.shopitems[3].level >= 1 &&
        this.autoRunning == false
      ) {
        this.autoClick();
      } else if (
        this.$store.state.shopitems[3].level <= 0 &&
        this.autoRunning == true
      ) {
        this.autoRunning = false;
        clearInterval(this.autoInterval);
      }
      return "ok";
    },
    backgr() {
      return this.$store.state.currentBackground;
    },
  },
  created() {
    console.log("%cWhat are you doing here? and be honest!", "color:blue");
    console.log("\n");
    //spouští autoClick
    if (
      this.$store.state.shopitems[3].level >= 1 &&
      this.autoRunning == false
    ) {
      this.autoClick();
    }

    //afk bonus, maximálně 6 hodin
    let newTime = new Date();
    let oldTime = Date.parse(this.$store.state.date);
    let dif = Math.abs(oldTime - Date.parse(newTime));
    let afk = Math.floor(dif / 1000);
    if (afk >= 21600) {
      afk = 21600;
    }
    afk *= this.$store.state.shopitems[4].level * this.$store.state.isekaiBonus;
    this.moneyChange(afk);
    this.afkMoney = afk;
    if (this.$store.state.date == "") {
      this.textBoxControler("firstText")
    }else if (afk > 0) {
      this.textBoxControler("afkBonusText")
    }

    //spouští kontrolu času
    this.updateTime();
  },
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
}

body {
  background-color: gray;
  width: 100%;
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-image: url("./assets/Background.png");
  background-size: cover;
  background-position: bottom;
}

body h1 {
  font-family: "DotGothic16", sans-serif;
  position: absolute;
  left: 0;
  top: 0;
  margin-left: 30px;
  margin-top: 30px;
  color: #fff1bd;
  font-size: 2em;
}

main {
  background-position: center bottom;
  background-size: cover;
}

.status {
  font-size: 0px;
}

@media (max-width: 950px) {
  body h1 {
    display: none;
  }
}

@media (max-width: 1500px) {
  #app {
    width: 100%;
  }
}

@media (max-height: 1500px) {
  #app {
    height: 100%;
  }
}
</style>
