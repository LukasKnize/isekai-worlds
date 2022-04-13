import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopitems: [ {
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
      level: 0
    },
    {
      image: 'shield_02d.png',
      name: 'shield',
      desc: '2x xp',
      price: 40,
      level: 0
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
      image: 'Abandoned Hardware.png',
      name: 'Abandoned Hardware',
      desc: 'cool background',
      price: 500000,
      owned: false
    },
    {
      image: 'Beauty Potion V2.png',
      name: 'Beauty Potion',
      desc: 'maybe even cooler background',
      price: 2500000,
      owned: false
    },
    {
      image: 'Coop Intruder.png',
      name: 'Coop Intruder',
      desc: 'super cool background',
      price: 30000000,
      owned: false
    },
    {
      image: 'New Letter.png',
      name: 'New Letter',
      desc: 'OK, this is just flex',
      price: 69000000,
      owned: false
    }
  ],
  money: ["x", 20000, "x", "x"],
  rgroianaoror: ["x", "x", 20000, "x"],
  position: 1,
  shiftedpos: 2,
  xp: 0,
  nextXp: 10,
  level: 1,
  date: '',
  textIndex: 0,
  totalMoney: 0,
  totalClick: 0,
  enemy1: [500, 750, 800, 1000, 1500, 2000],
  enemy2: [5000, 6000, 7000, 8000, 10000]
  },
  getters: {
  },
  mutations: {
    updateCoins(state, data){

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
        }else{
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
        }else{
          let value = state.money[state.position]
          state.shiftedpos++;
          state.rgroianaoror[state.shiftedpos] = value;
          state.rgroianaoror[state.shiftedpos - 1] = "x";
        }
        //console.log(state.money);
      }else{
        state.money[state.position] = oldCheck[state.shiftedpos];
        state.rgroianaoror = oldCheck;
      }

      if (data >= 1) {
        state.totalMoney += data; 
      }
    },
    buyUpgrade(state, data){
      state.shopitems[data].level += 1;
      state.shopitems[data].price *= 2;
    },

    updateTime(state, data){
      state.date = data;
    },
    updateTextIndex(state, data){
      state.textIndex = data;
    },
    clickCounter(state){
      state.totalClick++;
    }
  },
  actions: {
    updateCoins ({ state, commit }, data) {
      commit('updateCoins', data)
    },
    buyUpgrade({ state, commit }, data) {
      commit('buyUpgrade', data)
    },
    updateTime({ state, commit }, data) {
      commit('updateTime', data)
    },
    updateTextIndex({state, commit}, data){
      commit('updateTextIndex', data)
    },
    clickCounter({state, commit}){
      commit('clickCounter')
    }
  },
  modules: {
  },
  plugins: [new VuexPersistence().plugin]
})
