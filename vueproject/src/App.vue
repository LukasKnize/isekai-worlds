<template>
  <div id="app">
    <h1>異世界 worlds</h1>
    <main>
      <Head @openMainMenu="openMenu" />
      <Middle @middleclicked="middleClick()" />
      <Bottom @openMenu="openMenu" />
      <component :is="menu" @moneyChange="moneyChange" @openMenu="openMenu">
      </component>
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
  },
  data() {
    return {
      menu: "",
      autoInterval: "",
      autoRunning: false,
      timeInterval: "",
    };
  },
  methods: {
    openMenu(typeOfMenu) {
      if (this.menu != typeOfMenu) {
        this.menu = typeOfMenu;
      } else {
        this.menu = "";
      }
    },

    middleClick() {
      this.moneyChange(1 * this.$store.state.shopitems[0].level);
    },

    moneyChange(data) {
      this.$store.dispatch("updateCoins", data);
    },

    updateTime() {
      this.timeInterval = setInterval(() => {
        this.$store.dispatch("updateTime", new Date());
      }, 1000);
    },

    autoClick() {
      this.autoRunning = true;
      this.autoInterval = setInterval(() => {
        this.moneyChange(1 * this.$store.state.shopitems[3].level);
      }, 1000);
    },
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
  },
  async mounted() {
    if (
      this.$store.state.shopitems[3].level >= 1 &&
      this.autoRunning == false
    ) {
      this.autoClick();
    }

    this.updateTime();
    const responseTime = await fetch(
      "https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam",
      {
        method: "GET",
        mode: "no-cors",
        headers: {
          "accept": "application/json",
        },
      }
    );
    console.log(responseTime);
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

.status {
  font-size: 1px;
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
