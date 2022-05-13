<template>
  <div class="container">
    <div class="header">
      <p class="dataOut">{{ tickets }}</p>
      <p class="dataOut">{{ arcadeCoins }}</p>
    </div>
    <div class="imgContainer">
      <i class="fas fa-caret-down"></i>
      <img id="luckyWheeel" src="@/assets/luckyWheel.png" alt="" />
    </div>
    <h2 class="winningText">{{ prize }}</h2>
    <button @click="ControlButton()">{{ buttonText }}</button>
    <button @click="flipACoin()">flip a coin (double or nothing)</button>
    <button @click="claimPot()">claim pot</button>
    <button @click="buyTicket()">buy ticket for {{30 * this.$store.state.shopitems[0].level}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spinningInterval: "",
      buttonText: "SPIN",
      prize: "",
      isSpinning: false,
      currentRotation: 0,
    };
  },
  methods: {
    ControlButton() {
      if (this.isSpinning == false && this.$store.state.tickets >= 1) {
        this.$store.dispatch("tickets", -1);
        this.isSpinning = true;
        this.spinn();
      } else if(this.isSpinning == true) {
        clearInterval(this.spinningInterval);
        this.isSpinning = false;
        if (this.currentRotation >= 360) {
          this.$store.dispatch(
            "arcadeCoins",
            100 * this.$store.state.shopitems[0].level
          );
        } else if (this.currentRotation >= 350) {
          this.$store.dispatch(
            "arcadeCoins",
            50 * this.$store.state.shopitems[0].level
          );
        } else if (this.currentRotation >= 340) {
          this.$store.dispatch(
            "arcadeCoins",
            30 * this.$store.state.shopitems[0].level
          );
        } else if (this.currentRotation >= 330) {
          this.$store.dispatch(
            "arcadeCoins",
            50 * this.$store.state.shopitems[0].level
          );
        } else if (this.currentRotation >= 320) {
          this.$store.dispatch(
            "arcadeCoins",
            5 * this.$store.state.shopitems[0].level
          );
        } else if (this.currentRotation >= 300) {
          this.$store.dispatch(
            "arcadeCoins",
            10 * this.$store.state.shopitems[0].level
          );
        } else if (this.currentRotation >= 280) {
          this.$store.dispatch(
            "arcadeCoins",
            5 * this.$store.state.shopitems[0].level
          );
        } else if (this.currentRotation >= 260) {
          this.$store.dispatch(
            "arcadeCoins",
            10 * this.$store.state.shopitems[0].level
          );
        } else if (this.currentRotation >= 240) {
          this.$store.dispatch(
            "arcadeCoins",
            5 * this.$store.state.shopitems[0].level
          );
        } else if (this.currentRotation >= 220) {
          this.$store.dispatch(
            "arcadeCoins",
            10 * this.$store.state.shopitems[0].level
          );
        } else if (this.currentRotation >= 200) {
          this.$store.dispatch(
            "arcadeCoins",
            20 * this.$store.state.shopitems[0].level
          );
        } else if (this.currentRotation >= 180) {
          this.$store.dispatch(
            "arcadeCoins",
            10 * this.$store.state.shopitems[0].level
          );
        } else if (this.currentRotation >= 160) {
          this.$store.dispatch(
            "arcadeCoins",
            5 * this.$store.state.shopitems[0].level
          );
        } else if (this.currentRotation >= 140) {
          this.$store.dispatch(
            "arcadeCoins",
            10 * this.$store.state.shopitems[0].level
          );
        } else if (this.currentRotation >= 120) {
          this.$store.dispatch(
            "arcadeCoins",
            20 * this.$store.state.shopitems[0].level
          );
        } else if (this.currentRotation >= 100) {
          this.$store.dispatch(
            "arcadeCoins",
            10 * this.$store.state.shopitems[0].level
          );
        } else if (this.currentRotation >= 80) {
          this.$store.dispatch(
            "arcadeCoins",
            5 * this.$store.state.shopitems[0].level
          );
        } else if (this.currentRotation >= 60) {
          this.$store.dispatch(
            "arcadeCoins",
            10 * this.$store.state.shopitems[0].level
          );
        } else if (this.currentRotation >= 40) {
          this.$store.dispatch(
            "arcadeCoins",
            5 * this.$store.state.shopitems[0].level
          );
        } else if (this.currentRotation >= 20) {
          this.$store.dispatch(
            "arcadeCoins",
            10 * this.$store.state.shopitems[0].level
          );
        }else if (this.currentRotation >= 0) {
          this.$store.dispatch(
            "arcadeCoins",
            5 * this.$store.state.shopitems[0].level
          );
        }
      }
    },
    spinn() {
      this.spinningInterval = setInterval(() => {
        console.log(this.currentRotation);
        if (this.currentRotation <= 0) {
          this.currentRotation = 360;
        } else {
          this.currentRotation -= 5;
        }
        document.getElementById("luckyWheeel").style.transform =
          "rotate(" + this.currentRotation + "deg)";
      }, 10);
    },
    flipACoin() {
      let coin = Math.random();
      if (coin <= 0.5) {
        this.$store.dispatch("arcadeCoins", this.$store.state.arcadeCoins);
      } else {
        this.$store.dispatch("arcadeCoins", -this.$store.state.arcadeCoins);
      }
    },
    claimPot(){
      this.$emit("moneyChange", this.$store.state.arcadeCoins);
      this.$store.dispatch("arcadeCoins", -this.$store.state.arcadeCoins);
    },
    buyTicket(){
      if (this.$store.state.money[this.$store.state.position] >= 30 * this.$store.state.shopitems[0].level) {
        this.$emit("moneyChange", -30 * this.$store.state.shopitems[0].level);
        this.$store.dispatch("tickets", 1);
      }
    }
  },
  computed: {
    tickets() {
      return this.$store.state.arcadeCoins;
    },
    arcadeCoins() {
      return this.$store.state.tickets;
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 540px;
  position: absolute;
  left: 0;
  top: 50px;
  background-color: #a3da8d;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  row-gap: 20px;
  text-align: center;
}

.container .header {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.container .header .dataOut {
  width: 70px;
  display: flex;
  height: 50px;
  background-color: #146356;
  color: #f3c892;
  justify-content: center;
  align-items: center;
}

.container .imgContainer {
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.container .imgContainer img {
  height: 80%;
}
.container .imgContainer .fas {
  font-size: 20px;
  position: absolute;
  top: 5%;
  left: 50%;
  margin-left: -7px;
  color: #146356;
}

.container button {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: 50px;
  border: #146356 3px solid;
  background-color: #f2c892;
}
</style>