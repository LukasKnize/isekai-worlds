<template>
  <div class="midle" @click="middleclicked()">
    <img src="@/assets/idleGif.gif" alt="" class="character" id="character" />
  </div>
</template>

<script>
export default {
  name: "middle",
  methods: {
    middleclicked() {
      this.$emit("middleclicked");
    },
  },
};
</script>