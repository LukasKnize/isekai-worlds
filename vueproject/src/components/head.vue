<template>
    <div class="head">
            <div class="xp"><p>Level: <span id="level">0</span></p></div>
            <div class="money"><img src="@/assets/coin_05d.png" alt=""><p id="money">{{money}}</p></div>
            <button @click="openMainMenu('MainMenu')"><i class="fas fa-bars"></i></button>
        </div>
</template>

<script>
export default {
    name: "heading",
    methods:{
        openMainMenu(data){
            this.$emit("openMainMenu", data)
        }
    },
    computed:{
    money(){
      let pos = this.$store.state.position
      return this.$store.state.money[pos]
    }
  }
}
</script>