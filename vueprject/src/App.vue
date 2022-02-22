<template>
  <div id="app">
    <h1>異世界 worlds</h1>
    <main>
      <Head/>
      <Middle/>
      <Bottom />
    </main>
  </div>
</template>

<script>
import Head from "./components/head.vue";
import Middle from "./components/middle.vue";
import Bottom from "./components/bottom.vue";

export default {
  name: "App",
  components: {
    Head,
    Middle,
    Bottom
  },
};
</script>

<style>
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
  
  body .logo {
    position: absolute;
    left: 0;
    top: 0;
    margin-left: 100px;
    margin-top: 50px;
    width: 100px;
  }
</style>
