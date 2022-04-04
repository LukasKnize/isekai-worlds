<template>
  <div id="textBox" class="textBox">
    <img src="@/assets/waterIsekai.png" alt="" />
    <div class="textBoxContainer">
      <p id="textBoxOutput"></p>
      <i class="fas fa-caret-right" @click="nextText()"></i>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    afk: Number,
  },

  data() {
    return {
      firstText: [
        "Hi I'm Water, cheap Aqua knockoff.",
        "Yea that useless Aqua from KonoSuba.",
        "And to be honest, I'm bit useless too...",
        "So, I will take you through the whole game.",
        "Basically all you need is to click as fast as possible.",
      ],
      afkBonusText: ["here is your afk bonus: " + this.afk],
      currentTextArray: "",
      nthText: 0,
      currentText: "",
      text: "",
      i: 0,
      speed: 200,
      ended: false,
      stillCanType: true,
      typing: "",
    };
  },
  methods: {
    mainSpeakMethod() {
      switch (this.$store.state.textIndex) {
        case 0:
          this.currentTextArray = this.firstText;
          break;
        case 1: this.currentTextArray = this.afkBonusText;
        default:
          break;
      }
      this.currentText = this.currentTextArray[this.nthText];
      this.currentText = this.currentText.split("");
      this.typing = setInterval(this.speak, this.speed);
    },
    speak() {
      document.getElementById("textBoxOutput").innerHTML = this.text;
      this.text += this.currentText[this.i];
      this.i++;
      if (this.i == this.currentText.length + 1) {
        this.nthText++;
        if (this.nthText + 1 > this.currentTextArray.length) {
          clearInterval(this.typing);
          this.ended = true;
        } else {
          clearInterval(this.typing);
          this.text = "";
          this.i = 0;
          this.currentText = this.currentTextArray[this.nthText];
          this.currentText = this.currentText.split("");
          this.ended = true;
        }
      }
    },

    nextText() {
      if (!this.ended) {
        this.text = "";
        this.i = 0;
        this.ended = true;
        clearInterval(this.typing);
        document.getElementById("textBoxOutput").innerHTML =
          this.currentTextArray[this.nthText];
        this.nthText++;
        this.currentText = this.currentTextArray[this.nthText];
        this.currentText = this.currentText.split("");
      } else {
        if (this.nthText + 1 <= this.currentTextArray.length) {
          this.typing = setInterval(this.speak, this.speed);
          this.ended = false;
        } else {
           if (this.currentTextArray != this.afkBonusText) {
           this.$store.dispatch("updateTextIndex", 1); 
          }
          console.log(this.afk)
          document.getElementById("textBox").style.display = "none";
          this.ended = false;
        }
      }
    },
  },
  mounted() {
    console.log(this.afk)
    this.mainSpeakMethod();
  },
};
</script>
