import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopitems: [{
      image: 'sword_02b.png',
      name: 'Sword',
      desc: '2x click',
      price: 10,
      level: 1
    },
    {
      image: 'armor_01d.png',
      name: 'Armor',
      desc: '2x resistance',
      price: 15,
      level: 1
    },
    {
      image: 'shield_02d.png',
      name: 'shield',
      desc: '2x xp',
      price: 40,
      level: 1
    },
    {
      image: 'necklace_02d.png',
      name: 'necklace',
      desc: '2x AutoClick',
      price: 500,
      level: 0
    },
    {
      image: 'ring_03d.png',
      name: 'ring',
      desc: '2x afk click',
      price: 2000,
      level: 0
    },
    {
      image: 'potion_01f.png',
      name: 'potion of fast clicking',
      desc: '10x click for 60s',
      price: 20000,
      owned: false
    },
    {
      image: 'potion_02a.png',
      name: 'potion of ultimate clicking',
      desc: '30x click for 60s',
      price: 35000,
      owned: false
    },
    {
      image: 'potion_03a.png',
      name: 'potion of god clicking',
      desc: '69x click for 60s',
      price: 69000,
      owned: false
    },
    {
      image: 'AbandonedHardware.png',
      name: 'Abandoned Hardware',
      desc: 'cool background',
      price: 500000,
      owned: false
    },
    {
      image: 'BeautyPotionV2.png',
      name: 'Beauty Potion',
      desc: 'maybe even cooler background',
      price: 2500000,
      owned: false
    },
    {
      image: 'CoopIntruder.png',
      name: 'Coop Intruder',
      desc: 'super cool background',
      price: 30000000,
      owned: false
    },
    {
      image: 'NewLetter.png',
      name: 'New Letter',
      desc: 'OK, this is just flex',
      price: 69000000,
      owned: false
    }
    ],
    isekaiBonus: 1,
    wasTold: [false, false],
    textForTextBox: "",
    currentBackground: "basicBackground.png",
    money: ["x", 0, "x", "x"],
    rgroianaoror: ["x", "x", 0, "x"],
    position: 1,
    shiftedpos: 2,
    xp: 0,
    nextXp: 10,
    level: 1,
    date: '',
    textIndex: 0,
    totalMoney: 0,
    totalClick: 0,
    canBeIsekai: false,
    enemy1: [500, 750, 800, 1000, 1500, 2000],
    enemy2: [5000, 6000, 7000, 8000, 10000]
  },
  getters: {
  },
  mutations: {
    updateCoins(state, data) {

      //👀 geniální anticheat 👀

      let oldCheck = [...state.rgroianaoror];
      oldCheck.pop();
      state.money[state.position] += data;
      state.rgroianaoror[state.shiftedpos] += data;
      if (state.money[state.position] == state.rgroianaoror[state.shiftedpos]) {
        if (state.position == state.money.length - 1) {
          let value = state.money[state.position]
          state.position = 0;
          state.money[state.position] = value;
          state.money[state.money.length - 1] = "x";
        } else {
          let value = state.money[state.position]
          state.position++;
          state.money[state.position] = value;
          state.money[state.position - 1] = "x";
        }

        if (state.shiftedpos == state.money.length - 1) {
          let value = state.money[state.position]
          state.shiftedpos = 0;
          state.rgroianaoror[state.shiftedpos] = value;
          state.rgroianaoror[state.rgroianaoror.length - 1] = "x";
        } else {
          let value = state.money[state.position]
          state.shiftedpos++;
          state.rgroianaoror[state.shiftedpos] = value;
          state.rgroianaoror[state.shiftedpos - 1] = "x";
        }
      } else {
        state.money[state.position] = oldCheck[state.shiftedpos];
        state.rgroianaoror = oldCheck;
      }

      if (data >= 1) {
        state.totalMoney += data;
      }
    },
    buyUpgrade(state, data) {
      if (data == 1) {
        state.shopitems[data].level += 30;
        state.xp += state.shopitems[data].level / 30 * state.shopitems[2].level 
      }else{
        state.shopitems[data].level += 1;
        state.xp += state.shopitems[data].level * state.shopitems[2].level
      }
      if (state.xp >= state.nextXp) {
        state.level += 1
        state.nextXp *= 3
      }
      state.shopitems[data].price *= 2;
    },

    updateTime(state, data) {
      state.date = data;
    },
    updateTextIndex(state, data) {
      state.textIndex = data;
    },
    clickCounter(state) {
      state.totalClick++;
    },
    buyPotion(state, data) {
      state.shopitems[data].owned = true;
      state.xp += state.shopitems[data].price / 10 * state.shopitems[2].level
      if (state.xp >= state.nextXp) {
        state.level += 1
        state.nextXp *= 3
      }
    },
    usedPotion(state, data) {
      state.shopitems[data].owned = false;
    },
    toggleImg(state, data) {
      state.currentBackground = state.shopitems[data].image;
    },
    updateXP(state, data){
      state.xp += data * state.shopitems[2].level;
      if (state.xp >= state.nextXp) {
        state.level += 1
        state.nextXp *= 3
      }
    },
    buyImg(state, data) {
      state.shopitems[data].owned = true;
      state.xp += state.shopitems[data].price / 10
      if (state.xp >= state.nextXp) {
        state.level += 1
        state.nextXp *= 3
      }
      state.currentBackground = state.shopitems[data].image;
    },
    changeText(state, data) {
      state.textForTextBox = data;
    },
    wasTold(state, data) {
      state.wasTold[data] = true;
    },
    canBeIsekai(state, data) {
      state.canBeIsekai = data;
    },
    reset(state) {
      state.isekaiBonus += 1
      state.wasTold = [false, false]
      state.textForTextBox = ""
      state.currentBackground = "basicBackground.png"
      state.money = ["x", 0, "x", "x"]
      state.rgroianaoror = ["x", "x", 0, "x"]
      state.position = 1
      state.shiftedpos = 2
      state.xp = 0
      state.nextXp = 10
      state.level = 1
      state.date = ''
      state.textIndex = 0
      state.totalMoney = 0
      state.totalClick = 0
      state.canBeIsekai = false
      state.enemy1 = [500, 750, 800, 1000, 1500, 2000]
      state.enemy2 = [5000, 6000, 7000, 8000, 10000]
      state.shopitems[0].price = 10
      state.shopitems[0].level = 1
      state.shopitems[1].price = 15
      state.shopitems[1].level = 1
      state.shopitems[2].price = 40
      state.shopitems[2].level = 1
      state.shopitems[3].price = 500
      state.shopitems[3].level = 0
      state.shopitems[4].price = 2000
      state.shopitems[4].level = 0
      state.shopitems[5].owned = false
      state.shopitems[6].owned = false
      state.shopitems[7].owned = false
      state.shopitems[8].owned = false
      state.shopitems[9].owned = false
      state.shopitems[10].owned = false
      state.shopitems[11].owned = false

    },
    levelLost(state) {
      state.level -= 1;
    },
    dropEnemy(state, data){
      if(data == 1){
        state.enemy1.shift()
      }else if (data == 2) {
        state.enemy2.shift()
      }
    }
  },
  actions: {
    updateCoins({ state, commit }, data) {
      commit('updateCoins', data)
    },
    buyUpgrade({ state, commit }, data) {
      commit('buyUpgrade', data)
    },
    updateTime({ state, commit }, data) {
      commit('updateTime', data)
    },
    updateTextIndex({ state, commit }, data) {
      commit('updateTextIndex', data)
    },
    clickCounter({ state, commit }) {
      commit('clickCounter')
    },
    buyPotion({ state, commit }, data) {
      commit('buyPotion', data)
    },
    usedPotion({ state, commit }, data) {
      commit('usedPotion', data)
    },
    toggleImg({ state, commit }, data) {
      commit('toggleImg', data)
    },
    buyImg({ state, commit }, data) {
      commit('buyImg', data)
    },
    changeText({ state, commit }, data) {
      commit('changeText', data)
    },
    wasTold({ state, commit }, data) {
      commit('wasTold', data)
    },
    canBeIsekai({ state, commit }, data) {
      commit('canBeIsekai', data)
    },
    reset({ state, commit }) {
      commit('reset')
    },
    levelLost({ state, commit }) {
      commit('levelLost')
    },
    updateXP({ state, commit }, data){
      commit('updateXP', data)
    },
    dropEnemy({state, commit}, data){
      commit('dropEnemy', data)
    }
  },
  modules: {
  },
  plugins: [new VuexPersistence().plugin]
})
