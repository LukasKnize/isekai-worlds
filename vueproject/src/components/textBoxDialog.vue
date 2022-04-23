<template>
  <div id="textBox" class="textBox">
    <img src="@/assets/waterIsekai.png" alt="" />
    <div class="textBoxContainer">
      <p id="textBoxOutput"></p>
      <i class="fas fa-caret-right" @click="nextText()"></i>
      <p></p>
    </div>
    <p class="hideThis">{{actualText}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
          try {
            clearInterval(this.typing);
          this.text = "";
          this.i = 0;
          this.currentText = this.currentTextArray[this.nthText];
          this.currentText = this.currentText.split("");
          this.ended = true;
          } catch (error) {
            console.log("fuck")
          }
          
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
          this.$emit("closeTextBox")
          document.getElementById("textBox").style.display = "none";
          this.ended = false;
        }
      }
    },
    
  },
  computed:{
    actualText() {
     let textForTextBox = this.$store.state.textForTextBox;
     if (textForTextBox != "" && this.currentTextArray != textForTextBox) {
       this.currentTextArray = textForTextBox;
      this.mainSpeakMethod()
     }
     return "o"
    }
  }
};
</script>

<style scoped>
.hideThis{
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 1px;
}
</style>
